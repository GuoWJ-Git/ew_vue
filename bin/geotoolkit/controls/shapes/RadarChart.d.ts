import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {RectangularShape} from '../../scene/shapes/RectangularShape';
import {Point} from '../../util/Point';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Rect} from '../../util/Rect';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';

/**
 * Callback for set the highlight style of shapes
 */
export type highlightStyleHandler = (styles: object | { linestyle?: LineStyle | any; fillstyle?: FillStyle | any; axislinestyle?: LineStyle | any; textstyle?: TextStyle | any; labelstyle?: object | { ispointingup?: boolean | null; offset?: number | null; padding?: number | null; radius?: number | null; linestyle?: LineStyle | any; fillstyle?: FillStyle | any; }  | any; } ) => {linestyle: LineStyle | any; fillstyle: FillStyle | any; axislinestyle: LineStyle | any; textstyle: TextStyle | any; labelstyle: {ispointingup: boolean | null; offset: number | null; padding: number | null; radius: number | null; linestyle: LineStyle | any; fillstyle: FillStyle | any}} | object;
/**
 * Defines a radar(spider) chart. The data points in the dataset are drawn around the chart. The value of each point in the dataset is represented as the distance from the center of the chart. The center of the chart represents the minimum value and the chart edge represents the maximum value. Grid lines, which typically represents the Y axis, are displayed by default to represent values from the center of the chart to the perimeter.
 * The X axis is plotted along the perimeter using the data category variables <br>
 */
export class RadarChart extends RectangularShape {
    /**
     * Defines a radar(spider) chart. The data points in the dataset are drawn around the chart. The value of each point in the dataset is represented as the distance from the center of the chart. The center of the chart represents the minimum value and the chart edge represents the maximum value. Grid lines, which typically represents the Y axis, are displayed by default to represent values from the center of the chart to the perimeter.
     * The X axis is plotted along the perimeter using the data category variables <br>
     * @param options 
     * @param options.center a center of the polar chart
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.outlinevisible outline visibility
     * @param options.gridlines gridlines properties
     * @param options.gridlines.linestyle line style
     * @param options.gridlines.step step by radius in model coordinates. Will be ignored, if options.gridlines.count is defined
     * @param options.gridlines.count number of gridlines
     * @param options.gridlines.visible visibility of radius grid
     * @param options.categories define options of the categories
     * @param options.categories.linestyle line style
     * @param options.categories.textstyle labels style
     * @param options.categories.labelstyle labels style
     * @param options.categories.labelstyle.visible labels visibility
     * @param options.categories.labelstyle.ispointingup label pointingup flag
     * @param options.categories.labelstyle.offset label offset
     * @param options.categories.labelstyle.padding label padding
     * @param options.categories.labelstyle.radius label radius
     * @param options.categories.labelstyle.linestyle label border style
     * @param options.categories.labelstyle.fillstyle label background style
     * @param options.categories.data data that is the names of the categories to rate
     * @param options.categories.labelsalongcircumference lables drawn along outer circumfrance
     * @param options.content content that defines the polygons in the chart
     */
    constructor(options?: object | { center?: Point; outerradius?: number; modelradius?: number; startangle?: number; outlinevisible?: boolean; gridlines?: object | { linestyle?: LineStyle | string | object; step?: number; count?: number; visible?: boolean; } ; categories?: object | { linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labelstyle?: object | { visible?: boolean; ispointingup?: boolean; offset?: number; padding?: number; radius?: number; linestyle?: LineStyle | any; fillstyle?: FillStyle | any; } ; data?: string[]; labelsalongcircumference?: boolean; } ; content?: Content[]; } );
    /**
     * Set options
     * @deprecated since 2021.2 (3.3), use setProperties instead
     * @param options options
     * @param options.center a center of the polar chart
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.outlinevisible outline visibility
     * @param options.gridlines gridlines properties
     * @param options.gridlines.linestyle line style
     * @param options.gridlines.step step by radius in model coordinates. Will be ignored, if options.gridlines.count is defined
     * @param options.gridlines.count number of gridlines
     * @param options.gridlines.visible visibility of radius grid
     * @param options.categories define options of the categories
     * @param options.categories.linestyle line style
     * @param options.categories.textstyle labels style
     * @param options.categories.labelstyle labels style
     * @param options.categories.labelstyle.visible labels visibility
     * @param options.categories.labelstyle.ispointingup label pointingup flag
     * @param options.categories.labelstyle.offset label offset
     * @param options.categories.labelstyle.padding label padding
     * @param options.categories.labelstyle.radius label radius
     * @param options.categories.labelstyle.linestyle label border style
     * @param options.categories.labelstyle.fillstyle label background style
     * @param options.categories.data data that is the names of the categories to rate
     * @param options.categories.labelsalongcircumference lables drawn along outer circumfrance
     * @param options.content content that defines the polygons in the chart
     * @param refresh invalidate the shape
     */
    setOptions(options: object | { center?: Point | object; outerradius?: number; modelradius?: number; startangle?: number; outlinevisible?: boolean; gridlines?: object | { linestyle?: LineStyle | string | object; step?: number; count?: number; visible?: boolean; } ; categories?: object | { linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labelstyle?: object | { visible?: boolean; ispointingup?: boolean | null; offset?: number | null; padding?: number | null; radius?: number | null; linestyle?: LineStyle | null; fillstyle?: FillStyle | null; } ; data?: string[]; labelsalongcircumference?: boolean; } ; content?: Content[]; } , refresh?: boolean): this;
    /**
     * Return option to be used to draw a grid
     * @deprecated since 2021.2 (3.3), use getProperties instead
     */
    getOptions(): {center: Point; outerradius: number; modelradius: number; startangle: number; outlinevisible: boolean; gridlines: {linestyle: LineStyle | object; step: number; count: number; visible: boolean}; categories: {linestyle: LineStyle | object; textstyle: TextStyle | object; data: string[]; labelsalongcircumference: boolean; labelstyle: {visible: boolean; ispointingup: boolean | null; offset: number | null; padding: number | null; radius: number | null; linestyle: LineStyle | null; fillstyle: FillStyle | null}}; content: Content[]} | any;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer raidus
     */
    modelToOuterRadius(value: number): number;
    /**
     * set the content for this shape
     * @param content content that defines the polygons in the chart
     */
    setContent(content?: Content[]): this;
    /**
     * get the content for this shape
     */
    getContent(): object[];
    /**
     * @param context Rendering Context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Highlight selected visuals
     * @param selection array of indexes
     */
    highlightSelected(selection: number[]): this;
    /**
     * Reset highlihting of visuals
     */
    resetHighlighting(): this;
    /**
     * Sets shape highlight styles handler
     * @param handler function for set highlight style of shapes
     */
    setHighlightStylesHandler(handler: highlightStyleHandler): this;
    /**
     * Gets shape highlight styles handler
     */
    getHighlightStylesHandler(): Function;
    /**
     * Hit test in the device coordinate. This method checks if any point is inside the area and shape
     * intersects area.
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): {series: number[]; axes: number[]} | object;
    /**
     * Render angle axis
     * @param context Rendering Context
     */
    drawLabels(context: RenderingContext): void;
    /**
     * Render angle text horizontally
     * @param context Rendering Context
     */
    drawAngleAxisRegular(context: RenderingContext): void;
    /**
     * Render angle text along circumference
     * @param context Rendering Context
     */
    drawAngleAxisAlongCircumference(context: RenderingContext): void;
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {center: Point; outerradius: number; linestyle: LineStyle; modelradius: number; startangle: number; gridlines: {linestyle: LineStyle; step: number; visible: boolean}; categories: {linestyle: LineStyle; textstyle: TextStyle; labelstyle: {ispointingup: boolean; offset: number; padding: number; radius: number; linestyle: LineStyle; fillstyle: FillStyle}; data: string[]; labelsalongcircumference: boolean}; content: Content[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.center a center of the polar chart
     * @param properties.outerradius a radius of the polar chart
     * @param properties.linestyle line style to specify style for outer circle
     * @param properties.modelradius radius of the polar chart in the model coordinates
     * @param properties.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param properties.gridlines gridlines properties
     * @param properties.gridlines.linestyle line style
     * @param properties.gridlines.step step by radius in model coordinates
     * @param properties.gridlines.visible visibility of radius grid
     * @param properties.categories define properties of the categories
     * @param properties.categories.linestyle line style
     * @param properties.categories.textstyle labels text style
     * @param properties.categories.labelstyle labels style
     * @param properties.categories.labelstyle.ispointingup label pointingup flag
     * @param properties.categories.labelstyle.offset label offset
     * @param properties.categories.labelstyle.padding label padding
     * @param properties.categories.labelstyle.radius label radius
     * @param properties.categories.labelstyle.linestyle label border style
     * @param properties.categories.labelstyle.fillstyle label background style
     * @param properties.categories.data data that is the names of the categories to rate
     * @param properties.categories.labelsalongcircumference labels drawn along outer circumfrance
     * @param properties.content content that defines the polygons in the chart
     */
    setProperties(properties: object | { center?: Point | object; outerradius?: number; linestyle?: LineStyle | string | object; modelradius?: number; startangle?: number; gridlines?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; } ; categories?: object | { linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labelstyle?: object | { ispointingup?: boolean; offset?: number; padding?: number; radius?: number; linestyle?: LineStyle; fillstyle?: FillStyle; } ; data?: string[]; labelsalongcircumference?: boolean; } ; content?: Content[]; } ): this;
}
/**
 * Content that defines the polygons in the chart
 */
export type Content = { linestyle: LineStyle | object; fillstyle: FillStyle | object; name: string; data: number[] | NumericalDataSeries}
