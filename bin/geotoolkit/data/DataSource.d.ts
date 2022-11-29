import {EventDispatcher} from '../util/EventDispatcher';
import {DataObject} from './DataObject';

/**
 * Define Abstract Data Model
 */
export class DataSource extends EventDispatcher {
    /**
     * Define Abstract Data Model
     */
    constructor();
    /**
     * begin transaction
     */
    beginUpdate(): this;
    /**
     * end transaction
     */
    endUpdate(): this;
    /**
     * Add a child object
     * @param data the child data to be added
     */
    addChild(data: DataObject | DataObject[]): this;
    /**
     * Remove child data object
     * @param data data to be removed
     */
    removeChild(data: DataObject): this;
    /**
     * Remove all child data
     */
    clearChildren(): this;
    /**
     * Return data by index
     * @param i index of the data
     */
    getChild(i: number): DataObject;
    /**
     * Return number of child data
     */
    getChildrenCount(): number;
    /**
     * Query data object items
     */
    query(): any;
    /**
     * Load a part of the data
     */
    update(): this;
}
/**
 * DataSource's Events enumerator
 */
export enum Events {
    /**
     * Event type fired on a State Change
     */
    StateChanged = 'StateChanged'
}
