import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * OneDimensionScaleScrollStrategy input transformation adjustment. horizontal/vertical part of scaling/scrolling is blocked.
 * Default horizontal part of scaling/scrolling is blocked
 */
export class OneDimensionScaleScrollStrategy extends ScaleScrollStrategy {
    /**
     * OneDimensionScaleScrollStrategy input transformation adjustment. horizontal/vertical part of scaling/scrolling is blocked.
     * Default horizontal part of scaling/scrolling is blocked
     * @param options 
     * @param options.mode scaling mode
     */
    constructor(options?: object | { mode?: Mode; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
/**
 * OneDimension scaling modes
 */
export enum Mode {
    /**
     * NoHorizontal
     */
    NoHorizontal = 'nohorizontal',
    /**
     * NoVertical
     */
    NoVertical = 'novertical'
}
