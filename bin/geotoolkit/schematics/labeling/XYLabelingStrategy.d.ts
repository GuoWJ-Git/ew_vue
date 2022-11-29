import {DefaultLabelingStrategy} from './DefaultLabelingStrategy';
import {LocationType} from './LocationType';
import {AlignmentType} from './AlignmentType';
import {ConnectorShape} from './ConnectorShape';
import {RenderingContext} from '../../renderer/RenderingContext';
import {LabelData} from './LabelData';
import {Group} from '../../scene/Group';

/**
 * Labeling strategy implementation based on XY layout and LocationType enum.
 */
export class XYLabelingStrategy extends DefaultLabelingStrategy {
    /**
     * Labeling strategy implementation based on XY layout and LocationType enum.
     * @param options strategy options
     * @param options.defaultLocation label location type
     * @param options.defaultAlignment alignment type
     * @param options.connectorShape connector shape
     * @param options.equallySpaced "equally spaced" flag
     * @param options.anchorValueFixed anchor fixed position flag
     * @param options.anchorValueShiftMult anchor value shift multiplier
     * @param options.columns number of columns
     */
    constructor(options?: object | { defaultLocation?: LocationType; defaultAlignment?: AlignmentType; connectorShape?: ConnectorShape; equallySpaced?: boolean; anchorValueFixed?: boolean; anchorValueShiftMult?: number; columns?: number; } );
    /**
     * Sets properties
     * @param properties strategy options
     * @param properties.defaultLocation label location type
     * @param properties.defaultAlignment alignment type
     * @param properties.connectorShape connector shape
     * @param properties.equallySpaced "equally spaced" flag
     * @param properties.anchorValueFixed anchor fixed position flag
     * @param properties.anchorValueShiftMult anchor value shift multiplier
     * @param properties.columns number of columns
     */
    setProperties(properties?: object | { defaultLocation?: LocationType; defaultAlignment?: AlignmentType; connectorShape?: ConnectorShape; equallySpaced?: boolean; anchorValueFixed?: boolean; anchorValueShiftMult?: number; columns?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {defaultLocation: LocationType; defaultAlignment: AlignmentType; connectorShape: ConnectorShape; equallySpaced: boolean; anchorValueFixed: boolean; anchorValueShiftMult: number; columns: number} | any;
    /**
     * Sets strategy options (See base class method API for more options)
     * @param options strategy options
     * @param options.anchorValueShiftMult anchor value shift multiplier
     * @param options.columns number of columns
     * @param options.labelInfoProvider label info provider
     */
    setOptions(options: object | { anchorValueShiftMult?: number; columns?: number; labelInfoProvider: Function; } ): this;
    /**
     * Gets layout column number
     */
    getLayoutColumnNumber(): number;
    /**
     * Sets layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     * @param layoutColumnNumber layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     * Default value: 3.
     */
    setLayoutColumnNumber(layoutColumnNumber: number): this;
    /**
     * Performs labels and connecting lines layout
     * @param context rendering context
     * @param nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param locationType location type
     * @param labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param group group to label
     * @param isHorizontal horizontal flag
     */
    protected doLabelingOnOneSide(context: RenderingContext, nodesLabeled: LabelData[], locationType: LocationType, labelsDataArray: LabelData[], group: Group | null, isHorizontal: boolean): void;
}
