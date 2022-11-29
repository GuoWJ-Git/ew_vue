import {AxisGauge} from './AxisGauge';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {SpaceStyle} from '../attributes/SpaceStyle';
import {Axis} from './axis/Axis';

/**
 * This class implements a full Circular Gauge with possibility of multiple arrows. <br>
 * A Circular Gauge is a visual representation of a measuring device with a radial axis that sweeps any angle from 0 to 360 degrees and a pointer (Needle or arrow) that indicates values on that scale.<br>
 * Gauges value is basically an angle on a circle plot. Gauges can have radius and start and end angle.
 * Gauge axes are usually colored for easy value distinction.
 */
export class CircularGauge extends AxisGauge {
    /**
     * This class implements a full Circular Gauge with possibility of multiple arrows. <br>
     * A Circular Gauge is a visual representation of a measuring device with a radial axis that sweeps any angle from 0 to 360 degrees and a pointer (Needle or arrow) that indicates values on that scale.<br>
     * Gauges value is basically an angle on a circle plot. Gauges can have radius and start and end angle.
     * Gauge axes are usually colored for easy value distinction.
     * @param options JSON with gauge parameters
     * @param options.startangle Start of the gauge body in radians
     * @param options.sweepangle Sweep of the gauge body in radians
     * @param options.background JSON with background properties
     * @param options.background.fillstyle Fillstyle to apply to background
     * @param options.background.linestyle Linestyle to apply to background
     * @param options.background.visible Sets visibility to background
     */
    constructor(options: object | { startangle?: number; sweepangle?: number; background?: object | { fillstyle?: FillStyle; linestyle?: LineStyle; visible?: boolean; } ; } );
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge source gauge
     */
    protected copyConstructor(gauge: CircularGauge): this;
    /**
     * Sets padding style
     * @param style padding style
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(style: SpaceStyle | object, merge?: boolean): this;
    /**
     * Gets padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets a new start angle
     * @param angle Angle in radians
     */
    setStartAngle(angle: number): this;
    /**
     * Sets a new sweep angle
     * @param angle Angle in radians
     */
    setSweepAngle(angle: number): this;
    /**
     * Adds a new circular axis to the gauge. An axis can have only one needle. In order to add more needles to a gauge
     * user needs to add a new axis with its own ranges and data.
     * @param params Parameters required to create an axis
     */
    addAxis(params: object): Axis;
    /**
     * Returns properties pertaining to this gauge.
     */
    getProperties(): {startangle: number; sweepangle: number; background: {fillstyle: FillStyle; linestyle: LineStyle; visible: boolean}} | any;
    /**
     * Sets properties pertaining to circulr gauge.
     * @param props JSON with properties
     * @param props.startangle Start angle of gauge body arc
     * @param props.sweepangle Angle by which the axis body sweeps. End angle becomes startangle + sweepanle
     * @param props.background JSON with background properties
     * @param props.background.fillstyle Fillstyle of background circle
     * @param props.background.linestyle Linestyle of background circle
     * @param props.background.visible Visibility of the background shape
     */
    setProperties(props: object | { startangle?: number; sweepangle?: number; background?: object | { fillstyle?: FillStyle; linestyle?: LineStyle; visible?: boolean; } ; } ): this;
    /**
     * Updates and recalculates parameters of gauge, like radius, angles, and updates axes.
     */
    update(): this;
}
