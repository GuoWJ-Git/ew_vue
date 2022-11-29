/**
 * Define an object that represents the report element supported Wire mode
 */
export abstract class IWireElement {
    /**
     * Set Wire mode
     * @param wireMode wire mode
     */
    abstract setWireMode(wireMode: boolean): this;
    /**
     * Returns Wire mode
     */
    abstract getWireMode(): boolean;
}
