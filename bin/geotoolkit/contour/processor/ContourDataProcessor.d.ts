import {AbstractContourDataProcessor} from './AbstractContourDataProcessor';
import {AbstractContourDataSource} from '../datasource/AbstractContourDataSource';
import {Transformation} from '../../util/Transformation';
import {ContourFaultList} from '../faults/ContourFaultList';
import {ContourAbstractGrid} from '../grid/ContourAbstractGrid';
import {ContourScale} from '../scale/ContourScale';
import {ContourShape} from '../shapes/ContourShape';

/**
 * Builds internal data structures needed to render contour
 */
export class ContourDataProcessor extends AbstractContourDataProcessor {
    /**
     * Builds internal data structures needed to render contour
     */
    constructor();
    /**
     * Gets the data source which provides grids to contour.
     */
    getDataSource(): AbstractContourDataSource;
    /**
     * Sets the data source which provides grids to contour.
     * @param dataSource The dataSource.
     */
    setDataSource(dataSource: AbstractContourDataSource): this;
    /**
     * Gets the collection of isolines.
     */
    getIsoLines(): any[];
    /**
     * Gets the number of levels.
     */
    getCountLevels(): number;
    /**
     * Sets the number of levels.
     * @param countLevels The number of levels.
     */
    setCountLevels(countLevels: number): this;
    /**
     * This method is called after the build.
     */
    postBuild(): void;
    /**
     * Gets count isolines of area.
     */
    getIsolinesCountArea(): number;
    /**
     * Gets contour net area.
     */
    getArea(): object;
    /**
     * Builds all structures needed for rendering of an area.
     */
    buildArea(): void;
    /**
     * Initialize internal data before building.
     * @param modelToDevice Model to device transformation.
     * @param rebuildAll If true rebuild all internal structures.
     */
    preBuild(modelToDevice: Transformation, rebuildAll: boolean): void;
    /**
     * Deletes all visual shapes in areas.
     */
    deleteVisualShapes(): void;
    /**
     * Deletes areas.
     */
    deleteAreas(): void;
    /**
     * Aborts the building process
     */
    abortBuild(): void;
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
     * Sets skipping of near points when rendering isolines and isofills (to speed up process).
     * @param skipNearPoints If true then point skipping will be enabled.
     */
    setSkipNearPoint(skipNearPoints: boolean): this;
}
