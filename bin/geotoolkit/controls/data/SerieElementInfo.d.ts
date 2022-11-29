import {Node} from '../../scene/Node';

/**
 * Define series element information
 */
export class SerieElementInfo {
    /**
     * Define series element information
     * @param serieId serie ID
     * @param sampleId sample ID
     * @param owner owner node
     */
    constructor(serieId: number | string | object, sampleId: number | string | object, owner?: Node);
    /**
     * Gets serie ID
     */
    getSerieId(): number | string | object;
    /**
     * Gets sample ID
     */
    getSampleId(): number | string | object;
    /**
     * Return owner visual if is is specified
     */
    getOwner(): Node;
}
