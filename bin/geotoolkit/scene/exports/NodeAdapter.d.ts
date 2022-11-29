import {AbstractNodeAdapter} from './AbstractNodeAdapter';
import {Group} from '../Group';
import {Rect} from '../../util/Rect';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {Point} from '../../util/Point';

/**
 * Document Element class that is used to layout the pdf document
 */
export class NodeAdapter extends AbstractNodeAdapter {
    /**
     * Document Element class that is used to layout the pdf document
     * @param node node
     * @param exportLimits export limits in the bounds coordinates
     */
    constructor(node: Group, exportLimits: Rect);
    /**
     * Returns the Element node
     */
    getNode(): Group;
    /**
     * render the document in the context
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     */
    render(context: DocumentRenderingContext, position: Point): void;
    /**
     * render the document in the context
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     * @param callback callback function
     */
    renderAsync(context: DocumentRenderingContext, position: Point, callback: Function): void;
}
/**
 * Enum of node adapter scaling options:
 *     - TrueScale : 'TrueScale'
 *     - PixelScale : 'PixelScale'
 */
export type ScaleMode = any;

