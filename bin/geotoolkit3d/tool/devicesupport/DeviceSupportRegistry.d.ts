import {AbstractDeviceSupport} from './AbstractDeviceSupport';

/**
 * This class manages 'device-support' classes.<br>
 * <br>
 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
 * For example MSPointers or Touch events.<br>
 * <br>
 * Multiple implementation can coexist and this class will provide to the client code the implementation the 'most adapted' to the current browser.<br>
 * <br>
 * To determine which device support to use, this class prompts each devicesupport if it can works in the current environment.<br>
 * > device.isSupported()<br>
 * <br>
 * The first devicesupport to answer 'true' will be picked.<br>
 * If no device answers true, the default device support is used as a fallback.<br>
 * <br>
 */
export class DeviceSupportRegistry {
    /**
     * This class manages 'device-support' classes.<br>
     * <br>
     * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
     * For example MSPointers or Touch events.<br>
     * <br>
     * Multiple implementation can coexist and this class will provide to the client code the implementation the 'most adapted' to the current browser.<br>
     * <br>
     * To determine which device support to use, this class prompts each devicesupport if it can works in the current environment.<br>
     * > device.isSupported()<br>
     * <br>
     * The first devicesupport to answer 'true' will be picked.<br>
     * If no device answers true, the default device support is used as a fallback.<br>
     * <br>
     */
    constructor();
    /**
     * Sets the default device support class
     * @param devicesupport The constructor/class to instantiate and use as the default device support
     */
    static setDefaultDeviceSupport(devicesupport: AbstractDeviceSupport): void;
    /**
     * Finds a devicesupport that is supported in the current browser.
     */
    static getDeviceSupport(): any;
    /**
     * Gets the array containing the constructors/class that could be instantiated and used as a device support.
     */
    static getAllDeviceSupport(): AbstractDeviceSupport[];
}
