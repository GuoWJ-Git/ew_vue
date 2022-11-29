import {Object3D} from '../Object3D';
import {Vector3, Box3, Sphere, Vector2} from '../../THREE';
import {TextStyle} from '../../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../../geotoolkit/util/RgbaColor';
import {OrientedBoundingBox} from '../../util/OrientedBoundingBox';

/**
 * Label class
 */
export class Label extends Object3D {
    /**
     * Label class
     * @param options The options
     * @param options.origin the coordinate of label position
     * @param options.normal the normal that determines the orientation of label. Default is facing X axis direction.
     * @param options.freeorientation if false, label is always vertical, rotate on Z axis to loosely match normal direction.
     * If true, label will be able to rotate on every axis to closely match normal direction.
     * @param options.enforcetextupright if enforcetextupright is true, label text will try to never display upside-down by rotating the text 180° if necessary.
     * @param options.facingoffset the offset on the label z axis (label facing direction).
     * Value is relative to apparent text height, so a value of 1 will offset the label by a distance equal to visible text height.
     * @param options.text text to display.
     * @param options.enabled set true to enable this label
     * @param options.style the style of label
     * @param options.outline outline options
     * @param options.outline.enabled set true to enable outline for the text
     * @param options.outline.innercolor inner color for text with outline
     * @param options.outline.outlinecolor outline color for text with outline
     * @param options.outline.thickness outline thickness
     * @param options.issizeindevice set true if label size stayed same regardless of camera position
     * @param options.scale the scale of the label
     * @param options.opacity the opacity of label
     * @param options.renderside the label side visibility, can be DoubleSide, FrontSide, BackSide
     * @param options.verticalanchor The vertical anchor position for the label (default is Center)
     */
    constructor(options: object | { origin: Vector3 | number[]; normal?: Vector3 | number[]; freeorientation?: boolean; enforcetextupright?: boolean; facingoffset?: number; text?: number | string; enabled?: boolean; style?: TextStyle; outline?: object | { enabled?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; issizeindevice?: boolean; scale?: number; opacity?: number; renderside?: number; verticalanchor?: string; } );
    /**
     */
    visible: boolean;
    /**
     * @deprecated since 2022 (v 3.4), use setOptions instead.
     * Set the origin of this label
     * @param origin new origin for this label
     */
    setOrigin(origin: Vector3 | number[]): this;
    /**
     * @deprecated since 2022 (v 3.4), use setOptions instead.
     * Set the facing direction of this label based on normal.<br>
     * @param normal the normal at current label position
     */
    setFacingDirection(normal: Vector3 | number[]): this;
    /**
     * Set text properties and options
     * @param options The options
     * @param options.style text style
     * @param options.doublesided if the label is visible on both sides. If false, it'll only be visible if the normal is pointing toward camera.
     * @param options.origin the coordinate of label position
     * @param options.normal the normal that determines the orientation of label. Default is facing X axis direction.
     * @param options.freeorientation if false, label is always vertical, rotate on Z axis to loosely match normal direction.
     * @param options.enforcetextupright if enforcetextupright is true, label text will try to never display upside-down by rotating the text 180° if necessary.
     */
    setOptions(options: object | { style?: TextStyle; doublesided?: boolean; origin?: Vector3 | number[]; normal?: Vector3 | number[]; freeorientation?: boolean; enforcetextupright?: boolean; } ): this;
    /**
     * Compute or update this label's bounding box.
     */
    computeBoundingBox(): void;
    /**
     * Compute or update this label's bounding sphere.
     */
    computeBoundingSphere(): void;
    /**
     * Compute or update this label's oriented bounding box.
     */
    computeOrientedBoundingBox(): void;
    /**
     * Return the bounding box of this label<br>
     */
    getBoundingBox(): Box3;
    /**
     * Return the bounding sphere of this label.<br>
     * Calculated based on bounding box
     */
    getBoundingSphere(): Sphere;
    /**
     * Return the oriented bounding box of this label.<br>
     * OBB is considered more accurate than standard bounding box or sphere.
     */
    getOrientedBoundingBox(): OrientedBoundingBox;
    /**
     * Update the text of this label.
     * @param text the text to set the label.
     */
    setText(text: string): void;
    /**
     * Return the text of this label
     */
    getText(): string;
    /**
     * Get the texture dimension of this label
     */
    getTextureDimension(): Vector2;
    /**
     * Dispose this Label object
     */
    dispose(): void;
}
