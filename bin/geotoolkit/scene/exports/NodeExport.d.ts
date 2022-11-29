import {Node} from '../Node';
import {IExportable} from './IExportable';
import {AbstractDocumentElement} from './AbstractDocumentElement';
import {Rect} from '../../util/Rect';
import {Surface} from '../../renderer/Surface';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {Document} from './Document';
import {PageElement} from './PageElement';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * Utility class to export nodes of various types for PDF output.
 */
export class NodeExport {
    /**
     * Utility class to export nodes of various types for PDF output.
     */
    constructor();
    /**
     * Exports node to image.
     * @param options node or options
     * @param options.node node
     * @param options.imageWidth width
     * @param options.imageHeight height
     * @param options.horizontalFlip flag to set horizontal flip
     * @param options.verticalFlip flag to set vertical flip
     * @param options.modelLimits model limits. if it is not specified then node model limits is used.
     * @param options.exportOptions export options if node is IExportable
     * @param options.handler called when image is ready
     * @param imageWidth width
     * @param imageHeight height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param modelLimits model limits. if it is not specified then node model limits is used.
     * @param handler called when image is ready
     */
    static exportToImage(options: Node | IExportable | AbstractDocumentElement | object | { node?: number; imageWidth?: number; imageHeight?: number; horizontalFlip?: boolean; verticalFlip?: boolean; modelLimits?: Rect; exportOptions?: any; handler?: Function; } , imageWidth?: number, imageHeight?: number, horizontalFlip?: boolean, verticalFlip?: boolean, modelLimits?: Rect, handler?: Function): HTMLElement;
    /**
     * Exports node to image Url
     * @example
     * ```javascript
     * // Export of widget
     * var url = geotoolkit.scene.exports.NodeExport.exportToImageUrl({
     *      'node': widget,
     *       'exportOptions': {
     *           'limits': {
     *               'start': 4600,
     *               'end': 4700
     *           }
     *       }
     * })
     * ```
     * @param options node or options
     * @param options.node node
     * @param options.imageWidth width
     * @param options.imageHeight height
     * @param options.horizontalFlip flag to set horizontal flip
     * @param options.verticalFlip flag to set vertical flip
     * @param options.modelLimits model limits. if it is not specified then node model limits is used.
     * @param options.exportOptions export options if node is IExportable
     * @param imageWidth width
     * @param imageHeight height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param modelLimits model limits. if it is not specified then node model limits is used.
     */
    static exportToImageUrl(options: Node | IExportable | AbstractDocumentElement | object | { node?: number; imageWidth?: number; imageHeight?: number; horizontalFlip?: boolean; verticalFlip?: boolean; modelLimits?: Rect; exportOptions?: any; } , imageWidth?: number, imageHeight?: number, horizontalFlip?: boolean, verticalFlip?: boolean, modelLimits?: Rect): string;
    /**
     * Exports node imageUrl
     * @param node node
     * @param imageWidth width
     * @param imageHeight height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param modelLimits model limits. if it is not specified then node model limits is used.
     */
    static exportToImageUrlAsync(node: Node | object, imageWidth: number, imageHeight: number, horizontalFlip: boolean, verticalFlip: boolean, modelLimits?: Rect): Promise<any>;
    /**
     * Export to surface
     * @param node node to export
     * @param imageWidth image width
     * @param imageHeight image height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param modelLimits model limits. model limits. if it is not specified then node model limits is used.
     */
    static exportToSurface(node: Node, imageWidth: number, imageHeight: number, horizontalFlip: boolean, verticalFlip: boolean, modelLimits?: Rect): Surface;
    /**
     * Export the node using a given context in asynchronous mode
     * This will separate the scene into pages using print settings, header and footer information
     * @param context rendering context
     * @param document Document class representing a pdf document
     * @param printSettings print settings
     */
    static renderAsync(context: DocumentRenderingContext, document: Document, printSettings: any): Promise<any>;
    /**
     * Export the node using a given context.
     * This will separate the scene into pages using print settings, header and footer information
     * @param context rendering context
     * @param document Document class representing a pdf document
     * @param printSettings print settings
     */
    static render(context: DocumentRenderingContext, document: Document, printSettings: any): void;
    /**
     * @param document Document class representing a pdf document
     * @param docSettings docSettings
     * @param header header
     * @param footer footer
     * @param pixelUnit unit
     * @param outputUnit device unit
     */
    protected static computeElementsSizeInPages(document: Document, docSettings: any, header: PageElement, footer: PageElement, pixelUnit: AbstractUnit, outputUnit: AbstractUnit): any[] | null;
}
