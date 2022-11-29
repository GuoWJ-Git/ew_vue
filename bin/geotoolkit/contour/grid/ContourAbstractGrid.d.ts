import {ContourConstants} from '../processor/ContourConstants';
import {GridRange} from './GridRange';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * Base class for a contour grid that has hole values and a grid-to-model transformation.
 * There are only two implementations for now: ContourRectangularGrid and ContourTriangularGrid.
 */
export class ContourAbstractGrid extends ContourConstants {
    /**
     * Base class for a contour grid that has hole values and a grid-to-model transformation.
     * There are only two implementations for now: ContourRectangularGrid and ContourTriangularGrid.
     */
    constructor();
    /**
     * Gets the Grid Range
     */
    getRange(): GridRange;
    /**
     * Sets the Grid Range
     * @param gridRange The grid z-value range.
     */
    setRange(gridRange: GridRange): void;
    /**
     * Gets the grid-to-model transformation
     */
    getGridToModel(): Transformation;
    /**
     * Sets the grid-to-model transformation
     * @param transformation Grid-To-Model transformation
     */
    setGridToModel(transformation: Transformation): void;
    /**
     * Gets the model limits of the data
     */
    getModelLimits(): Rect;
    /**
     * Empties the Grid
     */
    clearGrid(): void;
    /**
     * Gets the altitude at the give model point location.
     * @param modelPoint The model point
     */
    getValueAtModelPoint(modelPoint: Point): number;
    /**
     * Returns grid rebuild state.
     */
    needRebuild(): boolean;
    /**
     * Gets the build range
     * @param netRange The range for the net
     * @param realRange The range for the data
     */
    getBuildRange(netRange: GridRange, realRange: GridRange): void;
    /**
     * Converts the value that is not altered when setting to a Float64Array value.
     * @param value The value that will be converted to a safe double.
     */
    convertToSafeFloat64(value: number): number;
}
