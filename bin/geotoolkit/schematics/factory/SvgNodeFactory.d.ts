import {AbstractComponentNodeFactory} from './AbstractComponentNodeFactory';
import {SVGParser} from '../../svg/SVGParser';
import {SvgDataProvider} from '../../svg/SvgDataProvider';
import {ExternalGeometryComponentNode} from '../scene/ExternalGeometryComponentNode';
import {ComponentNode} from '../scene/ComponentNode';
import {Rect} from '../../util/Rect';

/**
 * Implements a Node Factory for nodes defined by svg files
 */
export class SvgNodeFactory extends AbstractComponentNodeFactory {
    /**
     * Implements a Node Factory for nodes defined by svg files
     * @param parser Instance of SVG Parser
     * @param filePath Relative path to the SVG file
     * @param dataProvider Instance of SvgDataProvider
     * @param asymmetry asymmetry options
     * @param asymmetry.left asymmetry on left side
     * @param asymmetry.top asymmetry on top
     * @param asymmetry.right asymmetry on right side
     * @param asymmetry.bottom asymmetry on bottom
     */
    constructor(parser: SVGParser, filePath: string, dataProvider?: SvgDataProvider, asymmetry?: object | { left?: number; top?: number; right?: number; bottom?: number; } );
    /**
     * Creates a an svg component node and sends a request for the svg file.
     * Once file loaded, parses it with SVG parser and invalidates the node
     * @param data Data to create the component node
     */
    createComponentNode(data: any): ExternalGeometryComponentNode;
    /**
     * If the component node is created bySvgNodeFactory then the method returns
     * its inner_child_group's model limits. Those limits are essentially SVG's view box.
     * @param node component node to evaluate
     */
    static getSVGNodeViewBox(node: ComponentNode): Rect | null;
    /**
     * Sets the data provider
     * @param dp Data Provider instance
     */
    setDataProvider(dp: SvgDataProvider): this;
    /**
     * Sets SVG Parser
     * @param p SVG Parser instance
     */
    setParser(p: SVGParser): this;
}
