import {EventDispatcher} from '../util/EventDispatcher';
import {QueryBuilder} from '../selection/QueryBuilder';

/**
 * Define base data object
 */
export class DataObject extends EventDispatcher {
    /**
     * Define base data object
     * @param options JSON options object
     * @param options.name name
     * @param options.uri unique resource identifier
     * @param options.type type
     */
    constructor(options?: object | { name?: string; uri?: string; type?: string; } );
    /**
     * Returns data object name
     */
    getName(): string;
    /**
     * Sets data object name
     * @param name data object name
     */
    setName(name: string): this;
    /**
     * Returns unique resource identifier
     */
    getUri(): string;
    /**
     * Sets unique resource identifier
     * @param uri unique identifier
     */
    setUri(uri: string): this;
    /**
     * Returns data type
     */
    getType(): string;
    /**
     * Sets data object type
     * @param type data type
     */
    setType(type: string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; uri: string; type: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON options object
     * @param properties.name name
     * @param properties.uri unique resource identifier
     * @param properties.type type
     */
    setProperties(properties?: object | { name?: string; uri?: string; type?: string; } ): this;
    /**
     * Add additional properties
     * @param properties additional properties of the dataobject
     */
    addProperties(properties: any): this;
    /**
     * Returns whether data object contains specific property
     * @param name property name
     */
    hasProperty(name: string): boolean;
    /**
     * Gets property by name
     * @param name property name
     */
    getProperty(name: string): any;
    /**
     * Sets property by name
     * @param name property name
     * @param value property value
     */
    setProperty(name: string, value: any): this;
    /**
     * Add a child object
     * @param data the child data to be added
     */
    addChild(data: DataObject | DataObject[]): this;
    /**
     * Remove child data object
     * @param data data object to be removed
     * @param silent will not fire any events if true
     */
    removeChild(data: DataObject, silent?: boolean): this;
    /**
     * Sets item by index
     * @param index index of the item
     * @param item node
     */
    set(index: number, item: DataObject): this | null;
    /**
     * Insert item by index
     * @param index specified index
     * @param item node
     * @param silent will not fire any events if true
     */
    insertChild(index: number, item: DataObject, silent?: boolean): this;
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
     * Return index of child data
     * ( index of the specified child or -1 if data is not found)
     * @param data data object to check index
     */
    indexOfChild(data: DataObject): number;
    /**
     * Sets parent data item
     * @param parent parent data item
     */
    setParent(parent: DataObject): this;
    /**
     */
    getParent(): DataObject;
    /**
     * This method is called if property bag is changed using setProperty method
     * @param prop property
     */
    onPropertyChanged(prop: any): this;
    /**
     * Query data item and child items by different conditions
     * @example
     * ```javascript
     * // Select by function
     * import {DataObject} from '@int/geotoolkit/data/DataObject';
     * const dataobject = new DataObject({'name': 'test', 'uri': 'testuri', 'type': 'testtype'});
     * const item1 = new DataObject({'name': 'item1', 'uri': 'item1', 'type': 'test'});
     * const item2 = new DataObject({'name': 'item2', 'uri': 'item2', 'type': 'test'});
     * dataobject.addChild([item1, item2]);
     * const item5 = new DataObject({'name': 'item5', 'uri': 'item5', 'type': 'test'});
     * item2.addChild(item5);
     * let founditem = null;
     * dataobject.query()
     *           .where( (item) => item.getParent() === dataobject)
     *           .where( (item) => item.getUri() === 'item2')
     *           .select((item) => {
     *                  founditem = item;
     *           });
     * ```
     * @example
     * ```javascript
     * // Select by expression
     * dataobject.query()
     *           .where( 'item => uri(item) == "item5"')
     *           .select((item) => {
     *                  founditem = item;
     *           });
     * ```
     */
    query(): QueryBuilder;
    /**
     * Dispose data object and all children. Clear all listeners
     */
    dispose(): void;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     */
    protected copyConstructor(src: DataObject): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @param copyData flag to copy data
     */
    clone(copyData?: boolean): DataObject;
}
/**
 * Events
 */
export enum Events {
    /**
     * ChildAdded
     */
    ChildAdded = 'ChildAdded',
    /**
     * ChildRemoved
     */
    ChildRemoved = 'ChildRemoved',
    /**
     * PropertyChanged
     */
    PropertyChanged = 'PropertyChanged'
}
