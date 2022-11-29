import {ScaledShape} from '../../scene/shapes/ScaledShape';
import {TextStyle} from '../../attributes/TextStyle';
import {Orientation} from '../../util/Orientation';
import {LineStyle, Patterns} from '../../attributes/LineStyle';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';
import {DataSource} from '../../data/DataSource';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Box plot is a convenient way of graphically depicting groups of numerical data
 * through their five-number summaries (the smallest observation, lower quartile (Q1), median (Q2), upper quartile (Q3), and largest observation).
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
 * Display Modes and Styles can be selected based on the Enum. <br>
 */
export class BoxPlot extends ScaledShape {
    /**
     * Box plot is a convenient way of graphically depicting groups of numerical data
     * through their five-number summaries (the smallest observation, lower quartile (Q1), median (Q2), upper quartile (Q3), and largest observation).
     * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
     * Display Modes and Styles can be selected based on the Enum. <br>
     * @param options options object
     * @param options.valuelimits value limits parameters
     * @param options.valuelimits.minvalue min value to set
     * @param options.valuelimits.maxvalue max value to set
     * @param options.valuelimits.nearlimits neat limits flag
     * @param options.boxvalues box values parameters
     * @param options.boxvalues.visible box values visibility flag
     * @param options.boxvalues.suppress enable label suppress when intersection
     * @param options.boxvalues.location box values' label location
     * @param options.boxvalues.verticaloffset box values' vertical offset from original position
     * @param options.boxvalues.horizontaloffset box values' horizontal offset from original position
     * @param options.boxvalues.decimalprecision box values decimal precision
     * @param options.boxvalues.textstyle box value text style
     * @param options.orientation orientation of the plot
     * @param options.boxwidth width of the boxs
     * @param options.boxpad padding between the box group (datasets)
     * @param options.whiskerswidth width of whiskers (the line representing max and min value)
     * @param options.boxwidthunit set unit for the width of box when using absolute width value
     * @param options.fixedboxwidth set absolute value for the width of box
     * @param options.linestyle linstyle of box plot
     * @param options.connectedlinepattern pattern of connected line
     * @param options.isoutliersvisible enable display of outliers
     * @param options.ismissingvalue missing value verification criteria; default is function(value){ return (value===null); }
     * @param data (see "setData" method description for details)
     */
    constructor(options?: object | { valuelimits?: object | { minvalue?: number; maxvalue?: number; nearlimits?: boolean; } ; boxvalues?: object | { visible?: boolean; suppress?: boolean; location?: BoxValueLocation; verticaloffset?: number; horizontaloffset?: number; decimalprecision?: number; textstyle?: TextStyle | string | any; } ; orientation?: Orientation; boxwidth?: number; boxpad?: number; whiskerswidth?: number; boxwidthunit?: string; fixedboxwidth?: number; linestyle?: LineStyle | string | any; connectedlinepattern?: Patterns; isoutliersvisible?: boolean; ismissingvalue?: Function; } , data?: any);
    /**
     * get the bounds of model
     */
    getBounds(): Rect;
    /**
     * Sets data to display
     * @param data data object
     * @param data.mode Data mode for the BoxPlot
     * @param data.datasets Array of dataset, each item is an object containing property values and fillstyle
     */
    setData(data?: object | { mode?: DataMode; datasets?: DataSet[]; } ): this;
    /**
     * Sets display options
     * @param options options object see {@link @int/geotoolkit/controls/shapes/BoxPlot.BoxPlot#setProperties}
     */
    setOptions(options?: any): this;
    /**
     * get orientation of boxes
     */
    isHorizontal(): boolean;
    /**
     * set model limits
     * @param limits current model limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * get model limits
     */
    getModelLimits(): Rect;
    /**
     * return processed data sets
     */
    getProcessedDatasets(): object[];
    /**
     * calculate model unit width of each component based on the absolute value of box width
     * @param context rendering context
     */
    calculateAbsWidth(context: RenderingContext): void;
    /**
     */
    dispose(): void;
    /**
     * Sets properties
     * @param properties properties object
     * @param properties.valuelimits value limits parameters
     * @param properties.valuelimits.minvalue min value to set
     * @param properties.valuelimits.maxvalue max value to set
     * @param properties.valuelimits.nearlimits neat limits flag
     * @param properties.boxvalues box values parameters
     * @param properties.boxvalues.visible box values visibility flag
     * @param properties.boxvalues.suppress enable label suppress when intersection
     * @param properties.boxvalues.location box values' label location
     * @param properties.boxvalues.verticaloffset box values' vertical offset from original position
     * @param properties.boxvalues.horizontaloffset box values' horizontal offset from original position
     * @param properties.boxvalues.decimalprecision box values decimal precision
     * @param properties.boxvalues.textstyle box value text style
     * @param properties.orientation orientation of the plot
     * @param properties.boxwidth width of the boxs
     * @param properties.boxpad padding between the box group (datasets)
     * @param properties.whiskerswidth width of whiskers (the line representing max and min value)
     * @param properties.boxwidthunit set unit for the width of box when using absolute width value
     * @param properties.fixedboxwidth set absolute value for the width of box
     * @param properties.linestyle linstyle of box plot
     * @param properties.connectedlinepattern pattern of connected line
     * @param properties.isoutliersvisible enable display of outliers
     * @param properties.ismissingvalue missing value verification criteria
     */
    setProperties(properties?: object | { valuelimits?: object | { minvalue?: number; maxvalue?: number; nearlimits?: boolean; } ; boxvalues?: object | { visible?: boolean; suppress?: boolean; location?: BoxValueLocation; verticaloffset?: number; horizontaloffset?: number; decimalprecision?: number; textstyle?: TextStyle | string | any; } ; orientation?: Orientation; boxwidth?: number; boxpad?: number; whiskerswidth?: number; boxwidthunit?: string; fixedboxwidth?: number; linestyle?: LineStyle | string | any; connectedlinepattern?: Patterns; isoutliersvisible?: boolean; ismissingvalue?: Function; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {valuelimits: {minvalue: number; maxvalue: number; nearlimits: boolean}; boxvalues: {visible: boolean; suppress: boolean; location: BoxValueLocation; verticaloffset: number; horizontaloffset: number; decimalprecision: number; textstyle: TextStyle | string | any}; orientation: Orientation; boxwidth: number; boxpad: number; whiskerswidth: number; boxwidthunit: string; fixedboxwidth: number; linestyle: LineStyle; connectedlinepattern: Patterns; isoutliersvisible: boolean} | any;
}
/**
 * Enum for BoxPlot.DataMode
 */
export enum DataMode {
    /**
     * Raw
     */
    Raw = 'Raw',
    /**
     * Associative
     */
    Associative = 'Associative'
}
/**
 * Enum for Boxplot.BoxValueLocation
 */
export enum BoxValueLocation {
    /**
     * on top of line
     */
    Top = 'Top',
    /**
     * below the line
     */
    Below = 'Below',
    /**
     * on left of the line
     */
    Left = 'Left',
    /**
     * on right of the line
     */
    Right = 'Right'
}
/**
 * The dataset definition.
 */
export type DataSet = { values: any[] | DataSource; fillstyle: {  primaryfillstyle: FillStyle | string | object;  secondaryfillstyle: FillStyle | string | object }}
