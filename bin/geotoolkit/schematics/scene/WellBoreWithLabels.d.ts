import {LabelData} from '../labeling/LabelData';
import {Group} from '../../scene/Group';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {WellBoreNode} from './WellBoreNode';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Callback for onDoLayoutHandler. Called at the end of labeling process.
 */
export type onDoLayoutHandler = (labelData: LabelData[], exporting?: boolean) => void;
/**
 * Default implementation for well bore with labels.
 * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
 * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
 */
export class WellBoreWithLabels extends Group implements INodeEnumerable {
    /**
     * Default implementation for well bore with labels.
     * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
     * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
     * @remarks fires {@link @int/geotoolkit/schematics/scene/WellBoreNode~Events~ComponentsLoaded}
     * @param options options to initialize the labeled well bore node
     * @param options.wellBoreNode labeled well bore node
     * @param options.labelingStrategy labeling strategy
     * @param options.highlight define highlight properties
     * @param options.highlight.label define label highlight properties
     * @param options.highlight.label.linestyle define line style attribute for label highlight
     * @param options.highlight.label.fillstyle define fill style attribute for label highlight
     */
    constructor(options?: object | { wellBoreNode?: WellBoreNode; labelingStrategy?: LabelingStrategy; highlight?: object | { label?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; } );
    /**
     * This sets layout handler. It is for end-user to be able to retrieve labeled schematics nodes' information, it is not called internally. Refer to the tutorial "Labeling Strategy" ("Adjacent Mode" section) for an example.
     * @param handler layout handler
     */
    setOnDoLayoutHandler(handler: Function): this;
    /**
     * Gets layout handler
     */
    getOnDoLayoutHandler(): Function;
    /**
     * Gets well bore node
     */
    getWellBoreNode(): WellBoreNode;
    /**
     * Sets well bore node
     * @param wellBoreNode well bore node
     */
    setWellBoreNode(wellBoreNode: WellBoreNode): this;
    /**
     * Sets labeling strategy
     * @param strategy labeling strategy
     */
    setLabelingStrategy(strategy: LabelingStrategy): this;
    /**
     * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultLabelingStrategy} instance
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Gets current labeling mode. Default: {string} WellBoreWithLabels.LabelingMode.LabelingModeDocked
     */
    getLabelingMode(): LabelingMode;
    /**
     * Sets labeling mode. NOTE: to setup custom labeling mode use
     * "setLabelingStrategy" method directly.
     * @param labelingMode labeling mode
     */
    setLabelingMode(labelingMode: LabelingMode): this;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.wellBoreNode labeled well bore node
     * @param properties.labelingStrategy labeling strategy
     * @param properties.highlight define highlight properties
     * @param properties.highlight.label define label highlight properties
     * @param properties.highlight.label.linestyle define line style attribute for label highlight
     * @param properties.highlight.label.fillstyle define fill style attribute for label highlight
     */
    setProperties(properties?: object | { wellBoreNode?: WellBoreNode; labelingStrategy?: LabelingStrategy; highlight?: object | { label?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {wellBoreNode: WellBoreNode; labelingStrategy: LabelingStrategy; highlight: {label: {linestyle: LineStyle; fillstyle: FillStyle}}} | any;
}
/**
 * Enum of labeling mode
 */
export enum LabelingMode {
    /**
     * Docked
     */
    LabelingModeDocked = 'Docked',
    /**
     * Adjacent
     */
    LabelingModeAdjacent = 'Adjacent'
}
