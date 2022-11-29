import {Registry as PersistenceRegistry} from '../../../persistence/Registry';

/**
 * The implementation fo the default serializer registry for SeismicViewWidget
 */
export class Registry extends PersistenceRegistry {
    /**
     * The implementation fo the default serializer registry for SeismicViewWidget
     */
    constructor();
    /**
     * Return instance of the default registry
     */
    static getInstance(): PersistenceRegistry;
}
