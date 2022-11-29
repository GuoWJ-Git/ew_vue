import {Registry as PersistenceRegistry} from '../../../persistence/Registry';

/**
 * The implementation of the default serializer registry for WellLogWidgets
 */
export class Registry extends PersistenceRegistry {
    /**
     * The implementation of the default serializer registry for WellLogWidgets
     */
    constructor();
    /**
     * Add mapping, which class will be used during deserialization
     * @param shortName short name to serialize
     * @param className class name
     */
    addMapping(shortName: string, className: string): void;
    /**
     * Return instance of the default registry
     */
    static getInstance(): Registry;
}
