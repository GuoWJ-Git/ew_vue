import {Group} from '../../scene/Group';

/**
 * Multi-lateral WellBoreNode representation.
 */
export class MultiLateralWellBoreNode extends Group {
    /**
     * Multi-lateral WellBoreNode representation.
     * @param options options
     * @param options.clip clip options
     * @param options.clip.on clip on flag
     * @param options.clip.components clip components
     * @param options.trajectory trajectory options
     * @param options.trajectory.lines trajectory lines options
     * @param options.trajectory.lines.visible trajectory lines visible options
     * @param options.trajectory.stations stations options
     * @param options.trajectory.stations.visible stations visible
     * @param options.trajectory.stations.symbol stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param options.trackWidth track width
     * @param options.data data array
     */
    constructor(options?: object | { clip?: object | { on?: boolean; components?: string | any[]; } ; trajectory?: object | { lines?: object | { visible?: boolean; } ; stations?: object | { visible?: boolean; symbol?: any; } ; } ; trackWidth?: number; data?: any[]; } );
    /**
     * @param data data
     */
    setData(data: any[]): this;
    /**
     * Returns options
     */
    getOptions(): object | any;
    /**
     * Sets the node options
     * @param options node options see {@link @int/geotoolkit/schematics/scene/MultiLateralWellBoreNode.MultiLateralWellBoreNode#setProperties}
     */
    setOptions(options: object): this;
    /**
     * Returns node properties
     */
    getProperties(): {clip: {on: boolean; components: string | any[]}; trajectory: {lines: {visible: boolean}; stations: {visible: boolean}}; trackWidth: number} | any;
    /**
     * Sets the node properties
     * @param properties properties
     * @param properties.clip clip properties
     * @param properties.clip.on clip on flag
     * @param properties.clip.components clip components
     * @param properties.trajectory trajectory properties
     * @param properties.trajectory.lines trajectory lines properties
     * @param properties.trajectory.lines.visible trajectory lines visible properties
     * @param properties.trajectory.stations stations properties
     * @param properties.trajectory.stations.visible stations visible
     * @param properties.trajectory.stations.symbol stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param properties.trackWidth track width
     * @param properties.data data array
     */
    setProperties(properties?: object | { clip?: object | { on?: boolean; components?: string | any[]; } ; trajectory?: object | { lines?: object | { visible?: boolean; } ; stations?: object | { visible?: boolean; symbol?: any; } ; } ; trackWidth?: number; data?: any[]; } ): this;
}
/**
 * ScalesRatioMode
 */
export enum ScalesRatioMode {
    /**
     * Free
     */
    Free = 'Free',
    /**
     * Keep
     */
    Keep = 'Keep'
}
