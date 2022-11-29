import {Shape} from './Shape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * The abstract class for a number of shapes whose geometry
 * is scaled by specified transformation. The scaled shapes has bounds, which
 * specify geometry bounding box without applying local transformation
 */
export class ScaledShape extends Shape {
    /**
     * The abstract class for a number of shapes whose geometry
     * is scaled by specified transformation. The scaled shapes has bounds, which
     * specify geometry bounding box without applying local transformation
     * @param options style applied on outline or it is options
     * @param fillstyle style applied on fill
     */
    constructor(options?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Check collision
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
}
