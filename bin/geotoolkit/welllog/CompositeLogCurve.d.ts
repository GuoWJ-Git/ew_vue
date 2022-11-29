import {LogCurve} from './LogCurve';
import {LogAbstractData} from './data/LogAbstractData';
import {LogFill, FillType} from './LogFill';
import {LogPointSet} from './LogPointSet';
import {Node} from '../scene/Node';
import {Rect} from '../util/Rect';

/**
 * Creates the custom representation of a well log curve with optional left and right fill. Data is passed in an LogAbstractData.
 * It uses geotoolkit.welllog.LogCurve internally. Please refer to WellLog Widget Visuals Tutorial ( Composite curve fill section) for an example.
 */
export class CompositeLogCurve extends LogCurve {
    /**
     * Creates the custom representation of a well log curve with optional left and right fill. Data is passed in an LogAbstractData.
     * It uses geotoolkit.welllog.LogCurve internally. Please refer to WellLog Widget Visuals Tutorial ( Composite curve fill section) for an example.
     * @param data data source to be displayed or properties object
     * @param data.leftfill left fill
     * @param data.rightfill right fill
     * @param data.leftfilltype type of the left fill
     * @param data.rightfilltype type of the right fill
     * @param data.leftreferencepointset left referencepointset point set
     * @param data.rightreferencepointset right referencepointset point set
     * @param autoUpdate automatic update from data
     */
    constructor(data?: LogAbstractData | object | { leftfill?: LogFill; rightfill?: LogFill; leftfilltype?: FillType | string; rightfilltype?: FillType | string; leftreferencepointset?: LogPointSet; rightreferencepointset?: LogPointSet; } , autoUpdate?: boolean);
    /**
     * @param event broadcast event
     * @param source who is initializing this event
     * @param args additional parameter
     */
    notify(event: string, source: Node, args: any): this;
    /**
     * Return curve bounds
     */
    getBounds(): Rect | any;
    /**
     * Return left fill
     */
    getLeftFill(): any | LogFill;
    /**
     * Return right fill
     */
    getRightFill(): any | LogFill;
    /**
     * returns the left fill type
     */
    getLeftFillType(): string;
    /**
     * returns the right fill type
     */
    getRightFillType(): string;
    /**
     * Sets reference point set to fill to the left
     * @param reference reference point set
     */
    setLeftReferencePointSet(reference: LogPointSet): this;
    /**
     * Sets reference point set
     */
    getLeftReferencePointSet(): any | LogPointSet;
    /**
     * Sets reference point set to fill to the right
     * @param reference reference point set
     */
    setRightReferencePointSet(reference: LogPointSet): this;
    /**
     * returns the reference point set
     */
    getRightReferencePointSet(): any | LogPointSet;
    /**
     * Sets fill type
     * @param type type of the fill
     */
    setLeftFillType(type: FillType | string): this;
    /**
     * Sets fill type
     * @param type type of the fill
     */
    setRightFillType(type: FillType | string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {leftfill: LogFill; rightfill: LogFill; leftfilltype: FillType | string; rightfilltype: FillType | string; leftreferencepointset: LogPointSet; rightreferencepointset: LogPointSet} | any;
    /**
     * Sets left fill
     * @param fill left fill
     */
    protected setLeftFill(fill: LogFill): this;
    /**
     * Sets right fill
     * @param fill right fill
     */
    protected setRightFill(fill: LogFill): this;
    /**
     * Helper method to set up value-fills visibility.
     * @param enable value-fills visibility on or off
     */
    setVisibleFill(enable: boolean): this;
    /**
     * Returns true if value-fills are visible
     */
    isVisibleFill(): boolean;
    /**
     * Returns display mode
     * (any combination of values: 'line', 'symbol', 'bar', 'value', 'fill'; or an empty array)
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param t In the old version, is JSON object with settings.
     *                In the old version, an array with a combination of values: 'line', 'symbol', 'value', 'bar'; or an empty array.
     *                In the oldest version, a string: 'line', 'symbol', 'both', 'bar', 'value' or 'none'
     * @param t.line curve flag
     * @param t.symbol symbol flag
     * @param t.value value flag
     * @param t.bar bar flag
     * @param t.fill fill flag
     */
    setDisplayMode(t: any[] | string | object | { line?: boolean; symbol?: boolean; value?: boolean; bar?: boolean; fill?: boolean; }  | any): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.leftfill left fill
     * @param properties.rightfill right fill
     * @param properties.leftfilltype type of the left fill
     * @param properties.rightfilltype type of the right fill
     * @param properties.leftreferencepointset left referencepointset point set
     * @param properties.rightreferencepointset right referencepointset point set
     */
    setProperties(properties: object | { leftfill?: LogFill; rightfill?: LogFill; leftfilltype?: FillType | string; rightfilltype?: FillType | string; leftreferencepointset?: LogPointSet; rightreferencepointset?: LogPointSet; } ): this;
}
