import {AnnotationOverlay as OverlaysAnnotationOverlay} from '../../../widgets/overlays/AnnotationOverlay';
import {WellLogWidget} from '../WellLogWidget';
import {Group} from '../../../scene/Group';

/**
 * Creates default implementation of the welllog annotation overlay
 */
export class AnnotationOverlay extends OverlaysAnnotationOverlay {
    /**
     * Creates default implementation of the welllog annotation overlay
     * @param widget widget to create overlay
     * @param options annotation overlay options
     * @param options.cancreate can create annotation
     * @param options.candelete can delete annotation
     * @param options.canedit can edit annotation
     * @param options.canmove can move annotation
     * @param options.annotationcontainer annotation container id
     */
    constructor(widget: WellLogWidget, options?: object | { cancreate?: boolean; candelete?: boolean; canedit?: boolean; canmove?: boolean; annotationcontainer?: string; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * @param options options
     */
    protected initializeTools(options: object): void;
    /**
     */
    protected getModel(): Group;
}
