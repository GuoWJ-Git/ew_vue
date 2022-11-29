import {Range} from '../util/Range';

/**
 * Layout element to be used for layout by {@link @int/geotoolkit/layout/ILayout1D.ILayout1D} implementation.
 */
export abstract class ILayoutElement1D {
    /**
     * Gets value
     */
    abstract getValue(): number;
    /**
     * Gets value range to layout
     */
    abstract getLayoutRange(): Range;
    /**
     * Updates value range to layout
     */
    abstract updateLayoutRange(): void;
    /**
     * Gets offset applied
     */
    abstract getOffset(): number;
    /**
     * Sets offset to apply
     * @param offset to apply
     */
    abstract setOffset(offset: number): this;
    /**
     * Gets "overlapped" flag
     */
    abstract getOverlapped(): boolean;
    /**
     * Sets "overlapped" flag
     * @param overlapped "overlapped" flag
     */
    abstract setOverlapped(overlapped: boolean): void;
}
