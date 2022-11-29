import {ContourConstants} from './ContourConstants';
import {ContourFaultList} from '../faults/ContourFaultList';
import {ContourAbstractGrid} from '../grid/ContourAbstractGrid';
import {ContourScale} from '../scale/ContourScale';
import {ContourShape} from '../shapes/ContourShape';
import {GridRange} from '../grid/GridRange';
import {Transformation} from '../../util/Transformation';

/**
 * This is the base class for the contour data processor
 */
export class AbstractContourDataProcessor extends ContourConstants {
    /**
     * This is the base class for the contour data processor
     */
    constructor();
    /**
     * Gets the contour faults list.
     */
    getFaultsList(): ContourFaultList;
    /**
     * Sets the contour faults list.
     * @param faults The contour faults list.
     */
    setFaultsList(faults: ContourFaultList): this;
    /**
     * Gets the contour grid.
     */
    getGrid(): ContourAbstractGrid | null;
    /**
     * Sets the contour grid.
     * @param grid The contour grid.
     */
    setGrid(grid: ContourAbstractGrid): this;
    /**
     * Gets the contour scale.
     */
    getScale(): ContourScale;
    /**
     * Sets the contour scale.
     * @param scale The contour scale.
     */
    setScale(scale: ContourScale): this;
    /**
     * Gets the contour shape.
     */
    getContourShape(): ContourShape;
    /**
     * Sets the contour scale.
     * @param shape The contour shape.
     */
    setContourShape(shape: ContourShape): this;
    /**
     * Gets the fault point comparison precision (measured in grid cells).
     */
    getFaultPointPrecision(): number;
    /**
     * Sets the fault point comparison precision (measured in grid cells).
     * @param precision The fault point comparison precision.
     */
    setFaultPointPrecision(precision: number): this;
    /**
     * Forces rebuild of internal structures while next rendering.
     * @param bits The structure bits.
     */
    setNeedRebuild(bits: number): this;
    /**
     * Builds internal structures needed for rendering
     * @param range The grid range that needs to be rendered.
     * @param rebuildAll if true, rebuild all else - only structures affected by data change since last build
     * @param modelToDevice The model to device transform.
     */
    protected build(range?: GridRange, rebuildAll?: boolean, modelToDevice?: Transformation): void;
}
