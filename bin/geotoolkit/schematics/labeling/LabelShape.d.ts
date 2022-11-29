import {CompositeNode} from '../../scene/CompositeNode';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Text} from '../../scene/shapes/Text';
import {LabelData} from './LabelData';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';

/**
 * Abstract label shape representation
 */
export class LabelShape extends CompositeNode {
    /**
     * Abstract label shape representation
     * @param options options
     * @param options.styleshandler label shape styles handler: custom styles can be used for shape.
     *     Handler should return object {fillstyle: geotoolkit.attributes.FillStyle, linestyle: geotoolkit.attributes.LineStyle,
     *     textsyle: geotoolkit.attributes.TextStyle}
     */
    constructor(options?: object | { styleshandler?: Function; } );
    /**
     * Returns properties
     */
    getProperties(): {styleshandler: Function} | any;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.styleshandler label shape styles handler: custom styles can be used for shape.
     */
    setProperties(properties?: object | { styleshandler?: Function; } ): this;
    /**
     * Sets graphic style
     * @param options options
     * @param options.cssclass define style class name, see cssstyle.html tutorial
     * @param options.linestyle line style
     * @param options.fillstyle fill style
     */
    setStyle(options: object | { cssclass?: string; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; } ): this;
    /**
     * Gets label text shape
     */
    getLabelText(): Text;
    /**
     * Gets label data
     */
    getLabelData(): LabelData;
    /**
     * Sets label data
     * @param labelData label data
     */
    setLabelData(labelData: LabelData): this;
    /**
     * Sets label shape styles handler: custom styles can be used for shape.
     * @example
     * ```javascript
     * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
     * widget.getLabelingStrategy().getOptions()['labelShape'].setStylesHandler((nodeOptions) => ({
     *     'fillstyle': new FillStyle(nodeOptions['node'].getName() === 'cement' ? 'green' : 'blue'),
     *     'linestyle': new LineStyle(nodeOptions['node'].getName() === 'cement' ? 'green' : 'blue'),
     *     'textstyle': new TextStyle(nodeOptions['text'].includes('tubing') ? {'color': 'red', 'font': '16px sans-serif'} :
     *         {'color': 'black', 'font': '14px sans-serif'})
     * }));
     * ```
     * @param handler handler has object argument ({node: geotoolkit.schematics.scene.ComponentNodeProxy, text: string})
     *     and should return object {fillstyle: geotoolkit.attributes.FillStyle, linestyle: geotoolkit.attributes.LineStyle,
     *     textsyle: geotoolkit.attributes.TextStyle}
     */
    setStylesHandler(handler: Function): this;
    /**
     * Gets styles handler
     */
    getStylesHandler(): Function | any;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Gets bounding box in model space
     * @param transformation scene transformation
     */
    getBoundingBox(transformation: Transformation): Rect;
}
