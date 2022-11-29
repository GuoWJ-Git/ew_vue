import {Transformation} from './Transformation';
import {AnchorType} from './AnchorType';

/**
 * A utility class for AnchorType
 */
export class AnchorUtil {
    /**
     * A utility class for AnchorType
     */
    constructor();
    /**
     * @param transformation transformation
     * @param anchor anchor type
     */
    static transform(transformation: Transformation, anchor: AnchorType): AnchorType;
    /**
     * @param anchor anchor
     */
    static isTop(anchor: AnchorType): boolean;
    /**
     * @param anchor anchor
     */
    static isBottom(anchor: AnchorType): boolean;
    /**
     * @param anchor anchor
     */
    static isLeft(anchor: AnchorType): boolean;
    /**
     * @param anchor anchor
     */
    static isRight(anchor: AnchorType): boolean;
    /**
     * @param anchorType anchorType
     */
    static fromString(anchorType: string | AnchorType): AnchorType;
    /**
     * @param anchorType anchorType
     */
    static toString(anchorType: string | AnchorType): string;
}
