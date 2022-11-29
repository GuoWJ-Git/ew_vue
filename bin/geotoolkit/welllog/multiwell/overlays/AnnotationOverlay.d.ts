import {AnnotationOverlay as OverlaysAnnotationOverlay} from '../../../widgets/overlays/AnnotationOverlay';
import {MultiWellWidget} from '../MultiWellWidget';
import {Group} from '../../../scene/Group';

/**
 * Creates implementation of the multi welllog annotation overlay
 */
export class AnnotationOverlay extends OverlaysAnnotationOverlay {
    /**
     * Creates implementation of the multi welllog annotation overlay
     * @param widget widget to create overlay
     */
    constructor(widget: MultiWellWidget);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     */
    protected initializeTools(): void;
    /**
     */
    protected getModel(): Group;
}
