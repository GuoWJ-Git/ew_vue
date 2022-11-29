import {AbstractComponentNodeFactory} from './AbstractComponentNodeFactory';

/**
 * Simple schematics component node factory.
 */
export class SimpleComponentNodeFactory extends AbstractComponentNodeFactory {
    /**
     * Simple schematics component node factory.
     * @param createComponentNode create method
     * @param validGeometryData validate method
     */
    constructor(createComponentNode: Function, validGeometryData?: Function | null);
}
