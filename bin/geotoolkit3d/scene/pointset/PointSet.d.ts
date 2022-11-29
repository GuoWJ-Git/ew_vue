import {Object3D} from '../Object3D';
import {Texture} from '../../util/Texture';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color, Box3} from '../../THREE';

/**
 * PointSet is a set of 3D coordinates rendered as 3D symbols.<br>
 * <br>
 * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
 * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
 * As a consequence, the rendered symbols are cleaner and sharper, and there is no longer depth fighting (symbols blinking by rendering on top of each other).<br>
 * <br>
 * It is quite fast for rendering points as Cubes and Pyramids, however using Sphere geometry for really large sets of points (100 000+ points)
 * you might have better performances using a PointCloud instead.<br>
 * <br>
 * To save valuable memory on large pointset at creation time, it is advised to use typed Float32Array for points xyz, sizes and values as constructor parameters, in stead of regular Array.
 * <br>
 */
export class PointSet extends Object3D {
    /**
     * PointSet is a set of 3D coordinates rendered as 3D symbols.<br>
     * <br>
     * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
     * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
     * As a consequence, the rendered symbols are cleaner and sharper, and there is no longer depth fighting (symbols blinking by rendering on top of each other).<br>
     * <br>
     * It is quite fast for rendering points as Cubes and Pyramids, however using Sphere geometry for really large sets of points (100 000+ points)
     * you might have better performances using a PointCloud instead.<br>
     * <br>
     * To save valuable memory on large pointset at creation time, it is advised to use typed Float32Array for points xyz, sizes and values as constructor parameters, in stead of regular Array.
     * <br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.x The x values
     * @param options.data.y The y values
     * @param options.data.z The elevation values
     * @param options.data.sizes Sizes of the symbols, can be an array or a single value
     * @param options.data.sizemin An optional minimum to use for 'sizes' normalization
     * @param options.data.sizemax An optional maximum to use for 'sizes' normalization
     * @param options.data.values A value attribute used for coloring the symbols
     * @param options.data.visible Set the visibility of the points (true by default)
     * @param options.symbol the symbol of this pointset. geotoolkit3d.util.Texture are also valid but @deprecated
     * @param options.symbolminsize The size of the symbol in pixels/model for the smallest value
     * @param options.symbolmaxsize The size of the symbol in pixels/model for the biggest value
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.symbolsizeisindevice True if the symbol size should only depend on their value, ignores the projection and any scale.
     * @param options.inverseplot True if the symbols should not scale based on the plot scale.
     * @param options.opacity The symbols opacity. For individual symbol transparency, use the colorProvider.
     * @param options.precision This factor is used to determine how many triangles will be used for the Sphere and IcoSphere symbol.
     */
    constructor(options: object | { data?: object | { x?: Float32Array | number[]; y?: Float32Array | number[]; z?: Float32Array | number[]; sizes?: Float32Array | number[] | number; sizemin?: number; sizemax?: number; values?: Float32Array | number[] | number; visible?: boolean[]; } ; symbol?: SymbolGeometry | Texture; symbolminsize?: number; symbolmaxsize?: number; colorprovider?: ColorProvider | string | Color; symbolsizeisindevice?: boolean; inverseplot?: boolean; opacity?: number; precision?: number; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     */
    setOptions(options: object): this;
    /**
     * Get the pointset general options (legacy)
     */
    getOptions(): {opacity: number; colorprovider: ColorProvider; symbolminsize: number; symbolmaxsize: number} | any;
    /**
     * @deprecated since 2022 (3.4) use setPointOptions() instead
     * Changes the visibility of a point
     * @param index The point index
     * @param visibility The new visibility state
     */
    setPointVisible(index: number, visibility: boolean): this;
    /**
     * Set per point options, note that it's more efficient to use setOptions() to modify large ensemble of points.
     * @param index The index of the point to edit
     * @param options The options
     * @param options.visible The visibility of the point
     * @param options.size The size of the point
     * @param options.value The value of the point (used for color)
     */
    setPointOptions(index: number, options: object | { visible?: boolean; size?: number; value?: number; } ): this;
    /**
     * Get the attributes of a point at the given index.
     * Returns null if the given point index is not valid.
     * @param index index of point
     */
    getPointOptions(index: number): {visible: boolean; size: number; position: number[]} | object;
    /**
     * Generate a highlight geometry for the given point index.
     * Highlight is a geometry that is rendered with a special effect in highlightPass
     * @param pointIndex the index of the point to highlight.
     */
    hightlightShape(pointIndex: number): void;
    /**
     * Returns the world space bounding box of this pointset. Because instanced rendering do not use a classic geometry, this custom method is necessary.
     * See geotoolkit3d.util.Helper.computeWorldBoundingBox() for more information on the usage of this method.
     */
    getWorldBoundingBox(): Box3;
    /**
     * Return if this point index is valid (belong to a point in this point set).
     * @param index the point index.
     */
    isValidIndex(index: number): boolean;
}
/**
 * Enum of symbols.<br>
 * <br>
 * The functions provided by this enum are responsible for loading/creating a Three.BufferGeometry that will be used to display a symbol in 3D.
 */
export class SymbolGeometry extends Function {
    /**
     * A sphere symbol using an UV sphere geometry.
     */
    static readonly Sphere: SymbolGeometry;
    /**
     * An icosahedron/sphere symbol using an icosahedron geometry.
Can be used as an icosahedron with precision = 0,
or as a high quality sphere at precision >= 12.
     */
    static readonly Icosahedron: SymbolGeometry;
    /**
     * A cube symbol
     */
    static readonly Cube: SymbolGeometry;
    /**
     * A pyramid symbol
     */
    static readonly Pyramid: SymbolGeometry;
}
/**
 */
export class Symbol extends Function {
    static readonly sphere: Symbol;
    static readonly cube: Symbol;
    static readonly pyramid: Symbol;
}
