import {IComponent} from '../IComponent';
import {Point} from '../../../util/Point';
import {LinkSide} from './LinkSide';
import {ILink} from './ILink';
import {Node} from '../../../scene/Node';
import {Polyline} from '../../../scene/shapes/Polyline';

/**
 * Stores information about connection between a visual and a link ("arrow").
 * That said, modelPoint defines a point for the link in visual's bounds (which does takes
 * Local Transformation into account). LinkSide defines the side of a link: Begin or End.
 * linkVisual defines a link that is connected to a visual.
 */
export class LinkConnection {
    /**
     * Stores information about connection between a visual and a link ("arrow").
     * That said, modelPoint defines a point for the link in visual's bounds (which does takes
     * Local Transformation into account). LinkSide defines the side of a link: Begin or End.
     * linkVisual defines a link that is connected to a visual.
     * @param visual a visual that is related to the link
     * @param modelPoint an anchor point in visual's coordinate system.
     * @param linkSide side of the link (begin=0 or end=1)
     * @param linkVisual a link visual instance
     */
    constructor(visual: IComponent, modelPoint: Point, linkSide: LinkSide, linkVisual: any | ILink);
    /**
     * Gets associated visual
     */
    getVisual(): any | Node;
    /**
     * Gets model point (in visual space)
     */
    getModelPoint(): Point;
    /**
     * Gets link side that defines link orientation (flow)
     */
    getLinkSide(): LinkSide;
    /**
     * return link visual
     */
    getLinkVisual(): Polyline;
    /**
     * gets a visual related to this connection
     */
    public getRelatedVisualId(): any;
}
