import {Registry as PersistenceRegistry} from '../../persistence/Registry';

/**
 * The implementation of the default serializer registry for widgets
 */
export class Registry extends PersistenceRegistry {
    /**
     * The implementation of the default serializer registry for widgets
     */
    constructor();
    /**
     * Return instance of the default registry
     */
    static getDefault(): Registry;
}
