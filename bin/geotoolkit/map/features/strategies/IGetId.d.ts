/**
 * Gets feature ID based on a feature properties
 */
export abstract class IGetId {
    /**
     * Gets feature ID based on a feature properties
     * @param source feature properties
     */
    abstract getFeatureId(source: object): number | string;
}
