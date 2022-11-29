import {Group} from '../../scene/Group';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {WellBoreNode, ViewMode} from './WellBoreNode';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Transformer2d} from '../../deviation/Transformer2d';
import {Trajectory2d} from '../../deviation/Trajectory2d';

/**
 * Represents deviated well bore node with labels. It wraps well bore node with automatically created geotoolkit.scene.DeviatedCompositeNode.
 */
export class DeviatedWellBoreWithLabels extends Group implements INodeEnumerable {
    /**
     * Represents deviated well bore node with labels. It wraps well bore node with automatically created geotoolkit.scene.DeviatedCompositeNode.
     * @param options options
     * @param options.wellBoreNode wellBore node
     * @param options.labeling labeling strategy and strategy options see {geotoolkit.schematics.labeling.DefaultDeviatedStrategy#setProperties}
     * @param options.labelingStrategy labeling strategy
     * @param options.trajectory trajectory options
     * @param options.trajectory.lines lines options
     * @param options.trajectory.lines.visible lines visibility
     * @param options.trajectory.lines.linestyle linestyle
     * @param options.trajectory.stations stations options
     * @param options.trajectory.stations.visible stations visibility
     * @param options.trajectory.stations.symbol stations symbol properties see {geotoolkit.scene.shapes.SymbolShape#setProperties}
     * @param options.highlight define highlight properties
     * @param options.highlight.label define label highlight properties
     * @param options.highlight.label.linestyle define line style attribute for label highlight
     * @param options.highlight.label.fillstyle define fill style attribute for label highlight
     * @param options.deviation deviation options
     * @param options.deviation.transformer 2d-transformer to use
     * @param options.deviation.trackWidth track width
     * @param options.deviation.offset offset in pixels to the trajectory segment
     * @param options.deviation.clip flag to enable clipping
     */
    constructor(options?: object | { wellBoreNode?: WellBoreNode; labeling?: object; labelingStrategy?: LabelingStrategy; trajectory?: object | { lines?: object | { visible?: boolean; linestyle?: LineStyle | string | any; } ; stations?: object | { visible?: boolean; symbol?: any; } ; } ; highlight?: object | { label?: object | { linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; } ; } ; deviation?: object | { transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: number; } ; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.wellBoreNode wellBore node
     * @param properties.labeling labeling strategy and strategy properties see {geotoolkit.schematics.labeling.DefaultDeviatedStrategy#setProperties}
     * @param properties.labelingStrategy labeling strategy
     * @param properties.trajectory trajectory properties
     * @param properties.trajectory.lines lines properties
     * @param properties.trajectory.lines.visible lines visibility
     * @param properties.trajectory.lines.linestyle linestyle
     * @param properties.trajectory.stations stations properties
     * @param properties.trajectory.stations.visible stations visibility
     * @param properties.trajectory.stations.symbol stations symbol properties see {geotoolkit.scene.shapes.SymbolShape#setProperties}
     * @param properties.highlight define highlight properties
     * @param properties.highlight.label define label highlight properties
     * @param properties.highlight.label.linestyle define line style attribute for label highlight
     * @param properties.highlight.label.fillstyle define fill style attribute for label highlight
     * @param properties.deviation deviation properties
     * @param properties.deviation.transformer 2d-transformer to use
     * @param properties.deviation.trackWidth track width
     * @param properties.deviation.offset offset in pixels to the trajectory segment
     * @param properties.deviation.clip flag to enable clipping
     */
    setProperties(properties?: object | { wellBoreNode?: WellBoreNode; labeling?: object; labelingStrategy?: LabelingStrategy; trajectory?: object | { lines?: object | { visible?: boolean; linestyle?: LineStyle | string | any; } ; stations?: object | { visible?: boolean; symbol?: any; } ; } ; highlight?: object | { label?: object | { linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; } ; } ; deviation?: object | { transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: number; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {wellBoreNode: WellBoreNode; labeling: object; labelingStrategy: LabelingStrategy; trajectory: {lines: {visible: boolean; linestyle: LineStyle | string | any}; stations: {visible: boolean; symbol: any}}; highlight: {label: {linestyle: LineStyle | string | any; fillstyle: FillStyle | string | any}}; deviation: {transformer: Transformer2d; trackWidth: number; offset: number; clip: number}} | any;
    /**
     * Gets well bore view mode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param viewMode well bore view mode
     */
    setViewMode(viewMode?: ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Sets visualization options
     * @param options options see {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels#setProperties}
     */
    setOptions(options: object): this;
    /**
     * Sets WebGL rendering
     * @param webGLRendering true for enable webgl rendering
     */
    setWebGLRendering(webGLRendering: boolean): this;
    /**
     * Sets deviation options.
     * @param deviation deviation
     * @param deviation.trajectory trajectory along the path
     * @param deviation.transformer transformer to be used
     * @param deviation.trackWidth track width
     * @param deviation.offset offset in pixels to the trajectory segment
     * @param deviation.clip flag to enable clipping
     */
    setDeviation(deviation: object | { trajectory: Trajectory2d; transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: number; } ): this;
    /**
     * Gets deviation options
     */
    getDeviation(): {trajectory: Trajectory2d; transformer: Transformer2d; trackWidth: number; offset: number; clip: number} | object;
    /**
     * Sets layout handler
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
     * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultDeviatedStrategy} instance
     */
    getLabelingStrategy(): LabelingStrategy;
}
