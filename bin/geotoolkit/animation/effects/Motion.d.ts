/**
 * Provides enumeration for "rotate" attribute.
 * For more information see '19.2.14 The 'animateMotion' element' from 'Scalable Vector Graphics (SVG) 1.1 Specification'.
 */
export enum RotateType {
    /**
     * Allows to set the angle of the rotation manually.
     */
    Value = 'Value',
    /**
     * Auto indicates that the object is rotated over time by the angle of the
direction (i.e., directional tangent vector) of the motion path.
     */
    Auto = 'Auto',
    /**
     * Auto-reverse indicates that the object is rotated over time by the angle of the
direction (i.e., directional tangent vector) of the motion path plus 180 degrees.
     */
    AutoReverse = 'AutoReverse'
}
