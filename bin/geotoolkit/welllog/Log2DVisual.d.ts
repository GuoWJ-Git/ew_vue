import {LogAbstractVisual} from './LogAbstractVisual';
import {ArrayLogAbstractData} from './data/ArrayLogAbstractData';
import {AbstractDataTable} from '../data/AbstractDataTable';
import {ColorProvider} from '../util/ColorProvider';
import {AbstractUnit} from '../util/AbstractUnit';
import {Transformation} from '../util/Transformation';
import {Rect} from '../util/Rect';
import {Range} from '../util/Range';
import {Point} from '../util/Point';
import {StateChanges} from '../scene/Node';

/**
 * Defines a 2D log visual. Data is passed in an Log2DVisualData containing rows of Log2DDataRow.
 * This visual is added to a log track to be displayed. <br>
 * Log2DVisual visual can be used to display FMI logs (Acoustic/Optic borehole imaging) or  density logs.<br>
 * It requires to provide column base data for each depth. The provided data is organized as a table: a collection of rows and columns inside the row.<br>
 * You can specify your values as in vertical or horizontal or both directions.<br>
 * Please refer to tutorial Log2D Visual in Welllog.
 */
export class Log2DVisual extends LogAbstractVisual {
    /**
     * Defines a 2D log visual. Data is passed in an Log2DVisualData containing rows of Log2DDataRow.
     * This visual is added to a log track to be displayed. <br>
     * Log2DVisual visual can be used to display FMI logs (Acoustic/Optic borehole imaging) or  density logs.<br>
     * It requires to provide column base data for each depth. The provided data is organized as a table: a collection of rows and columns inside the row.<br>
     * You can specify your values as in vertical or horizontal or both directions.<br>
     * Please refer to tutorial Log2D Visual in Welllog.
     * @param options instance of log2data or JSON object containing log visual configuration
     * @param options.data instance of log2Ddata datasource or JSON defining data structure
     * @param options.data.datatable datatable of log data
     * @param options.data.angles properties of column angles
     * @param options.data.angles.values array of angles
     * @param options.autoupdate flag for automatic update from datasource
     * @param options.colorprovider color provider
     * @param options.plotmode plot mode
     * @param options.description the description
     * @param options.minangle min angle
     * @param options.maxangle max angle
     * @param options.autoanglelimits auto angle model limits
     * @param options.wrapinterpolation type of the wrap interpolation to specify how to process the edge values
     * @param options.rowsinterpolation specify a type of interpolation between rows
     * @param options.columnalignment specify a type of interpolation alignment of column
     * @param options.rowalignment specify a type of interpolation alignment of row
     * @param options.offsets offsets
     * @param options.gapfillcutoff an object containing cutoff options
     * @param options.gapfillcutoff.value The cutoff value. When non zero and a matching unit is set
     * @param options.gapfillcutoff.unit unit The unit or unit symbol to use for the gap fill cutoff
     * @param options.webglrendering true, if webGL is needed for rendering
     * @param autoUpdate automatic update from data source
     */
    constructor(options?: ArrayLogAbstractData | object | { data?: ArrayLogAbstractData | object | { datatable?: AbstractDataTable; angles?: object | { values?: number[]; } ; } ; autoupdate?: boolean; colorprovider?: object | ColorProvider; plotmode?: PlotTypes | string; description?: string; minangle?: number; maxangle?: number; autoanglelimits?: boolean; wrapinterpolation?: boolean; rowsinterpolation?: InterpolationType; columnalignment?: ColumnAlignment; rowalignment?: RowAlignment; offsets?: number[]; gapfillcutoff?: object | { value?: number; unit?: AbstractUnit | string; } ; webglrendering?: boolean; } , autoUpdate?: boolean);
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero and the unit is convertible to the index unit.
     * @param cutoff The cutoff value. When non zero and a matching unit is set
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in depth or time is more than specified value
     * @param value The maximum discontinuity allowed in depth or time
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in depth or time
     */
    getGapValue(): number;
    /**
     * Sets the unit of the cutoff used for removing NaN valued samples. Gaps will only be 'filled'
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit or unit symbol to use for the gap fill cutoff
     */
    setGapFillCutoffUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffUnit(): AbstractUnit;
    /**
     * Sets the unit of the gap to show discontinuity in sample
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit
     */
    setGapUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the gap
     */
    getGapUnit(): AbstractUnit;
    /**
     * Gets the description
     */
    getDescription(): string | null;
    /**
     * Sets the description
     * @param description The node description
     */
    setDescription(description: string | null): this;
    /**
     * Returns type of interpolation for rows values
     */
    getRowsInterpolation(): InterpolationType;
    /**
     * Set type of interpolation for rows values
     * @param interpolation specify a type of interpolation between rows
     */
    setRowsInterpolation(interpolation: InterpolationType): this;
    /**
     * Set wrap interpolation
     * @param wrapInterpolation type of the wrap interpolation to specify how to process the edge values
     */
    setWrapInterpolation(wrapInterpolation: boolean): this;
    /**
     * Return wrap interpolation
     */
    getWrapInterpolation(): boolean;
    /**
     * Set interpolation alignment
     * @param alignment alignment of column
     */
    setAlignment(alignment: ColumnAlignment): this;
    /**
     * Return interpolation alignment
     */
    getAlignment(): ColumnAlignment;
    /**
     * Set interpolation alignment
     * @param alignment alignment of row
     */
    setRowAlignment(alignment: RowAlignment): this;
    /**
     * Return interpolation alignment
     */
    getRowAlignment(): RowAlignment;
    /**
     * Sets data
     * @param data instance of log2data
     * @param data.data instance of log2Ddata datasource or JSON defining data structure
     * @param data.data.datatable datatable of log data
     * @param data.data.angles properties of column angles
     * @param data.data.angles.values array of angles
     * @param data.autoupdate flag for automatic update from datasource
     * @param autoUpdate automatic update from data source
     */
    setData(data: ArrayLogAbstractData | object | { data?: ArrayLogAbstractData | object | { datatable?: AbstractDataTable; angles?: object | { values?: number[]; } ; } ; autoupdate?: boolean; } , autoUpdate?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Retrieves the  world transformation of the node to transform model
     * coordinates to the parent track
     */
    getWorldTransform(): Transformation;
    /**
     * Returns bounds in the parent coordinates
     */
    getBounds(): Rect | any;
    /**
     * @param fullLimits flag to return a full depth limits or mining depth limits without null values
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Enable / disable usage limits from data. By default automatic limit is disabled
     * @param enable enable or disable usage data limits
     */
    setAutoAnglesLimits(enable: boolean): this;
    /**
     * Returns the status of the auto angle limits
     */
    getAutoAnglesLimits(): boolean;
    /**
     * Sets angles limits of the data. By default it is from 0 to 2*PI
     * @param left left angle in radians
     * @param right right angle in radians
     */
    setAnglesLimits(left: number, right: number): this;
    /**
     * Returns angle limits
     */
    getAnglesLimits(): Range;
    /**
     * Returns data
     */
    getData(): ArrayLogAbstractData;
    /**
     * Sets color provider
     * @param colorProvider the color provider
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Gets color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Sets Plot type to specify linear o step interpolation of values in columns
     * <p>
     * In linear interpolation mode it interpolates value from the previous column to the end of the current column
     * and the first column is ignored, which can be represented as end of the sector if consider each column as a sector.
     * if it is necessary to start from beginning of the sector or in the middle then you can specify offset equal to
     * the first column angle or
     * the half the first column angle.
     * </p>
     * @param mode plot types (step plot mode or linear plot mode) to be used for interpolation
     */
    setPlotType(mode: PlotTypes | string): this;
    /**
     * Gets plot type
     */
    getPlotType(): PlotTypes | string;
    /**
     * Sets the offset of data
     * @example
     * ```javascript
     * // following example shows how to use setOffsets() method to rotate Log2DVisual
     * var degreesToRadians = function(degrees){
     * return degrees * Math.PI / 180;
     * };
     * function createOffsets (data, offset) {
     * var offsets = [];
     * for (var i = 0; i < data.getRows().length; i++)
     *   offsets.push(offset);
     * return offsets;
     *   }
     * log2dVisual.setOffsets(createOffsets(log2d.getData(), degreesToRadians(val)));
     * ```
     * @param offsets array of the same size as data set
     */
    setOffsets(offsets: number[] | number | any): this;
    /**
     * Sets webGL rendering
     * @experimental
     * @param webglEnabled true, if webGL is needed for rendering
     */
    setWebGLRendering(webglEnabled: boolean): this;
    /**
     * Gets webGL rendering
     * @experimental
     */
    getWebGLRendering(): boolean;
    /**
     * Returns the offset of data
     */
    getOffsets(): number[] | number;
    /**
     * Returns minimum depth of the data set
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth of the data set
     */
    getMaxDepth(): number;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): object | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {autoupdate: boolean; colorprovider: ColorProvider; plotmode: PlotTypes | string; description: string; minangle: number; maxangle: number; autoanglelimits: boolean; wrapinterpolation: boolean; rowsinterpolation: InterpolationType; columnalignment: ColumnAlignment; rowalignment: RowAlignment; offsets: number[]; gapfillcutoff: {value: number; unit: AbstractUnit}; webglrendering: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data instance of log2Ddata datasource or JSON defining data structure
     * @param properties.data.datatable datatable of log data
     * @param properties.data.angles properties of column angles
     * @param properties.data.angles.values array of angles
     * @param properties.autoupdate flag for automatic update from datasource
     * @param properties.colorprovider color provider
     * @param properties.plotmode plot mode
     * @param properties.description the description
     * @param properties.minangle min angle
     * @param properties.maxangle max angle
     * @param properties.autoanglelimits auto angle model limits
     * @param properties.wrapinterpolation type of the wrap interpolation to specify how to process the edge values
     * @param properties.rowsinterpolation specify a type of interpolation between rows
     * @param properties.columnalignment specify a type of interpolation alignment of column
     * @param properties.rowalignment specify a type of interpolation alignment of row
     * @param properties.offsets offsets
     * @param properties.gapfillcutoff an object containing cutoff options
     * @param properties.gapfillcutoff.value The cutoff value. When non zero and a matching unit is set
     * @param properties.gapfillcutoff.unit unit The unit or unit symbol to use for the gap fill cutoff
     * @param properties.webglrendering true, if webGL is needed for rendering
     */
    setProperties(properties: object | { data?: ArrayLogAbstractData | object | { datatable?: AbstractDataTable; angles?: object | { values?: number[]; } ; } ; autoupdate?: boolean; colorprovider?: object | ColorProvider; plotmode?: PlotTypes | string; description?: string; minangle?: number; maxangle?: number; autoanglelimits?: boolean; wrapinterpolation?: boolean; rowsinterpolation?: InterpolationType; columnalignment?: ColumnAlignment; rowalignment?: RowAlignment; offsets?: number[]; gapfillcutoff?: object | { value?: number; unit?: AbstractUnit | string; } ; webglrendering?: boolean; } ): this;
    /**
     * Update state.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges | null): this;
}
/**
 * Enum of column alignment types
 */
export enum ColumnAlignment {
    /**
     * Alignment to the left
     */
    Left = 'LEFT',
    /**
     * Alignment to the center
     */
    Center = 'CENTER',
    /**
     * Alignment to the fixed column center
     */
    Table = 'TABLE',
    /**
     * Alignment to the right (default)
     */
    Right = 'RIGHT'
}
/**
 * Enum of column alignment types
 */
export enum RowAlignment {
    /**
     * Alignment to the top
     */
    Top = 'TOP',
    /**
     * Alignment to the center
     */
    Center = 'CENTER'
}
/**
 * Enum of interpolation types
 */
export enum InterpolationType {
    /**
     * Step plot mode (no interpolation)
     */
    Step = 'STEP',
    /**
     * Linear plot mode
     */
    Linear = 'LINEAR'
}
/**
 * Enum of plotMode modes
 */
export enum PlotTypes {
    /**
     * Step plot mode (no interpolation)
     */
    Step = 'STEP',
    /**
     * Linear plot mode
     */
    Linear = 'LINEAR'
}
