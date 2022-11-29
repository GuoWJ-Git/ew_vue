import {AbstractVisual} from './AbstractVisual';
import {LineStyle} from '../../attributes/LineStyle';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ContourEvent} from '../events/ContourEvent';

/**
 * The Contour Fault Visual. This renders the polylines that represent faults.
 */
export class ContourFaultVisual extends AbstractVisual {
    /**
     * The Contour Fault Visual. This renders the polylines that represent faults.
     * @param options An object containing the properties to set
     * @param options.faultvisualstyle The fault visual style
     * @param options.openlinestyle The open fault line style
     * @param options.closedlinestyle The closed fault line style
     */
    constructor(options?: object | { faultvisualstyle?: number; openlinestyle?: LineStyle; closedlinestyle?: LineStyle; } );
    /**
     * Open fault lines.
     */
    static OPEN_FAULTS: number;
    /**
     * Closed fault lines.
     */
    static CLOSED_FAULTS: number;
    /**
     * Gets the fault visual style.
     * By default it is combination of OPEN_FAULTS and CLOSED_FAULTS.
     */
    getStyle(): number;
    /**
     * Sets the fault visual style.
     * @param style The fault visual style
     */
    setStyle(style: number): this;
    /**
     * Gets the current LineStyle used to draw the open fault lines of this fault visual.
     */
    getOpenLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle used to draw the open fault lines of this fault visual.
     * @param attribute The open fault line style.
     */
    setOpenLineStyle(attribute: LineStyle): this;
    /**
     * Gets the current LineStyle used to draw the closed fault lines of this fault visual.
     */
    getClosedLineStyle(): LineStyle;
    /**
     * Sets the current LineStyle used to draw the closed fault lines of this fault visual.
     * @param attribute The closed fault line style.
     */
    setClosedLineStyle(attribute: LineStyle): this;
    /**
     * Renders the fault visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @param args The contour event
     */
    contourInvalidated(args: ContourEvent): void;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.faultvisualstyle The fault visual style
     * @param properties.openlinestyle The open fault line style
     * @param properties.closedlinestyle The closed fault line style
     */
    setProperties(properties?: object | { faultvisualstyle?: number; openlinestyle?: LineStyle; closedlinestyle?: LineStyle; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {faultvisualstyle: number; openlinestyle: LineStyle; closedlinestyle: LineStyle} | any;
}
