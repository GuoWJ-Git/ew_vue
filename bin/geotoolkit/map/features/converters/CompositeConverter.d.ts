import {BaseConverter} from './BaseConverter';

/**
 * Provides feature converters store for centralized control and processing
 */
export class CompositeConverter extends BaseConverter {
    /**
     * Provides feature converters store for centralized control and processing
     * @param converters converter(s) for storing
     */
    constructor(converters: BaseConverter | any[]);
    /**
     * Adds converter to the end of the list for storing features
     * @param converter converter to add
     */
    addFeatureConverter(converter: BaseConverter): this;
    /**
     * Removes converter from the converters list
     * @param converter converter to remove
     */
    removeFeatureConverter(converter: BaseConverter): this;
}
