import {RectangularShape} from '../../scene/shapes/RectangularShape';
import {Point} from '../../util/Point';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Defines a basic polar grid. This class is a base class for rendering polar grid. Polar grid is a base class for all diagrams in polar coordinates.<br>
 * Three parameters should be passed to polar visual to make it work properly:<br>
 * 1) Center of the diagram(in model coordinates)<br>
 * 2) Radius of the grid(in model coordinates)<br>
 * 3) Angle increment to draw sectors <br>
 * The grid in the polar chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
 * Sectors can be added to highlight areas in the grid as shown in the example
 * @example
 * ```javascript
 * polarGrid.setSectors([{
 *           'start': 0,
 *           'end': 45,
 *           'color': 'orange'
 *       }]);
 * ```
 */
export class PolarGrid extends RectangularShape {
    /**
     * Defines a basic polar grid. This class is a base class for rendering polar grid. Polar grid is a base class for all diagrams in polar coordinates.<br>
     * Three parameters should be passed to polar visual to make it work properly:<br>
     * 1) Center of the diagram(in model coordinates)<br>
     * 2) Radius of the grid(in model coordinates)<br>
     * 3) Angle increment to draw sectors <br>
     * The grid in the polar chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
     * Sectors can be added to highlight areas in the grid as shown in the example
     * @param options 
     * @param options.center a center of the polar grid
     * @param options.center.x x coordinate of the center
     * @param options.center.y y coordinate of the center
     * @param options.angle an increment angle of the grid
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.linestyle line style to specify style for outer circle
     * @param options.gridlines gridlines properties
     * @param options.gridlines.radius define options of radius gridlines
     * @param options.gridlines.radius.linestyle line style
     * @param options.gridlines.radius.step step by radius in model coordinates
     * @param options.gridlines.radius.values optional positions of lines. In this case step ignored. values are in raduses
     * @param options.gridlines.radius.visible visibility of radius grid
     * @param options.gridlines.radius.highlighted define a color to highlight grid
     * @param options.gridlines.angles define options of angles gridlines
     * @param options.gridlines.angles.visible visibility of angles grid
     * @param options.gridlines.angles.visiblelabels visibility of angles labels
     * @param options.gridlines.angles.linestyle line style
     * @param options.gridlines.angles.textstyle labels style
     * @param options.gridlines.angles.labels define optional labels instead of standard
     * @param options.gridlines.angles.labels.values define optional array of angles
     * @param options.gridlines.angles.labels.text define optional array of text labels
     * @param options.gridlines.angles.labelsalongcircumference draw text labels along the circumfrence of the outer circle
     */
    constructor(options?: object | { center?: Point | object | { x?: number; y?: number; } ; angle?: number; outerradius?: number; modelradius?: number; startangle?: number; linestyle?: LineStyle | string | object; gridlines?: object | { radius?: object | { linestyle?: LineStyle | string | object; step?: number; values?: number; visible?: boolean; highlighted?: string; } ; angles?: object | { visible?: boolean; visiblelabels?: boolean; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labels?: object | { values?: number[]; text?: string[]; } ; labelsalongcircumference?: boolean; } ; } ; } );
    /**
     * Sets an array of sectors
     * @param sectors each element {start, end, color, length)
     */
    setSectors(sectors: object[]): this;
    /**
     * Set options
     * @param options JSON containing grid options
     * @param options.center a center of the polar chart
     * @param options.center.x x coordinate of the center
     * @param options.center.y y coordinate of the center
     * @param options.modelradius radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.angle an increment angle of the grid
     * @param options.outerradius a radius of the polar chart
     * @param options.linestyle line style to specify style for outer circle
     * @param options.gridlines gridlines properties
     * @param options.gridlines.radius define options of radius gridlines
     * @param options.gridlines.radius.linestyle line style
     * @param options.gridlines.radius.step step by radius in model coordinates
     * @param options.gridlines.radius.values optional positions of lines. In this case step ignored. values are in raduses
     * @param options.gridlines.radius.visible visibility of radius grid
     * @param options.gridlines.radius.highlighted define a color to highlight grid
     * @param options.gridlines.angles define options of angles gridlines
     * @param options.gridlines.angles.visible visibility of angles grid
     * @param options.gridlines.angles.visiblelabels visibility of angles labels
     * @param options.gridlines.angles.linestyle line style
     * @param options.gridlines.angles.textstyle labels style
     * @param options.gridlines.angles.labels define optional labels instead of standard
     * @param options.gridlines.angles.labels.values define optional array of angles
     * @param options.gridlines.angles.labels.text define optional array of text labels
     * @param options.gridlines.angles.labelsalongcircumference lables drawn along outer circumfrance
     * @param options.gridlines.angles.labeloffset radius offset for labels
     * @param refresh invalidate graph
     */
    setOptions(options: object | { center?: Point | object | { x?: number; y?: number; } ; modelradius?: number; startangle?: number; angle?: number; outerradius?: number; linestyle?: LineStyle | string | object; gridlines?: object | { radius?: object | { linestyle?: LineStyle | string | object; step?: number; values?: number; visible?: boolean; highlighted?: string; } ; angles?: object | { visible?: boolean; visiblelabels?: boolean; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labels?: object | { values?: number[]; text?: string[]; } ; labelsalongcircumference?: boolean; labeloffset?: boolean; } ; } ; } , refresh?: boolean): this;
    /**
     * Return option to be used to draw a grid
     */
    getOptions(): any;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     */
    modelToOuterRadius(value: number): number;
    /**
     * Render angle grid
     * @param context Rendering Context
     */
    drawSectors(context: RenderingContext): void;
    /**
     * Render angle grid
     * @param context Rendering Context
     */
    drawAngleGrid(context: RenderingContext): void;
    /**
     * Render angle axis
     * @param context Rendering Context
     */
    drawAngleAxis(context: RenderingContext): void;
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
     * Render value grid
     * @param context Rendering Context
     */
    drawValueGrid(context: RenderingContext): void;
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Convert point from polar to cartesian coordinate system
     * @param x x coordinate (offset from center point)
     * @param y coordinate (offset from center point)
     */
    cartesianToPolar(x: number, y: number): Point;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {center: Point; modelradius: number; startangle: number; angle: number; outerradius: number; linestyle: LineStyle; gridlines: {radius: {linestyle: LineStyle; step: number; values: number; visible: boolean; highlighted: string}; angles: {visible: boolean; visiblelabels: boolean; linestyle: LineStyle; textstyle: TextStyle; labels: {values: number[]; text: string[]}; labelsalongcircumference: boolean; labeloffset: boolean}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing grid properties
     * @param properties.center a center of the polar chart
     * @param properties.center.x x coordinate of the center
     * @param properties.center.y y coordinate of the center
     * @param properties.modelradius radius of the polar chart in the model coordinates
     * @param properties.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param properties.angle an increment angle of the grid
     * @param properties.outerradius a radius of the polar chart
     * @param properties.linestyle line style to specify style for outer circle
     * @param properties.gridlines gridlines properties
     * @param properties.gridlines.radius define properties of radius gridlines
     * @param properties.gridlines.radius.linestyle line style
     * @param properties.gridlines.radius.step step by radius in model coordinates
     * @param properties.gridlines.radius.values optional positions of lines. In this case step ignored. values are in raduses
     * @param properties.gridlines.radius.visible visibility of radius grid
     * @param properties.gridlines.radius.highlighted define a color to highlight grid
     * @param properties.gridlines.angles define properties of angles gridlines
     * @param properties.gridlines.angles.visible visibility of angles grid
     * @param properties.gridlines.angles.visiblelabels visibility of angles labels
     * @param properties.gridlines.angles.linestyle line style
     * @param properties.gridlines.angles.textstyle labels style
     * @param properties.gridlines.angles.labels define optional labels instead of standard
     * @param properties.gridlines.angles.labels.values define optional array of angles
     * @param properties.gridlines.angles.labels.text define optional array of text labels
     * @param properties.gridlines.angles.labelsalongcircumference lables drawn along outer circumfrance
     * @param properties.gridlines.angles.labeloffset radius offset for labels
     */
    setProperties(properties: object | { center: Point | object | { x?: number; y?: number; } ; modelradius?: number; startangle?: number; angle?: number; outerradius?: number; linestyle?: LineStyle | string | object; gridlines?: object | { radius?: object | { linestyle?: LineStyle | string | object; step?: number; values?: number; visible?: boolean; highlighted?: string; } ; angles?: object | { visible?: boolean; visiblelabels?: boolean; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; labels?: object | { values?: number[]; text?: string[]; } ; labelsalongcircumference?: boolean; labeloffset?: boolean; } ; } ; } ): this;
}
