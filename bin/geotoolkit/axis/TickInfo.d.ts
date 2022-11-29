import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';
import {AnchorType} from '../util/AnchorType';
import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';
import {AxisDimension} from './AxisDimension';

/**
 * Define information about tick, which is used in tick generator
 */
export class TickInfo {
    /**
     * Define information about tick, which is used in tick generator
     * @param tickType tick type like major, minor, edge
     * @param tickType.tickposition tick position
     * @param tickType.ticksize a tick size
     * @param tickType.linestyle line style
     * @param tickType.textstyle text style
     * @param tickType.anchortype anchor position of the label
     * @param tickType.rotationangle rotation angle
     * @param tickType.visiblemodelbounds visible model bounds
     * @param tickType.modelbounds model bounds
     * @param tickType.devicevisiblebounds visible device bounds
     * @param tickType.devicebounds bounds of the device
     * @param tickType.tickorigin tick origin
     * @param tickType.tickend tick end
     * @param tickType.contexttransformation transformation from model space to device space
     * @param tickType.cancel cancel flag
     * @param tickPosition Enum of axis tick positions
     * @param tickSize size of the tick
     * @param lineStyle line style
     * @param textStyle text style
     */
    constructor(tickType?: string | object | { tickposition?: number; ticksize?: number; linestyle?: LineStyle; textstyle?: TextStyle; anchortype?: AnchorType; rotationangle?: number; visiblemodelbounds?: Rect; modelbounds?: Rect; devicevisiblebounds?: Rect; devicebounds?: Rect; tickorigin?: number; tickend?: number; contexttransformation?: Transformation; cancel?: boolean; } , tickPosition?: TickPosition, tickSize?: number, lineStyle?: LineStyle, textStyle?: TextStyle);
    /**
     * Set model bounds
     * @param modelBounds model bounds
     */
    setModelBounds(modelBounds: Rect): this;
    /**
     * Set visible model bounds
     * @param modelBounds visible model bounds
     */
    setVisibleModelBounds(modelBounds: Rect): this;
    /**
     * Get model bounds
     */
    getModelBounds(): Rect;
    /**
     * Get visible model bounds
     */
    getVisibleModelBounds(): Rect;
    /**
     * Set device bounds
     * @param deviceBounds bounds of the device
     */
    setDeviceBounds(deviceBounds: Rect): this;
    /**
     * Set visible device bounds
     * @param deviceBounds visible device bounds
     */
    setVisibleDeviceBounds(deviceBounds: Rect): this;
    /**
     * Get device bounds
     */
    getDeviceBounds(): Rect;
    /**
     * Get visible device bounds
     */
    getVisibleDeviceBounds(): Rect;
    /**
     * Set context transform
     * @param transformation transformation from model space to device space
     */
    setContextTransformation(transformation: Transformation): this;
    /**
     * Get context transform
     */
    getContextTransformation(): Transformation;
    /**
     * Set tick end
     * @param end tick end
     */
    setTickEnd(end: number): this;
    /**
     * Get tick end
     */
    getTickEnd(): number;
    /**
     * Set tick origin
     * @param origin tick origin
     */
    setTickOrigin(origin: number): this;
    /**
     * Get tick origin
     */
    getTickOrigin(): number;
    /**
     * Set anchor type
     * @param type anchor position of the label
     */
    setAnchorType(type: AnchorType): this;
    /**
     * Get anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Return tick grade as string
     */
    getGrade(): string;
    /**
     * Sets tick grade
     * @param grade a tick type
     */
    setGrade(grade: string): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets line style
     * @param lineStyle line style
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle text style
     */
    setTextStyle(textStyle: TextStyle): this;
    /**
     * Return tick position
     */
    getTickPosition(): number;
    /**
     * Sets tick position
     * @param tickPosition tick position
     */
    setTickPosition(tickPosition: number): this;
    /**
     * Return rotation angle
     */
    getRotationAngle(): number;
    /**
     * Sets rotation angle
     * @param rotationAngle rotation angle
     */
    setRotationAngle(rotationAngle: number): this;
    /**
     * Return tick size
     */
    getTickSize(): number;
    /**
     * Return axis dimension
     */
    getAxisDimension(): AxisDimension;
    /**
     * Sets axis dimension
     * @param dimension axis dimension
     */
    setAxisDimension(dimension: AxisDimension): this;
    /**
     * Set tick size
     * @param tickSize a tick size
     */
    setTickSize(tickSize: number): this;
    /**
     * Cancel
     */
    cancel(): void;
    /**
     * Repeat
     */
    repeat(): void;
    /**
     * Is canceled
     */
    isCanceled(): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {tickType: string | object; tickposition: number; ticksize: number; linestyle: LineStyle; textstyle: TextStyle; anchortype: AnchorType; rotationangle: number; visiblemodelbounds: Rect; modelbounds: Rect; devicevisiblebounds: Rect; devicebounds: Rect; tickorigin: number; tickend: number; contexttransformation: Transformation; cancel: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.ticktype a tick type
     * @param properties.tickposition tick position
     * @param properties.ticksize a tick size
     * @param properties.linestyle line style
     * @param properties.textstyle text style
     * @param properties.anchortype anchor position of the label
     * @param properties.rotationangle rotation angle
     * @param properties.visiblemodelbounds visible model bounds
     * @param properties.modelbounds model bounds
     * @param properties.devicevisiblebounds visible device bounds
     * @param properties.devicebounds bounds of the device
     * @param properties.tickorigin tick origin
     * @param properties.tickend tick end
     * @param properties.contexttransformation transformation from model space to device space
     * @param properties.cancel cancel flag
     */
    setProperties(properties: object | { ticktype?: string; tickposition?: number; ticksize?: number; linestyle?: LineStyle; textstyle?: TextStyle; anchortype?: AnchorType; rotationangle?: number; visiblemodelbounds?: Rect; modelbounds?: Rect; devicevisiblebounds?: Rect; devicebounds?: Rect; tickorigin?: number; tickend?: number; contexttransformation?: Transformation; cancel?: boolean; } ): this;
}
/**
 * Enum of axis tick positions
 */
export enum TickPosition {
    /**
     * Ticks and labels are on the left side.
     */
    Left = 'left',
    /**
     * Ticks and labels are on the top side.
     */
    Top = 'top',
    /**
     * Ticks and labels are on the right side.
     */
    Right = 'right',
    /**
     * Ticks and labels are on the bottom side.
     */
    Bottom = 'bottom',
    /**
     * Ticks are on the left and right side.
     */
    LeftAndRight = 'leftandright',
    /**
     * Ticks are on the top and bottom side.
     */
    TopAndBottom = 'topandbottom',
    /**
     * Ticks is rendering between the axis or grid border.
     */
    Between = 'between',
    /**
     * Ticks and labels are at the center.
     */
    Middle = 'middle'
}
/**
 * Enum of label positions
 */
export enum LabelPosition {
    /**
     * Labels are centered in the axis (default)
     */
    Center = 'center',
    /**
     * Labels are left-aligned and on the left side of the axis
     */
    Left = 'left',
    /**
     * Labels are top-aligned and on the top side of the axis
     */
    Top = 'top',
    /**
     * Labels are right-aligned and on the right side of the axis
     */
    Right = 'right',
    /**
     * Labels are bottom-aligned and on the bottom side of the axis
     */
    Bottom = 'bottom'
}
