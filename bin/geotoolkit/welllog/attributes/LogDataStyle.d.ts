import {FillStyle} from '../../attributes/FillStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {LogData} from '../data/LogData';
import {LogAbstractData} from '../data/LogAbstractData';
import {InterpolationType} from '../../data/DataStepInterpolation';
import {LogGradientStyle} from './LogGradientStyle';

/**
 * Defines log fill style. This fillstyle can have data source that can be used to gradient colors.
 */
export class LogDataStyle extends FillStyle {
    /**
     * Defines log fill style. This fillstyle can have data source that can be used to gradient colors.
     * @param options properties object
     * @param options.renderbackground extra style parameter for background fill
     * @param options.datasource log data id
     */
    constructor(options?: object | { renderbackground?: boolean; datasource?: string; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: LogDataStyle): this;
    /**
     * Gets color for specified depth and values
     * @param x x device coordinate
     * @param depth depth
     * @param y y device coordinate
     * @param ratio ratio x to total width
     */
    getValueColor(x: number, depth: number, y?: number, ratio?: number): RgbaColor | null;
    /**
     * return log data
     */
    getLogData(): LogData;
    /**
     * set color provider
     * @param logData log data
     */
    setLogData(logData: LogAbstractData): this;
    /**
     * Sets interpolation type
     * @param interpolationType interpolation type
     */
    setInterpolationType(interpolationType: InterpolationType | string): this;
    /**
     * Returns interpolation type
     */
    getInterpolationType(): InterpolationType;
    /**
     * Return value at
     * @param depth depth to get value at
     * @param interpolationType interpolation type
     */
    getValueAt(depth: number, interpolationType: InterpolationType): number;
    /**
     * return log data id
     */
    getLogDataId(): string | any;
    /**
     * return render background state
     */
    getRenderBackground(): boolean;
    /**
     * set render background state
     * @param renderBackground extra style parameter for background fill
     */
    setRenderBackground(renderBackground: boolean): LogGradientStyle;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {renderbackground: boolean; datasource: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.renderbackground extra style parameter for background fill
     * @param properties.datasource log data id
     */
    setProperties(properties?: object | { renderbackground?: boolean; datasource?: string; } ): this;
}
