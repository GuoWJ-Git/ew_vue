/**
 * This abstract class defines the interface of a readonly Iterator. Subclasses are responsible for implementing the actual iteration mechanism.
 */
export class Iterator {
    /**
     * This abstract class defines the interface of a readonly Iterator. Subclasses are responsible for implementing the actual iteration mechanism.
     */
    constructor();
    /**
     * Returns the next element in the iteration.
     */
    next(): any;
    /**
     * Returns true if the iteration has more elements.
     */
    hasNext(): boolean;
    /**
     * Applies filter to every element according to the function passed via the only parameter
     * @param func function to apply to each element
     */
    filter(func: Function): any[];
    /**
     * Executes a method for each item in iterator and return new iterator.
     * @param func function to apply to each element
     */
    forEach(func: Function): this;
    /**
     * Resets iterator to its initial state.
     */
    reset(): this;
    /**
     * Creates array based on iterator items
     * @param maxElements array size upper limit
     */
    toArray(maxElements?: number): any[];
    /**
     * Returns iterator by array elements
     * @param array of any object
     * @param func to filter elements
     */
    static getArrayIterator(array: object[], func?: Function): Iterator;
    /**
     * Returns iterator by the data
     * @param parameter data to iterate
     */
    static getIterator(parameter: Iterator | object[] | object): Iterator;
    /**
     * Runs asynchronous function for each element and wait execution
     * @param array array of any object or iterator
     * @param func function to apply to each element
     * @param callback function to be called at the end of execution
     */
    static awaitForEach(array: any[] | Iterator, func: Function, callback?: Function): void;
    /**
     * Creates array based on elements to iterate
     * @param iterator iterator
     * @param maxElements array size upper limit
     */
    static toArray(iterator: Iterator, maxElements?: number): any[];
}
