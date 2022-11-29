/**
 * An enum representing all the layers inside a gauge
 */
export enum Layers {
    /**
     * Custom Component Layer - contains custom components, rendered on top
     */
    CustomComponent = 'customcomponent',
    /**
     * Top Dynamic Layer - contains dynamic elements, rendered on top of Bottom Dynamic
     */
    TopDynamic = 'topdynamic',
    /**
     * Bottom Dynamic Layer - contains dynamic elements, rendered below Top Dynamic
     */
    BottomDynamic = 'bottomdynamic',
    /**
     * Static Layer - contains static elements, rendered at bottom
     */
    Static = 'static'
}
