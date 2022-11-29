import {LogCompositeVisualHeader} from './LogCompositeVisualHeader';
import {Log2DVisual} from '../Log2DVisual';
import {TickGenerator} from '../../axis/TickGenerator';

/**
 * Composite header for Log2d visual
 */
export class CompositeLog2DVisualHeader extends LogCompositeVisualHeader {
    /**
     * Composite header for Log2d visual
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: Log2DVisual | object | { visual?: Log2DVisual; } );
    /**
     * Return header options
     */
    getOptions(): {colorbar: object} | any;
    /**
     * Set header options
     * @param options header options
     * @param options.title title options @see {@link @int/geotoolkit/welllog/header/AdaptiveLogVisualHeader.AdaptiveLogVisualHeader.setElement}
     * @param options.colorbar colorbar options @see {@link @int/geotoolkit/controls/shapes/ColorBar.ColorBar.setOptions}
     */
    setOptions(options: object | { title?: object; colorbar?: object; } ): this;
    /**
     * Returns tick generator using for color bar
     */
    getTickGenerator(): TickGenerator;
    /**
     * Set color bar tick generator
     * @param tickGenerator color bar tick generator
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
}
