import {BaseWidget} from '../../widgets/BaseWidget';
import {Rect} from '../../util/Rect';
import {Document} from '../dom/Document';
import {Document as ReportDocument} from '../Document';
import {Registry} from '../dom/elements/Registry';
import {PaperFormat} from '../../scene/exports/PaperFormat';
import {PaperOrientation} from '../../scene/exports/PaperOrientation';
import {AbstractPaperFormat} from '../../scene/exports/AbstractPaperFormat';
import {Group} from '../../scene/Group';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';
import {PageElement} from '../../scene/exports/PageElement';
import {HeaderComponent} from '../../scene/exports/HeaderComponent';
import {FooterComponent} from '../../scene/exports/FooterComponent';
import {ScalingOptions} from '../../scene/exports/ScalingOptions';
import {ImageCompression} from '../../pdf/ImageCompression';
import {SpeedCompression} from '../../pdf/SpeedCompression';
import {EmbededFont} from '../../pdf/PdfExport';
import {IWritable} from '../../util/stream/IWritable';

/**
 * DocumentViewWidget is essentially a base widget specialized for display report document.
 */
export class DocumentViewWidget extends BaseWidget {
    /**
     * DocumentViewWidget is essentially a base widget specialized for display report document.
     * @param options 
     * @param options.minscale defines minimum scale
     * @param options.maxscale defines maximum scale
     * @param options.previewmode preview mode
     * @param options.rulersvisible defines if rulers are visible
     * @param options.gridsvisible defines if pages grid are visible
     * @param options.contentclipping defines if content view clipping is enabled
     * @param options.tools defines tools options
     * @param options.bounds bounds of the current widget
     */
    constructor(options?: object | { minscale?: number; maxscale?: number; previewmode?: boolean; rulersvisible?: boolean; gridsvisible?: boolean; contentclipping?: boolean; tools?: object; bounds?: Rect; } );
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * update Scroll Positions using visible limits and model limits.
     * @param enableAnimation show animation
     */
    updateScrollPositions(enableAnimation?: boolean): this;
    /**
     * Returns active page index
     */
    getActivePageIndex(): number;
    /**
     * Zoom out
     */
    zoomIn(): this;
    /**
     * Zoom in
     */
    zoomOut(): this;
    /**
     * Return current document view scale factor
     */
    getViewScale(): number;
    /**
     * Set document view scale factor
     * @param scaleFactor new scale factor
     */
    setViewScale(scaleFactor: number): this;
    /**
     * Scale document view
     * @param factor scale factor
     */
    scaleView(factor: number): this;
    /**
     * Translate view
     * @param dx offset x
     * @param dy offset y
     */
    translateView(dx: number, dy: number): this;
    /**
     */
    adjustPages(): this;
    /**
     * Return pages count
     */
    getPagesCount(): number;
    /**
     * Scroll to page
     * @param pageIndex page index
     */
    scrollToPage(pageIndex: number): this;
    /**
     */
    protected onDocumentRebuild(): void;
    /**
     * Load document
     * @param document document to load
     * @param dispose dispose active template
     */
    loadDocument(document: Document | ReportDocument, dispose?: boolean): this;
    /**
     * Parse and Load document
     * @param document document to parse and load
     * @param registry DOM elements registry
     */
    parseDocument(document: string, registry?: Registry): Promise<any>;
    /**
     * Return current document
     */
    getDocument(): ReportDocument;
    /**
     * Returns DOM document
     */
    getDomDocument(): Document;
    /**
     * Set paper size
     * @param paperFormat paper format
     * @param orientation paper orientation
     * @param margins paper margins
     * @param margins.left left margin
     * @param margins.top top margin
     * @param margins.right right margin
     * @param margins.bottom bottom margin
     */
    setPaperSize(paperFormat: PaperFormat | string, orientation?: PaperOrientation, margins?: object | { left?: string | number; top?: string | number; right?: string | number; bottom?: string | number; } ): this;
    /**
     * Set paper format
     * @param paperFormat paper format
     */
    setPaperFormat(paperFormat: AbstractPaperFormat): this;
    /**
     * Return current paper format
     * @deprecated since 2021 (3.2) use DocumentViewWidget.getPaperFormat instead
     */
    getPaperSize(): AbstractPaperFormat;
    /**
     * Return current paper format
     */
    getPaperFormat(): AbstractPaperFormat;
    /**
     */
    getDocumentElement(): Group;
    /**
     * Returns Document information
     */
    getDocumentInfo(): {title: string; date: Date} | object;
    /**
     * Set Document information
     * @param documentInfo document info
     * @param documentInfo.title document title
     * @param documentInfo.date document Date
     */
    setDocumentInfo(documentInfo: object | { title?: string; date?: Date; } ): this;
    /**
     * Returns exportable element
     * @param options export options
     */
    getExportElement(options?: object): AbstractDocumentElement;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param options export options
     * @param options.title document title
     * @param options.date document title
     * @param options.output define optional output filename
     * @param options.save flag to save the pdf directly to file or open dialog
     * @param options.header an optional PDF page header
     * @param options.footer an optional PDF page footer
     * @param options.documentheader an optional document PDF header
     * @param options.documentfooter an optional document PDF footer
     * @param options.printsettings define optional paper and export parameters
     * @param options.printsettings.paperformat define optional paper paper format
     * @param options.printsettings.top define optional top margin
     * @param options.printsettings.bottom define optional bottom margin
     * @param options.printsettings.left define optional left margin
     * @param options.printsettings.right define optional top margin
     * @param options.printsettings.orientation define optional paper orientation
     * @param options.printsettings.scaling define optional scaling mode. Specify ( 'scaling': geotoolkit.scene.exports.ScalingOptions.FitWidth,) to fit all tracks in your page width.
     * @param options.printsettings.keepaspectratio keep aspect ratio
     * @param options.printsettings.continuous continuous printing
     * @param options.imagescalefactor options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
     * @param options.imagecompression options to specify the image compression
     * @param options.imagecompression.mode image compression method used to exporting pdf.
     * @param options.imagecompression.quality quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param options.imagecompression.speed speed referring to the png compression speed, available  for png mode only.
     * @param options.streamcompression enable or disable pdf output compression
     * @param options.embededfonts array of embedded fonts
     * @param options.pdfstream optional user-customized Stream object
     */
    exportToPdf(options?: object | { title?: string; date?: Date; output?: string; save?: boolean; header?: PageElement; footer?: PageElement; documentheader?: HeaderComponent; documentfooter?: FooterComponent; printsettings?: object | { paperformat?: AbstractPaperFormat; top?: number; bottom?: number; left?: number; right?: number; orientation?: PaperOrientation | string; scaling?: ScalingOptions | string; keepaspectratio?: boolean; continuous?: boolean; } ; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; embededfonts?: EmbededFont[]; pdfstream?: IWritable; } ): Promise<IWritable>;
    /**
     * Returns if page content clipping is enabled or not for this node.
     */
    isContentClippingEnabled(): boolean;
    /**
     * Enables or disables page content clipping of this widget. If enabled,
     * document content will not be rendered outside of margin bounds.
     * @param doClip enable content clipping on this widget
     */
    enableContentClipping(doClip: boolean): this;
    /**
     * Returns visibility of the rulers
     */
    getRulersVisible(): boolean;
    /**
     * Sets visibility of the rulers.
     * @param visible flag specifying visibility of the rulers
     */
    setRulersVisible(visible: boolean): this;
    /**
     * Returns visibility of the pages grid
     */
    getGridsVisible(): boolean;
    /**
     * Sets visibility of the pages grid
     * @param visible flag specifying visibility of the pages grid
     */
    setGridsVisible(visible: boolean): this;
    /**
     * Returns widget options
     */
    getOptions(): {minscale: number; maxscale: number; rulersvisible: boolean; gridsvisible: boolean; contentclipping: boolean; paperformat: AbstractPaperFormat} | any;
    /**
     * Sets widget options
     * @example
     * ```javascript
     * //call  setOptions on widget after construction and change the default behavior.
     * widgets.setOptions({
     *    'rulersvisible': false,
     *    'gridsvisible': false
     * });
     * ```
     * @param options widget options
     * @param options.minscale minimum scale factor
     * @param options.maxscale maximum scale factor
     * @param options.rulersvisible visibility of the rulers
     * @param options.gridsvisible visibility of the pages grid
     * @param options.contentclipping visibility of the headers
     * @param options.paperformat pages paper format
     */
    setOptions(options?: object | { minscale?: number; maxscale?: number; rulersvisible?: boolean; gridsvisible?: boolean; contentclipping?: boolean; paperformat?: AbstractPaperFormat; } ): this;
}
/**
 * DocumentViewWidget events
 */
export enum Events {
    /**
     * This Event is fired when the view is scaled
     */
    onScaleView = 'onScaleView',
    /**
     * This Event is fired when the view is translated
     */
    onTranslateView = 'onTranslateView',
    /**
     * Event type fired when a active page has been changed.
     */
    onActivePageChanged = 'onActivePageChanged'
}
