import {CompositeTool} from '../../controls/tools/CompositeTool';
import {AnnotatedWidget} from '../AnnotatedWidget';
import {Group} from '../../scene/Group';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Tool to handle moving and resizing of legend around annotated widget
 * @example
 * ```javascript
 * import {LegendTool} from '@int/geotoolkit/widgets/tools/LegendTool';
 * const legendTool = new LegendTool({
 *      'widget': widget,
 *      'layer': manipulatorLayer,
 *      'group': legendShape
 * });
 * // Insert the tool to the head of tool's collection
 * widget.getTool().insert(0, legendTool);
 * ```
 */
export class LegendTool extends CompositeTool {
    /**
     * Tool to handle moving and resizing of legend around annotated widget
     * @param options 
     * @param options.widget widget
     * @param options.group Collection of legends or shape.
     * @param options.manipulatorlayer deprecated since 3.4, use options.layer instead. Manipulator layer for holding shapes.
     * @param options.padding padding around the legends.
     */
    constructor(options?: object | { widget?: AnnotatedWidget; group?: Group; manipulatorlayer?: Group; padding?: Group; } );
    /**
     * Set LegendTool options
     * @param options LegendTool options
     * @param options.widget widget
     * @param options.group Collection of legends or shape.
     * @param options.manipulatorlayer deprecated since 3.4, use options.layer instead. Manipulator layer for holding shapes.
     * @param options.layer Manipulator layer for holding shapes.
     * @param options.padding padding around the legends.
     * @param options.inactivefillstyle Background fill style when LegendTool is inactive
     * @param options.activefillstyle Background fill style when LegendTool is active
     * @param options.handlestyle handle style
     * @param options.handlestyle.activefillstyle handle fill style
     * @param options.handlestyle.inactivefillstyle handle fill style
     * @param options.handlestyle.activelinestyle handle connection style when active
     * @param options.handlestyle.inactivelinestyle handle connection style when inactive
     */
    setOptions(options: object | { widget?: AnnotatedWidget; group?: Group; manipulatorlayer?: Group; layer?: Group; padding?: Group; inactivefillstyle?: object; activefillstyle?: object; handlestyle?: object | { activefillstyle?: object | string | FillStyle; inactivefillstyle?: object | string | FillStyle; activelinestyle?: object | string | LineStyle; inactivelinestyle?: object | string | LineStyle; } ; } ): this;
    /**
     * Get LegendTool options
     */
    getOptions(): {widget: AnnotatedWidget; group: Group; layer: Group; padding: Group; inactivefillstyle: object; activefillstyle: object; handlestyle: {activefillstyle: object | string | FillStyle; inactivefillstyle: object | string | FillStyle; activelinestyle: object | string | LineStyle; inactivelinestyle: object | string | LineStyle}} | any;
    /**
     * Update adapter handles
     */
    updateHandles(): this;
}
/**
 * LegendTool events
 */
export enum Events {
    /**
     * onAnnotationChanged
     */
    onAnnotationChanged = 'onAnnotationChanged',
    /**
     * onMoveStart
     */
    onMoveStart = 'onMoveStart',
    /**
     * onMoveEnd
     */
    onMoveEnd = 'onMoveEnd',
    /**
     * onResize
     */
    onResize = 'onResize'
}
