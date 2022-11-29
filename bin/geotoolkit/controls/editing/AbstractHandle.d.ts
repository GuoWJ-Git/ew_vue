import {Shape} from '../../scene/shapes/Shape';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {ShapeAdapter} from './ShapeAdapter';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Implements an abstract handle which can be used to manipulate toolkit components.
 */
export class AbstractHandle extends Shape {
    /**
     * Implements an abstract handle which can be used to manipulate toolkit components.
     * @param options JSON with properties
     * @param options.activefillstyle Fill style of the handle when it is active
     * @param options.inactivefillstyle Fill style to apply to handle when it is not active
     * @param options.activelinestyle Line style of the handle when it is active
     * @param options.inactivelinestyle Line style to apply to handle when it is not active
     * @param options.operationinfo operation info contains x, y, width and height as numbers
     * @param options.shapeadapter The owner adapter
     * @param options.active Active state flag
     */
    constructor(options: object | { activefillstyle?: FillStyle | string | object; inactivefillstyle?: FillStyle | string | object; activelinestyle?: LineStyle | string | object; inactivelinestyle?: LineStyle | string | object; operationinfo?: any; shapeadapter?: ShapeAdapter; active?: boolean; } );
    /**
     * Used for cloning
     * @param src Source to copy from
     */
    copyConstructor(src: AbstractHandle): this;
    /**
     * Sets the adapter which owns this handle.
     * @param adapter The owner adapter
     */
    setAdapter(adapter: ShapeAdapter): this;
    /**
     * Returns the adapter which owns this handle.
     */
    getAdapter(): ShapeAdapter | any;
    /**
     * Sets active state of this handle. Active state defines which style will be used
     * when rendering the handle.
     * @param active Active state flag
     */
    setActive(active: boolean): this;
    /**
     * Returns active state of this handle. Active state defines which style will be used
     * when rendering the handle.
     */
    isActive(): boolean;
    /**
     * Return fill style for active state
     */
    getActiveFillStyle(): FillStyle;
    /**
     * Sets fill style for active state
     * @param fillStyle a new fill style
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setActiveFillStyle(fillStyle: FillStyle | string | object, merge?: boolean): this;
    /**
     * Sets fill style for active state
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setActiveLineStyle(lineStyle: LineStyle | string | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; } , merge?: boolean): this;
    /**
     * Return fill style for inactive state
     */
    getActiveLineStyle(): LineStyle;
    /**
     * Sets fill style for active state
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setInactiveLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Return fill style for inactive state
     */
    getInactiveLineStyle(): LineStyle;
    /**
     * Return fill style for inactive state
     */
    getInactiveFillStyle(): FillStyle;
    /**
     * Sets fill style for inactive state
     * @param fillStyle a new fill style
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setInactiveFillStyle(fillStyle: FillStyle | string | object, merge?: boolean): this;
    /**
     * Sets a json with information required to operate this handle.
     * The information may be different for every adapter and defined by adapter itself
     * @param operationInfo operation info contains x, y, width and height as numbers
     */
    setOperationInfo(operationInfo: any): this;
    /**
     * Returns a json with information required to operate this handle.
     * The information may be different for every adapter and defined by adapter itself
     */
    getOperationInfo(): any;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): {activefillstyle: FillStyle; inactivefillstyle: FillStyle; activelinestyle: LineStyle; inactivelinestyle: LineStyle; operationinfo: any; shapeadapter: ShapeAdapter; active: boolean} | any;
    /**
     * Sets properties pertaining to this object
     * @param props object with the new properties to set
     * @param props.activefillstyle Fill style of the handle when it is active
     * @param props.inactivefillstyle Fill style to apply to handle when it is not active
     * @param props.activelinestyle Line style of the handle when it is active
     * @param props.inactivelinestyle Line style to apply to handle when it is not active
     * @param props.operationinfo operation info contains x, y, width and height as numbers
     * @param props.shapeadapter The owner adapter
     * @param props.active Active state flag
     */
    setProperties(props: object | { activefillstyle?: FillStyle | string | object; inactivefillstyle?: FillStyle | string | object; activelinestyle?: LineStyle | string | object; inactivelinestyle?: LineStyle | string | object; operationinfo?: any; shapeadapter?: ShapeAdapter; active?: boolean; } ): this;
}
