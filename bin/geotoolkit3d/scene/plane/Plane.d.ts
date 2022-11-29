import {Object3D} from '../Object3D';
import {PlaneGeometry, Texture, Vector2, Box3} from '../../THREE';
import {Side} from '../../Constants';
import {Group} from '../../../geotoolkit/scene/Group';
import {FillStyle} from '../../../geotoolkit/attributes/FillStyle';

/**
 * A GeoToolkit3D plane mesh class.
 */
export class Plane extends Object3D {
    /**
     * A GeoToolkit3D plane mesh class.
     * @param options The options
     * width and height define the "world size" of the 2D rendering area, and are usually set using the 2D viewport dimensions.
     * @param options.width the width of this plane object in local coordinates. Default is 1, or will use the PlaneGeometry width if provided.
     * @param options.height the height of this plane object in local coordinates. Default is 1, or will use the PlaneGeometry height if provided.
     * @param options.widthsegments the width segments of this plane
     * @param options.heightsegments the height segments of this plane
     * @param options.planegeometry a user defined PlaneGeometry. If not provided, a default one will be created.
     * /** @param {object} options.data the data of this plane
     * @param options.opacity the global opacity of this plane
     * @param options.side defines which side will be rendered
     * @param options.overlay A group that will be used to render 2D shapes on top of this plane as 'overlay'
     * @param options.backgroundfillstyle If not null, define the overlay background fillstyle.
     * texturewidth and textureheight define the resolution of the overlay rendering. Not to be confused with width/height.
     * For compatibility reason, the final texture size is then clamped between 128 and 4096.
     * @param options.texturewidth the resolution width of the texture overlay, if a texture needs to be created.
     * @param options.textureheight the resolution height of the texture overlay, if a texture needs to be created.
     */
    constructor(options?: object | { width?: number; height?: number; widthsegments?: number; heightsegments?: number; planegeometry?: PlaneGeometry; opacity?: number; side?: Side; overlay?: Group; backgroundfillstyle?: FillStyle | object | string; texturewidth?: number; textureheight?: number; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options the options, check constructor for more information
     */
    setOptions(options?: object): this;
    /**
     * Returns the texture of the plane, if any.
     */
    getTexture(): Texture | any;
    /**
     * Returns the overlay of this plane, if any
     */
    getOverlay(): Group | any;
    /**
     * Returns the dimension of plane's texture, if any.
     */
    getTextureDimension(): Vector2 | any;
    /**
     * Returns the bounding box in local coordinate
     */
    getBoundingBox(): Box3;
}
