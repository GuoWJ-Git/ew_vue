import {Axis} from '../../axis/Axis';
import {RenderingContext} from '../../renderer/RenderingContext';
import {AbstractUnit} from '../../util/AbstractUnit';
import {LogVisualHeader} from './LogVisualHeader';
import {LogAxis} from '../LogAxis';
import {TextStyle} from '../../attributes/TextStyle';
import {Format} from '../../util/Format';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Callback for setFormatHeaderHandler to specify a custom header formatter
 */
export type formatHeaderHandler = (header?: LogAxisVisualHeader, visual?: Axis, context?: RenderingContext, info?: object | { scale?: number; scaleunit?: AbstractUnit; deviceunit?: AbstractUnit; scaletext?: string; abbreviationtext?: string; }  | any) => string | null;
/**
 * Define header for LogAxis. Any of the predefined {@link @int/geotoolkit/welllog/header/LogAxisVisualHeader.HeaderType} can be used for displaying axis labels. <br>
 * It is not possible to modify the existing header, but user can provide own callback function to return text, which can have only necessary
 * information to be displayed in the header.
 * User also has an option to define custom Header Types. please refer to the example below.
 */
export class LogAxisVisualHeader extends LogVisualHeader {
    /**
     * Define header for LogAxis. Any of the predefined {@link @int/geotoolkit/welllog/header/LogAxisVisualHeader.HeaderType} can be used for displaying axis labels. <br>
     * It is not possible to modify the existing header, but user can provide own callback function to return text, which can have only necessary
     * information to be displayed in the header.
     * User also has an option to define custom Header Types. please refer to the example below.
     * @param options logaxis visual or properties object
     * @param options.displayvaluetextstyle text style of the display value
     * @param options.headertype enum of header type
     * @param options.autolabelrotation define automatic label rotation if track is narrow
     * @param options.labelrotationangle define optional label rotation angle relative to header
     * @param options.scaleformat scale label format. if scale format is not specified, default one is used.
     * @param options.valuetypestyle style a style how to display a scale value if header type is scale
     */
    constructor(options?: LogAxis | object | { displayvaluetextstyle?: TextStyle | string | object; headertype?: HeaderType; autolabelrotation?: boolean; labelrotationangle?: number; scaleformat?: Format; valuetypestyle?: TypeStyles; } );
    /**
     * Set auto label rotation
     * @param bool enable automatic label rotation
     */
    setAutoLabelRotation(bool: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * Sets label rotation angle in radians
     * @example
     * ```javascript
     * // user can customize the label rotation angle
     * setLabelRotationAngle(-Math.PI / 2)
     * ```
     * @param angle label rotation angle, in radians
     */
    setLabelRotationAngle(angle: number): this;
    /**
     * Returns label rotation angle
     */
    getLabelRotationAngle(): number;
    /**
     * Scale format to format depth scale. if scale format is not specified, default one is used.
     */
    getScaleFormat(): Format;
    /**
     * Scale format to format depth scale
     * @param format format
     */
    setScaleFormat(format: Format): this;
    /**
     * Gets textStyle of the value displayed
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Sets a type of header. In addition to predefined header types Custom header type can be used.
     * @example
     * ```javascript
     * import {HeaderType} from '@int/geotoolkit/welllog/header/LogAxisVisualHeader';
     * import {LogAxis} from '@int/geotoolkit/welllog/LogAxis';
     * // This header is an option to display header for index track. To set it to simple index track header
     * // you need to call a method getHeaderContainer on your WellLogWidget and change a property of the prototype axis before inserting tracks in your widget.
     * // The code below shows it.
     * const headerProvider = widget.getHeaderContainer().getHeaderProvider();
     * const logAxisVisualHeader = headerProvider.getHeaderProvider(LogAxis.getClassName());
     * logAxisVisualHeader.setHeaderType(HeaderType.Simple);
     * ```
     * @param headerType type of header (Enum of header type)
     */
    setHeaderType(headerType: HeaderType): this;
    /**
     * Return a type of the header
     */
    getHeaderType(): HeaderType;
    /**
     * Sets a current text style for displayed value
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Set displayed unit  for date time axis.
     * If null, units will be automatically calculated
     * ex. ['h','min','s','ms'] and 1 inch of 4830040 ms  will be displayed
     * 1: 1:20:30:40
     *  in:h:min:s:ms
     * @param units unit for date time axis.
     */
    setTimeIntervalUnits(units: any[]): this;
    /**
     * Get displayed unit for date time axis
     */
    getTimeIntervalUnits(): any[];
    /**
     * Sets format header handler
     * @param handler handler is called to specify format of the header
     */
    setFormatHeaderHandler(handler: Function | formatHeaderHandler): this;
    /**
     * Return value type style how to display scale if header type is Scale.
     */
    getValueTypeStyle(): TypeStyles;
    /**
     * Sets a value type style how to display scale value if header type is Scale.
     * @param style a style how to display a scale value if header type is scale
     */
    setValueTypeStyle(style: TypeStyles): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displayvaluetextstyle: TextStyle; headertype: HeaderType; autolabelrotation: boolean; labelrotationangle: number; scaleformat: Format; valuetypestyle: TypeStyles} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displayvaluetextstyle text style of the display value
     * @param properties.headertype enum of header type
     * @param properties.autolabelrotation define automatic label rotation if track is narrow
     * @param properties.labelrotationangle define optional label rotation angle relative to header
     * @param properties.scaleformat scale format
     * @param properties.valuetypestyle style a style how to display a scale value if header type is scale
     */
    setProperties(properties?: object | { displayvaluetextstyle?: TextStyle | string | object; headertype?: HeaderType; autolabelrotation?: boolean; labelrotationangle?: number; scaleformat?: Format; valuetypestyle?: TypeStyles; } ): this;
    /**
     * used to trigger a redraw when styles has been changed
     */
    protected getInvalidateMethod(): Function;
}
/**
 * Enum of value type style to specify how to display a scale value
 */
export enum TypeStyles {
    /**
     * Display text of scale
     */
    Text = 0,
    /**
     * Display a button with scale
     */
    Button = 1,
    /**
     * Display nothing
     */
    None = 2
}
/**
 * Enum of HeaderType
 */
export enum HeaderType {
    /**
     * Display scale, name and scale unit and device unit
     */
    Scale = 'scale',
    /**
     * Display scale, name and scale unit
     */
    SimpleScale = 'simplescale',
    /**
     * Display name and unit only
     */
    Simple = 'simple',
    /**
     * Display name, unit and visible range
     */
    Range = 'range',
    /**
     * Display name, unit and full model range
     */
    FullRange = 'fullrange',
    /**
     * Custom
     */
    Custom = 'custom'
}
