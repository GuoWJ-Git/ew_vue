import {TickGenerator, labelFormatHandler} from '../../axis/TickGenerator';
import {NumberFormat} from '../../util/NumberFormat';

/**
 * Defines a tick Generator for the histogram Shape
 */
export class HistogramTickGenerator extends TickGenerator {
    /**
     * Defines a tick Generator for the histogram Shape
     * @param options An object containing the properties to set
     * @param options.labelstrategy label strategy
     * @param options.minimumspan minimum span distance for labels and ticks
     * @param options.bins number of bins this histogram has
     * @param options.formatlabeleventhandler format label handler
     * @param options.rotatelabels rotate labels
     */
    constructor(options?: object | { labelstrategy?: LabelStrategy; minimumspan?: number; bins?: number; formatlabeleventhandler?: Function; rotatelabels?: boolean; }  | number);
    /**
     * Set format label handler
     * @param handler format label handler
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.labelstrategy label strategy
     * @param properties.minimumspan minimum span distance for labels and ticks
     * @param properties.bins number of bins this histogram has
     * @param properties.formatlabeleventhandler format label handler
     * @param properties.rotatelabels rotate labels
     */
    setProperties(properties: object | { labelstrategy?: LabelStrategy; minimumspan?: number; bins?: number; formatlabeleventhandler?: Function; rotatelabels?: boolean; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {labelstrategy: LabelStrategy; minimumspan: number; bins: number; formatlabeleventhandler: Function; rotatelabels: boolean} | any;
    /**
     * Sets major label format
     * @param format major label format
     */
    setMajorLabelFormat(format: NumberFormat): this;
    /**
     * Return major label format
     */
    getMajorLabelFormat(): NumberFormat;
    /**
     * Sets bin count
     * @param binCount number of bins this histogram has
     */
    setBinCount(binCount: number): this;
    /**
     * Sets the label strategy
     * @param strat label strategy
     */
    setLabelStrategy(strat: LabelStrategy): this;
    /**
     * Gets the label strategy
     */
    getLabelStrategy(): LabelStrategy;
    /**
     * sets the minimum span distance for labels and ticks
     * @param span minimum span distance for labels and ticks
     */
    setMinimumSpan(span: number): this;
    /**
     * gets the minimum span distance for labels and ticks
     */
    getMinimumSpan(): number;
    /**
     * Set rotation strategy
     * @param value rotate labels or not
     */
    setRotateLabels(value: boolean): this;
}
/**
 * Enum of geotoolkit.controls.axis.HistogramTickGenerator.LabelStrategy
 */
export enum LabelStrategy {
    /**
     * Tick marks are on the edges of bins
     */
    Edge = 0,
    /**
     * Tick Marks are in the center of bins and show a range for the bin
     */
    Range = 1,
    /**
     * Tick Marks are in the center of bins and show the center bin value
     */
    Center = 2
}
