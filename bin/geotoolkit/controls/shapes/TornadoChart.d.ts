import {Shape} from '../../scene/shapes/Shape';
import {Rect} from '../../util/Rect';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Tornado Chart
 */
export class TornadoChart extends Shape {
    /**
     * Tornado Chart
     * @param options 
     * @param options.left leftData
     * @param options.right rightData
     * @param options.label labels
     * @param options.data data see {@link @int/geotoolkit/controls/shapes/TornadoChart.TornadoChart#setData}
     * @param options.bounds bounds for the chart
     * @param options.leftfillstyle left fillstyle
     * @param options.rightfillstyle right fillstyle
     * @param options.linestyle center line style
     * @param options.rightlinestyle right line style
     * @param options.leftlinestyle left line style
     * @param options.lefttextstyle left text style
     * @param options.righttextstyle right text style
     * @param options.labelposition label position
     * @param options.spacing spacing
     * @param options.autogradient autogradient
     * @param options.drawlabels draw labels flag
     * @param options.sort sort mode
     */
    constructor(options: object | { left?: number[]; right?: number[]; label?: string[]; data?: any[]; bounds?: Rect; leftfillstyle?: FillStyle | string | any; rightfillstyle?: FillStyle | string | any; linestyle?: LineStyle | string | any; rightlinestyle?: LineStyle | string | any; leftlinestyle?: LineStyle | string | any; lefttextstyle?: TextStyle | string | any; righttextstyle?: TextStyle | string | any; labelposition?: TextPlacement; spacing?: number; autogradient?: boolean; drawlabels?: boolean; sort?: SortMode; } );
    /**
     * This function is primarily used to set or change the left and right data of the tornado shape. The sort will work only if the left and right data is provided with it.
     * If you want to only sort the data after creating the shape, then use the setSort() function instead.
     * @param data data object defining the data
     * @param data.left leftData
     * @param data.right rightData
     * @param data.label labels
     * @param data.sort Determines if the data will be sorted or not.
     */
    setData(data: object | { left?: number[]; right?: number[]; label?: string[]; sort?: SortMode | string; } ): this;
    /**
     * private
     */
    sortData(): void;
    /**
     * gets the ticks and labels for the axis that will be attached via discrete value tick generator
     */
    getTicksAndLabels(): any;
    /**
     * set Auto Gradient
     * @param autogradient Autogradient on or off
     */
    setAutoGradient(autogradient: boolean): this;
    /**
     * get Auto Gradient
     */
    getAutoGradient(): boolean;
    /**
     * set spacing between bars
     * @param spacing spacing between bars
     */
    setSpacing(spacing: number): this;
    /**
     * get spacing percentage between bars
     */
    getSpacing(): number;
    /**
     * sets if we are drawing the labels
     * @param draw drawing the labels or not
     */
    setDrawLabels(draw: boolean): this;
    /**
     * gets if we are drawing the labels
     */
    getDrawLabels(): boolean;
    /**
     * sets the location of where the text will be rendered
     * @param position location or position of the text
     */
    setLabelPosition(position: TextPlacement | number): this;
    /**
     * gets the location of where the text will be rendered
     */
    getLabelPosition(): TextPlacement | number;
    /**
     * Get the internal data
     * <pre>
     */
    getData(): object[];
    /**
     * Sets right line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setRightLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Sets left line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLeftLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Sets right fill style
     * @param fillStyle a new fill style
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setRightFillStyle(fillStyle: FillStyle | string | object, merge?: boolean): this;
    /**
     * Gets right line style
     */
    getRightLineStyle(): LineStyle;
    /**
     * Gets left line style
     */
    getLeftLineStyle(): LineStyle;
    /**
     * Gets right fill style
     */
    getRightFillStyle(): FillStyle;
    /**
     * Gets left fill style
     */
    getLeftFillStyle(): FillStyle;
    /**
     * Sets left fill style
     * @param fillStyle a new fill style
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setLeftFillStyle(fillStyle: FillStyle | string | object, merge?: boolean): this;
    /**
     * Sets left text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setLeftTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Sets right text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setRightTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Gets model limits
     */
    getModelLimits(): Rect;
    /**
     * Gets sort mode
     */
    getSort(): SortMode | string;
    /**
     * Sets sort mode
     * @param sort sort mode
     */
    setSort(sort: SortMode | string): this;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {bounds: Rect; lefttextstyle: TextStyle; leftfillstyle: FillStyle; leftlinestyle: LineStyle; linestyle: LineStyle; righttextstyle: FillStyle; rightfillstyle: FillStyle; rightlinestyle: LineStyle; autogradient: boolean; spacing: number; sort: SortMode; labelposition: TextPlacement; drawlabels: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.bounds bounds
     * @param properties.lefttextstyle left text style
     * @param properties.leftfillstyle left fill style
     * @param properties.leftlinestyle left lines style
     * @param properties.linestyle center line style
     * @param properties.righttextstyle right text style
     * @param properties.rightlinestyle right line style
     * @param properties.rightfillstyle right fill style
     * @param properties.data data see {@link @int/geotoolkit/controls/shapes/TornadoChart.TornadoChart#setData}
     * @param properties.autogradient autogradient
     * @param properties.spacing spacing
     * @param properties.left left data
     * @param properties.right right data
     * @param properties.drawlabels draw labels flag
     * @param properties.sort sort mode
     * @param properties.labelposition label position
     */
    setProperties(properties?: object | { bounds?: Rect; lefttextstyle?: TextStyle | string | any; leftfillstyle?: FillStyle | string | any; leftlinestyle?: LineStyle | string | any; linestyle?: LineStyle | string | any; righttextstyle?: TextStyle | string | any; rightlinestyle?: LineStyle | string | any; rightfillstyle?: FillStyle | string | any; data?: any[]; autogradient?: boolean; spacing?: number; left?: number[]; right?: number[]; drawlabels?: boolean; sort?: SortMode; labelposition?: TextPlacement; } ): this;
}
/**
 * Sort Mode
 */
export enum SortMode {
    /**
     * Max to Min
     */
    MaxToMin = 'maxtomin',
    /**
     * Min to Max
     */
    MinToMax = 'mintomax',
    /**
     * None
     */
    None = 'none'
}
/**
 * Text placement
 */
export enum TextPlacement {
    /**
     * Inside
     */
    Inside = 0,
    /**
     * Outside
     */
    Outside = 1,
    /**
     * Center
     */
    Center = 2
}
