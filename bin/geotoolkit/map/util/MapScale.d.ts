import {AnchoredShape} from '../../scene/shapes/AnchoredShape';
import {TextStyle} from '../../attributes/TextStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {AnchorType} from '../../util/AnchorType';
import {UnitSystem} from './UnitSystem';
import {RgbaColor} from '../../util/RgbaColor';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Defines "Map scale" object
 */
export class MapScale extends AnchoredShape {
    /**
     * Defines "Map scale" object
     * @param options map scale options
     * @param options.x horizontal position offset (in px)
     * @param options.y vertical position offset (in px)
     * @param options.width maximum measurer width (in px)
     * @param options.height scale shape height (in px)
     * @param options.textstyle label text style or object with properties see {@link @int/geotoolkit/attributes/TextStyle.TextStyle#setProperties}
     * @param options.linestyle measurer line style  or object with properties see {@link @int/geotoolkit/attributes/LineStyle.LineStyle#setProperties}
     * @param options.alignment alignment for the scale object on the map widget
     * @param options.textalign alignment for the text label on the scale object
     * @param options.tickheight tick height from 0 to 1 (where 1 means full shape height)
     * @param options.metric deprecated (since 3.1, use "system" instead) is the metric system used (meters & kilometers if true, foots and miles if false)
     * @param options.system unit system to use
     */
    constructor(options?: object | { x?: number; y?: number; width?: number; height?: number; textstyle?: TextStyle | string | object; linestyle?: LineStyle | string | object; alignment?: AnchorType; textalign?: AnchorType; tickheight?: number; metric?: boolean; system?: UnitSystem; } );
    /**
     * Sets scale
     * @param scale scale to set
     */
    setMapScale(scale: number): this;
    /**
     * Sets unit system to use
     * @param system unit system
     */
    setSystem(system: UnitSystem): this;
    /**
     * Returns current unit system
     */
    getSystem(): UnitSystem;
    /**
     * Returns the style associated with this map scale text
     */
    getTextStyle(): TextStyle;
    /**
     * Sets map scale text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): TextStyle;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Sets map scale object properties
     * @param props map scale object properties
     * @param props.x horizontal position offset (in px)
     * @param props.y vertical position offset (in px)
     * @param props.width maximum measurer width (in px)
     * @param props.height scale shape height (in px)
     * @param props.tickheight tick height from 0 to 1 (where 1 means full shape height)
     * @param props.system unit system to use
     * @param props.textstyle map scale text style or object with properties see {@link @int/geotoolkit/attributes/TextStyle.TextStyle#setProperties}
     * @param props.linestyle measurer line style or object with properties see {@link @int/geotoolkit/attributes/LineStyle.LineStyle#setProperties}
     * @param props.alignment alignment for the scale object on the map widget
     * @param props.textalign alignment for the text label on the scale object
     * @param props.metric deprecated (since 3.1, use "system" instead) is the metric system used (meters & kilometers if true, foots and miles if false)
     */
    setProperties(props: object | { x?: number; y?: number; width?: number; height?: number; tickheight?: number; system?: UnitSystem; textstyle?: TextStyle | string | any; linestyle?: LineStyle | string | any; alignment?: AnchorType; textalign?: AnchorType; metric?: boolean; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {x: number; y: number; tickheight: number; system: UnitSystem; textstyle: TextStyle; textalign: AnchorType} | any;
}
