/**
 * Registry which stores geometries.
 */
export class Registry {
    /**
     * Registry which stores geometries.
     */
    constructor();
    /**
     * Return known geometry
     * @param geometryName geometry name
     */
    getGeometry(geometryName: string): Function;
    /**
     * Register geometry extension
     * @param geometryName geometry name
     * @param extension geometry extension
     */
    registerGeometry(geometryName: string, extension: Function): this;
    /**
     * Returns instance of the Geometries registry
     */
    static getInstance(): Registry;
}
