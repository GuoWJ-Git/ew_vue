import {LogAbstractVisual} from './LogAbstractVisual';
import {ApparentDipData} from './data/ApparentDipData';
import {AbstractUnit} from '../util/AbstractUnit';
import {Rect} from '../util/Rect';
import {Point} from '../util/Point';

/**
 * Sinusoid visual
 * Note that depth is used in the meaning of centered depth
 */
export class LogSinusoid extends LogAbstractVisual {
    /**
     * Sinusoid visual
     * Note that depth is used in the meaning of centered depth
     * @param options options
     * @param options.data data
     * @param options.angleunit unit of angles in data: 'rad', 'deg'. If not set, normalized [0, 1] will be used
     * @param options.linestylehandler sinusoid style handler: custom colors can be used for different data samples. Handler should return {@link @int/geotoolkit/attributes/LineStyle.LineStyle}
     */
    constructor(options: object | { data?: ApparentDipData[]; angleunit?: AbstractUnit | string; linestylehandler?: Function; } );
    /**
     * Sets sinusoid style handler: custom colors can be used for different data samples.
     * @param stylingHandler handler has {@link @int/geotoolkit/welllog/data/ApparentDipData.ApparentDipData} argument and should return {@link @int/geotoolkit/attributes/LineStyle.LineStyle}
     */
    setLineStyleHandler(stylingHandler: Function): this;
    /**
     * Gets styling handler
     */
    getLineStyleHandler(): Function | any;
    /**
     * Add sample.
     * @param sample sample
     */
    addSample(sample: ApparentDipData): this;
    /**
     * Set data
     * @param data data
     */
    setData(data: ApparentDipData[]): this;
    /**
     * Get data
     */
    getData(): ApparentDipData[];
    /**
     * Returns angle unit
     */
    getAngleUnit(): AbstractUnit;
    /**
     * Sets angle unit: 'rad' / 'deg'.
     * @param unit unit
     */
    setAngleUnit(unit: AbstractUnit | string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {data: ApparentDipData[]; angleunit: AbstractUnit; linestylehandler: Function} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data data
     * @param properties.angleunit angle unit: 'rad' / 'deg'
     * @param properties.linestylehandler sinusoid style handler: custom colors can be used for different data samples. Handler should return {@link @int/geotoolkit/attributes/LineStyle.LineStyle}
     */
    setProperties(properties: object | { data?: ApparentDipData[]; angleunit?: AbstractUnit | string; linestylehandler?: Function; } ): this;
    /**
     * Delete sample.
     * @param sample sample
     */
    removeSample(sample: ApparentDipData): this;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): ApparentDipData[];
}
