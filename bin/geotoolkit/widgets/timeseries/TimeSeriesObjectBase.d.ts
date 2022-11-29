import {EventDispatcher} from '../../util/EventDispatcher';
import {AnchorType} from '../../util/AnchorType';
import {Dimension} from '../../util/Dimension';
import {TickGenerator} from '../../axis/TickGenerator';
import {LineStyle} from '../../attributes/LineStyle';
import {Orientation} from '../../util/Orientation';
import {Axis} from '../../axis/Axis';

/**
 * Base class for TimeSeriesObject and TimeSeriesObjectGroup.
 * This class contains the set/get AxisOptions and ID
 */
export class TimeSeriesObjectBase extends EventDispatcher {
    /**
     * Base class for TimeSeriesObject and TimeSeriesObjectGroup.
     * This class contains the set/get AxisOptions and ID
     * @param options JSON which defines object
     * @param options.id Object's id/uri
     * @param options.name Object/curve's name
     * @param options.curveaxis JSON which defines axis object
     * @param options.curveaxis.visible visibility of curve axis
     * @param options.curveaxis.position curve axis position 'left'/'right'
     * @param options.curveaxis.autocoloraxis synchronize axis color with curve color
     * @param options.curveaxis.autocolorlabel synchronize axis and label color with curve color
     * @param options.curveaxis.titlevisible curve axis label visibility
     * @param options.curveaxis.axisvisible axis visibility
     * @param options.curveaxis.compact compact
     * @param options.curveaxis.autolabelrotation automatic label rotation
     * @param options.curveaxis.textcolor text color if autocolorlabel is false
     * @param options.curveaxis.axiscolor axis color is autocoloraxis is false
     * @param options.curveaxis.labeltext title text override
     * @param options.curveaxis.axiswidth curve axis width
     * @param options.curveaxis.textwidth curve text width
     * @param options.curveaxis.font curve axis text font
     * @param options.curveaxis.title JSON which defines title
     * @param options.curveaxis.title.anchor title anchor
     * @param options.curveaxis.title.offset title offset
     * @param options.curveaxis.titlerotateangle title rotate angle
     * @param options.curveaxis.logarithmicscale logarithmic scale
     * @param options.curveaxis.tickgenerator tick generator
     * @param options.curveaxis.tickgeneratoroptions JSON which defines tick generator options. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param options.curveaxis.tickgeneratoroptions.format label formatter for tick generator
     * @param options.curveaxis.baselinestyle base line style. Color set to curve's color, width = 1 by default.
     * @param options.curveaxis.microposition microposition limits
     * @param options.curveaxis.microposition.top upper bound of microposition (range from 0 to 1)
     * @param options.curveaxis.microposition.bottom lower bound of microposition (range from 0 to 1)
     * @param options.curveaxis.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     */
    constructor(options?: object | { id?: string; name?: string; curveaxis?: object | { visible?: boolean; position?: string; autocoloraxis?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; axisvisible?: boolean; compact?: boolean; autolabelrotation?: boolean; textcolor?: string; axiscolor?: string; labeltext?: string; axiswidth?: number; textwidth?: number; font?: string; title?: object | { anchor?: AnchorType; offset?: Dimension; } ; titlerotateangle?: number; logarithmicscale?: boolean; tickgenerator?: TickGenerator; tickgeneratoroptions?: object | { format?: Function; } ; baselinestyle?: LineStyle | string | object; microposition?: object | { top?: number; bottom?: number; } ; labelorientation?: string | Orientation; } ; } );
    /**
     * Get object's ID
     */
    getId(): string;
    /**
     * get axis
     */
    getAxis(): Axis | any;
    /**
     * Get axis options
     */
    getAxisOptions(): {visible: boolean; position: string; autocoloraxis: boolean; autocolorlabel: boolean; titlevisible: boolean; textcolor: string; axiscolor: string; labeltext: string; width: number; font: string; tickgenerator: TickGenerator; tickgeneratoroptions: {format: Function}; labelorientation: string | Orientation} | object;
    /**
     * Sets axis options. Refer to example below to make a curve's axis invisible. This can be useful to save space while displaying several curves that use the same vertical unit.<br>
     * User would have to determine which curves share the same units and limits and hide the redundant axis.
     * @param options JSON which defines curve axis
     * @param options.visible visibility of curve axis
     * @param options.position curve axis position 'left'/'right'
     * @param options.autocoloraxis synchronize axis color with curve color
     * @param options.autocolorlabel synchronize axis and label color with curve color
     * @param options.titlevisible curve axis label visibility
     * @param options.axisvisible axis visibility
     * @param options.textcolor text color if autocolorlabel is false
     * @param options.axiscolor axis color is autocoloraxis is false
     * @param options.labeltext title text override
     * @param options.width curve axis and text width
     * @param options.font curve axis text font
     * @param options.tickgenerator tick generator
     * @param options.tickgeneratoroptions JSON which defines tick generator options. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param options.tickgeneratoroptions.format label formatter for tick generator
     * @param options.baselinestyle base line style. Color set to curve's color, width = 1 by default.
     * @param options.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     */
    setAxisOptions(options?: object | { visible?: boolean; position?: string; autocoloraxis?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; axisvisible?: boolean; textcolor?: string; axiscolor?: string; labeltext?: string; width?: number; font?: string; tickgenerator?: TickGenerator; tickgeneratoroptions?: object | { format?: Function; } ; baselinestyle?: LineStyle; labelorientation?: string | Orientation; } ): this;
    /**
     */
    dispose(): void;
    /**
     * Update layout if it is necessary if object is changed
     */
    updateLayout(): void;
    /**
     * Returns all properties
     */
    getProperties(): {id: string; name: string; curveaxis: {visible: boolean; position: string; autocoloraxis: boolean; autocolorlabel: boolean; titlevisible: boolean; axisvisible: boolean; compact: boolean; autolabelrotation: boolean; textcolor: string; axiscolor: string; labeltext: string; axiswidth: number; textwidth: number; font: string; title: {anchor: AnchorType; offset: Dimension}; titlerotateangle: number; logarithmicscale: boolean; tickgenerator: TickGenerator; tickgeneratoroptions: {format: Function}; baselinestyle: LineStyle; microposition: {top: number; bottom: number}; labelorientation: string | Orientation}} | any;
    /**
     * Sets all properties
     * @param props properties object
     * @param props.id Object's id/uri
     * @param props.name Object/curve's name
     * @param props.curveaxis axis options
     * @param props.curveaxis.visible visibility of curve axis
     * @param props.curveaxis.position curve axis position 'left'/'right'
     * @param props.curveaxis.autocoloraxis synchronize axis color with curve color
     * @param props.curveaxis.autocolorlabel synchronize axis and label color with curve color
     * @param props.curveaxis.titlevisible curve axis label visibility
     * @param props.curveaxis.axisvisible axis visibility
     * @param props.curveaxis.compact compact
     * @param props.curveaxis.autolabelrotation automatic label rotation
     * @param props.curveaxis.textcolor text color if autocolorlabel is false
     * @param props.curveaxis.axiscolor axis color is autocoloraxis is false
     * @param props.curveaxis.labeltext title text override
     * @param props.curveaxis.axiswidth curve axis width
     * @param props.curveaxis.textwidth curve text width
     * @param props.curveaxis.font curve axis text font
     * @param props.curveaxis.title JSON which defines title
     * @param props.curveaxis.title.anchor title anchor
     * @param props.curveaxis.title.offset title offset
     * @param props.curveaxis.titlerotateangle title rotate angle
     * @param props.curveaxis.logarithmicscale logarithmic scale
     * @param props.curveaxis.tickgenerator tick generator
     * @param props.curveaxis.tickgeneratoroptions JSON which defines tick generator options. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setProperties} for details
     * @param props.curveaxis.tickgeneratoroptions.format label formatter for tick generator
     * @param props.curveaxis.baselinestyle base line style. Color set to curve's color, width = 1 by default.
     * @param props.curveaxis.microposition microposition limits
     * @param props.curveaxis.microposition.top upper bound of microposition (range from 0 to 1)
     * @param props.curveaxis.microposition.bottom lower bound of microposition (range from 0 to 1)
     * @param props.curveaxis.labelorientation rotation of the curveaxis labels; can be automatic, vertical, horizontal
     */
    setProperties(props: object | { id?: string; name?: string; curveaxis?: object | { visible?: boolean; position?: string; autocoloraxis?: boolean; autocolorlabel?: boolean; titlevisible?: boolean; axisvisible?: boolean; compact?: boolean; autolabelrotation?: boolean; textcolor?: string; axiscolor?: string; labeltext?: string; axiswidth?: number; textwidth?: number; font?: string; title?: object | { anchor?: AnchorType; offset?: Dimension; } ; titlerotateangle?: number; logarithmicscale?: boolean; tickgenerator?: TickGenerator; tickgeneratoroptions?: object | { format?: Function; } ; baselinestyle?: LineStyle | string | object; microposition?: object | { top?: number; bottom?: number; } ; labelorientation?: string | Orientation; } ; } ): this;
}
