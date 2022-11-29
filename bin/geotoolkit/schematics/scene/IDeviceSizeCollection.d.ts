/**
 * CompositeNode API extension to support device-size elements
 */
export abstract class IDeviceSizeCollection {
    /**
     * Gets device-size elements presence status
     */
    abstract hasDeviceSizeElement(): boolean;
    /**
     * Sets (explicitly) device-size elements presence status
     * @param hasDeviceSizeElement device-size elements presence status
     */
    abstract setHasDeviceSizeElement(hasDeviceSizeElement: boolean): this;
    /**
     * Updates device-size elements presence status (based in its childens' status)
     */
    abstract updateHasDeviceSizeElement(): this;
}
