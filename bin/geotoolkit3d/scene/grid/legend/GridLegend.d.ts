import {Vector2} from '../../../THREE';
import {TextStyle} from '../../../../geotoolkit/attributes/TextStyle';
import {RgbaColor} from '../../../../geotoolkit/util/RgbaColor';
import {Grid} from '../Grid';

/**
 * Widget for projecting texts/legends on the grid's 4 cardinal directions.
 */
export class GridLegend {
    /**
     * Widget for projecting texts/legends on the grid's 4 cardinal directions.
     * @param options options object
     * @param options.planes planes options object
     * @param options.planes.back back plane options object
     * @param options.planes.left left plane options object
     * @param options.planes.right right plane options object
     * @param options.planes.front front plane options object
     * 
     * Each plane (front, back, left right) can use these options:
     * @param options.planes.front.enable if the plane text is visible or not.
     * @param options.planes.front.text the plane text to display, supports newlines/carriage returns.
     * @param options.planes.front.nearside if true, show the text on the near face of the grid cube, if false, show on the far face of the grid cube.
     * @param options.planes.front.sizeindevice if true, the on-screen size of the text will always be the same, if false, it will depend on zoom level.
     * @param options.planes.front.textscale the text scale. To use with sizeindevice=false. If text is blury, it is recomended to increase testStyle font size before increasing textscale.
     * @param options.planes.front.textoffset local X,Y offset for text position, (0,0 is bottom left, 1,1 is top right, relative to the plane)
     * @param options.planes.front.style the style of the legend text (Font, size, color...)
     * @param options.planes.front.outline outline options
     * @param options.planes.front.outline.enabled set true to enable outline for the text
     * @param options.planes.front.outline.innercolor inner color for text with outline
     * @param options.planes.front.outline.outlinecolor outline color for text with outline
     * @param options.planes.front.outline.thickness outline thickness
     * @param options.planes.front.verticalanchor The vertical anchor position for the legend (default is Center)
     * @param options.hideiftoolarge if true, hide the legend text when it doesnt fit inside it's panel.
     * @param options.centerbeforehiding if true and hideiftoolarge enabled, will try to shift the legend text to fit inside the panel if possible.
     */
    constructor(options: object | { planes?: object | { back?: object; left?: object; right?: object; front?: object | { enable?: boolean; text?: string; nearside?: boolean; sizeindevice?: boolean; textscale?: number; textoffset?: Vector2; style?: TextStyle; outline?: object | { enabled?: boolean; innercolor?: string | RgbaColor; outlinecolor?: string | RgbaColor; thickness?: number; } ; verticalanchor?: string; } ; } ; hideiftoolarge?: boolean; centerbeforehiding?: boolean; } );
    /**
     * @param options options object
     */
    setOptions(options?: object): void;
    /**
     * Add this legend to the given Grid
     * @param grid the grid to add the legend to
     */
    addToGrid(grid: Grid): void;
}
