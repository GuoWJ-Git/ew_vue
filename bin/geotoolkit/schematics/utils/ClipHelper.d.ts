import {ViewMode} from '../scene/WellBoreNode';

/**
 * Clip helper class
 */
export class ClipHelper {
    /**
     * Clip helper class
     */
    constructor();
    /**
     * @param md measured depth to convert to depth in current "viewMode"
     * @param viewMode current view mode
     * @param componentNode componentNode
     */
    static mdToViewModeDepth(md: number, viewMode: ViewMode, componentNode: object): number;
    /**
     * @param sideLinesPri object of arrays of device points in primary wellbore
     * @param sideLinesPri.left device points in primary wellbore on 'left' side
     * @param sideLinesPri.top device points in primary wellbore on 'top' side
     * @param sideLinesPri.right device points in primary wellbore on 'right' side
     * @param sideLinesPri.bottom device points in primary wellbore on 'bottom' side
     * @param namePri primary side line name
     * @param sideLinesSec object of arrays of device points in secondary wellbore
     * @param sideLinesSec.left device points in secondary wellbore on 'left' side
     * @param sideLinesSec.top device points in secondary wellbore on 'top' side
     * @param sideLinesSec.right device points in secondary wellbore on 'right' side
     * @param sideLinesSec.bottom device points in secondary wellbore on 'bottom' side
     * @param nameSec secondary side line name
     * @param devInfoSec secondary well's deviation info
     * @param dstArray array to add intersection point to
     */
    static addModelIntersect(sideLinesPri: object | { left: any[]; top: any[]; right: any[]; bottom: any[]; } , namePri: string, sideLinesSec: object | { left: any[]; top: any[]; right: any[]; bottom: any[]; } , nameSec: string, devInfoSec: object, dstArray: any[]): void;
}
