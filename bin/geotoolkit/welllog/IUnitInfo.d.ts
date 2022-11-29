import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Interface for unit information
 */
export abstract class IUnitInfo {
    /**
     * Return unit of the measure to be used to display scale in the header
     */
    abstract getScaleUnit(): AbstractUnit;
    /**
     * Return a unit of the measure of device
     */
    abstract getDeviceUnit(): AbstractUnit;
}
