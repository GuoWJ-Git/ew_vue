import {ToolsContainer} from '../tools/ToolsContainer';
import {Button} from './Button';
import {AnchorType} from '../../util/AnchorType';
import {Orientation} from '../../util/Orientation';
import {Dimension} from '../../util/Dimension';

/**
 * Toolbar with the provided styles and buttons. Style can be completely changed via css. Creates css structure as follows:
 * Toolbar Container (.cg-toolbar-container class)
 * <ul>
 *     <li> Canvas </li>
 *     <li> Toolbar #1 </li>
 *     <li> Toolbar #2 </li>
 *     <li> ... </li>
 * </ul>
 * Each toolbar has one of the following css class: .cg-toolbar-left,.cg-toolbar-top,.cg-toolbar-right,.cg-toolbar-bottom
 * depending on its orientation and alignment. The toolbar content consists of button group(s) with .cg-toolbar-group style.
 * Groups, in turn, contain buttons (.cg-toolbar-button). To separate the buttons into groups, use special symbol '-' (see examples).
 * @example
 * ```javascript
 * import {Toolbar} from '@int/geotoolkit/controls/toolbar/Toolbar';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * new Toolbar({
 *      // vertical toolbar in the upper right canvas corner:
 *      'alignment': AnchorType.RightTop,
 *      'orientation': Orientation.Vertical,
 *      // some styles can be set in the constructor, e.g. the buttons size (in px):
 *      'size': 40,
 *      // set the list of buttons, see @int/geotoolkit/controls/toolbar/ButtonRegistry for a complete list:
 *      'buttons': [
 *          'zoom-in',
 *          'zoom-out',
 *          '-', // special symbol to separate buttons group for a gap
 *          ['point-selection', 'polygon-selection'] // use an array to create automatic dropdown
 *      ],
 *      'tools': plot.getTool() // link to plot
 * });
 * ```
 * @example
 * ```javascript
 * // custom buttons can be created and used in the toolbar directly:
 * import {Button} from '@int/geotoolkit/controls/toolbar/Button';
 * new Toolbar({
 *      ...,
 *      'buttons': [
 *          'zoom-in',
 *          'zoom-out',
 *          new Button({
 *              'icon': 'fas fa-cat', // set icon for a button
 *              'title': 'Hello World', // title (hover text) info
 *              'action': (tools, enabled) => { // button pressing callback
 *                  alert('Hello, World!');
 *              }
 *          })
 *      ],
 *      'tools': plot.getTool()
 * });
 * ```
 */
export class Toolbar {
    /**
     * Toolbar with the provided styles and buttons. Style can be completely changed via css. Creates css structure as follows:
     * Toolbar Container (.cg-toolbar-container class)
     * <ul>
     *     <li> Canvas </li>
     *     <li> Toolbar #1 </li>
     *     <li> Toolbar #2 </li>
     *     <li> ... </li>
     * </ul>
     * Each toolbar has one of the following css class: .cg-toolbar-left,.cg-toolbar-top,.cg-toolbar-right,.cg-toolbar-bottom
     * depending on its orientation and alignment. The toolbar content consists of button group(s) with .cg-toolbar-group style.
     * Groups, in turn, contain buttons (.cg-toolbar-button). To separate the buttons into groups, use special symbol '-' (see examples).
     * @param options toolbar options
     * @param options.tools plot tools container to add toolbar to
     * @param options.element html dom element to use as the tooltip (instead of the new one creating by default)
     * @param options.buttons toolbar buttons or its string identifier (see
     * geotoolkit.controls.toolbar.ButtonRegistry.getInstance().getIds() for all the buttons available)
     * @param options.alignment canvas point to which the toolbar is attached
     * @param options.orientation toolbar orientation (vertical/horizontal)
     * @param options.offset toolbar offset (in pixel)
     * @param options.size toolbar buttons size (in pixel)
     * @param options.fontsize toolbar buttons font size
     * @param options.gap gap size (in px) between buttons
     * @param options.borderradius toolbar element border radius (in px)
     * @param options.border toolbar buttons css-styled border (e.g. "1px black solid" for solid border style)
     * @param options.color css-styled toolbar buttons background color
     */
    constructor(options: object | { tools: ToolsContainer; element?: HTMLElement; buttons?: (Button | string)[]; alignment?: AnchorType; orientation?: Orientation; offset?: number | Dimension; size?: number; fontsize?: number; gap?: number; borderradius?: number; border?: string; color?: string; } );
    /**
     * Return tool bar button size
     */
    getSize(): number;
    /**
     * Set tool bar offset
     * @param offset toolbar offset (in pixel)
     */
    setOffset(offset: number | Dimension): this;
    /**
     * Return tool bar element
     */
    getElement(): HTMLElement;
    /**
     * Get toolbar visibility
     */
    getVisible(): boolean;
    /**
     * Set toolbar visibility
     * @param visible visibility flag
     */
    setVisible(visible: boolean): this;
    /**
     * Returns button two-dimensional array of grouped toolbar button
     */
    getButtonList(): Button[][];
    /**
     * Insert button at a specific position
     * @param groupId button group id (groups were separated with '-' symbol)
     * @param buttonId button index position inside the group
     * @param button toolbar button to insert or its string identifier (see
     * geotoolkit.controls.toolbar.ButtonRegistry.getInstance().getIds() for all the buttons available)
     */
    insertButton(groupId: number, buttonId: number, button: Button | string): this;
    /**
     * Removes button from toolbar
     * @param button toolbar button to remove
     */
    removeButton(button: Button): this;
    /**
     * Disposes this toolbar, once disposed it should not be used anymore.
     * Clear all listeners, and removes buttons from the document.
     */
    dispose(): void;
}
