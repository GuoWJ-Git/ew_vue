import {EventDispatcher} from './EventDispatcher';
import {Iterator} from './iterator';

/**
 * Collection represents a group of objects, known as its elements
 */
export class Collection extends EventDispatcher {
    /**
     * Collection represents a group of objects, known as its elements
     */
    constructor();
    /**
     * Add item(s)
     * @param items item(s) to add
     */
    add(items: any | any[]): void;
    /**
     * insert item at index
     * @param index index
     * @param item item to insert
     */
    insert(index: number, item: any): void;
    /**
     * Remove At index
     * @param index index of item
     */
    removeAtIndex(index: number): void;
    /**
     * Remove
     * @param item item
     */
    remove(item: any): void;
    /**
     * Clear All
     */
    clear(): void;
    /**
     * Return number of items int eh collection
     */
    getCount(): number;
    /**
     * Return item by index
     * @param index index of the item in collection
     */
    get(index: number): any;
    /**
     * Return index of item
     * ( index of the specified child or -1 if node is not found)
     * @param item item to check index
     */
    indexOf(item: any): number;
    /**
     * Get Iterator
     */
    getIterator(): Iterator;
}
/**
 * Collection events enumerator
 */
export enum Events {
    /**
     * Add
     */
    Add = 'add',
    /**
     * Remove
     */
    Remove = 'remove',
    /**
     * Change
     */
    Change = 'change',
    /**
     * Clear
     */
    Clear = 'clear'
}
