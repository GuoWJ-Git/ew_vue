import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';

/**
 * Creates tool to highlight proxy tracks
 */
export class ProxyTrackHighlightTool extends AbstractTool {
    /**
     * Creates tool to highlight proxy tracks
     * @param manipulatorLayer layer for holding temporary shapes
     * @param trackContainer track container
     * @param options options
     * @param options.highlight options highlight
     * @param options.highlight.fillstyle options for track highlighting fill style
     * @param options.highlight.linestyle options for track highlighting line style
     */
    constructor(manipulatorLayer: CompositeNode, trackContainer: CompositeNode, options?: object | { highlight?: object | { fillstyle?: object | FillStyle; linestyle?: object | LineStyle; } ; } );
    /**
     * Unhighlight track
     */
    unhighlight(): void;
    /**
     * Sets options
     * @param options options
     * @param options.highlight options highlight
     * @param options.highlight.fillstyle options for track highlighting fill style
     * @param options.highlight.linestyle options for track highlighting line style
     */
    setOptions(options?: object | { highlight?: object | { fillstyle?: object | FillStyle; linestyle?: object | LineStyle; } ; } ): this;
}
