import {ComponentNode} from '../scene/ComponentNode';
import {Node} from '../../scene/Node';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {RenderingHints} from './RenderingHints';

/**
 * Fill style convertor
 */
export type FillStyleConvertor = (options: object | { componentnode: ComponentNode; shape: Node; } ) => FillStyle | null;
/**
 * Line style convertor
 */
export type LineStyleConvertor = (options: object | { componentnode: ComponentNode; shape: Node; } ) => LineStyle | null;
/**
 * Node filter
 */
export type NodeFilter = (shape: Node) => boolean;
/**
 * Class to modify component's shape through their line and fill styles
 */
export class StylesRenderingHints extends RenderingHints {
    /**
     * Class to modify component's shape through their line and fill styles
     * @param options 
     * @param options.getfillstyle function to calculate shape's fill style
     * @param options.getlinestyle function to calculate shape's line style
     * @param options.filternode function to filter nodes
     */
    constructor(options?: object | { getfillstyle?: FillStyleConvertor; getlinestyle?: LineStyleConvertor; filternode?: NodeFilter; } );
    /**
     * Applies rendering hints
     * @param node schematics component node
     */
    apply(node: ComponentNode): void;
    /**
     * Saves default rendering state
     * @param node schematics component node
     */
    saveDefaults(node: ComponentNode): any;
    /**
     * Restores default rendering state
     * @param node schematics component node
     * @param defaults default rendering state
     */
    restoreDefaults(node: ComponentNode, defaults: any): void;
}
