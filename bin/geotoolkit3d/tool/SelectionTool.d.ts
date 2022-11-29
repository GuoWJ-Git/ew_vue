import {AbstractGestureTool} from './AbstractGestureTool';

/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * To be notified when a selection has occurred, one should add a callback using tool.on(geotoolkit3d.tool.SelectionTool.Events.onSelectionChanged, function).<br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 */
export class SelectionTool extends AbstractGestureTool {
    /**
     * A tool that implements selection mechanism.<br>
     * <br>
     * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking}.<br>
     * Then it will notify the attached listeners about what has been picked.<br>
     * <br>
     * To be notified when a selection has occurred, one should add a callback using tool.on(geotoolkit3d.tool.SelectionTool.Events.onSelectionChanged, function).<br>
     * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
     * <br>
     * The selection tool can be configured to pick an area instead of a single pixel.<br>
     * In that case it may propagate a selection containing more than one object.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool} for inherited options
     * @param options.hover setting to set selection on cursormove
     * @param options.filter A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     * @param options.name tool name
     * status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     */
    constructor(options: object | { hover?: boolean; filter?: Function; name?: string; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool.AbstractGestureTool#setOptions} for inherited options
     * @param options.enabled The status of this tool
     * @param options.hover setting to set selection on cursormove
     * @param options.filter A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link @int/geotoolkit3d/picking/RendererPicking.RendererPicking filtering} documentation)
     */
    setOptions(options: object | { enabled?: boolean; hover?: boolean; filter?: Function; } ): this;
    /**
     * Get selection tool options
     * (see {@link @int/geotoolkit3d/tool/SelectionTool.SelectionTool#setOptions} for more info)
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
     * onSelectionFunction
     * @remarks fires {@link @int/geotoolkit3d/tool/SelectionTool~Events~onSelectionChanged}
     * @param selection selection
     * @param event the native event
     */
    onSelection(selection: object[], event: object): void;
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
     * onSelectionChanged
     */
    onSelectionChanged = 'onSelectionChanged'
}
