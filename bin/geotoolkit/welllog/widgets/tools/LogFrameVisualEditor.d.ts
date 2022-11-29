import {AbstractLogVisualEditingTool} from './AbstractLogVisualEditingTool';
import {Group} from '../../../scene/Group';
import {Layer} from '../../../scene/Layer';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';

/**
 * This tool provides functionality for well log LogFrameVisual creation and manipulations.
 * <p>It has two modes: <code>Insert</code> and <code>Edit</code>. It <code>Insert</code> mode tool creates an visual
 * and insert it to the track, which is specified using method <code>setShape</code>. In <code>Edit</code> mode it
 * changes geometry of the shape, which was specified using <code>setShape</code> method.
 * </p>
 * <p>if <code>setShowGhost</code> is set to true then in <code>Edit</code> mode ghost box is resized first and
 * the selected shape is updated if an user unpressed mouse or stopt touching.
 * </p>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/editing/Events.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Insert</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
 *              <td>This Event is fired when the frame visual insertion in track occurs.</td>
 *          </tr>
 *          <tr>
 *              <td>DragStart</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
 *              <td>This Event is fired when movement of the frame visual or insertion is started.</td>
 *          </tr>
 *          <tr>
 *              <td>DragEnd</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
 *              <td>This Event is fired when movement of the frame visual or insertion is completed.</td>
 *          </tr>
 *          <tr>
 *              <td>Dragging</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
 *              <td>This Event is fired when movement of the frame visual or insertion is in the progress.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * @example
 * ```javascript
 * // How to initialize tool
 * import {LogFrameVisualEditor, Modes as LogFrameVisualEditorModes} from '@int/geotoolkit/welllog/widgets/tools/LogFrameVisualEditor';
 * import {Events as EditingEvents} from '@int/geotoolkit/controls/editing/Events';
 *  const annotationTool = new LogFrameVisualEditor({
 *     'manipulatorLayer': layer,
 *     'freeresizemode': false, // true to resize in all directions
 *      'instance': () => { // provide a new create shape in Insert mode
 *           const annotation = new LogAnnotation(new Rect(0, 100, 1, 200), 'Text1')
 *                   .setFillStyle(ColorUtil.getRandomColorRgb());
 *               return annotation;
 *           }
 *       })
 *       .setHandleStyles(handleStyles) // apply styles for handles
 *       .setShowGhost(false); // move original object instead of ghost
 * ```
 * @example
 * ```javascript
 * // Set track to insert annotation
 * annotationTool.setShape(track);
 * // Code shows how to listen to Insert event
 * annotationTool.addListener(EditingEvents.Insert, (sender, args) => {
 *    // track, which contains a new visual
 *    const track = args['track'];
 *    // a new annotation
 *    const annotation = args['shape'];
 *    // new rect
 *    const annotation = args['rect'];
 *    annotation.setText('Text1');
 *    // Switch tool to edit mode and select a new annotation to edit
 *    sender.setMode(LogFrameVisualEditorModes.Edit)
 *    sender.setShape(annotation);
 *  });
 * * @example
 * // Code shows how to listen to DragEnd event when shape is changed
 * annotationTool.addListener(EditingEvents.DragEnd, (sender, args) => {
 *  // track, which contains a new visual
 *  const track = args['track'];
 *  // modified annotation
 *  const annotation = args['shape'];
 *  // new rect
 *  const annotation = args['rect'];
 * });
 * ```
 */
export class LogFrameVisualEditor extends AbstractLogVisualEditingTool {
    /**
     * This tool provides functionality for well log LogFrameVisual creation and manipulations.
     * <p>It has two modes: <code>Insert</code> and <code>Edit</code>. It <code>Insert</code> mode tool creates an visual
     * and insert it to the track, which is specified using method <code>setShape</code>. In <code>Edit</code> mode it
     * changes geometry of the shape, which was specified using <code>setShape</code> method.
     * </p>
     * <p>if <code>setShowGhost</code> is set to true then in <code>Edit</code> mode ghost box is resized first and
     * the selected shape is updated if an user unpressed mouse or stopt touching.
     * </p>
     * <br>
     * <h5>Events {@link @int/geotoolkit/controls/editing/Events.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>Insert</td>
     *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
     *              <td>This Event is fired when the frame visual insertion in track occurs.</td>
     *          </tr>
     *          <tr>
     *              <td>DragStart</td>
     *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
     *              <td>This Event is fired when movement of the frame visual or insertion is started.</td>
     *          </tr>
     *          <tr>
     *              <td>DragEnd</td>
     *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
     *              <td>This Event is fired when movement of the frame visual or insertion is completed.</td>
     *          </tr>
     *          <tr>
     *              <td>Dragging</td>
     *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs.LogFrameEditorEventArgs}</td>
     *              <td>This Event is fired when movement of the frame visual or insertion is in the progress.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * @remarks fires {@link @int/geotoolkit/controls/editing/Events~Events~Dragging}
     * @param options options
     * @param options.name tool name
     * @param options.manipulatorLayer layer to which handles will be added. Cache disabled
     * @param options.instance function to be used to create an instance of the shape
     * @param options.freeResizeMode allows resizing in vertical and horizontal direction
     * @param options.handleStyles handle styles
     * @param options.handleStyles.activefillstyle Fill Style of the box when it is selected and active
     * @param options.handleStyles.inactivefillstyle Fill Style of the box when it is selected and active
     * @param options.handleStyles.activelinestyle Line Style of the box when when it is inactive (most of the time)
     * @param options.handleStyles.inactivelinestyle Line Style of the box when when it is inactive (most of the time)
     * @param options.handleStyles.handlePainter handle painter
     * @param options.handleStyles.handleSize handle size
     * @param options.boxStyles box styles
     */
    constructor(options: object | { name?: string; manipulatorLayer?: Group | Layer; instance?: Function; freeResizeMode?: boolean; handleStyles?: object | { activefillstyle?: FillStyle | object | string; inactivefillstyle?: FillStyle | object | string; activelinestyle?: LineStyle | object | string; inactivelinestyle?: LineStyle | object | string; handlePainter?: Function; handleSize?: number; } ; boxStyles?: object; } );
    /**
     * Returns the mode in which this tool is currently working. See setMode
     */
    getMode(): string | Modes;
    /**
     * Sets the type of manipulations which this tool should do.
     * @param mode The mode to set on the tool
     */
    setMode(mode: string | Modes): this;
    /**
     * Return if visual is resizing. This option can give correct
     * information during dragging only
     */
    isResizing(): boolean;
    /**
     * Sets styles for active, inactive box
     * @param styles JSON containing stylings for different types of box states
     * @param styles.activefillstyle Fill Style of the box when it is selected and active
     * @param styles.inactivefillstyle Fill Style of the box when it is selected and active
     * @param styles.activelinestyle Line Style of the box when when it is inactive (most of the time)
     * @param styles.inactivelinestyle Line Style of the box when when it is inactive (most of the time)
     */
    setBoxStyles(styles: object | { activefillstyle?: FillStyle | object | string; inactivefillstyle?: FillStyle | object | string; activelinestyle?: LineStyle | object | string; inactivelinestyle?: LineStyle | object | string; } ): this;
    /**
     * Returns registered styles for active, inactive for box
     */
    getBoxStyles(): {activefillstyle: FillStyle; inactivefillstyle: FillStyle; activelinestyle: LineStyle; inactivelinestyle: LineStyle} | object;
}
/**
 * Defines the editing mode supported by this adapter
 */
export enum Modes {
    /**
     * The mode when an existing LogFrameVisual range can be edited to change depth
     */
    Edit = 'edit',
    /**
     * The mode when a new LogFrameVisual can be added
     */
    Insert = 'insert'
}
