import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {AbstractIterator} from './AbstractIterator';
import {ContourAbstractGrid} from '../grid/ContourAbstractGrid';

/**
 * Abstract datasource that supplies data for contour.
 * Data are supplied as a set of grids. Contour building
 * algorithm calls 'Query' method to get the enumerator
 * that enumerates set of grids appropriate for given model
 * rectangle and model-to-device transformation.
 * Contour building algorithm calls 'LoadGrid' on enumerator
 * to load grid into memory and get access to its data.
 */
export class AbstractContourDataSource {
    /**
     * Abstract datasource that supplies data for contour.
     * Data are supplied as a set of grids. Contour building
     * algorithm calls 'Query' method to get the enumerator
     * that enumerates set of grids appropriate for given model
     * rectangle and model-to-device transformation.
     * Contour building algorithm calls 'LoadGrid' on enumerator
     * to load grid into memory and get access to its data.
     */
    constructor();
    /**
     * Gets the model limits of contour data.
     */
    getModelLimits(): Rect;
    /**
     * Gets the enumerator that enumerates set of appropriate grids.
     * @deprecated since 2020.1 (3.1) no need
     * @param modelRect The model rectangle.
     * @param modelToDevice model-to-device transformation.
     */
    query(modelRect: Rect, modelToDevice: Transformation): AbstractIterator;
    /**
     * Loads grid into memory.
     */
    loadGrid(): ContourAbstractGrid;
    /**
     * Release memory occupied by the grid.
     * @param grid The grid that contains points.
     */
    freeGrid(grid: ContourAbstractGrid): void;
    /**
     * Gets the datasource properties
     */
    getProperties(): object | any;
    /**
     * Sets the datasource properties
     * @param properties datasource properties
     */
    setProperties(properties: object): this;
}
