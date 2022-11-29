import {AbstractTool} from './AbstractTool';

/**
 * A tool that convert classic device events to gesture-like calls.<br>
 * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
 * <br>
 * An 'armingkey' can be defined to limit when this tool operates.<br>
 * This tool will operate only if the defined key is pressed.<br>
 * <br>
 * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
 * Inheriting classes have to implement those functions.<br>
 * <br>
 */
export class AbstractGestureTool extends AbstractTool {
    /**
     * A tool that convert classic device events to gesture-like calls.<br>
     * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
     * <br>
     * An 'armingkey' can be defined to limit when this tool operates.<br>
     * This tool will operate only if the defined key is pressed.<br>
     * <br>
     * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
     * Inheriting classes have to implement those functions.<br>
     * <br>
     * @param options The options
     * @param options.dragbutton The button id for dragging
     * @param options.pinchbutton The button id for pinching
     * @param options.slidebutton The button id for sliding
     * @param options.dragtouchcount The touch count to do a drag
     * @param options.pinchtouchcount The touch count to do a pinch
     * @param options.slidetouchcount The touch count to do a slide
     * @param options.radius picking radius in pixels
     * @param options.doubletapdelay The delay to trigger a doubleTap when using 'touch' based device (ms)
     * @param options.armingkey The key that needs to be pressed to arm this tool, if not armed the tool won't operate. 'null' means that the tool is always armed.
     */
    constructor(options: object | { dragbutton?: number; pinchbutton?: number; slidebutton?: number; dragtouchcount?: number; pinchtouchcount?: number; slidetouchcount?: number; radius?: number; doubletapdelay?: number; armingkey?: object; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.dragbutton The button id for dragging
     * @param options.pinchbutton The button id for pinching
     * @param options.slidebutton The button id for sliding
     * @param options.dragtouchcount The touch count to do a drag
     * @param options.pinchtouchcount The touch count to do a pinch
     * @param options.slidetouchcount The touch count to do a slide
     * @param options.doubletapdelay The delay to trigger a doubleTap when using 'touch' based device (ms)
     * @param options.radius picking radius in pixels
     * @param options.armingkey The key that needs to be pressed to arm this tool, if not armed the tool won't operate
     */
    setOptions(options: object | { dragbutton?: number; pinchbutton?: number; slidebutton?: number; dragtouchcount?: number; pinchtouchcount?: number; slidetouchcount?: number; doubletapdelay?: number; radius?: number; armingkey?: object; }  | any): this;
    /**
     * Get abstract gesture tool options
     * (see {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Called when a 'onKeyStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyStart(event: object): void;
    /**
     * Called when a 'onKey' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKey(event: object): void;
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyEnd(event: object): void;
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityGained(event: object): void;
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityLost(event: object): void;
    /**
     * Called when a 'onCursorMove' event has occurred
     * @param event the native event with plot coordinates added
     */
    onCursorMove(event: object): void;
    /**
     * Called when a 'onTap' event has occurred
     * @param event the native event with plot coordinates added
     */
    onTap(event: object): void;
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDoubleTap(event: object): void;
    /**
     * Called when a 'onPinchStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onPinchStart(event: object): void;
    /**
     * Called when a 'onPinch' event has occurred
     * @param event the native event with plot coordinates added
     */
    onPinch(event: object): void;
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onPinchEnd(event: object): void;
    /**
     * Called when a 'onDragStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragStart(event: object): void;
    /**
     * Called when a 'onDrag' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDrag(event: object): void;
    /**
     * Called when a 'onDragEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragEnd(event: object): void;
    /**
     * Called when a 'onSlideStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlideStart(event: object): void;
    /**
     * Called when a 'onSlide' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlide(event: object): void;
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlideEnd(event: object): void;
    /**
     * Function to clean up the references from this tool.
     */
    dispose(): void;
}
