import {Rect} from '../../../util/Rect';

/**
 * Class for abstract cancellation strategy. It can be extended to stop request, that will be unnecessary
 */
export class AbstractCancellationStrategy {
    /**
     * Class for abstract cancellation strategy. It can be extended to stop request, that will be unnecessary
     */
    constructor();
    /**
     * Function for filtering unnecessary requests. It returns true, if this request is valid.
     * @param requestData request data
     * @param requestData.tileRect tile rect in model coordinates
     * @param tileShapeData tile shape data
     * @param tileShapeData.visibleModelArea visible model area of tile shape
     */
    isRequestValid(requestData: object | { tileRect: Rect; } , tileShapeData: object | { visibleModelArea: Rect; } ): boolean;
}
