import {DiagramVisual} from './DiagramVisual';
import {Dimension} from '../../util/Dimension';
import {Point} from '../../util/Point';

/**
 * A visual used for SVG graphics rendering. SVG may load slowly or not load at all, this visual loads contents asynchronously and renders it once it’s done.
 */
export class SvgDiagramVisual extends DiagramVisual {
    /**
     * A visual used for SVG graphics rendering. SVG may load slowly or not load at all, this visual loads contents asynchronously and renders it once it’s done.
     * @param options visual options
     * @param options.referencesize JSON with properties
     * @param options.islinkpointsrelative flag indicating if the link points are defined in relative (proportional) values
     * @param options.svgdata a well-formed SVG document to set
     */
    constructor(options?: object | { referencesize?: Dimension; islinkpointsrelative?: boolean; svgdata?: string; } );
    /**
     * Sets a new SVG data
     * @param svgData a well-formed SVG document to set
     */
    setData(svgData: string): void;
    /**
     * Creates a copy from the given source
     * @param src source object to copy from
     */
    copyConstructor(src: any | SvgDiagramVisual): this;
    /**
     * Gets a flag indicating if the link points are defined in relative (proportional) values
     */
    getIsLinkPointsRelative(): boolean;
    /**
     * Get a collection of relative points, if defined.
     * Values assumed as percentages: 0 - 0%, 1 - 100%
     */
    getRelativeLinkPoints(): Point[];
    /**
     * Returns an array of link points. This array may be calculated
     * dynamically if points are defined in relative mode
     */
    getLinkPoints(): Point[];
    /**
     * Has no effect, assuming SVG image should remain unchanged
     * @param properties ignored
     * @param properties.referencesize JSON with properties
     * @param properties.islinkpointsrelative flag indicating if the link points are defined in relative (proportional) values
     * @param properties.svgdata a well-formed SVG document to set
     */
    setProperties(properties: object | { referencesize?: Dimension; islinkpointsrelative?: boolean; svgdata?: string; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {referencesize: Dimension; islinkpointsrelative: boolean; svgdata: string} | any;
}
