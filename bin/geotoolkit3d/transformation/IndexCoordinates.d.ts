import {XYCoordinates} from './XYCoordinates';

/**
 * IndexCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the index coordinates of a seismic volume.<br>
 * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
 */
export class IndexCoordinates extends XYCoordinates {
    /**
     * IndexCoordinates coordinates object.<br>
     * <br>
     * This object holds the information about the index coordinates of a seismic volume.<br>
     * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
     */
    constructor();
    /**
     * Gets the sample rate
     */
    getSampleRate(): number;
    /**
     * Gets the I step
     */
    getIStep(): number;
    /**
     * Gets the J step
     */
    getJStep(): number;
    /**
     * Initialize index using given json.<br>
     * <br>
     * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate<br>
     * @param index The json
     * @param index.i0 The starting 'i' index value
     * @param index.icount The 'i' index count
     * @param index.istep The 'i' index step
     * @param index.j0 The starting 'j' index value
     * @param index.jcount The 'j' index count
     * @param index.jstep The 'j' index step
     * @param index.z0 The starting 'z' index value
     * @param index.z1 The last 'z' index value
     * @param index.samplerate The 'z' index step
     * @param index.samplecount The 'z' index count
     */
    fromJSONIndex(index: object | { i0?: number; icount?: number; istep?: number; j0?: number; jcount?: number; jstep?: number; z0?: number; z1?: number; samplerate?: number; samplecount?: number; } ): this;
}
