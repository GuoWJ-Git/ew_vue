import {Group} from '../../scene/Group';
import {IDeviceSizeCollection} from './IDeviceSizeCollection';

/**
 */
export class DeviceSizeGroup extends Group implements IDeviceSizeCollection {
    /**
     * @param options options (@see {@link @int/geotoolkit/scene/Group.Group} for inherited options set)
     * @param options.hasDeviceSizeElement device-size elements indicator
     */
    constructor(options?: object | { hasDeviceSizeElement?: boolean; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.hasDeviceSizeElement device-size elements indicator
     */
    setProperties(properties?: object | { hasDeviceSizeElement?: boolean; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {hasDeviceSizeElement: boolean} | any;
    /**
     * Gets device-size elements presence status
     */
    hasDeviceSizeElement(): boolean;
    /**
     * Sets (explicitly) device-size elements presence status
     * @param hasDeviceSizeElement device-size elements presence status
     */
    setHasDeviceSizeElement(hasDeviceSizeElement: boolean): this;
    /**
     * Updates device-size elements presence status (based in its childens' status)
     */
    updateHasDeviceSizeElement(): this;
}
