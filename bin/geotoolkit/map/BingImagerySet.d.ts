/**
 * The type of Bing imagery supported for the Bing layer
 */
export enum BingImagerySet {
    /**
     * Aerial imagery
     */
    Aerial = 'Aerial',
    /**
     * Aerial imagery with a road overlay
WARNING! This service is deprecated and current data will not be refreshed. Use AerialWithLabelsOnDemand instead
(see {@link https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-imagery-metadata} for more info)
     */
    AerialWithLabels = 'AerialWithLabels',
    /**
     * Aerial imagery with on-demand road overlay
     */
    AerialWithLabelsOnDemand = 'AerialWithLabelsOnDemand',
    /**
     * Bird's eye (oblique-angle) imagery
     */
    Birdseye = 'Birdseye',
    /**
     * Bird's eye imagery with a road overlay
     */
    BirdseyeWithLabels = 'BirdseyeWithLabels',
    /**
     * The second generation Bird's eye (oblique-angle) imagery
     */
    BirdseyeV2 = 'BirdseyeV2',
    /**
     * A dark version of the road maps
     */
    CanvasDark = 'CanvasDark',
    /**
     * A lighter version of the road maps which also has some of the details such as hill shading disabled
     */
    CanvasLight = 'CanvasLight',
    /**
     * A grayscale version of the road maps
     */
    CanvasGray = 'CanvasGray',
    /**
     * Roads without additional imagery. Uses the legacy static tile service
WARNING! This service is deprecated and current data will not be refreshed. Use RoadOnDemand instead
(see {@link https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-imagery-metadata} for more info)
     */
    Road = 'Road',
    /**
     * Roads without additional imagery. Uses the dynamic tile service
     */
    RoadOnDemand = 'RoadOnDemand',
    /**
     * Ordnance Survey imagery. This imagery is visible only for the London area
     */
    OrdnanceSurvey = 'OrdnanceSurvey'
}
