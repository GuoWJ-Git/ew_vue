import {AbstractVisual} from './AbstractVisual';
import {RenderingContext} from '../../renderer/RenderingContext';
import {ContourEvent} from '../events/ContourEvent';

/**
 * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
 */
export class ContourFillVisual extends AbstractVisual {
    /**
     * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
     * @param options An object containing the properties to set
     * @param options.transparentholes The flag indicating whether hole transparency is true
     * @param options.holecolor The color that will be used when rendering opaque holes
     */
    constructor(options?: object | { transparentholes?: boolean; holecolor?: string; } );
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     */
    getTransparentHoles(): boolean;
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     * @param transparentHoles The flag indicating whether hole transparency is true.
     */
    setTransparentHoles(transparentHoles: boolean): this;
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     */
    getHoleColor(): string;
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     * @param holeColor The color that will be used when rendering opaque holes.
     */
    setHoleColor(holeColor: string): this;
    /**
     * Renders the fill visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
    /**
     * This method is invoked when the contour shape has been invalidated
     * @param args The event which has caused the shape to be invalidated.
     */
    contourInvalidated(args: ContourEvent): void;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.transparentholes The flag indicating whether hole transparency is true
     * @param properties.holecolor The color that will be used when rendering opaque holes
     */
    setProperties(properties?: object | { transparentholes?: boolean; holecolor?: string; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {transparentholes: boolean; holecolor: string} | any;
}
