import {LabelData} from './LabelData';
import {LineStyle} from '../../attributes/LineStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Abstract label connector shape representation
 */
export class ConnectorShape {
    /**
     * Abstract label connector shape representation
     * @param options An object containing the properties to set
     * @param options.labeldata labelData label Data
     * @param options.linestyle line style or options see {@link @int/geotoolkit/attributes/LineStyle.LineStyle#setProperties}
     */
    constructor(options?: object | { labeldata?: LabelData; linestyle?: LineStyle | any; } );
    /**
     * Gets line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | string | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; } , merge?: boolean): this;
    /**
     * Gets label data
     */
    getLabelData(): LabelData;
    /**
     * Sets label data
     * @param labelData label Data
     */
    setLabelData(labelData: LabelData): this;
    /**
     * Sets all the properties pertaining to this object
     * @param options An object containing the properties to set
     * @param options.labeldata labelData label Data
     * @param options.linestyle line style or options see {@link @int/geotoolkit/attributes/LineStyle.LineStyle#setProperties}
     */
    setProperties(options: object | { labeldata?: LabelData; linestyle?: LineStyle | any; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {labeldata: LabelData; linestyle: LineStyle} | any;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
}
