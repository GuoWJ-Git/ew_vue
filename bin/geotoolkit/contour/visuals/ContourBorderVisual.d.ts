import {AbstractVisual} from './AbstractVisual';
import {LineStyle} from '../../attributes/LineStyle';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ContourEvent} from '../events/ContourEvent';

/**
 * The Border Visual. Draws the borders of contour
 * (parts of contour that are bounded by area border, holes and faults).
 */
export class ContourBorderVisual extends AbstractVisual {
    /**
     * The Border Visual. Draws the borders of contour
     * (parts of contour that are bounded by area border, holes and faults).
     * @param options An object containing the properties to set
     */
    constructor(options?: object);
    /**
     * Gets line attribute
     */
    getLineAttribute(): LineStyle;
    /**
     * Sets line attribute
     * @param lineStyle attribute
     */
    setLineAttribute(lineStyle: LineStyle): this;
    /**
     * Render the border visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @param args The event causing the invalidation.
     */
    contourInvalidated(args: ContourEvent): void;
}
