import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {AnchorType} from '../util/AnchorType';
import {Group} from './Group';
import {Transformation} from '../util/Transformation';

/**
 * KeepScaleAspectRatioStrategy input transformation adjustment. Keeps transformation scale when parent bounds were changed,
 * if not possible scales with keeping aspect ratio
 */
export class KeepScaleAspectRatioStrategy extends ScaleScrollStrategy {
    /**
     * KeepScaleAspectRatioStrategy input transformation adjustment. Keeps transformation scale when parent bounds were changed,
     * if not possible scales with keeping aspect ratio
     * @param options JSON object
     * @param options.horizontalAlignment deprecated (since 2020 (3.0)). use alignment instead. horizontal alignment
     * @param options.verticalAlignment deprecated (since 2020 (3.0)). use alignment instead. vertical alignment
     * @param options.alignment alignment
     * @param options.aspectRatio y-scale to x-scale ratio
     * @param options.wrapped true if model limits should be wrapped
     */
    constructor(options?: object | { horizontalAlignment?: string; verticalAlignment?: string; alignment?: AnchorType; aspectRatio?: number; wrapped?: boolean; } );
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     */
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
    /**
     * Sets scale scroll options
     * @param options JSON object
     * @param options.horizontalAlignment deprecated (since 2020 (3.0)). use alignment instead. horizontal alignment
     * @param options.verticalAlignment deprecated (since 2020 (3.0)). use alignment instead. vertical alignment
     * @param options.alignment alignment
     * @param options.aspectRatio y-scale to x-scale ratio
     * @param options.wrapped true if model limits should be wrapped
     */
    setOptions(options?: object | { horizontalAlignment?: string; verticalAlignment?: string; alignment?: AnchorType; aspectRatio?: number; wrapped?: boolean; } ): this;
}
