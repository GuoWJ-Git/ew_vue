import {SyncOperation} from './SyncOperation';

/**
 * Define a registry for synchronization operations.
 */
export class SyncOperationRegistry {
    /**
     * Define a registry for synchronization operations.
     */
    constructor();
    /**
     * Register operation
     * @param operation operation of synchronization
     * @param type type of the object
     */
    registerOperation(operation: SyncOperation, type?: string): void;
    /**
     * Return registered operation
     * @param name name of operation
     * @param type type of object to apply operation
     */
    getOperation(name: string, type?: string): SyncOperation;
    /**
     * Return instance of the registry
     */
    static getInstance(): SyncOperationRegistry;
}
