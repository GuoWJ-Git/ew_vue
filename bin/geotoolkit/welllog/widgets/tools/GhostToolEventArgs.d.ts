import {Node} from '../../../scene/Node';
import {LogTrack} from '../../LogTrack';

/**
 */
export class GhostToolEventArgs {
    /**
     * @param selection selected visuals
     * @param minDepth min depth
     * @param maxDepth max depth
     * @param track track to select
     */
    constructor(selection: Node[], minDepth: number, maxDepth: number, track: LogTrack);
    /**
     * Return a selected nodes in the current track. (by default are all curve)
     */
    getSelection(): Node[];
    /**
     */
    getMinDepth(): number;
    /**
     */
    getMaxDepth(): number;
    /**
     */
    getTrack(): LogTrack;
    /**
     * Sets a selected area in the model coordinate
     * @param selection selected visuals
     */
    setSelection(selection: Node[]): this;
}
