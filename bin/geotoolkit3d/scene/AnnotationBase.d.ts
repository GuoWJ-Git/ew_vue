import {Object3D} from './Object3D';
import {TextStyle} from '../../geotoolkit/attributes/TextStyle';
import {LineStyle} from '../../geotoolkit/attributes/LineStyle';
import {Vector3} from '../THREE';
import {RgbaColor} from '../../geotoolkit/util/RgbaColor';

/**
 * Parent class of schematic objects
 */
export class AnnotationBase extends Object3D {
    /**
     * Parent class of schematic objects
     * @param options The options
     * @param options.title The text to display
     * @param options.titledistancefactor A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
     * @param options.titlestyle The text attributes
     * @param options.linestyle The segment connector attributes
     * @param options.mode The display strategy for the segment origin
     * @param options.anchorpoint the point to anchor the annotation to
     * @param options.outline if provided, text will have outline
     * @param options.outline.enable set to false to remove current outline
     * @param options.outline.innercolor inner color for text with outline
     * @param options.outline.outlinecolor outline color for text with outline
     * @param options.outline.thickness outline thickness
     */
    constructor(options?: object | { title?: string; titledistancefactor?: number; titlestyle?: TextStyle; linestyle?: LineStyle; mode?: Mode; anchorpoint?: Vector3; outline?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } );
    /**
     * Sets the text to display
     * @param title title
     */
    setTitle(title: string): this;
    /**
     * Gets the text to display
     */
    getTitle(): string;
    /**
     * Sets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     * @param titleDistanceFactor title distance factor
     */
    setTitleDistanceFactor(titleDistanceFactor: number): this;
    /**
     * Gets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     */
    getTitleDistanceFactor(): number;
    /**
     * Sets text attributes
     * @param titleStyle title style
     */
    setTitleStyle(titleStyle: TextStyle): this;
    /**
     * Gets text attributes
     */
    getTitleStyle(): TextStyle;
    /**
     * Sets the segment connector attributes
     * @param lineStyle line style
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Gets the segment connector attributes
     */
    getLineStyle(): LineStyle;
    /**
     * Sets the display strategy for the segment origin
     * @param mode mode
     */
    setMode(mode: Mode): this;
    /**
     * Gets the display strategy for the segment origin
     */
    getMode(): Mode;
    /**
     * Sets the anchor-point of the annotation, this is needed in case of a single annotation not contained by a
     * schematic for example.
     * @param anchorPoint the point to anchor the annotation to
     */
    setAnchorPoint(anchorPoint: Vector3): this;
    /**
     * Gets the point to anchor the annotation to
     */
    getAnchorPoint(): Vector3 | null;
    /**
     * Set outline for title
     * @param outline the options for outline
     * @param outline.enable set to false to remove current outline
     * @param outline.innercolor inner color for text with outline
     * @param outline.outlinecolor outline color for text with outline
     * @param outline.thickness outline thickness
     */
    setOutline(outline: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ): this;
    /**
     * Sets options
     * @param options The options
     * @param options.title The text to display
     * @param options.titledistancefactor A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
     * @param options.titlestyle The text attributes
     * @param options.linestyle The segment connector attributes
     * @param options.mode The display strategy for the segment origin
     * @param options.anchorpoint the point to anchor the annotation to
     * @param options.outline the options for outline
     * @param options.outline.enable set to false to remove current outline
     * @param options.outline.innercolor inner color for text with outline
     * @param options.outline.outlinecolor outline color for text with outline
     * @param options.outline.thickness outline thickness
     */
    setOptions(options?: object | { title?: string; titledistancefactor?: number; titlestyle?: TextStyle; linestyle?: LineStyle; mode?: Mode; anchorpoint?: Vector3; outline?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ): this;
    /**
     * Gets options
     */
    getOptions(): {title: string; titledistancefactor: number; titlestyle: TextStyle; linestyle: LineStyle; mode: Mode; anchorpoint: Vector3} | any;
}
/**
 * Enum of display strategy.<br>
 * <br>
 * The functions provided through this enum defines how the line linking the annotation text to the annotated object will be positioned.<br>
 */
export enum Mode {
    /**
     * Use the center of the bounding box of the parent (basically a geotoolkit3d.scene.well.schematic.SchematicBase).<br>
Default behavior, the line goes from the center of the annotated shape to text.
     */
    Center = 'center',
    /**
     * Always use the direct intersection from camera direction.<br>
This computes the anchor of the line on the fly to be the closest vertex of the annotated shape from the text location.<br>
Note that this implementation is more CPU demanding than the default one.
     */
    Closest = 'closest'
}
