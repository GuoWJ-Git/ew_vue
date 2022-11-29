/**
 * GeometryOperation. Specifies a type of operation to be applied for clipping
 */
export enum GeometryOperation {
    /**
     * Replaces current area with new one
     */
    Replace = 'replace',
    /**
     * Intersects current area with new one
     */
    Intersect = 'intersect'
}
