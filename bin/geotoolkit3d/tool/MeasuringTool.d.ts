import {AbstractGestureTool} from './AbstractGestureTool';

/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 */
export class MeasuringTool extends AbstractGestureTool {
    /**
     * A tool that implements selection mechanism.<br>
     * <br>
     * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking}.<br>
     * Then it will notify the attached listeners about what has been picked.<br>
     * <br>
     * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
     * <br>
     * The selection tool can be configured to pick an area instead of a single pixel.<br>
     * In that case it may propagate a selection containing more than one object.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool} for inherited options
     * @param options.name tool name
     */
    constructor(options: object | { name?: string; } );
    /**
     * sets the visibility of the children objects
     * @param visible the flag to set the visibility of children
     */
    setChildrenVisibility(visible: boolean): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool#setOptions} for inherited options
     * @param options.enabled The status of this tool
     */
    setOptions(options: object | { enabled?: boolean; } ): this;
    /**
     * Get measuring tool options
     * (see {@link @int/geotoolkit3d/tool/MeasuringTool.MeasuringTool#setOptions} for more info)
     */
    getOptions(): object | any;
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
     * Called when a 'mouseup' event has occurred
     * @param event the native event with plot coordinates added
     */
    onMouseUp(event: object): void;
    /**
     * Function to get the current distance of the two points from the tool
     */
    getDistance(): number;
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
     * Called when a 'onVisibilityGained' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityGained(event: object): void;
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityLost(event: object): void;
}
/**
 * Event types
 */
export enum Events {
    /**
     * DistanceChanged
     */
    DistanceChanged = 'DistanceChanged'
}
