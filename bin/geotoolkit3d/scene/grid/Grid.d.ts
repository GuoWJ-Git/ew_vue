import {Object3D} from '../Object3D';
import {Vector3, Color, Box3, Scene, Camera, WebGLRenderer} from '../../THREE';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';
import {TextStyle} from '../../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../../geotoolkit/util/RgbaColor';
import {GridLegend} from './legend/GridLegend';
import {Plot} from '../../Plot';

/**
 * A 3D grid object.<br>
 * <br>
 * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
 * The grid is composed of 6 planes that can be made visible independently, see {@link @int/geotoolkit3d/scene/grid/Grid.Mode}.<br>
 * <br>
 * The grid location and size can be configured independently of its labels.<br>
 * The actual values displayed and the location/size of the grid is left to the calling code.<br>
 * <br>
 * To do so, the grid actual location and size can be configured through 'start/end'.<br>
 * And its labels can be configured through 'modelstart/model/end'.<br>
 * <br>
 * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
 */
export class Grid extends Object3D {
    /**
     * A 3D grid object.<br>
     * <br>
     * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
     * The grid is composed of 6 planes that can be made visible independently, see {@link @int/geotoolkit3d/scene/grid/Grid.Mode}.<br>
     * <br>
     * The grid location and size can be configured independently of its labels.<br>
     * The actual values displayed and the location/size of the grid is left to the calling code.<br>
     * <br>
     * To do so, the grid actual location and size can be configured through 'start/end'.<br>
     * And its labels can be configured through 'modelstart/model/end'.<br>
     * <br>
     * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
     * @param options The options
     * @param options.start The start location of the grid in world coordinates
     * @param options.end The end location of the grid in world coordinates
     * @param options.modelstart The displayed value's start
     * @param options.modelend The displayed value's end
     * @param options.counts The grid tick counts (at least 2,2,2)
     * @param options.axis The axis options
     * @param options.axis.distance The distance factor between label and axis
     * @param options.axis.linestyles Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.axis.linestyles.x The X axis line style
     * @param options.axis.linestyles.y The Y axis line style
     * @param options.axis.linestyles.z The Z axis line style
     * @param options.axis.textstyles Defines the axis labels style
     * @param options.axis.textstyles.x The X axis label style
     * @param options.axis.textstyles.y The Y axis label style
     * @param options.axis.textstyles.z The Z axis label style
     * @param options.axis.formatters The functions responsible of formatting the axis values to text
     * @param options.axis.formatters.x The X axis label formatter
     * @param options.axis.formatters.y The Y axis label formatter
     * @param options.axis.formatters.z The Z axis label formatter
     * @param options.axis.outlines axis outlines
     * @param options.axis.outlines.x if provided, X text will have outline
     * @param options.axis.outlines.x.enable set to false to remove X outline
     * @param options.axis.outlines.x.innercolor inner color for X text with outline
     * @param options.axis.outlines.x.outlinecolor outline color for X text with outline
     * @param options.axis.outlines.x.thickness X outline thickness
     * @param options.axis.outlines.y if provided, Y text will have outline
     * @param options.axis.outlines.y.enable set to false to remove Y outline
     * @param options.axis.outlines.y.innercolor inner color for Y text with outline
     * @param options.axis.outlines.y.outlinecolor outline color for Y text with outline
     * @param options.axis.outlines.y.thickness Y outline thickness
     * @param options.axis.outlines.z if provided, Z text will have outline
     * @param options.axis.outlines.z.enable set to false to remove Z outline
     * @param options.axis.outlines.z.innercolor inner color for Z text with outline
     * @param options.axis.outlines.z.outlinecolor outline color for Z text with outline
     * @param options.axis.outlines.z.thickness Z outline thickness
     * @param options.title The axis titles
     * @param options.title.distance Factor used to determine title position compared to the axis. (0 being closer to the axis)
     * @param options.title.texts The axis title texts
     * @param options.title.texts.x The X axis title
     * @param options.title.texts.y The Y axis title
     * @param options.title.texts.z The Z axis title
     * @param options.title.textstyles The axis title styles
     * @param options.title.textstyles.x The X axis title text style
     * @param options.title.textstyles.y The Y axis title text style
     * @param options.title.textstyles.z The Z axis title text style
     * @param options.title.outlines title outlines
     * @param options.title.outlines.x if provided, X title text will have outline
     * @param options.title.outlines.x.enable set to false to remove X title outline
     * @param options.title.outlines.x.innercolor inner color for X title text with outline
     * @param options.title.outlines.x.outlinecolor outline color for X title text with outline
     * @param options.title.outlines.x.thickness X title outline thickness
     * @param options.title.outlines.y if provided, Y title text will have outline
     * @param options.title.outlines.y.enable set to false to remove Y title outline
     * @param options.title.outlines.y.innercolor inner color for Y title text with outline
     * @param options.title.outlines.y.outlinecolor outline color for Y title text with outline
     * @param options.title.outlines.y.thickness Y title outline thickness
     * @param options.title.outlines.z if provided, Z title text will have outline
     * @param options.title.outlines.z.enable set to false to remove Z title outline
     * @param options.title.outlines.z.innercolor inner color for Z title text with outline
     * @param options.title.outlines.z.outlinecolor outline color for Z title text with outline
     * @param options.title.outlines.z.thickness Z title outline thickness
     * @param options.grid The axis grids
     * @param options.grid.linestyles The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.grid.linestyles.x The X grid line style
     * @param options.grid.linestyles.y The Y grid line style
     * @param options.grid.linestyles.z The Z grid line style
     * @param options.mode The display strategy to show/hide grid planes depending on camera position
     * @param options.planecolor plane color
     * @param options.planeopacity plane opacity
     */
    constructor(options: object | { start?: Vector3; end?: Vector3; modelstart?: Vector3; modelend?: Vector3; counts?: Vector3; axis?: object | { distance?: number; linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; textstyles?: object | { x?: TextStyle; y?: TextStyle; z?: TextStyle; } ; formatters?: object | { x?: Function; y?: Function; z?: Function; } ; outlines?: object | { x?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; y?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; z?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; } ; title?: object | { distance?: number; texts?: object | { x?: string; y?: string; z?: string; } ; textstyles?: object | { x?: TextStyle; y?: TextStyle; z?: TextStyle; } ; outlines?: object | { x?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; y?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; z?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; } ; grid?: object | { linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; } ; mode?: Mode; planecolor?: string | Color; planeopacity?: number; } );
    /**
     * Return world bounding box of the grid
     */
    getWorldBoundingBox(): Box3;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.start The start location of the grid in world coordinates
     * @param options.end The end location of the grid in world coordinates
     * @param options.modelstart The displayed value's start
     * @param options.modelend The displayed value's end
     * @param options.counts The grid tick counts (at least 2,2,2)
     * @param options.axis The axis options
     * @param options.axis.linestyles Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.axis.linestyles.x The X axis line style
     * @param options.axis.linestyles.y The Y axis line style
     * @param options.axis.linestyles.z The Z axis line style
     * @param options.axis.textstyles Defines the axis labels style
     * @param options.axis.textstyles.x The X axis label style
     * @param options.axis.textstyles.y The Y axis label style
     * @param options.axis.textstyles.z The Z axis label style
     * @param options.axis.formatters The functions responsible of formatting the axis values to text
     * @param options.axis.formatters.x The X axis label formatter
     * @param options.axis.formatters.y The Y axis label formatter
     * @param options.axis.formatters.z The Z axis label formatter
     * @param options.axis.outlines axis outlines
     * @param options.axis.outlines.x if provided, X text will have outline
     * @param options.axis.outlines.x.enable set to false to remove X outline
     * @param options.axis.outlines.x.innercolor inner color for X text with outline
     * @param options.axis.outlines.x.outlinecolor outline color for X text with outline
     * @param options.axis.outlines.x.thickness X outline thickness
     * @param options.axis.outlines.y if provided, Y text will have outline
     * @param options.axis.outlines.y.enable set to false to remove Y outline
     * @param options.axis.outlines.y.innercolor inner color for Y text with outline
     * @param options.axis.outlines.y.outlinecolor outline color for Y text with outline
     * @param options.axis.outlines.y.thickness Y outline thickness
     * @param options.axis.outlines.z if provided, Z text will have outline
     * @param options.axis.outlines.z.enable set to false to remove Z outline
     * @param options.axis.outlines.z.innercolor inner color for Z text with outline
     * @param options.axis.outlines.z.outlinecolor outline color for Z text with outline
     * @param options.axis.outlines.z.thickness Z outline thickness
     * @param options.title The axis titles
     * @param options.title.texts The axis title texts
     * @param options.title.texts.x The X axis title
     * @param options.title.texts.y The Y axis title
     * @param options.title.texts.z The Z axis title
     * @param options.title.distance Factor (between 0 and 1) used to determine title position compared to the axis. (0 being closer to the axis)
     * @param options.title.textstyles The axis title styles
     * @param options.title.textstyles.x The X axis title text style
     * @param options.title.textstyles.y The Y axis title text style
     * @param options.title.textstyles.z The Z axis title text style
     * @param options.title.outlines title outlines
     * @param options.title.outlines.x if provided, X title text will have outline
     * @param options.title.outlines.x.enable set to false to remove X title outline
     * @param options.title.outlines.x.innercolor inner color for X title text with outline
     * @param options.title.outlines.x.outlinecolor outline color for X title text with outline
     * @param options.title.outlines.x.thickness X title outline thickness
     * @param options.title.outlines.y if provided, Y title text will have outline
     * @param options.title.outlines.y.enable set to false to remove Y title outline
     * @param options.title.outlines.y.innercolor inner color for Y title text with outline
     * @param options.title.outlines.y.outlinecolor outline color for Y title text with outline
     * @param options.title.outlines.y.thickness Y title outline thickness
     * @param options.title.outlines.z if provided, Z title text will have outline
     * @param options.title.outlines.z.enable set to false to remove Z title outline
     * @param options.title.outlines.z.innercolor inner color for Z title text with outline
     * @param options.title.outlines.z.outlinecolor outline color for Z title text with outline
     * @param options.title.outlines.z.thickness Z title outline thickness
     * @param options.grid The axis grids
     * @param options.grid.linestyles The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param options.grid.linestyles.x The X grid line style
     * @param options.grid.linestyles.y The Y grid line style
     * @param options.grid.linestyles.z The Z grid line style
     * @param options.mode The display strategy to show/hide grid planes depending on camera position
     * @param options.planecolor plane color
     * @param options.planeopacity plane opacity
     */
    setOptions(options?: object | { start?: Vector3; end?: Vector3; modelstart?: Vector3; modelend?: Vector3; counts?: Vector3; axis?: object | { linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; textstyles?: object | { x?: TextStyle; y?: TextStyle; z?: TextStyle; } ; formatters?: object | { x?: Function; y?: Function; z?: Function; } ; outlines?: object | { x?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; y?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; z?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; } ; title?: object | { texts?: object | { x?: string; y?: string; z?: string; } ; distance?: number; textstyles?: object | { x?: TextStyle; y?: TextStyle; z?: TextStyle; } ; outlines?: object | { x?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; y?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; z?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; } ; grid?: object | { linestyles?: object | { x?: LineStyle; y?: LineStyle; z?: LineStyle; } ; } ; mode?: Mode; planecolor?: string | Color; planeopacity?: number; } ): this;
    /**
     * Get grid options
     * (see {@link @int/geotoolkit3d/scene/grid/Grid.Grid#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Get axis outlines
     */
    getOutlines(): {x: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}; y: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}; z: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}} | object;
    /**
     * Get title outlines
     */
    getTitleOutlines(): {x: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}; y: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}; z: {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number}} | object;
    /**
     * Return the grid's location 'start'
     */
    getStart(): Vector3;
    /**
     * Return the grid's location 'end'
     */
    getEnd(): Vector3;
    /**
     * Return the grid's mode
     */
    getMode(): Mode;
    /**
     * Return the grid's tick counts
     */
    getCounts(): Vector3 | any;
    /**
     * Return the grid's 'modelstart'
     */
    getModelStart(): Vector3 | any;
    /**
     * Return the grid's 'modelend'
     */
    getModelEnd(): Vector3 | any;
    /**
     * @param legend the legend to add to this grid planes.
     */
    addLegend(legend: GridLegend): void;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    beforeRender(scene: Scene, camera: Camera, plot: Plot, renderer: WebGLRenderer): this;
}
/**
 * Enum of Plane display strategy.<br>
 * <br>
 * The functions provided by this enum are used to define which plane of the grid should be visible.<br>
 * The grid always has 6 planes (one for each face), those strategies determine if some plane should be hidden to let the user see
 * through it.<br>
 */
export class Mode extends Function {
    /**
     * Always show all grid planes
     */
    static readonly box: Mode;
    /**
     * Show grid planes that do not overlap any other grid planes.
     */
    static readonly openbox: Mode;
    /**
     * Show only the grid planes that are facing the camera (IE: only and at most 3 planes visible at all times)
     */
    static readonly back: Mode;
}
