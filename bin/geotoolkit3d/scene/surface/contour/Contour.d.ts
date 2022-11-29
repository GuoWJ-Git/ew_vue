import {AbstractSurface} from '../AbstractSurface';
import {AbstractSurfaceData} from '../../../data/surface/AbstractSurfaceData';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color} from '../../../THREE';
import {MajorMinorStrategy} from './MajorMinorStrategy';
import {TextStyle} from '../../../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../../../geotoolkit/util/RgbaColor';

/**
 * A Contour 3D object.<br>
 * <br>
 * This object represents a 3D contour with an optional attribute used for coloring.<br>
 * The contour's geometry is defined by the given SurfaceData.<br>
 * <br>
 * The contour will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
 * <br>
 * The total number of isolines can be specfied by user, by setting 'count' option.
 * Alternatively, user can specify a MajorMinorStrategy.
 * MajorMinorStrategy is used to control the drawing of major and minor isolines.
 * See {@link @int/geotoolkit3d/scene/surface/contour/MajorMinorStrategy.MajorMinorStrategy} for more info <br>
 * Note that if no strategy is set, all isolines will be major isolines.
 * <br>
 */
export class Contour extends AbstractSurface {
    /**
     * A Contour 3D object.<br>
     * <br>
     * This object represents a 3D contour with an optional attribute used for coloring.<br>
     * The contour's geometry is defined by the given SurfaceData.<br>
     * <br>
     * The contour will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
     * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
     * <br>
     * The total number of isolines can be specfied by user, by setting 'count' option.
     * Alternatively, user can specify a MajorMinorStrategy.
     * MajorMinorStrategy is used to control the drawing of major and minor isolines.
     * See {@link @int/geotoolkit3d/scene/surface/contour/MajorMinorStrategy.MajorMinorStrategy} for more info <br>
     * Note that if no strategy is set, all isolines will be major isolines.
     * <br>
     * @param options The options to use to create the contour
     * @param options.data The data to use to create the contour
     * @param options.data.surface The contour geometry data object
     * @param options.data.values The attribute values used to colorize the contour surface
     * @param options.data.nullvalue The attribute nullvalue to introduce holes in the contour surface
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.opacity The opacity for the surface contour
     * @param options.surface The options to create surface
     * @param options.surface.enabled Whether to show surface or not. Does not affect isoline or label.
     * @param options.smoothshadingfactor Define how flat/smooth the surface triangle shading is, from 0.0 for totally flat, up to 1.0 for totally smooth.
     * @param options.wireframe set true to enable wireframe rendering mode. Wireframe mode does not use shading.
     * @param options.isoline The options to create isolines
     * @param options.isoline.useglline Whether to use gl_line or not. If true, isoline behaviour is up to browsers
     * @param options.isoline.zmin The min elevation level for isolines
     * @param options.isoline.zmax The max elevation level for isolines
     * @param options.isoline.count The total number of isolines
     * @param options.isoline.majorminorstrategy The stepping strategy for major / minor isolines
     * @param options.isoline.major The options to configure major isolines
     * @param options.isoline.major.visible The visibility of major isolines
     * @param options.isoline.major.color The color of major isolines
     * @param options.isoline.major.width The width of major isolines
     * @param options.isoline.minor The options to configure minor isolines
     * @param options.isoline.minor.visible The visibility of minor isolines
     * @param options.isoline.minor.color The color of minor isolines
     * @param options.isoline.minor.width The width of minor isolines
     * @param options.label The options to create labels
     * @param options.label.major The options to configure major label
     * @param options.label.major.visible The visibility of major label
     * @param options.label.major.style the style of label
     * @param options.label.major.outline outline options
     * @param options.label.major.outline.enabled set true to enable outline for the text
     * @param options.label.major.outline.innercolor inner color for text with outline
     * @param options.label.major.outline.outlinecolor outline color for text with outline
     * @param options.label.major.outline.thickness outline thickness
     * @param options.label.minor The options to configure minor label
     * @param options.label.minor.visible The visibility of minor label
     * @param options.label.minor.style the style of label
     * @param options.label.minor.outline outline options
     * @param options.label.minor.outline.enabled set true to enable outline for the text
     * @param options.label.minor.outline.innercolor inner color for text with outline
     * @param options.label.minor.outline.outlinecolor outline color for text with outline
     * @param options.label.minor.outline.thickness outline thickness
     * @param options.label.labelmaxglobalvisibleangle the max angle (radian) between the label facing direction (normal) and the camera direction, above which the label stop being visible.
     * @param options.label.labelmaxverticalvisibleangle the max angle (radian) between the label vertical direction and the projected vertical camera direction, above which the label stop being visible.
     * @param options.label.labelmaxverticalrotationangle the max angle (radian) the label is allowed to rotate vertically both ways.
     * @param options.label.formatter The function that takes value and scale to format the label text
     * @param options.label.opacity the opacity of label
     * @param options.label.density the density of labels scattered on surface. Clamp to range [1, 5].
     */
    constructor(options: object | { data: object | { surface: AbstractSurfaceData; values?: Float32Array | number[]; nullvalue?: number; } ; colorprovider?: ColorProvider | string | Color; opacity?: number; surface?: object | { enabled?: boolean; } ; smoothshadingfactor?: number; wireframe?: boolean; isoline: object | { useglline?: boolean; zmin?: number; zmax?: number; count?: number; majorminorstrategy?: MajorMinorStrategy; major?: object | { visible?: boolean; color?: string | Color; width?: number; } ; minor?: object | { visible?: boolean; color?: string | Color; width?: number; } ; } ; label?: object | { major?: object | { visible?: object; style?: TextStyle; outline?: object | { enabled?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; minor?: object | { visible?: object; style?: TextStyle; outline?: object | { enabled?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; labelmaxglobalvisibleangle?: number; labelmaxverticalvisibleangle?: number; labelmaxverticalrotationangle?: number; formatter?: Function; opacity?: number; density?: number; } ; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options (See {@link @int/geotoolkit3d/scene/surface/contour/Contour.Contour} for more info)
     */
    setOptions(options?: object): this;
    /**
     * Get contour options
     * (see {@link @int/geotoolkit3d/scene/surface/contour/Contour.Contour#setOptions} for more info)
     */
    getOptions(): {data: {values: Float32Array}; isoline: {useglline: boolean; majorminorstrategy: MajorMinorStrategy}; zmin: number; zmax: number} | any;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options (See {@link @int/geotoolkit3d/scene/surface/contour/Contour.Contour} for more info)
     */
    setProperties(options: object): this;
    /**
     * Get contour options
     * (see {@link @int/geotoolkit3d/scene/surface/contour/Contour.Contour#setOptions} for more info)
     */
    getProperties(): object | any;
    /**
     * Dispose contour and its children
     */
    dispose(): void;
    /**
     * Return major/minor strategy
     */
    getMajorMinorStrategy(): MajorMinorStrategy;
    /**
     * Return the elevations where isolines are drawn
     */
    getElevations(): number[];
    /**
     * Return the number of isolines on surface
     */
    getLineCount(): number;
}
