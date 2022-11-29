import {Object3D} from '../Object3D';
import {Texture} from '../../util/Texture';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color, InterleavedBufferAttribute, Points, Texture as Geotoolkit3dTexture} from '../../THREE';

/**
 * PointCloud is a set of 3D coordinates rendered as symbols.<br>
 * <br>
 * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
 * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
 * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
 * <br>
 * For large datasets, it's recommended to use PointCloud.<br>
 */
export class PointCloud extends Object3D {
    /**
     * PointCloud is a set of 3D coordinates rendered as symbols.<br>
     * <br>
     * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
     * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
     * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
     * <br>
     * For large datasets, it's recommended to use PointCloud.<br>
     * @param options The options
     * @param options.name The name of the PointCloud
     * @param options.data The data options
     * @param options.data.x The x values
     * @param options.data.y The y values
     * @param options.data.z The elevation values
     * @param options.data.xyz The x, y and z values already converted to a single xyz Float32Array.
     * @param options.data.visible The visibility of each point
     * @param options.data.sizes An attribute used to compute the size of the symbols on screen, can be an array or a single value
     * @param options.data.sizemin An optional minimum to use for 'sizes' normalization
     * @param options.data.sizemax An optional maximum to use for 'sizes' normalization
     * @param options.data.values A value attribute used for coloring the symbols
     * @param options.symbol The symbol from the enum or a THREE.Texture
     * @param options.symbolminsize The size of the symbol in pixels for the smallest value
     * @param options.symbolmaxsize The size of the symbol in pixels for the biggest value
     * @param options.alphatest The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
     * @param options.colorprovider A color provider or a single color in css format
     */
    constructor(options: object | { name: string; data: object | { x: number[]; y: number[]; z: number[]; xyz?: Float32Array; visible?: boolean[]; sizes?: number[] | number; sizemin?: number; sizemax?: number; values?: number[] | number; } ; symbol?: Symbol | Texture; symbolminsize?: number; symbolmaxsize?: number; alphatest?: number; colorprovider?: ColorProvider | string | Color; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.values A value attribute used for coloring the symbols
     * @param options.data.sizes An attribute used to compute the size of the symbols on screen, can be an array or a single value
     * @param options.data.sizemin An optional minimum to use for 'sizes' normalization (used only if new sizes are provided)
     * @param options.data.sizemax An optional maximum to use for 'sizes' normalization (used only if new sizes are provided)
     * @param options.data.visible An attribute used to turn on/off visibility of points
     * @param options.symbolminsize The symbols minimum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
     * @param options.symbolmaxsize The symbols maximum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.alphatest The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
     */
    setOptions(options?: object | { data?: object | { values?: number[] | number; sizes?: number[] | number; sizemin?: number; sizemax?: number; visible?: boolean[] | boolean; } ; symbolminsize?: number; symbolmaxsize?: number; colorprovider?: ColorProvider | string | Color; alphatest?: number; } ): this;
    /**
     * Get point cloud options
     * (see {@link @int/geotoolkit3d/scene/pointset/PointCloud.PointCloud#setOptions} for more info)
     */
    getOptions(): object | any;
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
     * Get the attributes of a point at the given index, return null if index is not valid.
     * @param index index of point
     */
    getPointOptions(index: number): {visible: boolean; size: number; value: number; position: number[]} | object;
    /**
     * Get a point's data by its index. <br>
     * Return the data as an THREE.InterleavedBuffer, return null if index or name are not valid.
     * @param name dataset name
     * @param index point index
     */
    getPointByIndex(name: string, index: number): {position: InterleavedBufferAttribute; cgpointVisible: InterleavedBufferAttribute; cgpointSize: InterleavedBufferAttribute; cgcolormapValue: InterleavedBufferAttribute} | object;
    /**
     * Return if this point index is valid (belong to a point in this point cloud).
     * @param index the point index.
     */
    isValidIndex(index: number): boolean;
    /**
     * Gets point cloud
     */
    getPointCloud(): Points;
}
/**
 * Enum of builtin symbols.<br>
 * <br>
 * The textures provided by this enum are responsible of loading/creating a bump mapping Texture that will be used to display a symbol in 3D.
 */
export class Symbol extends Geotoolkit3dTexture {
    /**
     * A sphere symbol
     */
    static readonly sphere: Symbol;
    /**
     * A square symbol
     */
    static readonly square: Symbol;
    /**
     * A cube symbol
     */
    static readonly cube: Symbol;
}
