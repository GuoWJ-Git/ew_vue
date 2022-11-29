import {Cancel} from './Cancel';

/**
 * A simple task scheduler to control parallel tasks execution
 */
export class TaskScheduler {
    /**
     * A simple task scheduler to control parallel tasks execution
     * @param options options
     * @param options.numberofparalleltasks number of parallel tasks execution
     */
    constructor(options?: object | { numberofparalleltasks?: number; } );
    /**
     * Return id of the last task
     */
    getLastTaskId(): number;
    /**
     * Sets number of running in parallel tasks
     * @param count number of parallel tasks
     */
    setNumberOfParallelTasks(count: number): this;
    /**
     * Gets number of running in parallel tasks
     */
    getNumberOfParallelTasks(): number;
    /**
     * Add a  new task to queue
     * @example
     * ```javascript
     * // add a task
     * scheduler.addTask((resolve, reject, cancel) => {
     *   resolve();
     * });
     * ```
     * @example
     * ```javascript
     * // add a task and use it as a promise
     * scheduler.addTask((resolve, reject, cancel) => {
     *   resolve();
     * }).toPromise().then((data) => {
     * ...
     * }).catch((error) => {
     * ...
     * });
     * ```
     * @example
     * ```javascript
     * // handle cancellation in the task
     * scheduler.addTask((resolve, reject, cancel) => {
     *   // Handle cancellation
     *   const AbortedErrorCode = 'Aborted';
     *   cancel.setErrorHandler(() => {
     *       reject(new Error(AbortedErrorCode));
     *   });
     * });
     * ```
     * @param task task function
     * @param options options all options keys are case insensitive
     * @param options.cancel a function to receive object to cancel
     */
    addTask(task: Function, options?: object | { cancel?: Function | Cancel; } ): ITask;
    /**
     * Return true if there are no tasks in the queue
     */
    isEmpty(): boolean;
    /**
     * Abort tasks by id
     * @param id id or array of id
     */
    abortTask(id: number | number[]): this;
    /**
     * Cancel all tasks
     */
    abort(): this;
}
/**
 * Define an interface for Task
 */
export abstract class ITask {
    /**
     * Creates promise for the current task
     */
    abstract toPromise(): Promise<any>;
    /**
     * Return object to cancel task execution
     */
    abstract getCancel(): Cancel;
    /**
     * Run the task
     * @param success a callback function to be call than task is competed
     * @param fail a callback function to be call than task is fail
     */
    abstract run(success: Function, fail: Function): void;
}
