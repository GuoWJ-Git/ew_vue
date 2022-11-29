import {Trace} from './Trace';

/**
 * Defines a result which is returned by query
 */
export class QueryResult {
    /**
     * Defines a result which is returned by query
     */
    constructor();
    /**
     * Iterate each section is result set
     * @param callback callback function with two parameters section id and section
     */
    foreach(callback: Function): void;
    /**
     * Returns initial query object
     */
    getQuery(): any;
    /**
     * Return trace by index
     * @param id trace id
     */
    getTrace(id: number): Trace;
}
