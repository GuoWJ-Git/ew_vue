import {SvgNodeFactory} from './SvgNodeFactory';
import {SVGParser} from '../../svg/SVGParser';
import {SvgDataProvider} from '../../svg/SvgDataProvider';

/**
 * Implements a Flipped Node Factory for nodes defined by svg files
 */
export class FlippedSvgNodeFactory extends SvgNodeFactory {
    /**
     * Implements a Flipped Node Factory for nodes defined by svg files
     * @param parser Instance of SVG Parser
     * @param filePath Relative path to the SVG file
     * @param dataProvider Instance of SvgDataProvider
     * @param isLeft isLeft flag
     */
    constructor(parser: SVGParser, filePath: string, dataProvider?: SvgDataProvider, isLeft?: boolean);
}
