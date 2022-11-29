import {RectangularShape} from '../../scene/shapes/RectangularShape';
import {TextStyle} from '../../attributes/TextStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';

/**
 * <pre>
 * Treemap allows visualization of hierarchical data using nested rectangles.
 * Each branch of the tree is displayed as rectangle. Area of rectangle is proportional to specified dimension of data.
 * e.g. Array of datasets object provided to Treemap <b> must contain 'value' property </b>. It can be initialized following ways:
 * 1. datasets object containing value only:
 *    var data = [{'value' : 6}, {'value': 4}, {'value': 1}, {'value': 3}];
 * 2. datasets object can also have optional properties 'name': name of the node, 'color': color of the node, 'level': children of the node(datasets object)
 *    var data =
 *        [
 *          {'value': 6, 'name': 'A', 'level': [
 *              {'value': 6, 'color': 'orange', 'name': 'A1'},
 *              {'value': 6, 'color': 'orange', 'name': 'A2'},
 *              {'value': 4, 'color': 'orange', 'name': 'A3'},
 *              {'value': 3, 'color': 'orange', 'name': 'A4'}
 *          ]},
 *          {'value': 5, 'color': 'red', 'name': 'B'},
 *          {'value': 7, 'color': 'yellow', 'name': 'C'},
 *          {'value': 3, 'color': 'green', 'name': 'D'}
 *       ];
 * </pre>
 */
export class Treemap extends RectangularShape {
    /**
     * <pre>
     * Treemap allows visualization of hierarchical data using nested rectangles.
     * Each branch of the tree is displayed as rectangle. Area of rectangle is proportional to specified dimension of data.
     * e.g. Array of datasets object provided to Treemap <b> must contain 'value' property </b>. It can be initialized following ways:
     * 1. datasets object containing value only:
     *    var data = [{'value' : 6}, {'value': 4}, {'value': 1}, {'value': 3}];
     * 2. datasets object can also have optional properties 'name': name of the node, 'color': color of the node, 'level': children of the node(datasets object)
     *    var data =
     *        [
     *          {'value': 6, 'name': 'A', 'level': [
     *              {'value': 6, 'color': 'orange', 'name': 'A1'},
     *              {'value': 6, 'color': 'orange', 'name': 'A2'},
     *              {'value': 4, 'color': 'orange', 'name': 'A3'},
     *              {'value': 3, 'color': 'orange', 'name': 'A4'}
     *          ]},
     *          {'value': 5, 'color': 'red', 'name': 'B'},
     *          {'value': 7, 'color': 'yellow', 'name': 'C'},
     *          {'value': 3, 'color': 'green', 'name': 'D'}
     *       ];
     * </pre>
     * @param options options object
     * @param options.nodevalues node values parameters
     * @param options.nodevalues.visible node values visibility flags
     * @param options.nodevalues.location node values' label location
     * @param options.nodevalues.textstyle node values' label text style
     * @param data (see "setData" method description for details)
     */
    constructor(options?: object | { nodevalues?: object | { visible?: boolean; location?: NodeValueLocation; textstyle?: TextStyle | string | any; } ; } , data?: any);
    /**
     * Sets properties
     * @param properties properties object
     * @param properties.nodevalues node values parameters
     * @param properties.nodevalues.visible node values visibility flags
     * @param properties.nodevalues.location node values' label location
     * @param properties.nodevalues.textstyle node values' label text style
     */
    setProperties(properties?: object | { nodevalues?: object | { visible?: boolean; location?: NodeValueLocation; textstyle?: TextStyle | string | any; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {nodevalues: {visible: boolean; location: NodeValueLocation; textstyle: TextStyle}} | any;
    /**
     * Set Layout mode of Treemap
     * @param mode LayoutMode fore the Treemap
     */
    setLayoutMode(mode: LayoutMode): this;
    /**
     * Returns LayoutMode selection
     */
    getLayoutMode(): LayoutMode | number;
    /**
     * Sets data to display
     * @param data data object
     * @param data.datasets Array of dataset
     * @param data.mode LayoutMode fore the Treemap
     */
    setData(data?: object | { datasets?: object[]; mode?: LayoutMode; } ): this;
    /**
     * Get data on treemap
     */
    getData(): {mode: LayoutMode; datasets: object[]} | object;
    /**
     * Update Dataset
     * @param datasets Array of dataset
     */
    updateDataSets(datasets?: object[]): void;
    /**
     * set display options
     * @param options options object
     * @param options.nodevalues node values parameters
     * @param options.nodevalues.visible node values visibility flags
     * @param options.nodevalues.location node values' label location
     * @param options.nodevalues.textstyle node values' label text style
     * @param options.linestyle Treemap node linestyle
     * @param options.fillstyle Treemap node fillstyle
     */
    setOptions(options?: object | { nodevalues?: object | { visible?: boolean; location?: NodeValueLocation; textstyle?: TextStyle | string | object; } ; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ): this;
    /**
     * Returns options pertaining nodevalues.
     */
    getOptions(): object | any;
    /**
     * It will return array of id specified by name.
     * @param name name of node
     */
    lookUpForIdByName(name: string): any[];
    /**
     * Returns Array of Rectangles in which the pointer is including it's ancestors.
     * @param pt pt is the device coordinates received by mouse event
     */
    hitTest(pt: Point): Rect[];
    /**
     * Display parent level or children level of id. If goToParent is set to true it will display it's parent level.
     * @param id id of node
     * @param goToParent Whether to display parent or children level
     */
    showLevel(id: number, goToParent?: boolean): void;
    /**
     * Display the parent level at specific distance
     * @example
     * ```javascript
     * treemap.showParentLevelAtDistance(0); // will stay to it's current level
     * treemap.showParentLevelAtDistance(1); // will go to it's parent
     * treemap.showParentLevelAtDistance(2); // will go to it's parent's parent and so on
     * ```
     * @param distance distance From Current Level
     */
    showParentLevelAtDistance(distance: number): void;
}
/**
 * Enum for Treemap.LayoutMode
 */
export enum LayoutMode {
    /**
     * Squarify
     */
    Squarify = 'Squarify',
    /**
     * HorizontalSliceAndDice
     */
    HorizontalSliceAndDice = 'HorizontalSliceAndDice',
    /**
     * VerticalSliceAndDice
     */
    VerticalSliceAndDice = 'VerticalSliceAndDice',
    /**
     * AlternateSliceAndDice
     */
    AlternateSliceAndDice = 'AlternateSliceAndDice'
}
/**
 * Enum for Treemap.NodeValueLocation
 */
export enum NodeValueLocation {
    /**
     * on top of line
     */
    Top = 'Top',
    /**
     * below the line
     */
    Below = 'Below',
    /**
     * on left of the line
     */
    Left = 'Left',
    /**
     * on right of the line
     */
    Right = 'Right'
}
/**
 * Treemap Event's enumerator
 */
export enum Events {
    /**
     * Event type fired after Data Changed
     */
    DataChanged = 'onDataChanged'
}
