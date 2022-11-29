import {Node} from './Node';
import {HTMLOverlay} from './HTMLOverlay';

/**
 * HTMLOverlayLayer allows user adds other HTMLElements at a given position in Node's model space
 * NOTE: This layer will not be exported to pdf.
 * @example
 * ```javascript
 * import {HTMLOverlayLayer} from '@int/geotoolkit/scene/HTMLOverlayLayer';
 * import {AnnotatedWidget} from '@int/geotoolkit/widgets/AnnotatedWidget';
 * import {HTMLOverlay} from '@int/geotoolkit/scene/shapes/HTMLOverlay';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 * import {TickPosition, LabelPosition} from '@int/geotoolkit/axis/TickInfo';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 * const annotatedWidget = new AnnotatedWidget({
 *     'model': model, // instance of @int/geotoolkit/scene/Group
 *     'annotationssizes': {
 *         'north': 5, 'south': 60, 'east': 12, 'west': 80
 *     },
 *     'north': [],
 *     'south': [new Axis({
 *         'tickposition': TickPosition.Top,
 *         'orientation': Orientation.Horizontal,
 *         'labelposition': LabelPosition.Top,
 *         'title': {
 *             'text': 'Day',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'west': [new Axis({
 *         'tickposition': TickPosition.Right,
 *         'labelposition': LabelPosition.Right,
 *         'orientation': Orientation.Vertical,
 *         'title': {
 *             'text': 'Volume (gal)',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'east': [],
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     }
 * });
 * const htmlOverlayLayer = new HTMLOverlayLayer();
 * htmlOverlayLayer.addOverlays(new HTMLOverlay());
 * annotatedWidget.getModel().addChild(htmlOverlayLayer);
 * ```
 */
export class HTMLOverlayLayer extends Node {
    /**
     * HTMLOverlayLayer allows user adds other HTMLElements at a given position in Node's model space
     * NOTE: This layer will not be exported to pdf.
     * @param options 
     */
    constructor(options?: object);
    /**
     * Return index of overlay
     * (index of the specified overlay or -1 if overlay is not found)
     * @param overlay overlay to check index
     */
    indexOfOverlay(overlay: HTMLOverlay): number;
    /**
     * Insert overlay(s) to HTMLOverlayLayer
     * @param index Index to insert at
     * @param overlays An overlay or array of overlays to be inserted
     */
    insertOverlays(index: number, overlays: HTMLOverlay | HTMLOverlay[]): this;
    /**
     * Add overlay(s) to HTMLOverlayLayer
     * @param overlays An overlay or array of overlays to be added
     */
    addOverlays(overlays: HTMLOverlay | HTMLOverlay[]): this;
    /**
     * Remove overlay(s) in HTMLOverlayLayer
     * @param overlays Array of overlays or array of index of the overlays to be removed, or pass nothing to clear all HTMLOverlays
     */
    removeOverlays(overlays?: HTMLOverlay | HTMLOverlay[] | number[]): this;
    /**
     * Get an HtmlOverlay by index
     * @param index Index of HTMLOverlay
     */
    getOverlay(index: number): HTMLOverlay | any;
    /**
     * Find a first HtmlOverlay satisfied the provided testing function
     * @param method Testing method to find HtmlOverLay
     */
    findOverlay(method: Function): HTMLOverlay | any;
    /**
     * Get number of overlays
     */
    getOverlaysCount(): number;
}
