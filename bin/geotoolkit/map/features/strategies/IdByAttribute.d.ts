import {IGetId} from './IGetId';

/**
 * Gets feature ID based on a feature attributes.
 * The implementation returns attributes[attributeName] to use as a feature ID.
 */
export class IdByAttribute implements IGetId {
    /**
     * Gets feature ID based on a feature attributes.
     * The implementation returns attributes[attributeName] to use as a feature ID.
     * @param attributeName attribute name to use as a feature ID
     */
    constructor(attributeName: string);
    /**
     * Gets feature ID based on a feature attributes.
     * The implementation returns attributes[attributeName].
     * @param attributes feature attributes
     */
    getFeatureId(attributes: object): number | string;
    /**
     * Gets the attribute name that is used to identify feature
     */
    getAttributeName(): string;
}
