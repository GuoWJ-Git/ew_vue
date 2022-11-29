import {ContourFillVisual} from './ContourFillVisual';
import {ContourLineVisual} from './ContourLineVisual';
import {ContourFaultVisual} from './ContourFaultVisual';
import {ContourBorderVisual} from './ContourBorderVisual';
import {AbstractVisual} from './AbstractVisual';

/**
 * A factory to create instances of contour visuals.
 * This class utilises the singleton pattern to build the factory itself.
 */
export class VisualsFactory {
    /**
     * A factory to create instances of contour visuals.
     * This class utilises the singleton pattern to build the factory itself.
     */
    constructor();
    /**
     * Returns the singleton factory instance.
     */
    static getInstance(): VisualsFactory;
    /**
     * Creates a new fill visual
     */
    createFillVisual(): ContourFillVisual;
    /**
     * Creates a new line visual
     */
    createLineVisual(): ContourLineVisual;
    /**
     * Creates a new fault visual
     */
    createFaultVisual(): ContourFaultVisual;
    /**
     * Creates a new border visual.
     */
    createBorderVisual(): ContourBorderVisual;
    /**
     * Creates a new net visual.
     * @deprecated since 2021.1 (3.3)
     */
    createNetVisual(): AbstractVisual;
}
