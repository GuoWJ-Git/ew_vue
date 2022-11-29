import {WellBoreNode, ViewMode} from './WellBoreNode';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
 */
export class SinusoidNode extends WellBoreNode {
    /**
     * WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
     * @param options 
     * @param options.sinusoid well bore node sinusoid options
     * @param options.sinusoid.depthfrom depth value to start drawing sinusoid from
     * @param options.sinusoid.amplitude sinusoid sine amplitude in pixels
     * @param options.sinusoid.period sinusoid sine period in pixels
     * @param options.sinusoid.accuracy sinusoid sine representation accuracy (bigger number means better accuracy and worse performance)
     * @param options.sinusoid.linestyle sinusoid line style
     */
    constructor(options?: object | { sinusoid?: object | { depthfrom?: number; amplitude?: number; period?: number; accuracy?: number; linestyle?: LineStyle; } ; } );
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {sinusoid: {depthfrom: number; amplitude: number; period: number; accuracy: number; linestyle: LineStyle}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.sinusoid wellbore node sinusoid options
     * @param properties.sinusoid.depthfrom depth value to start drawing sinusoid from
     * @param properties.sinusoid.amplitude sinusoid sine amplitude in pixels
     * @param properties.sinusoid.period sinusoid sine period in pixels
     * @param properties.sinusoid.accuracy sinusoid sine representation accuracy
     * @param properties.sinusoid.linestyle sinusoid line style
     */
    setProperties(properties?: object | { sinusoid?: object | { depthfrom?: number; amplitude?: number; period?: number; accuracy?: number; linestyle?: LineStyle; } ; } ): this;
    /**
     * Sets well bore view mode.
     * @param viewMode well bore view mode
     */
    setViewMode(viewMode?: ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
}
