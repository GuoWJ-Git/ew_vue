/**
 * States ViewMode.KeepAspectRatio "regular" effective range height calculator interface
 */
export abstract class IGetRangeHeight {
    /**
     * Calculates range effective height
     * @param kars array of KeepAspectRatio-elements infos
     */
    abstract getHeight(kars: any[]): number;
}
