import {IGetRangeHeight} from './IGetRangeHeight';

/**
 * ByType filters out all features that are not featureType(s) instances.
 */
export class GetAverageEffectiveHeight implements IGetRangeHeight {
    /**
     * ByType filters out all features that are not featureType(s) instances.
     */
    constructor();
    /**
     * Calculates range effective height
     * @param kars array of KeepAspectRatio-elements infos
     */
    getHeight(kars: any[]): number;
}
