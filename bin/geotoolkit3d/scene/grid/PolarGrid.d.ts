import {Object3D} from '../Object3D';
import {LineStyle} from '../../../geotoolkit/attributes/LineStyle';
import {TextStyle} from '../../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../../geotoolkit/util/RgbaColor';
import {Vector3} from '../../THREE';

/**
 * A polar grid for 3D.<br>
 * <br>
 * The grid can be positioned in space using its position attribute.<br>
 * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
 * <br>
 */
export class PolarGrid extends Object3D {
    /**
     * A polar grid for 3D.<br>
     * <br>
     * The grid can be positioned in space using its position attribute.<br>
     * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
     * <br>
     * @param options The options
     * @param options.modelcenter The center of the polar grid's model
     * @param options.modelsize The size of the polar grid's model
     * @param options.count The grid tick count
     * @param options.axis The axis options
     * @param options.axis.linestyle Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
     * @param options.axis.textstyle The axis textstyle
     * @param options.axis.formatter Function responsible of formatting the axis text values
     * @param options.axis.outline if provided, text will have outline
     * @param options.axis.outline.enable set to false to remove current outline
     * @param options.axis.outline.innercolor inner color for text with outline
     * @param options.axis.outline.outlinecolor outline color for text with outline
     * @param options.axis.outline.thickness outline thickness
     * @param options.grid The grid options
     * @param options.grid.linestyle Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
     */
    constructor(options: object | { modelcenter?: number; modelsize?: number; count?: number; axis?: object | { linestyle?: LineStyle; textstyle?: TextStyle; formatter?: Function; outline?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; grid?: object | { linestyle?: LineStyle; } ; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.modelcenter The center of the polar grid's model
     * @param options.modelsize The size of the polar grid's model
     * @param options.count The grid tick count
     * @param options.axis The axis options
     * @param options.axis.linestyle Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
     * @param options.axis.textstyle The axis textstyle
     * @param options.axis.formatter Function responsible of formatting the axis text values
     * @param options.axis.outline if provided, text will have outline
     * @param options.axis.outline.enable set to false to remove current outline
     * @param options.axis.outline.innercolor inner color for text with outline
     * @param options.axis.outline.outlinecolor outline color for text with outline
     * @param options.axis.outline.thickness outline thickness
     * @param options.grid The grid options
     * @param options.grid.linestyle Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
     */
    setOptions(options?: object | { modelcenter?: number; modelsize?: number; count?: number; axis?: object | { linestyle?: LineStyle; textstyle?: TextStyle; formatter?: Function; outline?: object | { enable?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; } ; grid?: object | { linestyle?: LineStyle; } ; } ): this;
    /**
     * Get polar grid options
     * (see {@link @int/geotoolkit3d/scene/grid/PolarGrid.PolarGrid#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Gets outline
     */
    getOutline(): {enable: boolean; innercolor: string | RgbaColor; outlinecolor: string | RgbaColor; thickness: number} | object;
    /**
     * Return the grid's tick counts
     */
    getCount(): number;
    /**
     * Return the grid's 'modelCenter'
     */
    getModelCenter(): Vector3;
    /**
     * Return the grid's 'modelSize'
     */
    getModelSize(): Vector3;
}
