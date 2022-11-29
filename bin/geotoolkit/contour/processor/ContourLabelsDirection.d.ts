/**
 * Direction rendering Labels.
 */
export enum ContourLabelsDirection {
    /**
     * By default labels are rendered along isoline upside up.
     */
    Default = 0,
    /**
     * Labels are rendered towards positive gradient of the isoline
     */
    TowardsIsolineGradient = 1,
    /**
     * Labels are rendered towards negative gradient of the isoline
     */
    AwayFromIsolineGradient = 2
}
