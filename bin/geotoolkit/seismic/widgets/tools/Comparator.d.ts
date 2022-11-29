import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {SeismicViewWidget} from '../SeismicViewWidget';
import {CompositeNode} from '../../../scene/CompositeNode';
import {SeismicPipeline} from '../../pipeline/SeismicPipeline';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {Orientation} from '../../../util/Orientation';

/**
 * Creates default implementation of the seismic comparison tool.
 * @example
 * ```javascript
 * // To initialize the comparator/layer tool
 * seismicWidget.getToolByName('comparator').setEnabled(true)
 * ```
 * @example
 * ```javascript
 * // By default the orientation is vertical. Following example shows how to change the orientation.
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * seismicWidget.getToolByName('comparator').setOrientation(Orientation.Horizontal);
 * ```
 */
export class Comparator extends AbstractTool {
    /**
     * Creates default implementation of the seismic comparison tool.
     * @param options object or the target widget to add the comparator to
     * @param options.widget the target widget to add the comparator to.
     * @param manipulatorLayer layer for holding temporary shapes
     */
    constructor(options?: SeismicViewWidget | object | { widget?: SeismicViewWidget; } , manipulatorLayer?: CompositeNode);
    /**
     * Sets properties
     * @param properties properties
     * @param properties.widget the target widget to add the comparator to.
     */
    setProperties(properties?: object | { widget?: SeismicViewWidget; } ): this;
    /**
     * dispose object
     */
    dispose(): void;
    /**
     */
    protected onEnabledStateChanged(): void;
    /**
     * returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline pipeline
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns visual options
     */
    getOptions(): {width: number; linestyle: LineStyle; fillstyle: FillStyle} | any;
    /**
     * Set visual options
     * @param options visual options
     * @param options.width splitter width
     * @param options.linestyle splitter border line style
     * @param options.fillstyle splitter fill style
     */
    setOptions(options: object | { width?: number; linestyle?: LineStyle | object | string; fillstyle?: FillStyle | object | string; } ): this;
    /**
     * Returns split flag
     */
    getSplit(): boolean;
    /**
     * Set split flag
     * @param split default is true
     */
    setSplit(split: boolean): this;
    /**
     * Return continuous mode flag
     */
    getContinuous(): boolean;
    /**
     * Set continuous mode flag
     * @param continuous continuous mode flag
     */
    setContinuous(continuous: boolean): this;
    /**
     * Set orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * returns splitter orientation
     */
    getOrientation(): Orientation;
    /**
     * Returns split position
     */
    getPosition(): number;
    /**
     * Set split position
     * @param position splitter position (interval [0, 1])
     */
    setPosition(position: number): this;
}
