/**
 * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
 * <br>
 * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See {@link @int/geotoolkit3d/Event.Type} for builtin events.<br>
 */
export class Event {
    /**
     * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
     * <br>
     * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
     * Note that you can also send custom events from your nodes to implement your application's logic.<br>
     * See {@link @int/geotoolkit3d/Event.Type} for builtin events.<br>
     * @param options The options
     * @param options.source The object that triggered this event (or at least the one passed when creating the event).
     * @param options.type The event type, used to distinguish events from each other.
     * @param options.args The event arguments, can be used to provide more details and context about the event.
     */
    constructor(options: object | { source: object; type: string | Type; args?: object; } );
    /**
     * Returns event's type
     */
    getType(): string | Type;
    /**
     * Returns event's source
     */
    getSource(): object;
    /**
     * Returns event's arguments
     */
    getArgs(): object;
    /**
     * disposes this event
     */
    dispose(): any;
}
/**
 * List of builtin events fired/listened by the 3D toolkit itself.<br>
 * <br>
 * Those event types will be used by the 3D toolkit when a corresponding event occurs.<br>
 * The toolkit also listen to some of those events to update its state (dirty, size, etc).<br>
 */
export enum Type {
    /**
     * BeforeRender.<br>
<br>
Object fires this event before the plot prepares it render
     */
    BeforeRender = 'beforerender',
    /**
     * AfterRender.<br>
<br>
Object fires this event after the plot completes its render
     */
    AfterRender = 'afterrender',
    /**
     * DuringRender.<br>
<br>
Object fires this event during its render
     */
    DuringRender = 'duringrender',
    /**
     * RenderError.<br>
<br>
This Event is fired when any error is catched
     */
    RenderError = 'rendererror',
    /**
     * Invalidate.<br>
<br>
Used whenever a change on a node explicitly requires an invalidation and render.
     */
    Invalidate = 'invalidate',
    /**
     * Node added.<br>
<br>
Used whenever a node has been added to the scenegraph, note that it will be sent only once even if the given node itself has children.
     */
    Add = 'add',
    /**
     * Node removed.<br>
<br>
Used whenever a node has been removed from the scenegraph.<br>
Note that this event will be sent only for the removed node.<br>
And not for its own children as those have not been removed from their parent.<br>
     */
    Remove = 'remove',
    /**
     * Camera related.<br>
<br>
Used whenever the camera moves, rotates or has changed in any way
     */
    Camera = 'camera',
    /**
     * Plot resizing.<br>
<br>
Used when the plot has been resized
     */
    Resize = 'resize',
    /**
     * Animation occurred.<br>
<br>
Used when an intermediate step of an animation has finished in the {@link @int/geotoolkit3d/scene/animation/AnimationManager.AnimationManager}
     */
    Animation = 'animation',
    /**
     * Model limits changed.<br>
<br>
Used when a node has changed its boundingbox. <br>
This may trigger a recompute of the modellimits of the Plot
     */
    ModelLimits = 'modellimits'
}
