import {AbstractWidget} from '../AbstractWidget';
import {DataTable} from '../../../geotoolkit/data/DataTable';
import {DataSeries} from '../../../geotoolkit/data/DataSeries';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color, Vector3, Mesh, Points, Box3, BufferGeometry} from '../../THREE';
import {Texture} from '../../util/Texture';
import {RgbaColor} from '../../../geotoolkit/util/RgbaColor';

/**
 * Scatter plot 3D is a three-dimensional data visualization that uses points to represent values.<br>
 * It's supposed to work as a widget, with features such as cursor picking, highlight, cursor tool and tooltip.<br>
 * Supported data formats are {@link @int/geotoolkit/data/DataTable.DataTable} and JS array.<br>
 * <br>
 * Users can add different 2D and 3D symbols to the grid using setData(). The new data does not override current data.
 * This enables the user to show different symbol at the same time.<br>
 * Note that for performance purpose, it's recommended to use 2d symbol for large dataset.<br>
 * The user needs to use dispose() method to dispose data.<br>
 * <br>
 * Dots projection on each grid plane is by default enabled, but can be disabled by user.<br>
 * Note that geotoolkit3d.grid.Grid is builtin for the reason of data projection.
 * If you need to configure grid, please use setOptions() and provide gridoption object.<br>
 */
export class ScatterPlot extends AbstractWidget {
    /**
     * Scatter plot 3D is a three-dimensional data visualization that uses points to represent values.<br>
     * It's supposed to work as a widget, with features such as cursor picking, highlight, cursor tool and tooltip.<br>
     * Supported data formats are {@link @int/geotoolkit/data/DataTable.DataTable} and JS array.<br>
     * <br>
     * Users can add different 2D and 3D symbols to the grid using setData(). The new data does not override current data.
     * This enables the user to show different symbol at the same time.<br>
     * Note that for performance purpose, it's recommended to use 2d symbol for large dataset.<br>
     * The user needs to use dispose() method to dispose data.<br>
     * <br>
     * Dots projection on each grid plane is by default enabled, but can be disabled by user.<br>
     * Note that geotoolkit3d.grid.Grid is builtin for the reason of data projection.
     * If you need to configure grid, please use setOptions() and provide gridoption object.<br>
     * @param options the option object
     * @param options.data the datatable or data object
     * @param options.data.x the data for x axis
     * @param options.data.y the data for y axis
     * @param options.data.z the data for z axis
     * @param options.data.value the data for point color value
     * @param options.data.name the name of this dataset.
     * @param options.data.size the data for point size
     * @param options.data.visible the data for point visibility
     * @param options.gridoption the option object for grid. See {@link @int/geotoolkit3d/scene/grid/Grid.Grid}
     * @param options.colorprovider the colorprovider
     * @param options.symbol the symbol to use
     * @param options.opacity the opacity
     * @param options.projection Dots projection on grid planes
     * @param options.projection.enable enable projection or not
     * @param options.projection.sizefactor to manually adjust projection size
     * @param options.projection.opacity the opacity for projection
     * @param options.projection.topbottom if provided, it will add top and bottom projections
     * @param options.projection.topbottom.color the color for top/bottom projection
     * @param options.projection.topbottom.opacity the opacity for top/bottom projection
     * @param options.projection.leftright if provided, it will add left and right projections
     * @param options.projection.leftright.color the color for left/right projection
     * @param options.projection.leftright.opacity the opacity for left/right projection
     * @param options.projection.frontback if provided, it will add front and back projections
     * @param options.projection.frontback.color the color for front/back projection
     * @param options.projection.frontback.opacity the opacity for front/back projection
     */
    constructor(options: object | { data: DataTable | object | { x?: DataSeries | number[]; y?: DataSeries | number[]; z?: DataSeries | number[]; value?: DataSeries | number[]; name?: string; size?: DataSeries | number[]; visible?: DataSeries | number[] | boolean[]; } ; gridoption: object; colorprovider?: ColorProvider | string | Color; symbol?: string | Texture | Symbol3D; opacity?: number; projection?: object | { enable?: boolean; sizefactor?: number; opacity?: number; topbottom?: object | { color?: string | Color; opacity?: string | Color; } ; leftright?: object | { color?: string | Color; opacity?: string | Color; } ; frontback?: object | { color?: string | Color; opacity?: string | Color; } ; } ; } );
    /**
     * Set data for scatterplot.<br>
     * Projection is based on data set here.
     * (see {@link @int/geotoolkit3d/widgets/scatter/ScatterPlot.ScatterPlot} for more info about input data)
     * @param name the name for this dataset
     * @param symbol the 2D/3D symbol to use
     * @param data the datatable or data object
     * @param data.x the data for x axis
     * @param data.y the data for y axis
     * @param data.z the data for z axis
     * @param data.value the data for point color value
     * @param data.size the data for point size
     * @param data.visible the data for point visibility
     * @param projection the options to configure projection
     */
    setData(name: string, symbol: string | Texture | Symbol3D, data: DataTable | object | { x?: DataSeries | number[]; y?: DataSeries | number[]; z?: DataSeries | number[]; value?: DataSeries | number[]; size?: DataSeries | number[]; visible?: DataSeries | number[] | boolean[]; } , projection?: object): void;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * setOptions does not update data, use setData() instead.<br>
     * (See {@link @int/geotoolkit3d/widgets/scatter/ScatterPlot.ScatterPlot} for more info)
     * @param options The options
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.gridoption the option object for grid. See {@link @int/geotoolkit3d/scene/grid/Grid.Grid}
     * @param options.projection change color or opacity of projections, or disable projections. Cannot be used to change data
     */
    setOptions(options?: object | { colorprovider?: ColorProvider | string | Color; gridoption?: object; projection?: boolean; } ): this;
    /**
     * Get options as json object.
     */
    getOptions(): object | any;
    /**
     * Get a point's data, by its index and dataset name.
     * @param index the point index in its data set.
     * @param name the data set name this point belongs to.
     * Defaults to "default", which is the default if the set was build without a name.
     */
    getPointData(index: number, name?: string): {datasetname: string; index: number; position: Vector3; visible: boolean; value: number; color: RgbaColor} | object;
    /**
     * Retrieve a point's data by using a picking result, if the picked object belong to this ScatterPlot.
     * @param pickingResult the picking result from a CursorTool pointer event, or a Tooltip callback.
     * @param pickingResult.object the picked object
     */
    getPointDataByPicking(pickingResult: object | { object: Mesh | Points | object; }  | object[]): {name: string; index: number; position: Vector3; visible: boolean; value: number; color: RgbaColor} | object;
    /**
     * Update all projections based on current grid model limit.<br>
     * Only needed when the user change the grid manually.
     */
    updateProjection(): void;
    /**
     * Toggle projection by given direction and flag
     * @param direction 'topbottom'/'leftright'/'frontback'
     * @param flag true or false
     */
    toggleProjection(direction: string, flag: boolean): void;
    /**
     * Get the grid limit
     */
    getGridLimit(): Box3;
    /**
     * Get the names of current data set
     */
    getDataSetName(): string[];
    /**
     * Dispose objects in scatterplot.<br>
     * If name is provided, it only disposes the corresponding object/projection
     * @param name to delete the object in this name
     */
    dispose(name?: string): void;
}
/**
 * Enum of symbols.<br>
 * The geometries provided by this enum are used to display a symbol in 3D.
 */
export class Symbol3D extends BufferGeometry {
    /**
     * A sphere symbol
     */
    static readonly sphere: Symbol3D;
    /**
     * A cube symbol
     */
    static readonly cube: Symbol3D;
    /**
     * A pyramid symbol
     */
    static readonly pyramid: Symbol3D;
}
