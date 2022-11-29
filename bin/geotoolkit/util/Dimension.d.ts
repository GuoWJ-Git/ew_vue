/**
 * Implements a dimension which is defined by an absolute width and height
 */
export class Dimension {
    /**
     * Implements a dimension which is defined by an absolute width and height
     * @param width Width of dimension or JSON with properties
     * @param width.width Width of dimension or JSON with properties
     * @param width.height Height of dimension
     * @param height Height of dimension
     */
    constructor(width?: number | object | { width?: number; height?: number; } , height?: number);
    /**
     * return clone object
     */
    clone(): Dimension;
    /**
     * Gets width
     */
    getWidth(): number;
    /**
     * Gets height
     */
    getHeight(): number;
    /**
     * Sets width and height
     * @param width desired width
     * @param height desired height
     */
    setSize(width: number, height: number): this;
    /**
     * Round width and height of dimension object and return itself
     */
    round(): this;
    /**
     * Inflate dimension by the specified amount.
     * @param w the amount to inflate this dimension horizontally.
     * @param h the amount to inflate this dimension vertically.
     */
    inflate(w: number, h?: number): this;
    /**
     * Returns a string that represents the current dimension.
     */
    toString(): string;
    /**
     * compares a dimension against this one, if equal returns true
     * @param dimension to check against
     * @param epsilon acceptance criteria
     */
    equalsDimension(dimension: Dimension, epsilon?: number): boolean;
    /**
     * Returns properties pertaining to dimension
     */
    getProperties(): {width: number; height: number} | any;
    /**
     * Sets properties pertaining to dimension
     * @param props JSON with properties
     * @param props.width Width of the dimension
     * @param props.height Height of the dimension
     */
    setProperties(props: object | { width?: number; height?: number; } ): this;
    /**
     * Create or get dimension from object
     * @param object object can be in format of constructor of geotoolkit.util.Dimension
     */
    static fromObject(object?: object | Dimension): Dimension | null;
}
