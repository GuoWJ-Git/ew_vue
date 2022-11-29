import {Shape} from '../../scene/shapes/Shape';
import {VisualColorMap} from './VisualColorMap';
import {ContourShape} from '../shapes/ContourShape';
import {VisualEvent} from '../events/VisualEvent';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ContourEvent} from '../events/ContourEvent';

/**
 * An abstract contour visual. All visuals are then derived from this abstract class.
 *  By default visible property to true and notify property is false.
 */
export class AbstractVisual extends Shape {
    /**
     * An abstract contour visual. All visuals are then derived from this abstract class.
     *  By default visible property to true and notify property is false.
     * @param options options
     * @param options.colorbehavior color behavior type
     * @param options.colormap colormap properties
     */
    constructor(options?: object | { colorbehavior?: BehaviorType; colormap?: VisualColorMap; } );
    /**
     * Gets the notification state of this visual
     */
    getNotify(): boolean;
    /**
     * Sets the notification state of this visual
     * @param notify If this is true, updates will be broadcast to the listeners.
     */
    setNotify(notify: boolean): void;
    /**
     * Gets the visual colorMap.
     */
    getColorMap(): VisualColorMap;
    /**
     * Sets the visual colorMap
     * @param colorMap The colorMap used by this visual
     */
    setColorMap(colorMap: VisualColorMap): this;
    /**
     * Gets the color behavior for this visual.
     */
    getColorBehavior(): BehaviorType;
    /**
     * Sets the color behavior for this visual.
     * @param colorBehavior The color behavior type.
     */
    setColorBehavior(colorBehavior: BehaviorType): this;
    /**
     * Registers the specified visual listener to receiving events from this visual.
     * @param visualListener The visual listener
     */
    addVisualListener(visualListener: ContourShape): void;
    /**
     * Unregisters the specified visual listener from receiving event from this visual.
     * @param visualListener The visual listener
     */
    removeVisualListener(visualListener: ContourShape): void;
    /**
     * Notifies the registered listeners of an event.
     * @param args The event to pass to the listeners.
     */
    notifyListeners(args: VisualEvent): void;
    /**
     * Invalidates the visual, sending events (if notify flag is set)
     */
    invalidateVisual(): void;
    /**
     * Render the visual. This must be defined in all sub-classes.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated.
     * Nothing is performed for this class, but it must be overridden
     * in subclasses for correct event processing.
     * This is actually defined abstract in cgVisualListener, and is passed on for definition in the subclass.
     * @param args The contour event
     */
    contourInvalidated(args: ContourEvent): void;
    /**
     * Choose a color for the supplied contour value, using the current _color_behavior.
     * @param index The contour index.
     * @param len Size of the contour indexes. Ie. how many are there?
     * Indexes are zero-referenced, so the highest possible index = len-1.
     */
    chooseColor(index: number, len: number): string;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.colorbehavior color behavior type
     * @param properties.colormap colormap properties
     */
    setProperties(properties?: object | { colorbehavior?: BehaviorType; colormap?: VisualColorMap; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {colorbehavior: BehaviorType; colormap: VisualColorMap} | any;
}
/**
 * The BehaviorType enumeration is used to describe how contour values are mapped to the colorMap,
 * via the ColorBehavior property. (Default is SIMPLE.)
 */
export enum BehaviorType {
    /**
     * This maps contours to colors on a one-to-one basis with Contour #0 colored with the
first color in the colorMap. Any contours above the highest colorMap entry are colored
with this highest colorMap entry.
     */
    SIMPLE = 0,
    /**
     * Colors wrap around for higher contour values. Ie. color = contour MODULO #Colors
     */
    WRAP = 1,
    /**
     * Colors are stretched to cover the full range of contour values. Ie. Contour 0 maps to color 0;
and Contour (#Contours-1) maps to Color (#Colors-1).
     */
    STRETCH = 2
}
