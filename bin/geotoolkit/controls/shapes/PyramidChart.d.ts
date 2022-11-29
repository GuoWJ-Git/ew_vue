import {CompositeNode} from '../../scene/CompositeNode';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * Pyramid Chart reflects an hierarchical way of representing the data.
 * It divides the whole triangle into number of sections.
 * Size of each section is a percentage of data contributing with respect to the whole height.<br>
 * It takes arrays of Label names and its values.<br>
 * It provides options for fillstyle , Alignment , Invert.<br>
 */
export class PyramidChart extends CompositeNode {
    /**
     * Pyramid Chart reflects an hierarchical way of representing the data.
     * It divides the whole triangle into number of sections.
     * Size of each section is a percentage of data contributing with respect to the whole height.<br>
     * It takes arrays of Label names and its values.<br>
     * It provides options for fillstyle , Alignment , Invert.<br>
     * @param options 
     * @param options.name Array of label names.
     * @param options.value Array of values corresponding to the label names.
     * @param options.fillstyle Array of fill styles objects for each section.
     * @param options.invert Creates a regular pyramid, when set true inverts the shape.
     * @param options.align This is the preference to have labels at "right" or "left" for every section
     * @param options.linestyle to change the color of lines pointing to the label for all sections.
     * @param options.border to change the border color for each section section.
     * @param options.linelength To specify length of the line pointing the labels.
     * @param options.highlight highlights each section of the chart, when set false it does not show any highlight feature.
     * @param options.highlightstyle to change fillstyle of the highlighting shape, should be Rgba color object
     */
    constructor(options: object | { name?: string[]; value?: number[]; fillstyle?: FillStyle[]; invert?: boolean; align?: string; linestyle?: LineStyle[]; border?: LineStyle[]; linelength?: number; highlight?: boolean; highlightstyle?: RgbaColor | string; } );
    /**
     * setData takes all the input and feeds it to the chart drawn
     * @param data data
     */
    setData(data: any): this;
    /**
     * sets all properties related to the chart
     * @param properties properties
     * @param properties.name Array of label names.
     * @param properties.value Array of values corresponding to the label names.
     * @param properties.fillstyle Array of fill styles objects for each section.
     * @param properties.linestyle to change the color of lines pointing to the label for all sections.
     * @param properties.border to change the border color for each section section.
     * @param properties.align This is the preference to have labels at "right" or "left" for every section
     * @param properties.invert Creates a regular pyramid, when set true inverts the shape.
     * @param properties.linelength To specify length of the line pointing the labels.
     * @param properties.highlight highlights each section of the chart, when set false it does not show any highlight feature.
     * @param properties.highlightstyle to change fillstyle of the highlighting shape, should be Rgba color object
     */
    setProperties(properties?: object | { name?: string[]; value?: number[]; fillstyle?: FillStyle[]; linestyle?: LineStyle[]; border?: LineStyle[]; align?: string; invert?: boolean; linelength?: number; highlight?: boolean; highlightstyle?: RgbaColor | string; } ): this;
    /**
     * gets any property of the chart
     */
    getProperties(): {name: string[]; value: number[]; fillstyle: FillStyle[]; linestyle: LineStyle[]; border: LineStyle[]; align: string; invert: boolean; linelength: number; highlight: boolean; highlightstyle: RgbaColor} | any;
    /**
     * Get data
     */
    getData(): {name: string[]; value: number[]; fillstyle: FillStyle[]; invert: boolean; align: string; linestyle: LineStyle[]; linelength: number; highlight: boolean; highlightstyle: RgbaColor} | object;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getModelLimits(): Rect | any;
    /**
     * Sets inner model limits
     * @param limits inner limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns the name and value represented by the section which is
     * referenced by the index provided.
     * @param index The index of the section
     */
    getSectionInfo(index: number): {name: string; value: number} | object;
    /**
     * Highlights the shape specified by the index and with the choice you can set it false too.
     * @param index of the section to be highlighted
     */
    highlight(index: number): this;
    /**
     * Performs selection of the node with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param radius [radius =5] is the radius of selection
     */
    hitTest(pt: Point, radius: number): number;
}
