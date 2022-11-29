import {MeshColorMapBasicMaterial} from '../MeshColorMapBasicMaterial';
import {Group} from '../../../geotoolkit/scene/Group';
import {FillStyle} from '../../../geotoolkit/attributes/FillStyle';
import {Vector2} from '../../THREE';

/**
 * Plane material.
 */
export class PlaneMaterial extends MeshColorMapBasicMaterial {
    /**
     * Plane material.
     * @param options the options
     * @param options.overlay A group that will be used to render 2D shapes on top of the slice as 'overlay'
     * @param options.backgroundfillstyle If not null, define the overlay background fillstyle
     * @param options.texturewidth the width of the texture overlay, if a texture needs to be created.
     * @param options.textureheight the height of the texture overlay, if a texture needs to be created.
     */
    constructor(options?: object | { overlay?: Group; backgroundfillstyle?: FillStyle | object | string; texturewidth?: number; textureheight?: number; } );
    /**
     * Set options.
     * @param options the options
     */
    setOptions(options?: object): this;
    /**
     * Create or update the overlay on the plane
     * @param overlay the overlay group
     */
    createUpdateOverlay(overlay: Group): void;
    /**
     * Returns the dimension of texture
     */
    getTextureDimension(): Vector2;
}
