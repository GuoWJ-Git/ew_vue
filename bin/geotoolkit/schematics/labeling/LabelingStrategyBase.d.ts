import {LabelingStrategy} from './LabelingStrategy';
import {Mode} from './Mode';
import {ConnectorShape} from './ConnectorShape';
import {LocationType} from './LocationType';
import {AlignmentType} from './AlignmentType';
import {ConnectorLocationType} from './ConnectorLocationType';
import {IComponentsFilter} from './IComponentsFilter';
import {ILabelsFilter} from './ILabelsFilter';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';
import {WellBoreNode} from '../scene/WellBoreNode';
import {LabelData} from './LabelData';
import {Group} from '../../scene/Group';

/**
 * Abstraction for schematics well bore elements labeling.
 */
export class LabelingStrategyBase extends LabelingStrategy {
    /**
     * Abstraction for schematics well bore elements labeling.
     * @param options strategy options (see base class for inherited options)
     * @param options.mode labeling mode
     * @param options.connectorShape connector shape
     * @param options.defaultLocation label location type
     * @param options.defaultAlignment alignment type
     * @param options.connectorlocation connector location along trajectory
     * @param options.locationMap extra map for label locations
     * @param options.componentsfilter components filter
     * @param options.labelsfilter label filter
     */
    constructor(options?: object | { mode?: Mode; connectorShape?: ConnectorShape; defaultLocation?: LocationType; defaultAlignment?: AlignmentType; connectorlocation?: ConnectorLocationType; locationMap?: any[]; componentsfilter?: IComponentsFilter; labelsfilter?: ILabelsFilter; } );
    /**
     * Returns all properties
     */
    getProperties(): {mode: Mode; connectorShape: ConnectorShape; defaultLocation: LocationType; defaultAlignment: AlignmentType; connectorlocation: ConnectorLocationType; locationMap: any[]; componentsfilter: IComponentsFilter; labelsfilter: ILabelsFilter} | any;
    /**
     * Set all properties
     * @param properties strategy properties (see base class for inherited properties)
     * @param properties.mode labeling mode
     * @param properties.connectorShape connector shape
     * @param properties.defaultLocation label location type
     * @param properties.defaultAlignment alignment type
     * @param properties.connectorlocation connector location along trajectory
     * @param properties.locationMap extra map for label locations
     * @param properties.componentsfilter components filter
     * @param properties.labelsfilter label filter
     */
    setProperties(properties?: object | { mode?: Mode; connectorShape?: ConnectorShape; defaultLocation?: LocationType; defaultAlignment?: AlignmentType; connectorlocation?: ConnectorLocationType; locationMap?: any[]; componentsfilter?: IComponentsFilter; labelsfilter?: ILabelsFilter; } ): this;
    /**
     * Sets strategy options (See base class method API for more options)
     * @param options strategy options
     * @param options.mode labeling mode
     * @param options.componentsfilter components filter
     * @param options.defaultLocation label location type
     * @param options.defaultAlignment alignment type
     * @param options.connectorlocation connector location along trajectory
     * @param options.locationMap extra map for label locations.
     *      Array of { component: {string}, location: {geotoolkit.schematics.labeling.LocationType} }
     * @param options.labelInfoProvider label info provider
     */
    setOptions(options: object | { mode?: Mode; componentsfilter?: IComponentsFilter; defaultLocation?: LocationType; defaultAlignment?: AlignmentType; connectorlocation?: ConnectorLocationType; locationMap?: any[]; labelInfoProvider: Function; } ): this;
    /**
     * Sets labeling area(s) bounds
     * @param bounds labeling area bounds
     */
    setLabelsBounds(bounds: any): this;
    /**
     * Gets labeling area(s) bounds
     * @param location permitted values: "Left", "Right", "Top" or "Bottom"
     */
    getLabelsBounds(location?: string): Rect | null;
    /**
     * Performs labels and connecting lines layout.
     * @param context rendering context
     * @param wellBoreNode well bore node to build the labeling of
     */
    doLabeling(context: RenderingContext, wellBoreNode: WellBoreNode): LabelData[];
    /**
     * Derived class must override the empty method
     * @param context rendering context
     * @param nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param locationType location type
     * @param labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param group group to label
     * @param isHorizontal horizontal flag
     */
    protected doLabelingOnOneSide(context: RenderingContext, nodesLabeled: LabelData[], locationType: LocationType, labelsDataArray: LabelData[], group: Group | null, isHorizontal: boolean): void;
}
