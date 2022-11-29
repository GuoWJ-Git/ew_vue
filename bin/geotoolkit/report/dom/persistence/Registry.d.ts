import {Registry as PersistenceRegistry} from '../../../persistence/Registry';

/**
 * The implementation of the default DOM serializer registry
 */
export class Registry extends PersistenceRegistry {
    /**
     * The implementation of the default DOM serializer registry
     */
    constructor();
    /**
     * Return instance of the default registry
     */
    static getInstance(): PersistenceRegistry;
}
