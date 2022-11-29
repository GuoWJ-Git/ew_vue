import {NumericTickGenerator} from './NumericTickGenerator';
import {labelFormatHandler} from './TickGenerator';

/**
 * Creates discrete value tick generator
 */
export class DiscreteValueTickGenerator extends NumericTickGenerator {
    /**
     * Creates discrete value tick generator
     * @param dataProvider should be a function or instance of class that implements 'getTicksAndLabels' method
     * @param dataProvider.labels array of labels
     * @param dataProvider.positions array of the model label positions
     * @param dataProvider.getTicksAndLabels function to get ticks and labels
     * @param dataProvider.maxlabel max label
     */
    constructor(dataProvider?: object | { labels?: string[]; positions?: number[]; getTicksAndLabels?: Function; maxlabel?: string; }  | Function);
    /**
     * Sets discrete data provider
     * @param dataProvider should be a function or instance of class that implements 'getTicksAndLabels' method
     * @param dataProvider.labels array of labels
     * @param dataProvider.positions array of the model label positions
     */
    setDataProvider(dataProvider: object | { labels?: string[]; positions?: number[]; }  | Function): this;
    /**
     * Set Major or Minor tick step size
     * @param tickGrade tick grade MAJOR or MINOR
     * @param tickStep amount each tick should step
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Sets label format handler
     * @param handler handler is called to specify format of the label
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {maxlabel: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.maxlabel max label
     */
    setProperties(properties?: object | { maxlabel?: string; } ): this;
}
