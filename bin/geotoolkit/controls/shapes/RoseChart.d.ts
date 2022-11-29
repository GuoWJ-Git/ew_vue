import {Shape} from '../../scene/shapes/Shape';
import {PolarGrid} from './PolarGrid';
import {Point} from '../../util/Point';
import {Iterator} from '../../util/iterator';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {Rect} from '../../util/Rect';

/**
 * A Rose Chart is a circular graph used for data comparison. Each category or interval in data is divided into equal segments on the radial chart.<br>
 * How far each segment extends from the centre, in proportion to the value it represents, depends on a polar axis.<br>
 */
export class RoseChart extends Shape {
    /**
     * A Rose Chart is a circular graph used for data comparison. Each category or interval in data is divided into equal segments on the radial chart.<br>
     * How far each segment extends from the centre, in proportion to the value it represents, depends on a polar axis.<br>
     * @param options options object
     * @param options.name name of the rose chart diagram
     * @param options.polargrid polar grid
     * @param options.rosemode Rosemode
     * @param options.outerradius outer radius
     * @param options.modelradius model radius
     * @param options.startangle start angle
     * @param options.center center
     * @param options.data data object
     * @param options.data.values values values
     * @param options.data.bins bins bins
     * @param options.data.fillstyles an array of fill styles
     * @param options.data.linestyles an array of line styles
     */
    constructor(options?: object | { name?: string; polargrid?: PolarGrid; rosemode?: RoseMode; outerradius?: number; modelradius?: number; startangle?: number; center?: Point; data?: object | { values?: number[]; bins?: number; fillstyles?: Iterator | (FillStyle | string | any)[] | FillStyle | string | any; linestyles?: Iterator | (LineStyle | string | any)[] | LineStyle | string | any; } ; } );
    /**
     * Sets properties
     * @param properties options object
     * @param properties.name name of the rose chart diagram
     * @param properties.polargrid polar grid
     * @param properties.rosemode Rosemode
     * @param properties.outerradius outer radius
     * @param properties.modelradius model radius
     * @param properties.startangle start angle
     * @param properties.center center
     * @param properties.data data object
     * @param properties.data.values values values
     * @param properties.data.bins bins bins
     * @param properties.data.fillstyles an array of fill styles
     * @param properties.data.linestyles an array of line styles
     */
    setProperties(properties?: object | { name?: string; polargrid?: PolarGrid; rosemode?: RoseMode; outerradius?: number; modelradius?: number; startangle?: number; center?: Point; data?: object | { values?: number[]; bins?: number; fillstyles?: Iterator | (FillStyle | string | any)[] | FillStyle | string | any; linestyles?: Iterator | (LineStyle | string | any)[] | LineStyle | string | any; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {name: string; rosemode: RoseMode; outerradius: number; modelradius: number; startangle: number; center: Point} | any;
    /**
     * Set fill styles
     * @param styles line styles
     */
    setFillStyles(styles?: Iterator | (FillStyle | object)[] | LineStyle | object): this;
    /**
     * Return iterator with fill styles
     * @param func to filter fill styles
     */
    getFillStyles(func?: Function): Iterator;
    /**
     * Return fill style by specified index if any, or background fill style
     * @param index index of the fill style
     */
    getFillStyle(index?: number): FillStyle | null;
    /**
     * Returns amount of known fill styles
     */
    getFillStylesCount(): number;
    /**
     * Set line styles
     * @param styles line styles
     */
    setLineStyles(styles?: Iterator | (LineStyle | object)[] | LineStyle | object): this;
    /**
     * Return iterator with fill styles
     * @param func to filter fill styles
     */
    getLineStyles(func?: Function): Iterator;
    /**
     * Return line style by specified index if any, or border line style
     * @param index index of the line style
     */
    getLineStyle(index?: number): LineStyle | null;
    /**
     * Returns amount of known line styles
     */
    getLineStylesCount(): number;
    /**
     * Set values
     * @param values values
     */
    setValues(values: (number | object)[]): this;
    /**
     * Set rose mode
     * @param mode rose mode
     */
    setRoseMode(mode: RoseMode): this;
    /**
     * Return rose mode
     */
    getRoseMode(): RoseMode;
    /**
     * Set model radius
     * @param radius model radius
     */
    setModelRadius(radius: number): this;
    /**
     * Return model radius
     */
    getModelRadius(): number;
    /**
     * Set the data to be plotted in the rose chart
     * @param data Data to be charted in histogram
     * @param data.name name of the rose chart diagram
     * @param data.polargrid polar grid
     * @param data.rosemode Rosemode
     * @param data.outerradius outer radius
     * @param data.modelradius model radius
     * @param data.startangle start angle
     * @param data.center center
     * @param data.fillstyle background fill style
     * @param data.linestyle border line style
     * @param data.values values values
     * @param data.data data object
     * @param data.data.bins bins bins
     * @param data.data.fillstyles an array of fill styles
     * @param data.data.linestyles an array of line styles
     */
    setData(data: object | { name?: string; polargrid?: PolarGrid; rosemode?: RoseMode; outerradius?: number; modelradius?: number; startangle?: number; center?: Point; fillstyle?: FillStyle | string | any; linestyle?: LineStyle | string | any; values?: number[]; data?: object | { bins?: number; fillstyles?: Iterator | (FillStyle | string | any)[] | FillStyle | string | any; linestyles?: Iterator | (LineStyle | string | any)[] | LineStyle | string | any; } ; } ): this;
    /**
     * Returns rose chart options
     */
    getOptions(): {name: string; polargrid: PolarGrid; rosemode: RoseChart; outerradius: number; startangle: number; center: Point; fillstyle: FillStyle | null; linestyle: LineStyle | null; values: number[]; data: {bins: number; fillstyles: Iterator; linestyles: Iterator}} | any;
    /**
     * Return bin count
     */
    getBinCount(): number;
    /**
     * Set bins count
     * @param bins bins count
     */
    setBinCount(bins: number): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bounds of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer raidus
     */
    modelToOuterRadius(value: number): number;
}
/**
 * Enum for RoseMode
 */
export enum RoseMode {
    /**
     * bar
     */
    Bar = 'bar',
    /**
     * histogram
     */
    Histogram = 'histogram',
    /**
     * slices, each value can has own start and end angle, value, fillstyle and linestyle properties
     */
    Slices = 'slices'
}
