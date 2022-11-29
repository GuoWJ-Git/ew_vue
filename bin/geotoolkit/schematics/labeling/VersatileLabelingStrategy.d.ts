import {LabelingStrategyBase} from './LabelingStrategyBase';
import {ILayout1D} from '../../layout/ILayout1D';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ComponentNode} from '../scene/ComponentNode';
import {LocationType} from './LocationType';
import {LabelData} from './LabelData';
import {Group} from '../../scene/Group';

/**
 * Versatile labeling strategy implementation.
 */
export class VersatileLabelingStrategy extends LabelingStrategyBase {
    /**
     * Versatile labeling strategy implementation.
     * @param options strategy options
     * @param options.layout1d layout to apply to labels
     * @param options.gap gap between labels and/or connectors along MD-axis
     * @param options.gap.labels gap between labels
     * @param options.gap.connectors gap between connectors
     */
    constructor(options?: object | { layout1d?: ILayout1D; gap?: number | object | { labels?: number; connectors?: number; } ; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.layout1d layout to apply to labels
     * @param properties.gap gap between labels and/or connectors along MD-axis
     * @param properties.gap.labels gap between labels
     * @param properties.gap.connectors gap between connectors
     */
    setProperties(properties?: object | { layout1d?: ILayout1D; gap?: number | object | { labels?: number; connectors?: number; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {layout1d: ILayout1D; gap: {labels: number; connectors: number}} | any;
    /**
     * Gets 1D-layout
     */
    getLayout1D(): ILayout1D;
    /**
     * Sets 1D-layout
     * @param layout1D layout to set
     */
    setLayout1D(layout1D: ILayout1D): this;
    /**
     * Performs labels and connecting lines layout.
     * The implementation layouts all the labels withing one column (along well bore depth axis)
     * and aligns them according to "getLabelAlignment()" value.
     * Returns label data to render
     * @param context rendering context
     * @param nodes array of {geotoolkit.schematics.scene.ComponentNode}
     * @param locationType location type
     * @param dst array of {geotoolkit.schematics.labeling.LabelData}
     * @param group group
     * @param isHorizontal horizontal flag
     */
    protected doLabelingOnOneSide(context: RenderingContext, nodes: ComponentNode[], locationType: LocationType, dst: LabelData[], group: Group | null, isHorizontal: boolean): void;
}
