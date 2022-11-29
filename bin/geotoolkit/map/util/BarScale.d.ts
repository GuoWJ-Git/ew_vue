import {MapScale} from './MapScale';
import {FillStyle} from '../../attributes/FillStyle';
import {BarScaleLabelMode} from './BarScaleLabelMode';
import {UnitSystem} from './UnitSystem';

/**
 * Defines a graphical or bar scale object.
 * Shape consists of one or two lines of bars and axis connected to it.
 */
export class BarScale extends MapScale {
    /**
     * Defines a graphical or bar scale object.
     * Shape consists of one or two lines of bars and axis connected to it.
     * @param options bar scale object options
     * @param options.fillstyles fill style list to fill the bar rectangles or objects with properties see {@link @int/geotoolkit/attributes/FillStyle.FillStyle#setProperties}
     * @param options.minortickheight height from 0 to 1 (where 1 means full shape height) for the inner bar scale ticks
     * @param options.majortickheight height from 0 to 1 (where 1 means full shape height) for the far left and right bar scale ticks
     * @param options.ticksamount the amount of bar rectangular tick bars
     * @param options.tickvisible true to show the tick lines, false otherwise
     * @param options.tickposition position for the ticks (and their labels) relative to the main bar scale shape
     * @param options.labelmode bar scale axis label mode (what labels are shown)
     * @param options.labelvisible true to show labels for all the scale ticks (intersecting text is hidden automatically). If false, only last (total) label is shown (deprecated since 2021 (3.2), use labelmode instead)
     * @param options.secondsystem unit system to use for the second line (null to use one bars line only)
     * @param options.height scale shape height (in px)
     * @param options.y vertical position offset (in px)
     */
    constructor(options?: object | { fillstyles?: (FillStyle | any | string)[]; minortickheight?: number; majortickheight?: number; ticksamount?: number; tickvisible?: boolean; tickposition?: TickPosition; labelmode?: BarScaleLabelMode; labelvisible?: boolean; secondsystem?: UnitSystem | any; height?: number; y?: number; } );
    /**
     * Sets fill style list for the bar scale rectangular sections
     * @param styles fill styles
     */
    setFillStyleList(styles: (object | string | FillStyle)[]): this;
    /**
     * Returns list of fill styles used for the bar scale rectangular sections
     */
    getFillStyleList(): FillStyle[];
    /**
     * Sets minor (inner) ticks height value
     * @param value minor ticks height
     */
    setMinorTickHeight(value: number): this;
    /**
     * Returns minor ticks height
     */
    getMinorTickHeight(): number;
    /**
     * Sets major (far left and right) ticks height value
     * @param value major ticks height
     */
    setMajorTickHeight(value: number): this;
    /**
     * Returns major ticks height
     */
    getMajorTickHeight(): number;
    /**
     * Sets unit system to use for the second bar line (null to use one bars line only)
     * @param system system for the second bar line
     */
    setSecondSystem(system: UnitSystem | any): this;
    /**
     * Returns current system for the second bar line
     */
    getSecondSystem(): UnitSystem | any;
    /**
     * Sets bar scale axis labels visibility
     * @deprecated since 2021 (3.2), use setLabelMode instead
     * @param value true to show labels for all the scale ticks (intersecting text is hidden automatically).
     * If false, only last (total) label is shown
     */
    setLabelVisible(value: boolean): this;
    /**
     * Returns axis label visibility
     * @deprecated since 2021 (3.2), use getLabelMode instead
     */
    getLabelVisible(): boolean;
    /**
     * Sets bar scale axis label mode
     * @param mode bar scale axis label mode (what labels are shown)
     */
    setLabelMode(mode: BarScaleLabelMode): this;
    /**
     * Returns current bar scale axis label mode
     */
    getLabelMode(): BarScaleLabelMode;
    /**
     * Sets bar scale tick visibility
     * @param value true to show the tick lines, false otherwise
     */
    setTickVisible(value: boolean): this;
    /**
     * Returns current tick visibility
     */
    getTickVisible(): boolean;
    /**
     * Sets bar scale tick position (where to display ticks and their labels)
     * @param position label position
     */
    setTickPosition(position: TickPosition): this;
    /**
     * Returns scale tick position
     */
    getTickPosition(): TickPosition;
    /**
     * Sets the bar scale object ticks amount
     * @param value the amount of rectangular bars with tick
     */
    setTicksAmount(value: number): this;
    /**
     * Returns current ticks amount
     */
    getTicksAmount(): number;
    /**
     * Sets bar scale object properties
     * @param props bar scale properties
     * @param props.fillstyles fill style list to fill the bar rectangles or objects with properties see {@link @int/geotoolkit/attributes/FillStyle.FillStyle#setProperties}
     * @param props.minortickheight height from 0 to 1 (where 1 means full shape height) for the inner bar scale ticks
     * @param props.majortickheight height from 0 to 1 (where 1 means full shape height) for the far left and right bar scale ticks
     * @param props.ticksamount the amount of rectangular bars with ticks
     * @param props.tickvisible true to show the tick lines, false otherwise
     * @param props.tickposition position for the ticks (and their labels) relative to the main bar scale shape
     * @param props.secondsystem unit system to use for the second line (null to use one bars line only)
     * @param props.labelmode bar scale axis label mode (what labels are shown)
     * @param props.labelvisible true to show labels for all the scale ticks (intersecting text is hidden automatically). If false, only last (total) label is shown (deprecated since 2021 (3.2), use labelmode instead)
     * @param props.height scale shape height (in px)
     * @param props.y vertical position offset (in px)
     */
    setProperties(props: object | { fillstyles?: (FillStyle | any | string)[]; minortickheight?: number; majortickheight?: number; ticksamount?: number; tickvisible?: boolean; tickposition?: TickPosition; secondsystem?: UnitSystem | any; labelmode?: BarScaleLabelMode; labelvisible?: boolean; height?: number; y?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {fillstyles: FillStyle[]; minortickheight: number; majortickheight: number; ticksamount: number; tickvisible: boolean; tickposition: TickPosition; secondsystem: UnitSystem; labelmode: BarScaleLabelMode; labelvisible: boolean} | any;
}
/**
 * Bar Scale object label position (where to show labels)
 */
export enum TickPosition {
    /**
     * Top labels visible
     */
    Top = 'Top',
    /**
     * Bottom labels visible
     */
    Bottom = 'Bottom',
    /**
     * Show both top and bottom labels
     */
    Both = 'Both'
}
