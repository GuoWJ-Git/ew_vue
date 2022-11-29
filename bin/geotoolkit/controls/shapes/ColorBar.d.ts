import {Group} from '../../scene/Group';
import {ColorProvider} from '../../util/ColorProvider';
import {ColorBarLocation} from './ColorBarLocation';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {Text} from '../../scene/shapes/Text';
import {Axis} from '../../axis/Axis';
import {Node} from '../../scene/Node';
import {TickGenerator} from '../../axis/TickGenerator';

/**
 * Defines a color bar shape. The ColorBar shape is an advanced shape that can display a colorprovider as a legend.<br>
 * It will render the colors from the colorprovider along with an axis and the corresponding ticks & labels.
 */
export class ColorBar extends Group {
    /**
     * Defines a color bar shape. The ColorBar shape is an advanced shape that can display a colorprovider as a legend.<br>
     * It will render the colors from the colorprovider along with an axis and the corresponding ticks & labels.
     * @param options 
     * @param options.colorprovider default color provider
     * @param options.location color bar location
     * @param options.flip flip or not
     * @param options.linestyle line style
     * @param options.range data range
     * @param options.range.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param options.range.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param options.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param options.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param options.titletext title text
     * @param options.title color bar title
     * @param options.title.size title area desired size
     * @param options.title.visible title visibility
     * @param options.title.text title text
     * @param options.title.textstyle title textstyle
     * @param options.title.item title text object instance
     * @param options.axis 
     * @param options.axis.size axis area desired size
     * @param options.axis.visible axis visibility
     * @param options.axis.labelrotation axis label rotation in radians
     * @param options.axis.autolabelrotation axis auto label rotation flag
     * @param options.axis.autolabelrotationangle rotation angle if active auto label rotation
     * @param options.axis.item axis object instance
     * @param options.axis.tickgenerator tickgenerator properties, see {@link @int/geotoolkit/axis/Axis.Axis#setProperties}
     * @param options.axis.hideoverlappedtext hide overlapped text flag
     * @param options.preciselimits enable keeping the precise limits and calculate only step
     * @param options.colorbox color box attributes
     * @param options.colorbox.size colorbox area desired size
     * @param options.colorbox.visible colorbox visibility
     * @param options.colorbox.linestyle colorbox outline rectangle linestyle
     * @param options.componentsizes size of components
     * @param options.componentsizes.title title area desired size
     * @param options.componentsizes.colorbox colorbox area desired size
     * @param options.componentsizes.axis axis area desired size
     * @param options.componentsizes.namedcolors named colors desired size
     * @param options.namedcolors namedcolors options
     * @param options.namedcolors.size named colors desired size
     * @param options.namedcolors.visible named colors visibility
     */
    constructor(options?: object | { colorprovider?: ColorProvider; location?: ColorBarLocation | string; flip?: boolean; linestyle?: LineStyle | string | object; range?: object | { min?: number; max?: number; } ; min?: number; max?: number; titletext?: string; title?: object | { size?: number; visible?: boolean; text?: string; textstyle?: TextStyle | string | object; item?: Text; } ; axis?: object | { size?: number; visible?: boolean; labelrotation?: number; autolabelrotation?: boolean; autolabelrotationangle?: number; item?: Axis; tickgenerator?: object; hideoverlappedtext?: boolean; } ; preciselimits?: boolean; colorbox?: object | { size?: number; visible?: boolean; linestyle?: LineStyle | string | object; } ; componentsizes?: object | { title?: number; colorbox?: number; axis?: number; namedcolors?: number; } ; namedcolors?: object | { size?: number; visible?: boolean; } ; } );
    /**
     * Return new instance of the ColorBar node
     */
    clone(): ColorBar;
    /**
     * Sets color bar options
     * @param options colorbar options
     * @param options.colorprovider default color provider
     * @param options.location color bar location
     * @param options.flip flip or not
     * @param options.linestyle line style
     * @param options.range colorbar range
     * @param options.range.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param options.range.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param options.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param options.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param options.title title attributes
     * @param options.title.size title area desired size
     * @param options.title.visible title visibility
     * @param options.title.text title text
     * @param options.title.textstyle title textstyle
     * @param options.title.item title text object instance
     * @param options.titletext title text
     * @param options.axis colorbar axis
     * @param options.axis.size axis area desired size
     * @param options.axis.visible axis visibility
     * @param options.axis.labelrotation axis label rotation in radians
     * @param options.axis.autolabelrotation auto rotate the labels if true
     * @param options.axis.autolabelrotationangle rotation angle if active auto label rotation
     * @param options.axis.tickgenerator tickgenerator options, see {@link @int/geotoolkit/axis/Axis.Axis#setProperties}
     * @param options.axis.item axis object instance
     * @param options.axis.hideoverlappedtext hide overlapped text flag
     * @param options.preciselimits enable keeping the precise limits and calculate only step
     * @param options.colorbox color box
     * @param options.colorbox.size colorbox area desired size
     * @param options.colorbox.visible colorbox visibility
     * @param options.colorbox.linestyle colorbox outline rectangle linestyle
     * @param options.componentsizes size of components
     * @param options.componentsizes.title title area desired size
     * @param options.componentsizes.colorbox colorbox area desired size
     * @param options.componentsizes.axis axis area desired size
     * @param options.componentsizes.namedcolors named colors desired size
     * @param options.namedcolors namedcolors options
     * @param options.namedcolors.size named colors desired size
     * @param options.namedcolors.visible named colors visibility
     */
    setOptions(options?: object | { colorprovider?: ColorProvider; location?: ColorBarLocation | string; flip?: boolean; linestyle?: LineStyle | string | object; range?: object | { min?: number; max?: number; } ; min?: number; max?: number; title?: object | { size?: number; visible?: boolean; text?: string; textstyle?: TextStyle | string | object; item?: Text; } ; titletext?: string; axis?: object | { size?: number; visible?: boolean; labelrotation?: number; autolabelrotation?: boolean; autolabelrotationangle?: number; tickgenerator?: object; item?: Axis; hideoverlappedtext?: boolean; } ; preciselimits?: boolean; colorbox?: object | { size?: number; visible?: boolean; linestyle?: LineStyle | string | object; } ; componentsizes?: object | { title?: number; colorbox?: number; axis?: number; namedcolors?: number; } ; namedcolors?: object | { size?: number; visible?: boolean; } ; } ): this;
    /**
     * Gets color bar options
     */
    getOptions(): object | any;
    /**
     * Updates layout
     * @param targets optional parameter about which element to layout
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {colorprovider: ColorProvider; location: ColorBarLocation; flip: boolean; linestyle: LineStyle; min: number; max: number; range: {min: number; max: number}; title: {item: Text}; axis: {item: Axis}; preciselimits: boolean; colorbox: {size: number; visible: boolean; linestyle: LineStyle}; namedcolors: {size: number; visible: boolean}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.colorprovider default color provider
     * @param properties.location color bar location
     * @param properties.flip flip or not
     * @param properties.linestyle line style
     * @param properties.range colorbar range
     * @param properties.range.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param properties.range.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param properties.min data range min value. If not specified then color provider's getMinValue() is used.
     * @param properties.max data range max value. If not specified then color provider's getMaxValue() is used.
     * @param properties.title title attributes
     * @param properties.title.size title area desired size
     * @param properties.title.visible title visibility
     * @param properties.title.text title text
     * @param properties.title.textstyle title textstyle
     * @param properties.title.item title text object instance
     * @param properties.titletext title text
     * @param properties.axis colorbar axis
     * @param properties.axis.size axis area desired size
     * @param properties.axis.visible axis visibility
     * @param properties.axis.labelrotation axis label rotation in radians
     * @param properties.axis.autolabelrotation auto rotate the labels if true
     * @param properties.axis.autolabelrotationangle rotation angle if active auto label rotation
     * @param properties.axis.tickgenerator tickgenerator properties, see {@link @int/geotoolkit/axis/Axis.Axis#setProperties}
     * @param properties.axis.hideoverlappedtext hide overlapped text flag
     * @param properties.axis.item axis object instance
     * @param properties.preciselimits enable keeping the precise limits and calculate only step
     * @param properties.colorbox color box
     * @param properties.colorbox.size colorbox area desired size
     * @param properties.colorbox.visible colorbox visibility
     * @param properties.colorbox.linestyle colorbox outline rectangle linestyle
     * @param properties.componentsizes size of components
     * @param properties.componentsizes.title title area desired size
     * @param properties.componentsizes.colorbox colorbox area desired size
     * @param properties.componentsizes.axis axis area desired size
     * @param properties.componentsizes.namedcolors named colors desired size
     * @param properties.namedcolors namedcolors properties
     * @param properties.namedcolors.size named colors desired size
     * @param properties.namedcolors.visible named colors visibility
     */
    setProperties(properties?: object | { colorprovider?: ColorProvider; location?: ColorBarLocation; flip?: boolean; linestyle?: LineStyle | string | object; range?: object | { min?: number; max?: number; } ; min?: number; max?: number; title?: object | { size?: number; visible?: boolean; text?: string; textstyle?: TextStyle | string | object; item?: Text; } ; titletext?: string; axis?: object | { size?: number; visible?: boolean; labelrotation?: number; autolabelrotation?: boolean; autolabelrotationangle?: number; tickgenerator?: TickGenerator | any; hideoverlappedtext?: boolean; item?: Axis; } ; preciselimits?: boolean; colorbox?: object | { size?: number; visible?: boolean; linestyle?: LineStyle | string | object; } ; componentsizes?: object | { title?: number; colorbox?: number; axis?: number; namedcolors?: number; } ; namedcolors?: object | { size?: number; visible?: boolean; } ; } ): this;
    /**
     * Returns the tick generator of inner axis for manipulations
     */
    getTickGenerator(): TickGenerator | any;
    /**
     * Set tick generator
     * @param tickGenerator tick generator
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
    /**
     * Gets the offset of value on ColorBar
     * @param value value
     */
    getPointAtValue(value: number): number;
}
