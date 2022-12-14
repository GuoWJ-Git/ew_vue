//import {Zlib} from '/public/3dFile/inflate.min';
import {
  AnimationClip,
  Bone,
  BufferAttribute,
  BufferGeometry,
  ClampToEdgeWrapping,
  Color,
  DefaultLoadingManager,
  Euler,
  FileLoader,
  Float32BufferAttribute,
  FrontSide,
  Group,
  LineBasicMaterial,
  LineSegments,
  Loader,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  Object3D,
  Quaternion,
  RepeatWrapping,
  Skeleton,
  SkinnedMesh,
  TextureLoader,
  Vector2,
  Vector3,
  Vector4,
} from '@int/geotoolkit3d/THREE';
/* eslint-disable */

export var OBJLoader = /*#__PURE__*/ (function() {
  var OBJLoader = function(manager) {
    this.manager = manager !== undefined ? manager : DefaultLoadingManager;

    this.materials = null;

    this.regexp = {
      // v float float float
      vertex_pattern: /^v\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,
      // vn float float float
      normal_pattern: /^vn\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,
      // vt float float
      uv_pattern: /^vt\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,
      // f vertex vertex vertex
      face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
      // f vertex/uv vertex/uv vertex/uv
      face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
      // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
      face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
      // f vertex//normal vertex//normal vertex//normal
      face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
      // o object_name | g group_name
      object_pattern: /^[og]\s*(.+)?/,
      // s boolean
      smoothing_pattern: /^s\s+(\d+|on|off)/,
      // mtllib file_reference
      material_library_pattern: /^mtllib /,
      // usemtl material_name
      material_use_pattern: /^usemtl /,
    };
  };

  OBJLoader.prototype = {
    constructor: OBJLoader,

    load: function(url, onLoad, onProgress, onError) {
      var scope = this;

      var loader = new FileLoader(scope.manager);
      loader.setPath(this.path);
      loader.load(
        url,
        (text) => {
          onLoad(scope.parse(text));
        },
        onProgress,
        onError
      );
    },

    setPath: function(value) {
      this.path = value;
    },

    setMaterials: function(materials) {
      this.materials = materials;
    },

    _createParserState: function() {
      var state = {
        objects: [],
        object: {},

        vertices: [],
        normals: [],
        uvs: [],

        materialLibraries: [],

        startObject: function(name, fromDeclaration) {
          // If the current object (initial from reset) is not from a g/o declaration in the parsed
          // file. We need to use it for the first parsed g/o to keep things in sync.
          if (this.object && this.object.fromDeclaration === false) {
            this.object.name = name;
            this.object.fromDeclaration = fromDeclaration !== false;
            return;
          }

          var previousMaterial =
            this.object && typeof this.object.currentMaterial === 'function'
              ? this.object.currentMaterial()
              : undefined;

          if (this.object && typeof this.object._finalize === 'function') {
            this.object._finalize(true);
          }

          this.object = {
            name: name || '',
            fromDeclaration: fromDeclaration !== false,

            geometry: {
              vertices: [],
              normals: [],
              uvs: [],
            },
            materials: [],
            smooth: true,

            startMaterial: function(name, libraries) {
              var previous = this._finalize(false);

              // New usemtl declaration overwrites an inherited material, except if faces were declared
              // after the material, then it must be preserved for proper MultiMaterial continuation.
              if (previous && (previous.inherited || previous.groupCount <= 0)) {
                this.materials.splice(previous.index, 1);
              }

              var material = {
                index: this.materials.length,
                name: name || '',
                mtllib:
                  Array.isArray(libraries) && libraries.length > 0
                    ? libraries[libraries.length - 1]
                    : '',
                smooth: previous !== undefined ? previous.smooth : this.smooth,
                groupStart: previous !== undefined ? previous.groupEnd : 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: false,

                clone: function(index) {
                  var cloned = {
                    index: typeof index === 'number' ? index : this.index,
                    name: this.name,
                    mtllib: this.mtllib,
                    smooth: this.smooth,
                    groupStart: 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: false,
                  };
                  cloned.clone = this.clone.bind(cloned);
                  return cloned;
                },
              };

              this.materials.push(material);

              return material;
            },

            currentMaterial: function() {
              if (this.materials.length > 0) {
                return this.materials[this.materials.length - 1];
              }

              return undefined;
            },

            _finalize: function(end) {
              var lastMultiMaterial = this.currentMaterial();
              if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                lastMultiMaterial.groupCount =
                  lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                lastMultiMaterial.inherited = false;
              }

              // Ignore objects tail materials if no face declarations followed them before a new o/g started.
              if (end && this.materials.length > 1) {
                for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                  if (this.materials[mi].groupCount <= 0) {
                    this.materials.splice(mi, 1);
                  }
                }
              }

              // Guarantee at least one empty material, this makes the creation later more straight forward.
              if (end && this.materials.length === 0) {
                this.materials.push({
                  name: '',
                  smooth: this.smooth,
                });
              }

              return lastMultiMaterial;
            },
          };

          // Inherit previous objects material.
          // Spec tells us that a declared material must be set to all objects until a new material is declared.
          // If a usemtl declaration is encountered while this new object is being parsed, it will
          // overwrite the inherited material. Exception being that there was already face declarations
          // to the inherited material, then it will be preserved for proper MultiMaterial continuation.

          if (
            previousMaterial &&
            previousMaterial.name &&
            typeof previousMaterial.clone === 'function'
          ) {
            var declared = previousMaterial.clone(0);
            declared.inherited = true;
            this.object.materials.push(declared);
          }

          this.objects.push(this.object);
        },

        finalize: function() {
          if (this.object && typeof this.object._finalize === 'function') {
            this.object._finalize(true);
          }
        },

        parseVertexIndex: function(value, len) {
          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseNormalIndex: function(value, len) {
          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseUVIndex: function(value, len) {
          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },

        addVertex: function(a, b, c) {
          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addVertexLine: function(a) {
          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
        },

        addNormal: function(a, b, c) {
          var src = this.normals;
          var dst = this.object.geometry.normals;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addUV: function(a, b, c) {
          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
        },

        addUVLine: function(a) {
          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
        },

        addFace: function(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {
          var vLen = this.vertices.length;

          var ia = this.parseVertexIndex(a, vLen);
          var ib = this.parseVertexIndex(b, vLen);
          var ic = this.parseVertexIndex(c, vLen);
          var id;

          if (d === undefined) {
            this.addVertex(ia, ib, ic);
          } else {
            id = this.parseVertexIndex(d, vLen);

            this.addVertex(ia, ib, id);
            this.addVertex(ib, ic, id);
          }

          if (ua !== undefined) {
            var uvLen = this.uvs.length;

            ia = this.parseUVIndex(ua, uvLen);
            ib = this.parseUVIndex(ub, uvLen);
            ic = this.parseUVIndex(uc, uvLen);

            if (d === undefined) {
              this.addUV(ia, ib, ic);
            } else {
              id = this.parseUVIndex(ud, uvLen);

              this.addUV(ia, ib, id);
              this.addUV(ib, ic, id);
            }
          }

          if (na !== undefined) {
            // Normals are many times the same. If so, skip function call and parseInt.
            var nLen = this.normals.length;
            ia = this.parseNormalIndex(na, nLen);

            ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
            ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

            if (d === undefined) {
              this.addNormal(ia, ib, ic);
            } else {
              id = this.parseNormalIndex(nd, nLen);

              this.addNormal(ia, ib, id);
              this.addNormal(ib, ic, id);
            }
          }
        },

        addLineGeometry: function(vertices, uvs) {
          this.object.geometry.type = 'Line';

          var vLen = this.vertices.length;
          var uvLen = this.uvs.length;

          for (var vi = 0, l = vertices.length; vi < l; vi++) {
            this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
          }

          for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {
            this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
          }
        },
      };

      state.startObject('', false);

      return state;
    },

    parse: function(text) {
      console.time('OBJLoader');

      var state = this._createParserState();

      if (text.indexOf('\r\n') !== -1) {
        // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, '\n');
      }

      if (text.indexOf('\\\n') !== -1) {
        // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, '');
      }

      var lines = text.split('\n');
      var line = '',
        lineFirstChar = '',
        lineSecondChar = '';
      var lineLength = 0;
      var result = [];

      // Faster to just trim left side of the line. Use if available.
      var trimLeft = typeof ''.trimLeft === 'function';

      for (var i = 0, l = lines.length; i < l; i++) {
        line = lines[i];

        line = trimLeft ? line.trimLeft() : line.trim();

        lineLength = line.length;

        if (lineLength === 0) continue;

        lineFirstChar = line.charAt(0);

        // @todo invoke passed in handler if any
        if (lineFirstChar === '#') continue;

        if (lineFirstChar === 'v') {
          lineSecondChar = line.charAt(1);

          if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {
            // 0                  1      2      3
            // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.vertices.push(
              parseFloat(result[1]),
              parseFloat(result[2]),
              parseFloat(result[3])
            );
          } else if (
            lineSecondChar === 'n' &&
            (result = this.regexp.normal_pattern.exec(line)) !== null
          ) {
            // 0                   1      2      3
            // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          } else if (
            lineSecondChar === 't' &&
            (result = this.regexp.uv_pattern.exec(line)) !== null
          ) {
            // 0               1      2
            // ["vt 0.1 0.2", "0.1", "0.2"]

            state.uvs.push(parseFloat(result[1]), parseFloat(result[2]));
          } else {
            throw new Error("Unexpected vertex/normal/uv line: '" + line + "'");
          }
        } else if (lineFirstChar === 'f') {
          if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {
            // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
            // 0                        1    2    3    4    5    6    7    8    9   10         11         12
            // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

            state.addFace(
              result[1],
              result[4],
              result[7],
              result[10],
              result[2],
              result[5],
              result[8],
              result[11],
              result[3],
              result[6],
              result[9],
              result[12]
            );
          } else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {
            // f vertex/uv vertex/uv vertex/uv
            // 0                  1    2    3    4    5    6   7          8
            // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(
              result[1],
              result[3],
              result[5],
              result[7],
              result[2],
              result[4],
              result[6],
              result[8]
            );
          } else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {
            // f vertex//normal vertex//normal vertex//normal
            // 0                     1    2    3    4    5    6   7          8
            // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(
              result[1],
              result[3],
              result[5],
              result[7],
              undefined,
              undefined,
              undefined,
              undefined,
              result[2],
              result[4],
              result[6],
              result[8]
            );
          } else if ((result = this.regexp.face_vertex.exec(line)) !== null) {
            // f vertex vertex vertex
            // 0            1    2    3   4
            // ["f 1 2 3", "1", "2", "3", undefined]

            state.addFace(result[1], result[2], result[3], result[4]);
          } else {
            throw new Error("Unexpected face line: '" + line + "'");
          }
        } else if (lineFirstChar === 'l') {
          var lineParts = line
            .substring(1)
            .trim()
            .split(' ');
          var lineVertices = [],
            lineUVs = [];

          if (line.indexOf('/') === -1) {
            lineVertices = lineParts;
          } else {
            for (var li = 0, llen = lineParts.length; li < llen; li++) {
              var parts = lineParts[li].split('/');

              if (parts[0] !== '') lineVertices.push(parts[0]);
              if (parts[1] !== '') lineUVs.push(parts[1]);
            }
          }
          state.addLineGeometry(lineVertices, lineUVs);
        } else if ((result = this.regexp.object_pattern.exec(line)) !== null) {
          // o object_name
          // or
          // g group_name

          // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
          // var name = result[ 0 ].substr( 1 ).trim();
          var name = (' ' + result[0].substr(1).trim()).substr(1);

          state.startObject(name);
        } else if (this.regexp.material_use_pattern.test(line)) {
          // material

          state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
        } else if (this.regexp.material_library_pattern.test(line)) {
          // mtl file

          state.materialLibraries.push(line.substring(7).trim());
        } else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {
          // smooth shading

          // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
          // but does not define a usemtl for each face set.
          // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
          // This requires some care to not create extra material on each smooth value for "normal" obj files.
          // where explicit usemtl defines geometry groups.
          // Example asset: examples/models/obj/cerberus/Cerberus.obj

          var value = result[1].trim().toLowerCase();
          /*
           * http://paulbourke.net/dataformats/obj/
           * or
           * http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
           *
           * From chapter "Grouping" Syntax explanation "s group_number":
           * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
           * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
           * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
           * than 0."
           */
          state.object.smooth = value !== '0' && value !== 'off';

          var material = state.object.currentMaterial();
          if (material) {
            material.smooth = state.object.smooth;
          }
        } else {
          // Handle null terminated files without exception
          if (line === '\0') continue;

          throw new Error("Unexpected line: '" + line + "'");
        }
      }

      state.finalize();

      var container = new Group();
      container.materialLibraries = [].concat(state.materialLibraries);

      for (var i = 0, l = state.objects.length; i < l; i++) {
        var object = state.objects[i];
        var geometry = object.geometry;
        var materials = object.materials;
        var isLine = geometry.type === 'Line';

        // Skip o/g line declarations that did not follow with any faces
        if (geometry.vertices.length === 0) continue;

        var buffergeometry = new BufferGeometry();

        buffergeometry.setAttribute(
          'position',
          new BufferAttribute(new Float32Array(geometry.vertices), 3)
        );

        if (geometry.normals.length > 0) {
          buffergeometry.setAttribute(
            'normal',
            new BufferAttribute(new Float32Array(geometry.normals), 3)
          );
        } else {
          buffergeometry.computeVertexNormals();
        }

        if (geometry.uvs.length > 0) {
          buffergeometry.setAttribute('uv', new BufferAttribute(new Float32Array(geometry.uvs), 2));
        }

        // Create materials

        var createdMaterials = [];

        for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
          var sourceMaterial = materials[mi];
          var material = undefined;

          if (this.materials !== null) {
            material = this.materials.create(sourceMaterial.name);

            // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
            if (isLine && material && !(material instanceof LineBasicMaterial)) {
              var materialLine = new LineBasicMaterial();
              materialLine.copy(material);
              material = materialLine;
            }
          }

          if (!material) {
            material = !isLine ? new MeshPhongMaterial() : new LineBasicMaterial();
            material.name = sourceMaterial.name;
          }

          material.flatShading = !sourceMaterial.smooth;

          createdMaterials.push(material);
        }

        // Create mesh

        var mesh;

        if (createdMaterials.length > 1) {
          for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
            var sourceMaterial = materials[mi];
            buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
          }

          mesh = !isLine
            ? new Mesh(buffergeometry, createdMaterials)
            : new LineSegments(buffergeometry, createdMaterials);
        } else {
          mesh = !isLine
            ? new Mesh(buffergeometry, createdMaterials[0])
            : new LineSegments(buffergeometry, createdMaterials[0]);
        }

        mesh.name = object.name;

        container.add(mesh);
      }

      console.timeEnd('OBJLoader');

      return container;
    },
  };
  return OBJLoader;
})();

/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */
export var MTLLoader = /*#__PURE__*/ (function() {
  MTLLoader = function(manager) {
    this.manager = manager !== undefined ? manager : DefaultLoadingManager;
  };

  MTLLoader.prototype = {
    constructor: MTLLoader,

    /**
     * Loads and parses a MTL asset from a URL.
     *
     * @param {String} url - URL to the MTL file.
     * @param {Function} [onLoad] - Callback invoked with the loaded object.
     * @param {Function} [onProgress] - Callback for download progress.
     * @param {Function} [onError] - Callback for download errors.
     *
     * @see setPath setTexturePath
     *
     * @note In order for relative texture references to resolve correctly
     * you must call setPath and/or setTexturePath explicitly prior to load.
     */
    load: function(url, onLoad, onProgress, onError) {
      var scope = this;
      var loader = new FileLoader(this.manager);
      loader.setPath(this.path);
      loader.load(
        url,
        (text) => {
          onLoad(scope.parse(text));
        },
        onProgress,
        onError
      );
    },

    /**
     * Set base path for resolving references.
     * If set this path will be prepended to each loaded and found reference.
     *
     * @see setTexturePath
     * @param {String} path
     *
     * @example
     *     mtlLoader.setPath( 'assets/obj/' );
     *     mtlLoader.load( 'my.mtl', ... );
     */
    setPath: function(path) {
      this.path = path;
    },

    /**
     * Set base path for resolving texture references.
     * If set this path will be prepended found texture reference.
     * If not set and setPath is, it will be used as texture base path.
     *
     * @see setPath
     * @param {String} path
     *
     * @example
     *     mtlLoader.setPath( 'assets/obj/' );
     *     mtlLoader.setTexturePath( 'assets/textures/' );
     *     mtlLoader.load( 'my.mtl', ... );
     */
    setTexturePath: function(path) {
      this.texturePath = path;
    },

    setBaseUrl: function(path) {
      console.warn(
        'MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.'
      );

      this.setTexturePath(path);
    },

    setCrossOrigin: function(value) {
      this.crossOrigin = value;
    },

    setMaterialOptions: function(value) {
      this.materialOptions = value;
    },

    /**
     * Parses a MTL file.
     *
     * @param {String} text - Content of MTL file
     * @returns {MTLLoader.MaterialCreator}
     *
     * @see setPath setTexturePath
     *
     * @note In order for relative texture references to resolve correctly
     * you must call setPath and/or setTexturePath explicitly prior to parse.
     */
    parse: function(text) {
      var lines = text.split('\n');
      var info = {};
      var delimiter_pattern = /\s+/;
      var materialsInfo = {};

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        line = line.trim();

        if (line.length === 0 || line.charAt(0) === '#') {
          // Blank line or comment ignore
          continue;
        }

        var pos = line.indexOf(' ');

        var key = pos >= 0 ? line.substring(0, pos) : line;
        key = key.toLowerCase();

        var value = pos >= 0 ? line.substring(pos + 1) : '';
        value = value.trim();

        if (key === 'newmtl') {
          // New material

          info = { name: value };
          materialsInfo[value] = info;
        } else if (info) {
          if (key === 'ka' || key === 'kd' || key === 'ks') {
            var ss = value.split(delimiter_pattern, 3);
            info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
          } else {
            info[key] = value;
          }
        }
      }

      var materialCreator = new MTLLoader.MaterialCreator(
        this.texturePath || this.path,
        this.materialOptions
      );
      materialCreator.setCrossOrigin(this.crossOrigin);
      materialCreator.setManager(this.manager);
      materialCreator.setMaterials(materialsInfo);
      return materialCreator;
    },
  };

  /**
   * Create a new THREE-MTLLoader.MaterialCreator
   * @param baseUrl - Url relative to which textures are loaded
   * @param options - Set of options on how to construct the materials
   *                  side: Which side to apply the material
   *                        FrontSide (default), BackSide, DoubleSide
   *                  wrap: What type of wrapping to apply for textures
   *                        RepeatWrapping (default), ClampToEdgeWrapping, MirroredRepeatWrapping
   *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
   *                                Default: false, assumed to be already normalized
   *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
   *                                  Default: false
   * @constructor
   */

  MTLLoader.MaterialCreator = function(baseUrl, options) {
    this.baseUrl = baseUrl || '';
    this.options = options;
    this.materialsInfo = {};
    this.materials = {};
    this.materialsArray = [];
    this.nameLookup = {};

    this.side = this.options && this.options.side ? this.options.side : FrontSide;
    this.wrap = this.options && this.options.wrap ? this.options.wrap : RepeatWrapping;
  };

  MTLLoader.MaterialCreator.prototype = {
    constructor: MTLLoader.MaterialCreator,

    setCrossOrigin: function(value) {
      this.crossOrigin = value;
    },

    setManager: function(value) {
      this.manager = value;
    },

    setMaterials: function(materialsInfo) {
      this.materialsInfo = this.convert(materialsInfo);
      this.materials = {};
      this.materialsArray = [];
      this.nameLookup = {};
    },

    convert: function(materialsInfo) {
      if (!this.options) return materialsInfo;

      var converted = {};

      for (var mn in materialsInfo) {
        // Convert materials info into normalized form based on options

        var mat = materialsInfo[mn];

        var covmat = {};

        converted[mn] = covmat;

        for (var prop in mat) {
          var save = true;
          var value = mat[prop];
          var lprop = prop.toLowerCase();

          switch (lprop) {
            case 'kd':
            case 'ka':
            case 'ks':
              // Diffuse color (color under white light) using RGB values

              if (this.options && this.options.normalizeRGB) {
                value = [value[0] / 255, value[1] / 255, value[2] / 255];
              }

              if (this.options && this.options.ignoreZeroRGBs) {
                if (value[0] === 0 && value[1] === 0 && value[2] === 0) {
                  // ignore

                  save = false;
                }
              }

              break;

            default:
              break;
          }

          if (save) {
            covmat[lprop] = value;
          }
        }
      }

      return converted;
    },

    preload: function() {
      for (var mn in this.materialsInfo) {
        this.create(mn);
      }
    },

    getIndex: function(materialName) {
      return this.nameLookup[materialName];
    },

    getAsArray: function() {
      var index = 0;

      for (var mn in this.materialsInfo) {
        this.materialsArray[index] = this.create(mn);
        this.nameLookup[mn] = index;
        index++;
      }

      return this.materialsArray;
    },

    create: function(materialName) {
      if (this.materials[materialName] === undefined) {
        this.createMaterial_(materialName);
      }

      return this.materials[materialName];
    },

    createMaterial_: function(materialName) {
      // Create material

      var scope = this;
      var mat = this.materialsInfo[materialName];
      var params = {
        name: materialName,
        side: this.side,
      };

      function resolveURL(baseUrl, url) {
        if (typeof url !== 'string' || url === '') {
          return '';
        }

        // Absolute URL
        if (/^https?:\/\//i.test(url)) return url;

        return baseUrl + url;
      }

      function setMapForType(mapType, value) {
        if (params[mapType]) return; // Keep the first encountered texture

        var texParams = scope.getTextureParams(value, params);
        var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));

        map.repeat.copy(texParams.scale);
        map.offset.copy(texParams.offset);

        map.wrapS = scope.wrap;
        map.wrapT = scope.wrap;

        params[mapType] = map;
      }

      for (var prop in mat) {
        var value = mat[prop];
        var n;

        if (value === '') continue;

        switch (prop.toLowerCase()) {
          // Ns is material specular exponent

          case 'kd':
            // Diffuse color (color under white light) using RGB values

            params.color = new Color().fromArray(value);

            break;

          case 'ks':
            // Specular color (color when light is reflected from shiny surface) using RGB values
            params.specular = new Color().fromArray(value);

            break;

          case 'map_kd':
            // Diffuse texture map

            setMapForType('map', value);

            break;

          case 'map_ks':
            // Specular map

            setMapForType('specularMap', value);

            break;

          case 'map_bump':
          case 'bump':
            // Bump texture map

            setMapForType('bumpMap', value);

            break;

          case 'ns':
            // The specular exponent (defines the focus of the specular highlight)
            // A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

            params.shininess = parseFloat(value);

            break;

          case 'd':
            n = parseFloat(value);

            if (n < 1) {
              params.opacity = n;
              params.transparent = true;
            }

            break;

          case 'tr':
            n = parseFloat(value);

            if (n > 0) {
              params.opacity = 1 - n;
              params.transparent = true;
            }

            break;

          default:
            break;
        }
      }

      this.materials[materialName] = new MeshPhongMaterial(params);
      return this.materials[materialName];
    },

    getTextureParams: function(value, matParams) {
      var texParams = {
        scale: new Vector2(1, 1),
        offset: new Vector2(0, 0),
      };

      var items = value.split(/\s+/);
      var pos;

      pos = items.indexOf('-bm');

      if (pos >= 0) {
        matParams.bumpScale = parseFloat(items[pos + 1]);
        items.splice(pos, 2);
      }

      pos = items.indexOf('-s');

      if (pos >= 0) {
        texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
        items.splice(pos, 4); // we expect 3 parameters here!
      }

      pos = items.indexOf('-o');

      if (pos >= 0) {
        texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
        items.splice(pos, 4); // we expect 3 parameters here!
      }

      texParams.url = items.join(' ').trim();
      return texParams;
    },

    loadTexture: function(url, mapping, onLoad, onProgress, onError) {
      var texture;
      var loader = Loader.Handlers.get(url);
      var manager = this.manager !== undefined ? this.manager : DefaultLoadingManager;

      if (loader === null) {
        loader = new TextureLoader(manager);
      }

      if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
      texture = loader.load(url, onLoad, onProgress, onError);

      if (mapping !== undefined) texture.mapping = mapping;

      return texture;
    },
  };
  return MTLLoader;
})();

export var FBXLoader = (function() {
  var FBXLoader = function(manager) {
    this.manager = manager !== undefined ? manager : DefaultLoadingManager;
  };

  Object.assign(FBXLoader.prototype, {
    /**
     * Loads an ASCII/Binary FBX file from URL and parses into a Group.
     * Group will have an animations property of AnimationClips
     * of the different animations exported with the FBX.
     * @param {string} url - URL of the FBX file.
     * @param {function(Group):void} onLoad - Callback for when FBX file is loaded and parsed.
     * @param {function(ProgressEvent):void} onProgress - Callback fired periodically when file is being retrieved from server.
     * @param {function(Event):void} onError - Callback fired when error occurs (Currently only with retrieving file, not with parsing errors).
     */
    load: function(url, onLoad, onProgress, onError) {
      var self = this;

      var resourceDirectory = url.split(/[\\\/]/);
      resourceDirectory.pop();
      resourceDirectory = resourceDirectory.join('/') + '/';

      var loader = new FileLoader(this.manager);
      loader.setResponseType('arraybuffer');
      loader.load(
        url,
        (buffer) => {
          try {
            var scene = self.parse(buffer, resourceDirectory);

            onLoad(scene);
          } catch (error) {
            window.setTimeout(function() {
              if (onError) onError(error);

              self.manager.itemError(url);
            }, 0);
          }
        },
        onProgress,
        onError
      );
    },

    /**
     * Parses an ASCII/Binary FBX file and returns a Group.
     * Group will have an animations property of AnimationClips
     * of the different animations within the FBX file.
     * @param {ArrayBuffer} FBXBuffer - Contents of FBX file to parse.
     * @param {string} resourceDirectory - Directory to load external assets (e.g. textures ) from.
     * @returns {Group}
     */
    parse: function(FBXBuffer, resourceDirectory) {
      var FBXTree;

      if (isFbxFormatBinary(FBXBuffer)) {
        FBXTree = new BinaryParser().parse(FBXBuffer);
      } else {
        var FBXText = convertArrayBufferToString(FBXBuffer);

        if (!isFbxFormatASCII(FBXText)) {
          self.manager.itemError(url);
          throw new Error('FBXLoader: Unknown format.');
        }

        if (getFbxVersion(FBXText) < 7000) {
          self.manager.itemError(url);
          throw new Error(
            'FBXLoader: FBX version not supported for file at ' +
              url +
              ', FileVersion: ' +
              getFbxVersion(FBXText)
          );
        }

        FBXTree = new TextParser().parse(FBXText);
      }

      // console.log( FBXTree );

      var connections = parseConnections(FBXTree);
      var images = parseImages(FBXTree);
      var textures = parseTextures(
        FBXTree,
        new TextureLoader(this.manager).setPath(resourceDirectory),
        images,
        connections
      );
      var materials = parseMaterials(FBXTree, textures, connections);
      var deformers = parseDeformers(FBXTree, connections);
      var geometryMap = parseGeometries(FBXTree, connections, deformers);
      var sceneGraph = parseScene(FBXTree, connections, deformers, geometryMap, materials);

      return sceneGraph;
    },
  });
  return FBXLoader;
})();
/**
 * Parses map of relationships between objects.
 * @param {{Connections: { properties: { connections: [number, number, string][]}}}} FBXTree
 * @returns {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>}
 */
function parseConnections(FBXTree) {
  /**
   * @type {Map<number, { parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>}
   */
  var connectionMap = new Map();

  if ('Connections' in FBXTree) {
    /**
     * @type {[number, number, string][]}
     */
    var connectionArray = FBXTree.Connections.properties.connections;
    for (
      var connectionArrayIndex = 0, connectionArrayLength = connectionArray.length;
      connectionArrayIndex < connectionArrayLength;
      ++connectionArrayIndex
    ) {
      var connection = connectionArray[connectionArrayIndex];

      if (!connectionMap.has(connection[0])) {
        connectionMap.set(connection[0], {
          parents: [],
          children: [],
        });
      }

      var parentRelationship = { ID: connection[1], relationship: connection[2] };
      connectionMap.get(connection[0]).parents.push(parentRelationship);

      if (!connectionMap.has(connection[1])) {
        connectionMap.set(connection[1], {
          parents: [],
          children: [],
        });
      }

      var childRelationship = { ID: connection[0], relationship: connection[2] };
      connectionMap.get(connection[1]).children.push(childRelationship);
    }
  }

  return connectionMap;
}

/**
 * Parses map of images referenced in FBXTree.
 * @param {{Objects: {subNodes: {Texture: Object.<string, FBXTextureNode>}}}} FBXTree
 * @returns {Map<number, string(image blob URL)>}
 */
function parseImages(FBXTree) {
  /**
   * @type {Map<number, string(image blob URL)>}
   */
  var imageMap = new Map();

  if ('Video' in FBXTree.Objects.subNodes) {
    var videoNodes = FBXTree.Objects.subNodes.Video;

    for (var nodeID in videoNodes) {
      var videoNode = videoNodes[nodeID];

      // raw image data is in videoNode.properties.Content
      if ('Content' in videoNode.properties) {
        var image = parseImage(videoNodes[nodeID]);
        imageMap.set(parseInt(nodeID), image);
      }
    }
  }

  return imageMap;
}

/**
 * @param {videoNode} videoNode - Node to get texture image information from.
 * @returns {string} - image blob URL
 */
function parseImage(videoNode) {
  var buffer = videoNode.properties.Content;
  var array = new Uint8Array(buffer);
  var fileName = videoNode.properties.RelativeFilename || videoNode.properties.Filename;
  var extension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();

  var type;

  switch (extension) {
    case 'bmp':
      type = 'image/bmp';
      break;

    case 'jpg':
      type = 'image/jpeg';
      break;

    case 'png':
      type = 'image/png';
      break;

    case 'tif':
      type = 'image/tiff';
      break;

    default:
      console.warn('FBXLoader: No support image type ' + extension);
      return;
  }

  return window.URL.createObjectURL(new Blob([array], { type: type }));
}

/**
 * Parses map of textures referenced in FBXTree.
 * @param {{Objects: {subNodes: {Texture: Object.<string, FBXTextureNode>}}}} FBXTree
 * @param {TextureLoader} loader
 * @param {Map<number, string(image blob URL)>} imageMap
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @returns {Map<number, Texture>}
 */
function parseTextures(FBXTree, loader, imageMap, connections) {
  /**
   * @type {Map<number, Texture>}
   */
  var textureMap = new Map();

  if ('Texture' in FBXTree.Objects.subNodes) {
    var textureNodes = FBXTree.Objects.subNodes.Texture;
    for (var nodeID in textureNodes) {
      var texture = parseTexture(textureNodes[nodeID], loader, imageMap, connections);
      textureMap.set(parseInt(nodeID), texture);
    }
  }

  return textureMap;
}

/**
 * @param {textureNode} textureNode - Node to get texture information from.
 * @param {TextureLoader} loader
 * @param {Map<number, string(image blob URL)>} imageMap
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @returns {Texture}
 */
function parseTexture(textureNode, loader, imageMap, connections) {
  var FBX_ID = textureNode.id;

  var name = textureNode.name;

  var fileName;

  var filePath = textureNode.properties.FileName;
  var relativeFilePath = textureNode.properties.RelativeFilename;

  var children = connections.get(FBX_ID).children;

  if (children !== undefined && children.length > 0 && imageMap.has(children[0].ID)) {
    fileName = imageMap.get(children[0].ID);
  } else if (
    relativeFilePath !== undefined &&
    relativeFilePath[0] !== '/' &&
    relativeFilePath.match(/^[a-zA-Z]:/) === null
  ) {
    // use textureNode.properties.RelativeFilename
    // if it exists and it doesn't seem an absolute path

    fileName = relativeFilePath;
  } else {
    var split = filePath.split(/[\\\/]/);

    if (split.length > 0) {
      fileName = split[split.length - 1];
    } else {
      fileName = filePath;
    }
  }

  var currentPath = loader.path;

  if (fileName.indexOf('blob:') === 0) {
    loader.setPath(undefined);
  }

  /**
   * @type {Texture}
   */
  var texture = loader.load(fileName);
  texture.name = name;
  texture.FBX_ID = FBX_ID;

  var wrapModeU = textureNode.properties.WrapModeU;
  var wrapModeV = textureNode.properties.WrapModeV;

  var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
  var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

  // http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
  // 0: repeat(default), 1: clamp

  texture.wrapS = valueU === 0 ? RepeatWrapping : ClampToEdgeWrapping;
  texture.wrapT = valueV === 0 ? RepeatWrapping : ClampToEdgeWrapping;

  loader.setPath(currentPath);

  return texture;
}

/**
 * Parses map of Material information.
 * @param {{Objects: {subNodes: {Material: Object.<number, FBXMaterialNode>}}}} FBXTree
 * @param {Map<number, Texture>} textureMap
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @returns {Map<number, Material>}
 */
function parseMaterials(FBXTree, textureMap, connections) {
  var materialMap = new Map();

  if ('Material' in FBXTree.Objects.subNodes) {
    var materialNodes = FBXTree.Objects.subNodes.Material;
    for (var nodeID in materialNodes) {
      var material = parseMaterial(materialNodes[nodeID], textureMap, connections);
      materialMap.set(parseInt(nodeID), material);
    }
  }

  return materialMap;
}

/**
 * Takes information from Material node and returns a generated Material
 * @param {FBXMaterialNode} materialNode
 * @param {Map<number, Texture>} textureMap
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @returns {Material}
 */
function parseMaterial(materialNode, textureMap, connections) {
  var FBX_ID = materialNode.id;
  var name = materialNode.attrName;
  var type = materialNode.properties.ShadingModel;

  // Case where FBXs wrap shading model in property object.
  if (typeof type === 'object') {
    type = type.value;
  }

  var children = connections.get(FBX_ID).children;

  var parameters = parseParameters(materialNode.properties, textureMap, children);

  var material;

  switch (type.toLowerCase()) {
    case 'phong':
      material = new MeshPhongMaterial();
      break;
    case 'lambert':
      material = new MeshLambertMaterial();
      break;
    default:
      console.warn(
        'No implementation given for material type ' +
          type +
          ' in FBXLoader.js.  Defaulting to basic material'
      );
      material = new MeshBasicMaterial({ color: 0x3300ff });
      break;
  }

  material.setValues(parameters);
  material.name = name;

  return material;
}

/**
 * @typedef {{Diffuse: FBXVector3, Specular: FBXVector3, Shininess: FBXValue, Emissive: FBXVector3, EmissiveFactor: FBXValue, Opacity: FBXValue}} FBXMaterialProperties
 */
/**
 * @typedef {{color: Color=, specular: Color=, shininess: number=, emissive: Color=, emissiveIntensity: number=, opacity: number=, transparent: boolean=, map: Texture=}} THREEMaterialParameterPack
 */
/**
 * @param {FBXMaterialProperties} properties
 * @param {Map<number, Texture>} textureMap
 * @param {{ID: number, relationship: string}[]} childrenRelationships
 * @returns {THREEMaterialParameterPack}
 */
function parseParameters(properties, textureMap, childrenRelationships) {
  var parameters = {};

  if (properties.Diffuse) {
    parameters.color = parseColor(properties.Diffuse);
  }
  if (properties.Specular) {
    parameters.specular = parseColor(properties.Specular);
  }
  if (properties.Shininess) {
    parameters.shininess = properties.Shininess.value;
  }
  if (properties.Emissive) {
    parameters.emissive = parseColor(properties.Emissive);
  }
  if (properties.EmissiveFactor) {
    parameters.emissiveIntensity = properties.EmissiveFactor.value;
  }
  if (properties.Opacity) {
    parameters.opacity = properties.Opacity.value;
  }
  if (parameters.opacity < 1.0) {
    parameters.transparent = true;
  }

  for (
    var childrenRelationshipsIndex = 0, childrenRelationshipsLength = childrenRelationships.length;
    childrenRelationshipsIndex < childrenRelationshipsLength;
    ++childrenRelationshipsIndex
  ) {
    var relationship = childrenRelationships[childrenRelationshipsIndex];

    var type = relationship.relationship;

    switch (type) {
      case 'DiffuseColor':
      case ' "DiffuseColor':
        parameters.map = textureMap.get(relationship.ID);
        break;

      case 'Bump':
      case ' "Bump':
        parameters.bumpMap = textureMap.get(relationship.ID);
        break;

      case 'NormalMap':
      case ' "NormalMap':
        parameters.normalMap = textureMap.get(relationship.ID);
        break;

      case ' "AmbientColor':
      case ' "EmissiveColor':
      case 'AmbientColor':
      case 'EmissiveColor':
      default:
        console.warn('Unknown texture application of type ' + type + ', skipping texture');
        break;
    }
  }

  return parameters;
}

/**
 * Generates map of Skeleton-like objects for use later when generating and binding skeletons.
 * @param {{Objects: {subNodes: {Deformer: Object.<number, FBXSubDeformerNode>}}}} FBXTree
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @returns {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: Skeleton|null}>}
 */
function parseDeformers(FBXTree, connections) {
  var deformers = {};

  if ('Deformer' in FBXTree.Objects.subNodes) {
    var DeformerNodes = FBXTree.Objects.subNodes.Deformer;

    for (var nodeID in DeformerNodes) {
      var deformerNode = DeformerNodes[nodeID];

      if (deformerNode.attrType === 'Skin') {
        var conns = connections.get(parseInt(nodeID));
        var skeleton = parseSkeleton(conns, DeformerNodes);
        skeleton.FBX_ID = parseInt(nodeID);

        deformers[nodeID] = skeleton;
      }
    }
  }

  return deformers;
}

/**
 * Generates a "Skeleton Representation" of FBX nodes based on an FBX Skin Deformer's connections and an object containing SubDeformer nodes.
 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} connections
 * @param {Object.<number, FBXSubDeformerNode>} DeformerNodes
 * @returns {{map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: Skeleton|null}}
 */
function parseSkeleton(connections, DeformerNodes) {
  var subDeformers = {};
  var children = connections.children;

  for (var i = 0, l = children.length; i < l; ++i) {
    var child = children[i];

    var subDeformerNode = DeformerNodes[child.ID];

    var subDeformer = {
      FBX_ID: child.ID,
      index: i,
      indices: [],
      weights: [],
      transform: parseMatrixArray(subDeformerNode.subNodes.Transform.properties.a),
      transformLink: parseMatrixArray(subDeformerNode.subNodes.TransformLink.properties.a),
      linkMode: subDeformerNode.properties.Mode,
    };

    if ('Indexes' in subDeformerNode.subNodes) {
      subDeformer.indices = parseIntArray(subDeformerNode.subNodes.Indexes.properties.a);
      subDeformer.weights = parseFloatArray(subDeformerNode.subNodes.Weights.properties.a);
    }

    subDeformers[child.ID] = subDeformer;
  }

  return {
    map: subDeformers,
    bones: [],
  };
}

/**
 * Generates Buffer geometries from geometry information in FBXTree, and generates map of BufferGeometries
 * @param {{Objects: {subNodes: {Geometry: Object.<number, FBXGeometryNode}}}} FBXTree
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: Skeleton|null}>} deformers
 * @returns {Map<number, BufferGeometry>}
 */
function parseGeometries(FBXTree, connections, deformers) {
  var geometryMap = new Map();

  if ('Geometry' in FBXTree.Objects.subNodes) {
    var geometryNodes = FBXTree.Objects.subNodes.Geometry;

    for (var nodeID in geometryNodes) {
      var relationships = connections.get(parseInt(nodeID));
      var geo = parseGeometry(geometryNodes[nodeID], relationships, deformers);
      geometryMap.set(parseInt(nodeID), geo);
    }
  }

  return geometryMap;
}

/**
 * Generates BufferGeometry from FBXGeometryNode.
 * @param {FBXGeometryNode} geometryNode
 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships
 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}>} deformers
 * @returns {BufferGeometry}
 */
function parseGeometry(geometryNode, relationships, deformers) {
  switch (geometryNode.attrType) {
    case 'Mesh':
      return parseMeshGeometry(geometryNode, relationships, deformers);
      break;

    case 'NurbsCurve':
      return parseNurbsGeometry(geometryNode);
      break;
  }
}

/**
 * Specialty function for parsing Mesh based Geometry Nodes.
 * @param {FBXGeometryNode} geometryNode
 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships - Object representing relationships between specific geometry node and other nodes.
 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}>} deformers - Map object of deformers and subDeformers by ID.
 * @returns {BufferGeometry}
 */
function parseMeshGeometry(geometryNode, relationships, deformers) {
  for (var i = 0; i < relationships.children.length; ++i) {
    var deformer = deformers[relationships.children[i].ID];
    if (deformer !== undefined) break;
  }

  return genGeometry(geometryNode, deformer);
}

/**
 * @param {{map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}} deformer - Skeleton representation for geometry instance.
 * @returns {BufferGeometry}
 */
function genGeometry(geometryNode, deformer) {
  var geometry = new Geometry();

  var subNodes = geometryNode.subNodes;

  // First, each index is going to be its own vertex.

  var vertexBuffer = parseFloatArray(subNodes.Vertices.properties.a);
  var indexBuffer = parseIntArray(subNodes.PolygonVertexIndex.properties.a);

  if (subNodes.LayerElementNormal) {
    var normalInfo = getNormals(subNodes.LayerElementNormal[0]);
  }

  if (subNodes.LayerElementUV) {
    var uvInfo = getUVs(subNodes.LayerElementUV[0]);
  }

  if (subNodes.LayerElementColor) {
    var colorInfo = getColors(subNodes.LayerElementColor[0]);
  }

  if (subNodes.LayerElementMaterial) {
    var materialInfo = getMaterials(subNodes.LayerElementMaterial[0]);
  }

  var faceVertexBuffer = [];
  var polygonIndex = 0;

  for (var polygonVertexIndex = 0; polygonVertexIndex < indexBuffer.length; polygonVertexIndex++) {
    var vertexIndex = indexBuffer[polygonVertexIndex];

    var endOfFace = false;

    if (vertexIndex < 0) {
      vertexIndex = vertexIndex ^ -1;
      indexBuffer[polygonVertexIndex] = vertexIndex;
      endOfFace = true;
    }

    var vertex = new Vertex();
    var weightIndices = [];
    var weights = [];

    vertex.position.fromArray(vertexBuffer, vertexIndex * 3);

    if (deformer) {
      var subDeformers = deformer.map;

      for (var key in subDeformers) {
        var subDeformer = subDeformers[key];
        var indices = subDeformer.indices;

        for (var j = 0; j < indices.length; j++) {
          var index = indices[j];

          if (index === vertexIndex) {
            weights.push(subDeformer.weights[j]);
            weightIndices.push(subDeformer.index);

            break;
          }
        }
      }

      if (weights.length > 4) {
        console.warn(
          'FBXLoader: Vertex has more than 4 skinning weights assigned to vertex.  Deleting additional weights.'
        );

        var WIndex = [0, 0, 0, 0];
        var Weight = [0, 0, 0, 0];

        weights.forEach((weight, weightIndex) => {
          var currentWeight = weight;
          var currentIndex = weightIndices[weightIndex];

          Weight.forEach(function(comparedWeight, comparedWeightIndex, comparedWeightArray) {
            if (currentWeight > comparedWeight) {
              comparedWeightArray[comparedWeightIndex] = currentWeight;
              currentWeight = comparedWeight;

              var tmp = WIndex[comparedWeightIndex];
              WIndex[comparedWeightIndex] = currentIndex;
              currentIndex = tmp;
            }
          });
        });

        weightIndices = WIndex;
        weights = Weight;
      }

      for (var i = weights.length; i < 4; ++i) {
        weights[i] = 0;
        weightIndices[i] = 0;
      }

      vertex.skinWeights.fromArray(weights);
      vertex.skinIndices.fromArray(weightIndices);
    }

    if (normalInfo) {
      vertex.normal.fromArray(getData(polygonVertexIndex, polygonIndex, vertexIndex, normalInfo));
    }

    if (uvInfo) {
      vertex.uv.fromArray(getData(polygonVertexIndex, polygonIndex, vertexIndex, uvInfo));
    }

    if (colorInfo) {
      vertex.color.fromArray(getData(polygonVertexIndex, polygonIndex, vertexIndex, colorInfo));
    }

    faceVertexBuffer.push(vertex);

    if (endOfFace) {
      var face = new Face();
      face.genTrianglesFromVertices(faceVertexBuffer);

      if (materialInfo !== undefined) {
        var materials = getData(polygonVertexIndex, polygonIndex, vertexIndex, materialInfo);
        face.materialIndex = materials[0];
      } else {
        // Seems like some models don't have materialInfo(subNodes.LayerElementMaterial).
        // Set 0 in such a case.
        face.materialIndex = 0;
      }

      geometry.faces.push(face);
      faceVertexBuffer = [];
      polygonIndex++;

      endOfFace = false;
    }
  }

  /**
   * @type {{vertexBuffer: number[], normalBuffer: number[], uvBuffer: number[], skinIndexBuffer: number[], skinWeightBuffer: number[], materialIndexBuffer: number[]}}
   */
  var bufferInfo = geometry.flattenToBuffers();

  var geo = new BufferGeometry();
  geo.name = geometryNode.name;
  geo.setAttribute('position', new Float32BufferAttribute(bufferInfo.vertexBuffer, 3));

  if (bufferInfo.normalBuffer.length > 0) {
    geo.setAttribute('normal', new Float32BufferAttribute(bufferInfo.normalBuffer, 3));
  }
  if (bufferInfo.uvBuffer.length > 0) {
    geo.setAttribute('uv', new Float32BufferAttribute(bufferInfo.uvBuffer, 2));
  }
  if (subNodes.LayerElementColor) {
    geo.setAttribute('color', new Float32BufferAttribute(bufferInfo.colorBuffer, 3));
  }

  if (deformer) {
    geo.setAttribute('skinIndex', new Float32BufferAttribute(bufferInfo.skinIndexBuffer, 4));

    geo.setAttribute('skinWeight', new Float32BufferAttribute(bufferInfo.skinWeightBuffer, 4));

    geo.FBX_Deformer = deformer;
  }

  // Convert the material indices of each vertex into rendering groups on the geometry.

  var materialIndexBuffer = bufferInfo.materialIndexBuffer;
  var prevMaterialIndex = materialIndexBuffer[0];
  var startIndex = 0;

  for (var i = 0; i < materialIndexBuffer.length; ++i) {
    if (materialIndexBuffer[i] !== prevMaterialIndex) {
      geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);

      prevMaterialIndex = materialIndexBuffer[i];
      startIndex = i;
    }
  }

  return geo;
}

/**
 * Parses normal information for geometry.
 * @param {FBXGeometryNode} geometryNode
 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
 */
function getNormals(NormalNode) {
  var mappingType = NormalNode.properties.MappingInformationType;
  var referenceType = NormalNode.properties.ReferenceInformationType;
  var buffer = parseFloatArray(NormalNode.subNodes.Normals.properties.a);
  var indexBuffer = [];
  if (referenceType === 'IndexToDirect') {
    if ('NormalIndex' in NormalNode.subNodes) {
      indexBuffer = parseIntArray(NormalNode.subNodes.NormalIndex.properties.a);
    } else if ('NormalsIndex' in NormalNode.subNodes) {
      indexBuffer = parseIntArray(NormalNode.subNodes.NormalsIndex.properties.a);
    }
  }

  return {
    dataSize: 3,
    buffer: buffer,
    indices: indexBuffer,
    mappingType: mappingType,
    referenceType: referenceType,
  };
}

/**
 * Parses UV information for geometry.
 * @param {FBXGeometryNode} geometryNode
 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
 */
function getUVs(UVNode) {
  var mappingType = UVNode.properties.MappingInformationType;
  var referenceType = UVNode.properties.ReferenceInformationType;
  var buffer = parseFloatArray(UVNode.subNodes.UV.properties.a);
  var indexBuffer = [];
  if (referenceType === 'IndexToDirect') {
    indexBuffer = parseIntArray(UVNode.subNodes.UVIndex.properties.a);
  }

  return {
    dataSize: 2,
    buffer: buffer,
    indices: indexBuffer,
    mappingType: mappingType,
    referenceType: referenceType,
  };
}

/**
 * Parses Vertex Color information for geometry.
 * @param {FBXGeometryNode} geometryNode
 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
 */
function getColors(ColorNode) {
  var mappingType = ColorNode.properties.MappingInformationType;
  var referenceType = ColorNode.properties.ReferenceInformationType;
  var buffer = parseFloatArray(ColorNode.subNodes.Colors.properties.a);
  var indexBuffer = [];
  if (referenceType === 'IndexToDirect') {
    indexBuffer = parseFloatArray(ColorNode.subNodes.ColorIndex.properties.a);
  }

  return {
    dataSize: 4,
    buffer: buffer,
    indices: indexBuffer,
    mappingType: mappingType,
    referenceType: referenceType,
  };
}

/**
 * Parses material application information for geometry.
 * @param {FBXGeometryNode}
 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
 */
function getMaterials(MaterialNode) {
  var mappingType = MaterialNode.properties.MappingInformationType;
  var referenceType = MaterialNode.properties.ReferenceInformationType;

  if (mappingType === 'NoMappingInformation') {
    return {
      dataSize: 1,
      buffer: [0],
      indices: [0],
      mappingType: 'AllSame',
      referenceType: referenceType,
    };
  }

  var materialIndexBuffer = parseIntArray(MaterialNode.subNodes.Materials.properties.a);

  // Since materials are stored as indices, there's a bit of a mismatch between FBX and what
  // we expect.  So we create an intermediate buffer that points to the index in the buffer,
  // for conforming with the other functions we've written for other data.
  var materialIndices = [];

  for (
    var materialIndexBufferIndex = 0, materialIndexBufferLength = materialIndexBuffer.length;
    materialIndexBufferIndex < materialIndexBufferLength;
    ++materialIndexBufferIndex
  ) {
    materialIndices.push(materialIndexBufferIndex);
  }

  return {
    dataSize: 1,
    buffer: materialIndexBuffer,
    indices: materialIndices,
    mappingType: mappingType,
    referenceType: referenceType,
  };
}

/**
 * Function uses the infoObject and given indices to return value array of object.
 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
 * @param {number} polygonIndex - Index of polygon in geometry.
 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
 * @returns {number[]}
 */

var dataArray = [];

var GetData = {
  ByPolygonVertex: {
    /**
     * Function uses the infoObject and given indices to return value array of object.
     * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
     * @param {number} polygonIndex - Index of polygon in geometry.
     * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
     * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
     * @returns {number[]}
     */
    Direct: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var from = polygonVertexIndex * infoObject.dataSize;
      var to = polygonVertexIndex * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },

    /**
     * Function uses the infoObject and given indices to return value array of object.
     * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
     * @param {number} polygonIndex - Index of polygon in geometry.
     * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
     * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
     * @returns {number[]}
     */
    IndexToDirect: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var index = infoObject.indices[polygonVertexIndex];
      var from = index * infoObject.dataSize;
      var to = index * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },
  },

  ByPolygon: {
    /**
     * Function uses the infoObject and given indices to return value array of object.
     * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
     * @param {number} polygonIndex - Index of polygon in geometry.
     * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
     * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
     * @returns {number[]}
     */
    Direct: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var from = polygonIndex * infoObject.dataSize;
      var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },

    /**
     * Function uses the infoObject and given indices to return value array of object.
     * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
     * @param {number} polygonIndex - Index of polygon in geometry.
     * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
     * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
     * @returns {number[]}
     */
    IndexToDirect: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var index = infoObject.indices[polygonIndex];
      var from = index * infoObject.dataSize;
      var to = index * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },
  },

  ByVertice: {
    Direct: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var from = vertexIndex * infoObject.dataSize;
      var to = vertexIndex * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },
  },

  AllSame: {
    /**
     * Function uses the infoObject and given indices to return value array of object.
     * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
     * @param {number} polygonIndex - Index of polygon in geometry.
     * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
     * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
     * @returns {number[]}
     */
    IndexToDirect: function(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
      var from = infoObject.indices[0] * infoObject.dataSize;
      var to = infoObject.indices[0] * infoObject.dataSize + infoObject.dataSize;

      // return infoObject.buffer.slice( from, to );
      return slice(dataArray, infoObject.buffer, from, to);
    },
  },
};

function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
  return GetData[infoObject.mappingType][infoObject.referenceType](
    polygonVertexIndex,
    polygonIndex,
    vertexIndex,
    infoObject
  );
}

/**
 * Specialty function for parsing NurbsCurve based Geometry Nodes.
 * @param {FBXGeometryNode} geometryNode
 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships
 * @returns {BufferGeometry}
 */
function parseNurbsGeometry(geometryNode) {
  if (NURBSCurve === undefined) {
    console.error(
      'FBXLoader relies on NURBSCurve for any nurbs present in the model.  Nurbs will show up as empty geometry.'
    );
    return new BufferGeometry();
  }

  var order = parseInt(geometryNode.properties.Order);

  if (isNaN(order)) {
    console.error(
      'FBXLoader: Invalid Order ' +
        geometryNode.properties.Order +
        ' given for geometry ID: ' +
        geometryNode.id
    );
    return new BufferGeometry();
  }

  var degree = order - 1;

  var knots = parseFloatArray(geometryNode.subNodes.KnotVector.properties.a);
  var controlPoints = [];
  var pointsValues = parseFloatArray(geometryNode.subNodes.Points.properties.a);

  for (var i = 0, l = pointsValues.length; i < l; i += 4) {
    controlPoints.push(new Vector4().fromArray(pointsValues, i));
  }

  var startKnot, endKnot;

  if (geometryNode.properties.Form === 'Closed') {
    controlPoints.push(controlPoints[0]);
  } else if (geometryNode.properties.Form === 'Periodic') {
    startKnot = degree;
    endKnot = knots.length - 1 - startKnot;

    for (var i = 0; i < degree; ++i) {
      controlPoints.push(controlPoints[i]);
    }
  }

  var curve = new NURBSCurve(degree, knots, controlPoints, startKnot, endKnot);
  var vertices = curve.getPoints(controlPoints.length * 7);

  var positions = new Float32Array(vertices.length * 3);

  for (var i = 0, l = vertices.length; i < l; ++i) {
    vertices[i].toArray(positions, i * 3);
  }

  var geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));

  return geometry;
}

/**
 * Finally generates Scene graph and Scene graph Objects.
 * @param {{Objects: {subNodes: {Model: Object.<number, FBXModelNode>}}}} FBXTree
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: Skeleton|null}>} deformers
 * @param {Map<number, BufferGeometry>} geometryMap
 * @param {Map<number, Material>} materialMap
 * @returns {Group}
 */
function parseScene(FBXTree, connections, deformers, geometryMap, materialMap) {
  var sceneGraph = new Group();

  var ModelNode = FBXTree.Objects.subNodes.Model;

  /**
   * @type {Array.<Object3D>}
   */
  var modelArray = [];

  /**
   * @type {Map.<number, Object3D>}
   */
  var modelMap = new Map();

  for (var nodeID in ModelNode) {
    var id = parseInt(nodeID);
    var node = ModelNode[nodeID];
    var conns = connections.get(id);
    var model = null;

    for (var i = 0; i < conns.parents.length; ++i) {
      for (var FBX_ID in deformers) {
        var deformer = deformers[FBX_ID];
        var subDeformers = deformer.map;
        var subDeformer = subDeformers[conns.parents[i].ID];

        if (subDeformer) {
          var model2 = model;
          model = new Bone();
          deformer.bones[subDeformer.index] = model;

          // seems like we need this not to make non-connected bone, maybe?
          // TODO: confirm
          if (model2 !== null) model.add(model2);
        }
      }
    }

    if (!model) {
      switch (node.attrType) {
        case 'Mesh':
          /**
           * @type {?BufferGeometry}
           */
          var geometry = null;

          /**
           * @type {MultiMaterial|Material}
           */
          var material = null;

          /**
           * @type {Array.<Material>}
           */
          var materials = [];

          for (
            var childrenIndex = 0, childrenLength = conns.children.length;
            childrenIndex < childrenLength;
            ++childrenIndex
          ) {
            var child = conns.children[childrenIndex];

            if (geometryMap.has(child.ID)) {
              geometry = geometryMap.get(child.ID);
            }

            if (materialMap.has(child.ID)) {
              materials.push(materialMap.get(child.ID));
            }
          }
          if (materials.length > 1) {
            material = materials;
          } else if (materials.length > 0) {
            material = materials[0];
          } else {
            material = new MeshBasicMaterial({ color: 0x3300ff });
            materials.push(material);
          }
          if ('color' in geometry.attributes) {
            for (
              var materialIndex = 0, numMaterials = materials.length;
              materialIndex < numMaterials;
              ++materialIndex
            ) {
              materials[materialIndex].vertexColors = true;
            }
          }
          if (geometry.FBX_Deformer) {
            for (
              var materialsIndex = 0, materialsLength = materials.length;
              materialsIndex < materialsLength;
              ++materialsIndex
            ) {
              materials[materialsIndex].skinning = true;
            }
            model = new SkinnedMesh(geometry, material);
          } else {
            model = new Mesh(geometry, material);
          }
          break;

        case 'NurbsCurve':
          var geometry = null;

          for (
            var childrenIndex = 0, childrenLength = conns.children.length;
            childrenIndex < childrenLength;
            ++childrenIndex
          ) {
            var child = conns.children[childrenIndex];

            if (geometryMap.has(child.ID)) {
              geometry = geometryMap.get(child.ID);
            }
          }

          // FBX does not list materials for Nurbs lines, so we'll just put our own in here.
          material = new LineBasicMaterial({ color: 0x3300ff, linewidth: 5 });
          model = new SkinnedMesh(geometry, material);
          break;

        default:
          model = new Object3D();
          break;
      }
    }

    model.name = node.attrName
      .replace(/:/, '')
      .replace(/_/, '')
      .replace(/-/, '');
    model.FBX_ID = id;

    modelArray.push(model);
    modelMap.set(id, model);
  }

  for (
    var modelArrayIndex = 0, modelArrayLength = modelArray.length;
    modelArrayIndex < modelArrayLength;
    ++modelArrayIndex
  ) {
    var model = modelArray[modelArrayIndex];

    var node = ModelNode[model.FBX_ID];

    if ('Lcl_Translation' in node.properties) {
      model.position.fromArray(parseFloatArray(node.properties.Lcl_Translation.value));
    }

    if ('Lcl_Rotation' in node.properties) {
      var rotation = parseFloatArray(node.properties.Lcl_Rotation.value).map(degreeToRadian);
      rotation.push('ZYX');
      model.rotation.fromArray(rotation);
    }

    if ('Lcl_Scaling' in node.properties) {
      model.scale.fromArray(parseFloatArray(node.properties.Lcl_Scaling.value));
    }

    if ('PreRotation' in node.properties) {
      var preRotations = new Euler().setFromVector3(
        parseVector3(node.properties.PreRotation).multiplyScalar(DEG2RAD),
        'ZYX'
      );
      preRotations = new Quaternion().setFromEuler(preRotations);
      var currentRotation = new Quaternion().setFromEuler(model.rotation);
      preRotations.multiply(currentRotation);
      model.rotation.setFromQuaternion(preRotations, 'ZYX');
    }

    var conns = connections.get(model.FBX_ID);
    for (var parentIndex = 0; parentIndex < conns.parents.length; parentIndex++) {
      var pIndex = findIndex(modelArray, (mod) => {
        return mod.FBX_ID === conns.parents[parentIndex].ID;
      });
      if (pIndex > -1) {
        modelArray[pIndex].add(model);
        break;
      }
    }
    if (model.parent === null) {
      sceneGraph.add(model);
    }
  }

  // Now with the bones created, we can update the skeletons and bind them to the skinned meshes.
  sceneGraph.updateMatrixWorld(true);

  // Put skeleton into bind pose.
  var BindPoseNode = FBXTree.Objects.subNodes.Pose;
  for (var nodeID in BindPoseNode) {
    if (BindPoseNode[nodeID].attrType === 'BindPose') {
      BindPoseNode = BindPoseNode[nodeID];
      break;
    }
  }
  if (BindPoseNode) {
    var PoseNode = BindPoseNode.subNodes.PoseNode;
    var worldMatrices = new Map();

    for (
      var PoseNodeIndex = 0, PoseNodeLength = PoseNode.length;
      PoseNodeIndex < PoseNodeLength;
      ++PoseNodeIndex
    ) {
      var node = PoseNode[PoseNodeIndex];

      var rawMatWrd = parseMatrixArray(node.subNodes.Matrix.properties.a);

      worldMatrices.set(parseInt(node.id), rawMatWrd);
    }
  }

  for (var FBX_ID in deformers) {
    var deformer = deformers[FBX_ID];
    var subDeformers = deformer.map;

    for (var key in subDeformers) {
      var subDeformer = subDeformers[key];
      var subDeformerIndex = subDeformer.index;

      /**
       * @type {Bone}
       */
      var bone = deformer.bones[subDeformerIndex];
      if (!worldMatrices.has(bone.FBX_ID)) {
        break;
      }
      var mat = worldMatrices.get(bone.FBX_ID);
      bone.matrixWorld.copy(mat);
    }

    // Now that skeleton is in bind pose, bind to model.
    deformer.skeleton = new Skeleton(deformer.bones);

    var conns = connections.get(deformer.FBX_ID);
    var parents = conns.parents;

    for (
      var parentsIndex = 0, parentsLength = parents.length;
      parentsIndex < parentsLength;
      ++parentsIndex
    ) {
      var parent = parents[parentsIndex];

      if (geometryMap.has(parent.ID)) {
        var geoID = parent.ID;
        var geoConns = connections.get(geoID);

        for (var i = 0; i < geoConns.parents.length; ++i) {
          if (modelMap.has(geoConns.parents[i].ID)) {
            var model = modelMap.get(geoConns.parents[i].ID);
            // ASSERT model typeof SkinnedMesh
            model.bind(deformer.skeleton, model.matrixWorld);
            break;
          }
        }
      }
    }
  }

  // Skeleton is now bound, return objects to starting
  // world positions.
  sceneGraph.updateMatrixWorld(true);

  // Silly hack with the animation parsing.  We're gonna pretend the scene graph has a skeleton
  // to attach animations to, since FBXs treat animations as animations for the entire scene,
  // not just for individual objects.
  sceneGraph.skeleton = {
    bones: modelArray,
  };

  var animations = parseAnimations(FBXTree, connections, sceneGraph);

  addAnimations(sceneGraph, animations);

  return sceneGraph;
}

/**
 * Parses animation information from FBXTree and generates an AnimationInfoObject.
 * @param {{Objects: {subNodes: {AnimationCurveNode: any, AnimationCurve: any, AnimationLayer: any, AnimationStack: any}}}} FBXTree
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 */
function parseAnimations(FBXTree, connections, sceneGraph) {
  var rawNodes = FBXTree.Objects.subNodes.AnimationCurveNode;
  var rawCurves = FBXTree.Objects.subNodes.AnimationCurve;
  var rawLayers = FBXTree.Objects.subNodes.AnimationLayer;
  var rawStacks = FBXTree.Objects.subNodes.AnimationStack;

  /**
     * @type {{
				 curves: Map<number, {
				 T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				},
				 R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				},
				 S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				}
			 }>,
			 layers: Map<number, {
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				}
				}[]>,
			 stacks: Map<number, {
				 name: string,
				 layers: {
					T: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
					R: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
					S: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
				}[][],
			 length: number,
			 frames: number }>,
			 length: number,
			 fps: number,
			 frames: number
		 }}
     */
  var returnObject = {
    curves: new Map(),
    layers: {},
    stacks: {},
    length: 0,
    fps: 30,
    frames: 0,
  };

  /**
     * @type {Array.<{
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
			}>}
     */
  var animationCurveNodes = [];
  for (var nodeID in rawNodes) {
    if (nodeID.match(/\d+/)) {
      var animationNode = parseAnimationNode(FBXTree, rawNodes[nodeID], connections, sceneGraph);
      animationCurveNodes.push(animationNode);
    }
  }

  /**
     * @type {Map.<number, {
				id: number,
				attr: string,
				internalID: number,
				attrX: boolean,
				attrY: boolean,
				attrZ: boolean,
				containerBoneID: number,
				containerID: number,
				curves: {
					x: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					},
					y: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					},
					z: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					}
				}
			}>}
     */
  var tmpMap = new Map();
  for (
    var animationCurveNodeIndex = 0;
    animationCurveNodeIndex < animationCurveNodes.length;
    ++animationCurveNodeIndex
  ) {
    if (animationCurveNodes[animationCurveNodeIndex] === null) {
      continue;
    }
    tmpMap.set(
      animationCurveNodes[animationCurveNodeIndex].id,
      animationCurveNodes[animationCurveNodeIndex]
    );
  }

  /**
     * @type {{
				version: any,
				id: number,
				internalID: number,
				times: number[],
				values: number[],
				attrFlag: number[],
				attrData: number[],
			}[]}
     */
  var animationCurves = [];
  for (nodeID in rawCurves) {
    if (nodeID.match(/\d+/)) {
      var animationCurve = parseAnimationCurve(rawCurves[nodeID]);

      // seems like this check would be necessary?
      if (!connections.has(animationCurve.id)) continue;

      animationCurves.push(animationCurve);

      var firstParentConn = connections.get(animationCurve.id).parents[0];
      var firstParentID = firstParentConn.ID;
      var firstParentRelationship = firstParentConn.relationship;
      var axis = '';

      if (firstParentRelationship.match(/X/)) {
        axis = 'x';
      } else if (firstParentRelationship.match(/Y/)) {
        axis = 'y';
      } else if (firstParentRelationship.match(/Z/)) {
        axis = 'z';
      } else {
        continue;
      }

      tmpMap.get(firstParentID).curves[axis] = animationCurve;
    }
  }

  tmpMap.forEach((curveNode) => {
    var id = curveNode.containerBoneID;
    if (!returnObject.curves.has(id)) {
      returnObject.curves.set(id, { T: null, R: null, S: null });
    }
    returnObject.curves.get(id)[curveNode.attr] = curveNode;
    if (curveNode.attr === 'R') {
      var curves = curveNode.curves;
      curves.x.values = curves.x.values.map(degreeToRadian);
      curves.y.values = curves.y.values.map(degreeToRadian);
      curves.z.values = curves.z.values.map(degreeToRadian);

      if (curveNode.preRotations !== null) {
        var preRotations = new Euler().setFromVector3(curveNode.preRotations, 'ZYX');
        preRotations = new Quaternion().setFromEuler(preRotations);
        var frameRotation = new Euler();
        var frameRotationQuaternion = new Quaternion();
        for (var frame = 0; frame < curves.x.times.length; ++frame) {
          frameRotation.set(
            curves.x.values[frame],
            curves.y.values[frame],
            curves.z.values[frame],
            'ZYX'
          );
          frameRotationQuaternion.setFromEuler(frameRotation).premultiply(preRotations);
          frameRotation.setFromQuaternion(frameRotationQuaternion, 'ZYX');
          curves.x.values[frame] = frameRotation.x;
          curves.y.values[frame] = frameRotation.y;
          curves.z.values[frame] = frameRotation.z;
        }
      }
    }
  });

  for (var nodeID in rawLayers) {
    /**
         * @type {{
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				}
				}[]}
         */
    var layer = [];
    var children = connections.get(parseInt(nodeID)).children;

    for (var childIndex = 0; childIndex < children.length; childIndex++) {
      // Skip lockInfluenceWeights
      if (tmpMap.has(children[childIndex].ID)) {
        var curveNode = tmpMap.get(children[childIndex].ID);
        var boneID = curveNode.containerBoneID;
        if (layer[boneID] === undefined) {
          layer[boneID] = {
            T: null,
            R: null,
            S: null,
          };
        }

        layer[boneID][curveNode.attr] = curveNode;
      }
    }

    returnObject.layers[nodeID] = layer;
  }

  for (var nodeID in rawStacks) {
    var layers = [];
    var children = connections.get(parseInt(nodeID)).children;
    var timestamps = { max: 0, min: Number.MAX_VALUE };

    for (var childIndex = 0; childIndex < children.length; ++childIndex) {
      var currentLayer = returnObject.layers[children[childIndex].ID];

      if (currentLayer !== undefined) {
        layers.push(currentLayer);

        for (
          var currentLayerIndex = 0, currentLayerLength = currentLayer.length;
          currentLayerIndex < currentLayerLength;
          ++currentLayerIndex
        ) {
          var layer = currentLayer[currentLayerIndex];

          if (layer) {
            getCurveNodeMaxMinTimeStamps(layer, timestamps);
          }
        }
      }
    }

    // Do we have an animation clip with actual length?
    if (timestamps.max > timestamps.min) {
      returnObject.stacks[nodeID] = {
        name: rawStacks[nodeID].attrName,
        layers: layers,
        length: timestamps.max - timestamps.min,
        frames: (timestamps.max - timestamps.min) * 30,
      };
    }
  }

  return returnObject;
}

/**
 * @param {Object} FBXTree
 * @param {{id: number, attrName: string, properties: Object<string, any>}} animationCurveNode
 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
 * @param {{skeleton: {bones: {FBX_ID: number}[]}}} sceneGraph
 */
function parseAnimationNode(FBXTree, animationCurveNode, connections, sceneGraph) {
  var rawModels = FBXTree.Objects.subNodes.Model;

  var returnObject = {
    /**
     * @type {number}
     */
    id: animationCurveNode.id,

    /**
     * @type {string}
     */
    attr: animationCurveNode.attrName,

    /**
     * @type {number}
     */
    internalID: animationCurveNode.id,

    /**
     * @type {boolean}
     */
    attrX: false,

    /**
     * @type {boolean}
     */
    attrY: false,

    /**
     * @type {boolean}
     */
    attrZ: false,

    /**
     * @type {number}
     */
    containerBoneID: -1,

    /**
     * @type {number}
     */
    containerID: -1,

    curves: {
      x: null,
      y: null,
      z: null,
    },

    /**
     * @type {number[]}
     */
    preRotations: null,
  };

  if (returnObject.attr.match(/S|R|T/)) {
    for (var attributeKey in animationCurveNode.properties) {
      if (attributeKey.match(/X/)) {
        returnObject.attrX = true;
      }
      if (attributeKey.match(/Y/)) {
        returnObject.attrY = true;
      }
      if (attributeKey.match(/Z/)) {
        returnObject.attrZ = true;
      }
    }
  } else {
    return null;
  }

  var conns = connections.get(returnObject.id);
  var containerIndices = conns.parents;

  for (
    var containerIndicesIndex = containerIndices.length - 1;
    containerIndicesIndex >= 0;
    --containerIndicesIndex
  ) {
    var boneID = findIndex(sceneGraph.skeleton.bones, (bone) => {
      return bone.FBX_ID === containerIndices[containerIndicesIndex].ID;
    });
    if (boneID > -1) {
      returnObject.containerBoneID = boneID;
      returnObject.containerID = containerIndices[containerIndicesIndex].ID;
      var model = rawModels[returnObject.containerID.toString()];
      if ('PreRotation' in model.properties) {
        returnObject.preRotations = parseVector3(model.properties.PreRotation).multiplyScalar(
          Math.PI / 180
        );
      }
      break;
    }
  }

  return returnObject;
}

/**
 * @param {{id: number, subNodes: {KeyTime: {properties: {a: string}}, KeyValueFloat: {properties: {a: string}}, KeyAttrFlags: {properties: {a: string}}, KeyAttrDataFloat: {properties: {a: string}}}}} animationCurve
 */
function parseAnimationCurve(animationCurve) {
  return {
    version: null,
    id: animationCurve.id,
    internalID: animationCurve.id,
    times: parseFloatArray(animationCurve.subNodes.KeyTime.properties.a).map(
      convertFBXTimeToSeconds
    ),
    values: parseFloatArray(animationCurve.subNodes.KeyValueFloat.properties.a),

    attrFlag: parseIntArray(animationCurve.subNodes.KeyAttrFlags.properties.a),
    attrData: parseFloatArray(animationCurve.subNodes.KeyAttrDataFloat.properties.a),
  };
}

/**
 * Sets the maxTimeStamp and minTimeStamp variables if it has timeStamps that are either larger or smaller
 * than the max or min respectively.
 * @param {{
				T: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
				R: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
				S: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
		}} layer
 */
function getCurveNodeMaxMinTimeStamps(layer, timestamps) {
  if (layer.R) {
    getCurveMaxMinTimeStamp(layer.R.curves, timestamps);
  }
  if (layer.S) {
    getCurveMaxMinTimeStamp(layer.S.curves, timestamps);
  }
  if (layer.T) {
    getCurveMaxMinTimeStamp(layer.T.curves, timestamps);
  }
}

/**
 * Sets the maxTimeStamp and minTimeStamp if one of the curve's time stamps
 * exceeds the maximum or minimum.
 * @param {{
				x: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				},
				y: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				},
				z: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				}
		}} curve
 */
function getCurveMaxMinTimeStamp(curve, timestamps) {
  if (curve.x) {
    getCurveAxisMaxMinTimeStamps(curve.x, timestamps);
  }
  if (curve.y) {
    getCurveAxisMaxMinTimeStamps(curve.y, timestamps);
  }
  if (curve.z) {
    getCurveAxisMaxMinTimeStamps(curve.z, timestamps);
  }
}

/**
 * Sets the maxTimeStamp and minTimeStamp if one of its timestamps exceeds the maximum or minimum.
 * @param {{times: number[]}} axis
 */
function getCurveAxisMaxMinTimeStamps(axis, timestamps) {
  timestamps.max =
    axis.times[axis.times.length - 1] > timestamps.max
      ? axis.times[axis.times.length - 1]
      : timestamps.max;
  timestamps.min = axis.times[0] < timestamps.min ? axis.times[0] : timestamps.min;
}

/**
 * @param {{
		curves: Map<number, {
			T: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			R: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			S: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
		}>;
		layers: Map<number, {
			T: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			R: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			S: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
		}[]>;
		stacks: Map<number, {
			name: string;
			layers: {
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
			}[][];
			length: number;
			frames: number;
		}>;
		length: number;
		fps: number;
		frames: number;
	}} animations,
 * @param {{skeleton: { bones: Bone[]}}} group
 */
function addAnimations(group, animations) {
  if (group.animations === undefined) {
    group.animations = [];
  }

  var stacks = animations.stacks;

  for (var key in stacks) {
    var stack = stacks[key];

    /**
     * @type {{
     * name: string,
     * fps: number,
     * length: number,
     * hierarchy: Array.<{
     * 	parent: number,
     * 	name: string,
     * 	keys: Array.<{
     * 		time: number,
     * 		pos: Array.<number>,
     * 		rot: Array.<number>,
     * 		scl: Array.<number>
     * 	}>
     * }>
     * }}
     */
    var animationData = {
      name: stack.name,
      fps: 30,
      length: stack.length,
      hierarchy: [],
    };

    var bones = group.skeleton.bones;

    for (var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++bonesIndex) {
      var bone = bones[bonesIndex];

      var name = bone.name.replace(/.*:/, '');
      var parentIndex = findIndex(bones, (parentBone) => {
        return bone.parent === parentBone;
      });
      animationData.hierarchy.push({ parent: parentIndex, name: name, keys: [] });
    }

    for (var frame = 0; frame <= stack.frames; frame++) {
      for (var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++bonesIndex) {
        var bone = bones[bonesIndex];
        var boneIndex = bonesIndex;

        var animationNode = stack.layers[0][boneIndex];

        for (
          var hierarchyIndex = 0, hierarchyLength = animationData.hierarchy.length;
          hierarchyIndex < hierarchyLength;
          ++hierarchyIndex
        ) {
          var node = animationData.hierarchy[hierarchyIndex];

          if (node.name === bone.name) {
            node.keys.push(generateKey(animations, animationNode, bone, frame));
          }
        }
      }
    }

    group.animations.push(AnimationClip.parseAnimation(animationData, bones));
  }
}

var euler = new Euler();
var quaternion = new Quaternion();

/**
 * @param {Bone} bone
 */
function generateKey(animations, animationNode, bone, frame) {
  var key = {
    time: frame / animations.fps,
    pos: bone.position.toArray(),
    rot: bone.quaternion.toArray(),
    scl: bone.scale.toArray(),
  };

  if (animationNode === undefined) return key;

  try {
    if (hasCurve(animationNode, 'T') && hasKeyOnFrame(animationNode.T, frame)) {
      key.pos = [
        animationNode.T.curves.x.values[frame],
        animationNode.T.curves.y.values[frame],
        animationNode.T.curves.z.values[frame],
      ];
    }

    if (hasCurve(animationNode, 'R') && hasKeyOnFrame(animationNode.R, frame)) {
      var rotationX = animationNode.R.curves.x.values[frame];
      var rotationY = animationNode.R.curves.y.values[frame];
      var rotationZ = animationNode.R.curves.z.values[frame];

      quaternion.setFromEuler(euler.set(rotationX, rotationY, rotationZ, 'ZYX'));
      key.rot = quaternion.toArray();
    }

    if (hasCurve(animationNode, 'S') && hasKeyOnFrame(animationNode.S, frame)) {
      key.scl = [
        animationNode.S.curves.x.values[frame],
        animationNode.S.curves.y.values[frame],
        animationNode.S.curves.z.values[frame],
      ];
    }
  } catch (error) {
    // Curve is not fully plotted.
    console.log(bone);
    console.log(error);
  }

  return key;
}

var AXES = ['x', 'y', 'z'];

function hasCurve(animationNode, attribute) {
  if (animationNode === undefined) {
    return false;
  }

  var attributeNode = animationNode[attribute];

  if (!attributeNode) {
    return false;
  }

  return AXES.every((key) => {
    return attributeNode.curves[key] !== null;
  });
}

function hasKeyOnFrame(attributeNode, frame) {
  return AXES.every((key) => {
    return isKeyExistOnFrame(attributeNode.curves[key], frame);
  });
}

function isKeyExistOnFrame(curve, frame) {
  return curve.values[frame] !== undefined;
}

/**
 * An instance of a Vertex with data for drawing vertices to the screen.
 * @constructor
 */
function Vertex() {
  /**
   * Position of the vertex.
   * @type {Vector3}
   */
  this.position = new Vector3();

  /**
   * Normal of the vertex
   * @type {Vector3}
   */
  this.normal = new Vector3();

  /**
   * UV coordinates of the vertex.
   * @type {Vector2}
   */
  this.uv = new Vector2();

  /**
   * Color of the vertex
   * @type {Vector3}
   */
  this.color = new Vector3();

  /**
   * Indices of the bones vertex is influenced by.
   * @type {Vector4}
   */
  this.skinIndices = new Vector4(0, 0, 0, 0);

  /**
   * Weights that each bone influences the vertex.
   * @type {Vector4}
   */
  this.skinWeights = new Vector4(0, 0, 0, 0);
}

Object.assign(Vertex.prototype, {
  copy: function(target) {
    var returnVar = target || new Vertex();

    returnVar.position.copy(this.position);
    returnVar.normal.copy(this.normal);
    returnVar.uv.copy(this.uv);
    returnVar.skinIndices.copy(this.skinIndices);
    returnVar.skinWeights.copy(this.skinWeights);

    return returnVar;
  },

  flattenToBuffers: function(
    vertexBuffer,
    normalBuffer,
    uvBuffer,
    colorBuffer,
    skinIndexBuffer,
    skinWeightBuffer
  ) {
    this.position.toArray(vertexBuffer, vertexBuffer.length);
    this.normal.toArray(normalBuffer, normalBuffer.length);
    this.uv.toArray(uvBuffer, uvBuffer.length);
    this.color.toArray(colorBuffer, colorBuffer.length);
    this.skinIndices.toArray(skinIndexBuffer, skinIndexBuffer.length);
    this.skinWeights.toArray(skinWeightBuffer, skinWeightBuffer.length);
  },
});

/**
 * @constructor
 */
function Triangle() {
  /**
   * @type {{position: Vector3, normal: Vector3, uv: Vector2, skinIndices: Vector4, skinWeights: Vector4}[]}
   */
  this.vertices = [];
}

Object.assign(Triangle.prototype, {
  copy: function(target) {
    var returnVar = target || new Triangle();

    for (var i = 0; i < this.vertices.length; ++i) {
      this.vertices[i].copy(returnVar.vertices[i]);
    }

    return returnVar;
  },

  flattenToBuffers: function(
    vertexBuffer,
    normalBuffer,
    uvBuffer,
    colorBuffer,
    skinIndexBuffer,
    skinWeightBuffer
  ) {
    var vertices = this.vertices;

    for (var i = 0, l = vertices.length; i < l; ++i) {
      vertices[i].flattenToBuffers(
        vertexBuffer,
        normalBuffer,
        uvBuffer,
        colorBuffer,
        skinIndexBuffer,
        skinWeightBuffer
      );
    }
  },
});

/**
 * @constructor
 */
function Face() {
  /**
   * @type {{vertices: {position: Vector3, normal: Vector3, uv: Vector2, skinIndices: Vector4, skinWeights: Vector4}[]}[]}
   */
  this.triangles = [];
  this.materialIndex = 0;
}

Object.assign(Face.prototype, {
  copy: function(target) {
    var returnVar = target || new Face();

    for (var i = 0; i < this.triangles.length; ++i) {
      this.triangles[i].copy(returnVar.triangles[i]);
    }

    returnVar.materialIndex = this.materialIndex;

    return returnVar;
  },

  genTrianglesFromVertices: function(vertexArray) {
    for (var i = 2; i < vertexArray.length; ++i) {
      var triangle = new Triangle();
      triangle.vertices[0] = vertexArray[0];
      triangle.vertices[1] = vertexArray[i - 1];
      triangle.vertices[2] = vertexArray[i];
      this.triangles.push(triangle);
    }
  },

  flattenToBuffers: function(
    vertexBuffer,
    normalBuffer,
    uvBuffer,
    colorBuffer,
    skinIndexBuffer,
    skinWeightBuffer,
    materialIndexBuffer
  ) {
    var triangles = this.triangles;
    var materialIndex = this.materialIndex;

    for (var i = 0, l = triangles.length; i < l; ++i) {
      triangles[i].flattenToBuffers(
        vertexBuffer,
        normalBuffer,
        uvBuffer,
        colorBuffer,
        skinIndexBuffer,
        skinWeightBuffer
      );
      append(materialIndexBuffer, [materialIndex, materialIndex, materialIndex]);
    }
  },
});

/**
 * @constructor
 */
function Geometry() {
  /**
   * @type {{triangles: {vertices: {position: Vector3, normal: Vector3, uv: Vector2, skinIndices: Vector4, skinWeights: Vector4}[]}[], materialIndex: number}[]}
   */
  this.faces = [];

  /**
   * @type {{}|Skeleton}
   */
  this.skeleton = null;
}

Object.assign(Geometry.prototype, {
  /**
   * @returns	{{vertexBuffer: number[], normalBuffer: number[], uvBuffer: number[], skinIndexBuffer: number[], skinWeightBuffer: number[], materialIndexBuffer: number[]}}
   */
  flattenToBuffers: function() {
    var vertexBuffer = [];
    var normalBuffer = [];
    var uvBuffer = [];
    var colorBuffer = [];
    var skinIndexBuffer = [];
    var skinWeightBuffer = [];

    var materialIndexBuffer = [];

    var faces = this.faces;

    for (var i = 0, l = faces.length; i < l; ++i) {
      faces[i].flattenToBuffers(
        vertexBuffer,
        normalBuffer,
        uvBuffer,
        colorBuffer,
        skinIndexBuffer,
        skinWeightBuffer,
        materialIndexBuffer
      );
    }

    return {
      vertexBuffer: vertexBuffer,
      normalBuffer: normalBuffer,
      uvBuffer: uvBuffer,
      colorBuffer: colorBuffer,
      skinIndexBuffer: skinIndexBuffer,
      skinWeightBuffer: skinWeightBuffer,
      materialIndexBuffer: materialIndexBuffer,
    };
  },
});

function TextParser() {}

Object.assign(TextParser.prototype, {
  getPrevNode: function() {
    return this.nodeStack[this.currentIndent - 2];
  },

  getCurrentNode: function() {
    return this.nodeStack[this.currentIndent - 1];
  },

  getCurrentProp: function() {
    return this.currentProp;
  },

  pushStack: function(node) {
    this.nodeStack.push(node);
    this.currentIndent += 1;
  },

  popStack: function() {
    this.nodeStack.pop();
    this.currentIndent -= 1;
  },

  setCurrentProp: function(val, name) {
    this.currentProp = val;
    this.currentPropName = name;
  },

  // ----------parse ---------------------------------------------------
  parse: function(text) {
    this.currentIndent = 0;
    this.allNodes = new FBXTree();
    this.nodeStack = [];
    this.currentProp = [];
    this.currentPropName = '';

    var split = text.split('\n');

    for (var line in split) {
      var l = split[line];

      // short cut
      if (l.match(/^[\s\t]*;/)) {
        continue;
      } // skip comment line
      if (l.match(/^[\s\t]*$/)) {
        continue;
      } // skip empty line

      // beginning of node
      var beginningOfNodeExp = new RegExp('^\\t{' + this.currentIndent + '}(\\w+):(.*){', '');
      var match = l.match(beginningOfNodeExp);
      if (match) {
        var nodeName = match[1]
          .trim()
          .replace(/^"/, '')
          .replace(/"$/, '');
        var nodeAttrs = match[2].split(',');

        for (var i = 0, l = nodeAttrs.length; i < l; i++) {
          nodeAttrs[i] = nodeAttrs[i]
            .trim()
            .replace(/^"/, '')
            .replace(/"$/, '');
        }

        this.parseNodeBegin(l, nodeName, nodeAttrs || null);
        continue;
      }

      // node's property
      var propExp = new RegExp('^\\t{' + this.currentIndent + '}(\\w+):[\\s\\t\\r\\n](.*)');
      var match = l.match(propExp);
      if (match) {
        var propName = match[1]
          .replace(/^"/, '')
          .replace(/"$/, '')
          .trim();
        var propValue = match[2]
          .replace(/^"/, '')
          .replace(/"$/, '')
          .trim();

        this.parseNodeProperty(l, propName, propValue);
        continue;
      }

      // end of node
      var endOfNodeExp = new RegExp('^\\t{' + (this.currentIndent - 1) + '}}');
      if (l.match(endOfNodeExp)) {
        this.nodeEnd();
        continue;
      }

      // for special case,
      //
      //	  Vertices: *8670 {
      //		  a: 0.0356229953467846,13.9599733352661,-0.399196773.....(snip)
      // -0.0612030513584614,13.960485458374,-0.409748703241348,-0.10.....
      // 0.12490539252758,13.7450733184814,-0.454119384288788,0.09272.....
      // 0.0836158767342567,13.5432004928589,-0.435397416353226,0.028.....
      //
      // these case the lines must contiue with previous line
      if (l.match(/^[^\s\t}]/)) {
        this.parseNodePropertyContinued(l);
      }
    }

    return this.allNodes;
  },

  parseNodeBegin: function(line, nodeName, nodeAttrs) {
    // var nodeName = match[1];
    var node = { name: nodeName, properties: {}, subNodes: {} };
    var attrs = this.parseNodeAttr(nodeAttrs);
    var currentNode = this.getCurrentNode();

    // a top node
    if (this.currentIndent === 0) {
      this.allNodes.add(nodeName, node);
    } else {
      // a subnode

      // already exists subnode, then append it
      if (nodeName in currentNode.subNodes) {
        var tmp = currentNode.subNodes[nodeName];

        // console.log( "duped entry found\nkey: " + nodeName + "\nvalue: " + propValue );
        if (this.isFlattenNode(currentNode.subNodes[nodeName])) {
          if (attrs.id === '') {
            currentNode.subNodes[nodeName] = [];
            currentNode.subNodes[nodeName].push(tmp);
          } else {
            currentNode.subNodes[nodeName] = {};
            currentNode.subNodes[nodeName][tmp.id] = tmp;
          }
        }

        if (attrs.id === '') {
          currentNode.subNodes[nodeName].push(node);
        } else {
          currentNode.subNodes[nodeName][attrs.id] = node;
        }
      } else if (typeof attrs.id === 'number' || attrs.id.match(/^\d+$/)) {
        currentNode.subNodes[nodeName] = {};
        currentNode.subNodes[nodeName][attrs.id] = node;
      } else {
        currentNode.subNodes[nodeName] = node;
      }
    }

    // for this		  ??????????????????????????????????????????????????????
    // NodeAttribute: 1001463072, "NodeAttribute::", "LimbNode" {
    if (nodeAttrs) {
      node.id = attrs.id;
      node.attrName = attrs.name;
      node.attrType = attrs.type;
    }

    this.pushStack(node);
  },

  parseNodeAttr: function(attrs) {
    var id = attrs[0];

    if (attrs[0] !== '') {
      id = parseInt(attrs[0]);

      if (isNaN(id)) {
        // PolygonVertexIndex: *16380 {
        id = attrs[0];
      }
    }

    var name = '',
      type = '';

    if (attrs.length > 1) {
      name = attrs[1].replace(/^(\w+)::/, '');
      type = attrs[2];
    }

    return { id: id, name: name, type: type };
  },

  parseNodeProperty: function(line, propName, propValue) {
    var currentNode = this.getCurrentNode();
    var parentName = currentNode.name;

    // special case parent node's is like "Properties70"
    // these chilren nodes must treat with careful
    if (parentName !== undefined) {
      var propMatch = parentName.match(/Properties(\d)+/);
      if (propMatch) {
        this.parseNodeSpecialProperty(line, propName, propValue);
        return;
      }
    }

    // special case Connections
    if (propName == 'C') {
      var connProps = propValue.split(',').slice(1);
      var from = parseInt(connProps[0]);
      var to = parseInt(connProps[1]);

      var rest = propValue.split(',').slice(3);

      propName = 'connections';
      propValue = [from, to];
      append(propValue, rest);

      if (currentNode.properties[propName] === undefined) {
        currentNode.properties[propName] = [];
      }
    }

    // special case Connections
    if (propName == 'Node') {
      var id = parseInt(propValue);
      currentNode.properties.id = id;
      currentNode.id = id;
    }

    // already exists in properties, then append this
    if (propName in currentNode.properties) {
      // console.log( "duped entry found\nkey: " + propName + "\nvalue: " + propValue );
      if (Array.isArray(currentNode.properties[propName])) {
        currentNode.properties[propName].push(propValue);
      } else {
        currentNode.properties[propName] += propValue;
      }
    } else {
      // console.log( propName + ":  " + propValue );
      if (Array.isArray(currentNode.properties[propName])) {
        currentNode.properties[propName].push(propValue);
      } else {
        currentNode.properties[propName] = propValue;
      }
    }

    this.setCurrentProp(currentNode.properties, propName);
  },

  // TODO:
  parseNodePropertyContinued: function(line) {
    this.currentProp[this.currentPropName] += line;
  },

  parseNodeSpecialProperty: function(line, propName, propValue) {
    // split this
    // P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
    // into array like below
    // ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
    var props = propValue.split('",');

    for (var i = 0, l = props.length; i < l; i++) {
      props[i] = props[i]
        .trim()
        .replace(/^\"/, '')
        .replace(/\s/, '_');
    }

    var innerPropName = props[0];
    var innerPropType1 = props[1];
    var innerPropType2 = props[2];
    var innerPropFlag = props[3];
    var innerPropValue = props[4];

    /*
         if ( innerPropValue === undefined ) {
         innerPropValue = props[3];
         }
         */

    // cast value in its type
    switch (innerPropType1) {
      case 'int':
        innerPropValue = parseInt(innerPropValue);
        break;

      case 'double':
        innerPropValue = parseFloat(innerPropValue);
        break;

      case 'ColorRGB':
      case 'Vector3D':
        innerPropValue = parseFloatArray(innerPropValue);
        break;
    }

    // CAUTION: these props must append to parent's parent
    this.getPrevNode().properties[innerPropName] = {
      type: innerPropType1,
      type2: innerPropType2,
      flag: innerPropFlag,
      value: innerPropValue,
    };

    this.setCurrentProp(this.getPrevNode().properties, innerPropName);
  },

  nodeEnd: function() {
    this.popStack();
  },

  /* ---------------------------------------------------------------- */
  /*		util													  */
  isFlattenNode: function(node) {
    return 'subNodes' in node && 'properties' in node ? true : false;
  },
});

// Binary format specification:
//   https://code.blender.org/2013/08/fbx-binary-file-format-specification/
//   https://wiki.rogiken.org/specifications/file-format/fbx/ (more detail but Japanese)
function BinaryParser() {}

Object.assign(BinaryParser.prototype, {
  /**
   * Parses binary data and builds FBXTree as much compatible as possible with the one built by TextParser.
   * @param {ArrayBuffer} buffer
   * @returns {FBXTree}
   */
  parse: function(buffer) {
    var reader = new BinaryReader(buffer);
    reader.skip(23); // skip magic 23 bytes

    var version = reader.getUint32();

    console.log('FBX binary version: ' + version);

    var allNodes = new FBXTree();
    while (!this.endOfContent(reader)) {
      var node = this.parseNode(reader, version);
      if (node !== null) allNodes.add(node.name, node);
    }
    return allNodes;
  },

  /**
   * Checks if reader has reached the end of content.
   * @param {BinaryReader} reader
   * @returns {boolean}
   */
  endOfContent: function(reader) {
    // footer size: 160bytes + 16-byte alignment padding
    // - 16bytes: magic
    // - padding til 16-byte alignment (at least 1byte?)
    //   (seems like some exporters embed fixed 15bytes?)
    // - 4bytes: magic
    // - 4bytes: version
    // - 120bytes: zero
    // - 16bytes: magic
    if (reader.size() % 16 === 0) {
      return ((reader.getOffset() + 160 + 16) & ~0xf) >= reader.size();
    }

    return reader.getOffset() + 160 + 15 >= reader.size();
  },

  /**
   * Parses Node as much compatible as possible with the one parsed by TextParser
   * TODO: could be optimized more?
   * @param {BinaryReader} reader
   * @param {number} version
   * @returns {Object} - Returns an Object as node, or null if NULL-record.
   */
  parseNode: function(reader, version) {
    // The first three data sizes depends on version.
    var endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
    var numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();
    var propertyListLen = version >= 7500 ? reader.getUint64() : reader.getUint32();
    var nameLen = reader.getUint8();
    var name = reader.getString(nameLen);

    // Regards this node as NULL-record if endOffset is zero
    if (endOffset === 0) return null;

    var propertyList = [];

    for (var i = 0; i < numProperties; i++) {
      propertyList.push(this.parseProperty(reader));
    }

    // Regards the first three elements in propertyList as id, attrName, and attrType
    var id = propertyList.length > 0 ? propertyList[0] : '';
    var attrName = propertyList.length > 1 ? propertyList[1] : '';
    var attrType = propertyList.length > 2 ? propertyList[2] : '';

    var subNodes = {};
    var properties = {};

    var isSingleProperty = false;

    // if this node represents just a single property
    // like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
    if (numProperties === 1 && reader.getOffset() === endOffset) {
      isSingleProperty = true;
    }

    while (endOffset > reader.getOffset()) {
      var node = this.parseNode(reader, version);

      if (node === null) continue;

      // special case: child node is single property
      if (node.singleProperty === true) {
        var value = node.propertyList[0];

        if (Array.isArray(value)) {
          // node represents
          //	Vertices: *3 {
          //		a: 0.01, 0.02, 0.03
          //	}
          // of text format here.

          node.properties[node.name] = node.propertyList[0];
          subNodes[node.name] = node;

          // Later phase expects single property array is in node.properties.a as String.
          // TODO: optimize
          node.properties.a = value.toString();
        } else {
          // node represents
          // 	Version: 100
          // of text format here.

          properties[node.name] = value;
        }

        continue;
      }

      // special case: connections
      if (name === 'Connections' && node.name === 'C') {
        var array = [];

        // node.propertyList would be like
        // ["OO", 111264976, 144038752, "d|x"] (?, from, to, additional values)
        for (var i = 1, il = node.propertyList.length; i < il; i++) {
          array[i - 1] = node.propertyList[i];
        }

        if (properties.connections === undefined) {
          properties.connections = [];
        }

        properties.connections.push(array);

        continue;
      }

      // special case: child node is Properties\d+
      if (node.name.match(/^Properties\d+$/)) {
        // move child node's properties to this node.

        var keys = Object.keys(node.properties);

        for (var i = 0, il = keys.length; i < il; i++) {
          var key = keys[i];
          properties[key] = node.properties[key];
        }

        continue;
      }

      // special case: properties
      if (name.match(/^Properties\d+$/) && node.name === 'P') {
        var innerPropName = node.propertyList[0];
        var innerPropType1 = node.propertyList[1];
        var innerPropType2 = node.propertyList[2];
        var innerPropFlag = node.propertyList[3];
        var innerPropValue;

        if (innerPropName.indexOf('Lcl ') === 0)
          innerPropName = innerPropName.replace('Lcl ', 'Lcl_');
        if (innerPropType1.indexOf('Lcl ') === 0)
          innerPropType1 = innerPropType1.replace('Lcl ', 'Lcl_');

        if (
          innerPropType1 === 'ColorRGB' ||
          innerPropType1 === 'Vector' ||
          innerPropType1 === 'Vector3D' ||
          innerPropType1.indexOf('Lcl_') === 0
        ) {
          innerPropValue = [node.propertyList[4], node.propertyList[5], node.propertyList[6]];
        } else {
          innerPropValue = node.propertyList[4];
        }

        if (innerPropType1.indexOf('Lcl_') === 0) {
          innerPropValue = innerPropValue.toString();
        }

        // this will be copied to parent. see above.
        properties[innerPropName] = {
          type: innerPropType1,
          type2: innerPropType2,
          flag: innerPropFlag,
          value: innerPropValue,
        };

        continue;
      }

      // standard case
      // follows TextParser's manner.
      if (subNodes[node.name] === undefined) {
        if (typeof node.id === 'number') {
          subNodes[node.name] = {};
          subNodes[node.name][node.id] = node;
        } else {
          subNodes[node.name] = node;
        }
      } else {
        if (node.id === '') {
          if (!Array.isArray(subNodes[node.name])) {
            subNodes[node.name] = [subNodes[node.name]];
          }

          subNodes[node.name].push(node);
        } else {
          if (subNodes[node.name][node.id] === undefined) {
            subNodes[node.name][node.id] = node;
          } else {
            // conflict id. irregular?

            if (!Array.isArray(subNodes[node.name][node.id])) {
              subNodes[node.name][node.id] = [subNodes[node.name][node.id]];
            }

            subNodes[node.name][node.id].push(node);
          }
        }
      }
    }

    return {
      singleProperty: isSingleProperty,
      id: id,
      attrName: attrName,
      attrType: attrType,
      name: name,
      properties: properties,
      propertyList: propertyList, // raw property list, would be used by parent
      subNodes: subNodes,
    };
  },

  parseProperty: function(reader) {
    var type = reader.getChar();

    switch (type) {
      case 'F':
        return reader.getFloat32();

      case 'D':
        return reader.getFloat64();

      case 'L':
        return reader.getInt64();

      case 'I':
        return reader.getInt32();

      case 'Y':
        return reader.getInt16();

      case 'C':
        return reader.getBoolean();

      case 'f':
      case 'd':
      case 'l':
      case 'i':
      case 'b':
        var arrayLength = reader.getUint32();
        var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
        var compressedLength = reader.getUint32();

        if (encoding === 0) {
          switch (type) {
            case 'f':
              return reader.getFloat32Array(arrayLength);

            case 'd':
              return reader.getFloat64Array(arrayLength);

            case 'l':
              return reader.getInt64Array(arrayLength);

            case 'i':
              return reader.getInt32Array(arrayLength);

            case 'b':
              return reader.getBooleanArray(arrayLength);
          }
        }
      // if ( Zlib === undefined ) {
      //     throw new Error( 'FBXLoader: Import inflate.min.js from https://github.com/imaya/zlib.js' );
      // }

      // var inflate = new Zlib.Inflate( new Uint8Array( reader.getArrayBuffer( compressedLength ) ) );
      // var reader2 = new BinaryReader( inflate.decompress().buffer );

      // switch ( type ) {
      //     case 'f':
      //         return reader2.getFloat32Array( arrayLength );

      //     case 'd':
      //         return reader2.getFloat64Array( arrayLength );

      //     case 'l':
      //         return reader2.getInt64Array( arrayLength );

      //     case 'i':
      //         return reader2.getInt32Array( arrayLength );

      //     case 'b':
      //         return reader2.getBooleanArray( arrayLength );
      // }

      case 'S':
        var length = reader.getUint32();
        return reader.getString(length);

      case 'R':
        var length = reader.getUint32();
        return reader.getArrayBuffer(length);

      default:
        throw new Error('FBXLoader: Unknown property type ' + type);
    }
  },
});

function BinaryReader(buffer, littleEndian) {
  this.dv = new DataView(buffer);
  this.offset = 0;
  this.littleEndian = littleEndian !== undefined ? littleEndian : true;
}

Object.assign(BinaryReader.prototype, {
  getOffset: function() {
    return this.offset;
  },

  size: function() {
    return this.dv.buffer.byteLength;
  },

  skip: function(length) {
    this.offset += length;
  },

  // seems like true/false representation depends on exporter.
  //   true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean: function() {
    return (this.getUint8() & 1) === 1;
  },

  getBooleanArray: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getBoolean());
    }

    return a;
  },

  getInt8: function() {
    var value = this.dv.getInt8(this.offset);
    this.offset += 1;
    return value;
  },

  getInt8Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getInt8());
    }

    return a;
  },

  getUint8: function() {
    var value = this.dv.getUint8(this.offset);
    this.offset += 1;
    return value;
  },

  getUint8Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getUint8());
    }

    return a;
  },

  getInt16: function() {
    var value = this.dv.getInt16(this.offset, this.littleEndian);
    this.offset += 2;
    return value;
  },

  getInt16Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getInt16());
    }

    return a;
  },

  getUint16: function() {
    var value = this.dv.getUint16(this.offset, this.littleEndian);
    this.offset += 2;
    return value;
  },

  getUint16Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getUint16());
    }

    return a;
  },

  getInt32: function() {
    var value = this.dv.getInt32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  },

  getInt32Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getInt32());
    }

    return a;
  },

  getUint32: function() {
    var value = this.dv.getUint32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  },

  getUint32Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getUint32());
    }

    return a;
  },

  // JavaScript doesn't support 64-bit integer so attempting to calculate by ourselves.
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There'd be a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64: function() {
    var low, high;

    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }

    // calculate negative value
    if (high & 0x80000000) {
      high = ~high & 0xffffffff;
      low = ~low & 0xffffffff;

      if (low === 0xffffffff) high = (high + 1) & 0xffffffff;

      low = (low + 1) & 0xffffffff;

      return -(high * 0x100000000 + low);
    }

    return high * 0x100000000 + low;
  },

  getInt64Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getInt64());
    }

    return a;
  },

  // Note: see getInt64() comment
  getUint64: function() {
    var low, high;

    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }

    return high * 0x100000000 + low;
  },

  getUint64Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getUint64());
    }

    return a;
  },

  getFloat32: function() {
    var value = this.dv.getFloat32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  },

  getFloat32Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getFloat32());
    }

    return a;
  },

  getFloat64: function() {
    var value = this.dv.getFloat64(this.offset, this.littleEndian);
    this.offset += 8;
    return value;
  },

  getFloat64Array: function(size) {
    var a = [];

    for (var i = 0; i < size; i++) {
      a.push(this.getFloat64());
    }

    return a;
  },

  getArrayBuffer: function(size) {
    var value = this.dv.buffer.slice(this.offset, this.offset + size);
    this.offset += size;
    return value;
  },

  getChar: function() {
    return String.fromCharCode(this.getUint8());
  },

  getString: function(size) {
    var s = '';

    while (size > 0) {
      var value = this.getUint8();
      size--;

      if (value === 0) break;

      s += String.fromCharCode(value);
    }

    this.skip(size);

    return s;
  },
});

function FBXTree() {}

Object.assign(FBXTree.prototype, {
  add: function(key, val) {
    this[key] = val;
  },

  searchConnectionParent: function(id) {
    if (this.__cache_search_connection_parent === undefined) {
      this.__cache_search_connection_parent = [];
    }

    if (this.__cache_search_connection_parent[id] !== undefined) {
      return this.__cache_search_connection_parent[id];
    }

    this.__cache_search_connection_parent[id] = [];

    var conns = this.Connections.properties.connections;

    var results = [];
    for (var i = 0; i < conns.length; ++i) {
      if (conns[i][0] == id) {
        // 0 means scene root
        var res = conns[i][1] === 0 ? -1 : conns[i][1];
        results.push(res);
      }
    }

    if (results.length > 0) {
      append(this.__cache_search_connection_parent[id], results);
      return results;
    }

    this.__cache_search_connection_parent[id] = [-1];
    return [-1];
  },

  searchConnectionChildren: function(id) {
    if (this.__cache_search_connection_children === undefined) {
      this.__cache_search_connection_children = [];
    }

    if (this.__cache_search_connection_children[id] !== undefined) {
      return this.__cache_search_connection_children[id];
    }

    this.__cache_search_connection_children[id] = [];

    var conns = this.Connections.properties.connections;

    var res = [];
    for (var i = 0; i < conns.length; ++i) {
      if (conns[i][1] == id) {
        // 0 means scene root
        res.push(conns[i][0] === 0 ? -1 : conns[i][0]);
        // there may more than one kid, then search to the end
      }
    }

    if (res.length > 0) {
      append(this.__cache_search_connection_children[id], res);
      return res;
    }

    this.__cache_search_connection_children[id] = [];
    return [];
  },

  searchConnectionType: function(id, to) {
    var key = id + ',' + to; // TODO: to hash
    if (this.__cache_search_connection_type === undefined) {
      this.__cache_search_connection_type = {};
    }

    if (this.__cache_search_connection_type[key] !== undefined) {
      return this.__cache_search_connection_type[key];
    }

    this.__cache_search_connection_type[key] = '';

    var conns = this.Connections.properties.connections;

    for (var i = 0; i < conns.length; ++i) {
      if (conns[i][0] == id && conns[i][1] == to) {
        // 0 means scene root
        this.__cache_search_connection_type[key] = conns[i][2];
        return conns[i][2];
      }
    }

    this.__cache_search_connection_type[id] = null;
    return null;
  },
});

/**
 * @param {ArrayBuffer} buffer
 * @returns {boolean}
 */
function isFbxFormatBinary(buffer) {
  var CORRECT = 'Kaydara FBX Binary  \0';

  return (
    buffer.byteLength >= CORRECT.length &&
    CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length)
  );
}

/**
 * @returns {boolean}
 */
function isFbxFormatASCII(text) {
  var CORRECT = [
    'K',
    'a',
    'y',
    'd',
    'a',
    'r',
    'a',
    '\\',
    'F',
    'B',
    'X',
    '\\',
    'B',
    'i',
    'n',
    'a',
    'r',
    'y',
    '\\',
    '\\',
  ];

  var cursor = 0;

  function read(offset) {
    var result = text[offset - 1];
    text = text.slice(cursor + offset);
    cursor++;
    return result;
  }

  for (var i = 0; i < CORRECT.length; ++i) {
    var num = read(1);
    if (num == CORRECT[i]) {
      return false;
    }
  }

  return true;
}

/**
 * @returns {number}
 */
function getFbxVersion(text) {
  var versionRegExp = /FBXVersion: (\d+)/;
  var match = text.match(versionRegExp);
  if (match) {
    var version = parseInt(match[1]);
    return version;
  }
  throw new Error('FBXLoader: Cannot find the version number for the file given.');
}

/**
 * Converts FBX ticks into real time seconds.
 * @param {number} time - FBX tick timestamp to convert.
 * @returns {number} - FBX tick in real world time.
 */
function convertFBXTimeToSeconds(time) {
  // Constant is FBX ticks per second.
  return time / 46186158000;
}

/**
 * Parses comma separated list of float numbers and returns them in an array.
 * @example
 * // Returns [ 5.6, 9.4, 2.5, 1.4 ]
 * parseFloatArray( "5.6,9.4,2.5,1.4" )
 * @returns {number[]}
 */
function parseFloatArray(string) {
  var array = string.split(',');

  for (var i = 0, l = array.length; i < l; i++) {
    array[i] = parseFloat(array[i]);
  }

  return array;
}

/**
 * Parses comma separated list of int numbers and returns them in an array.
 * @example
 * // Returns [ 5, 8, 2, 3 ]
 * parseFloatArray( "5,8,2,3" )
 * @returns {number[]}
 */
function parseIntArray(string) {
  var array = string.split(',');

  for (var i = 0, l = array.length; i < l; i++) {
    array[i] = parseInt(array[i]);
  }

  return array;
}

/**
 * Parses Vector3 property from FBXTree.  Property is given as .value.x, .value.y, etc.
 * @param {FBXVector3} property - Property to parse as Vector3.
 * @returns {Vector3}
 */
function parseVector3(property) {
  return new Vector3().fromArray(property.value);
}

/**
 * Parses Color property from FBXTree.  Property is given as .value.x, .value.y, etc.
 * @param {FBXVector3} property - Property to parse as Color.
 * @returns {Color}
 */
function parseColor(property) {
  return new Color().fromArray(property.value);
}

function parseMatrixArray(floatString) {
  return new Matrix4().fromArray(parseFloatArray(floatString));
}

/**
 * Converts ArrayBuffer to String.
 * @param {ArrayBuffer} buffer
 * @param {number} from
 * @param {number} to
 * @returns {String}
 */
function convertArrayBufferToString(buffer, from, to) {
  if (from === undefined) from = 0;
  if (to === undefined) to = buffer.byteLength;

  var array = new Uint8Array(buffer, from, to);

  if (window.TextDecoder !== undefined) {
    return new TextDecoder().decode(array);
  }

  var s = '';

  for (var i = 0, il = array.length; i < il; i++) {
    s += String.fromCharCode(array[i]);
  }

  return s;
}

/**
 * Converts number from degrees into radians.
 * @param {number} value
 * @returns {number}
 */
function degreeToRadian(value) {
  return value * DEG2RAD;
}

var DEG2RAD = Math.PI / 180;

//

function findIndex(array, func) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (func(array[i])) return i;
  }

  return -1;
}

function append(a, b) {
  for (var i = 0, j = a.length, l = b.length; i < l; i++, j++) {
    a[j] = b[i];
  }
}

function slice(a, b, from, to) {
  for (var i = from, j = 0; i < to; i++, j++) {
    a[j] = b[i];
  }

  return a;
}
