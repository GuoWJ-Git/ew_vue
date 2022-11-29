import {LabelingStrategyBase} from './LabelingStrategyBase';
import {RenderingContext} from '../../renderer/RenderingContext';
import {LabelData} from './LabelData';
import {LocationType} from './LocationType';
import {Group} from '../../scene/Group';

/**
 * Default labeling strategy implementation.
 */
export class DefaultLabelingStrategy extends LabelingStrategyBase {
    /**
     * Default labeling strategy implementation.
     * @param options strategy parameters
     * @param options.equallySpaced "equally spaced" flag
     * @param options.anchorValueFixed anchor fixed position flag
     * @param options.deltaPx deltaPx
     */
    constructor(options?: object | { equallySpaced?: boolean; anchorValueFixed?: boolean; deltaPx?: number; } );
    /**
     * Sets properties
     * @param properties strategy parameters
     * @param properties.equallySpaced "equally spaced" flag
     * @param properties.anchorValueFixed anchor fixed position flag
     * @param properties.deltaPx deltaPx
     */
    setProperties(properties?: object | { equallySpaced?: boolean; anchorValueFixed?: boolean; deltaPx?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {equallySpaced: boolean; anchorValueFixed: boolean; deltaPx: number} | any;
    /**
     * Sets strategy options (See base class method API for more options)
     * @param options strategy options
     * @param options.equallySpaced "equally spaced" flag
     * @param options.anchorValueFixed anchor fixed position flag
     * @param options.labelInfoProvider label info provider
     */
    setOptions(options: object | { equallySpaced?: boolean; anchorValueFixed?: boolean; labelInfoProvider: Function; } ): this;
    /**
     * Performs labels and connecting lines layout.
     * The implementation layouts all the labels withing one column (along well bore depth axis)
     * and aligns them according to "getLabelAlignment()" value.
     * Returns label data to render
     * @param context rendering context
     * @param nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param locationType location type
     * @param labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param group group to label
     * @param isHorizontal horizontal flag
     */
    protected doLabelingOnOneSide(context: RenderingContext, nodesLabeled: LabelData[], locationType: LocationType, labelsDataArray: LabelData[], group: Group | null, isHorizontal: boolean): void;
}
