import {LabelShape} from './LabelShape';
import {ConnectorShape} from './ConnectorShape';
import {RenderingContext} from '../../renderer/RenderingContext';
import {WellBoreNode} from '../scene/WellBoreNode';
import {LabelData} from './LabelData';

/**
 * Abstraction for schematics well bore elements labeling.
 * @example
 * ```javascript
 * // This example shows how to change the font and size for the strategy
 * labelingStrategy.getOptions()['labelShape']
 *   .getLabelText()
 *   .getTextStyle()
 *   .setFont('14px sans-serif')
 *   .setColor('red');
 * ```
 */
export class LabelingStrategy {
    /**
     * Abstraction for schematics well bore elements labeling.
     * @param options strategy options
     * @param options.labelShape label shape
     * @param options.labelShapeHighlighted highlighted label shape
     * @param options.labelInfoProvider label info provider
     * @param options.beforeLabelingProc "before labeling" procedure
     * @param options.afterLabelingProc "after labeling" procedure
     * @param options.nextLabel callback to provide next label in legend mode
     * @param options.connectorShape connector shape
     */
    constructor(options?: object | { labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; beforeLabelingProc?: Function; afterLabelingProc?: Function; nextLabel?: Function; connectorShape?: ConnectorShape; } );
    /**
     * Returns strategy options
     */
    getOptions(): any;
    /**
     * Sets strategy options
     * @param options strategy options see {@link @int/geotoolkit/schematics/labeling/LabelingStrategy.LabelingStrategy#setProperties}
     */
    setOptions(options: any): this;
    /**
     * Returns strategy options
     */
    getProperties(): {labelShape: LabelShape; labelInfoProvider: Function; beforeLabelingProc: Function; afterLabelingProc: Function; connectorShape: ConnectorShape; labelShapeHighlighted: LabelShape; nextLabel: Function} | any;
    /**
     * Gets legend mode
     */
    getLegendMode(): boolean;
    /**
     * Sets legend mode
     * @param mode mode
     */
    setLegendMode(mode: boolean): this;
    /**
     * Sets strategy options
     * @param options strategy options
     * @param options.labelShape label shape
     * @param options.labelShapeHighlighted highlighted label shape
     * @param options.labelInfoProvider label info provider
     * @param options.beforeLabelingProc "before labeling" procedure
     * @param options.afterLabelingProc "after labeling" procedure
     * @param options.nextLabel callback to provide next label in legend mode
     * @param options.connectorShape connector shape
     */
    setProperties(options: object | { labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; beforeLabelingProc?: Function; afterLabelingProc?: Function; nextLabel?: Function; connectorShape?: ConnectorShape; } ): this;
    /**
     * Performs labels and connecting lines layout.
     * @param localContext rendering context
     * @param wellBoreNode well bore node to build the labeling of
     */
    doLabeling(localContext: RenderingContext, wellBoreNode: WellBoreNode): LabelData[];
}
