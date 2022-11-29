import {LogPointSet} from './LogPointSet';
import {Rect} from '../util/Rect';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * Create the representation of a reference line.
 */
export class LogReferenceLine extends LogPointSet {
    /**
     * Create the representation of a reference line.
     * @param options value in track coordinates. by default from 0 to 1 or properties object
     * @param options.value current value in track coordinates. by default from 0 to 1.
     * @param options.level current level of wrap interpolation
     */
    constructor(options?: number | object | { value?: number; level?: number; } );
    /**
     * return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Returns the current value
     */
    getValue(): number;
    /**
     * Sets the current value
     * @param value value in track coordinates. by default from 0 to 1.
     */
    setValue(value: number): this;
    /**
     * Return the current level
     * @param level level of wrap interpolation
     */
    setLevel(level: number): this;
    /**
     * Return model limits
     */
    getModelLimits(): Rect | any;
    /**
     * Update geometry
     * Update scaled data, set state and draw graphics
     * @deprecated since 2021 (3.2)
     * @param context Rendering Context
     */
    updateGeometry(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {value: number; level: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.value current value in track coordinates. by default from 0 to 1.
     * @param properties.level current level of wrap interpolation
     */
    setProperties(properties: object | { value?: number; level?: number; } ): this;
}
