import {ParserContext} from './ParserContext';
import {Group} from '../scene/Group';
import {Element} from './elements/Element';
import {Document as ElementsDocument} from './dom/elements/Document';
import {PageElement} from '../scene/exports/PageElement';
import {Orientation} from '../util/Orientation';
import {CompositeDocumentElement} from '../scene/exports/CompositeDocumentElement';
import {AbstractPaperFormat} from '../scene/exports/AbstractPaperFormat';
import {PaperOrientation} from '../scene/exports/PaperOrientation';
import {ScalingOptions} from '../scene/exports/ScalingOptions';
import {HeaderComponent} from '../scene/exports/HeaderComponent';
import {FooterComponent} from '../scene/exports/FooterComponent';
import {ImageCompression} from '../pdf/ImageCompression';
import {SpeedCompression} from '../pdf/SpeedCompression';
import {EmbededFont} from '../pdf/PdfExport';
import {IWritable} from '../util/stream/IWritable';

/**
 * Define parsed document
 */
export class Document {
    /**
     * Define parsed document
     * @param context parser context
     */
    constructor(context: ParserContext);
    /**
     * Dispose.
     */
    dispose(): void;
    /**
     * Return known property value
     * @param propertyName property name
     * @param defaultValue property default value
     */
    getProperty(propertyName: string, defaultValue?: object): object | string | any;
    /**
     * Returns returns a boolean indicating whether the object has the specified property as its own property.
     * @param propertyName property name
     */
    hasOwnProperty(propertyName: string): boolean;
    /**
     * Returns root element
     * @param width width
     * @param height height
     */
    getRootElement(width: number, height?: number | null): Group;
    /**
     * Return Document Element
     */
    getDocument(): Element;
    /**
     * Returns dom document element
     */
    getDomElement(): ElementsDocument;
    /**
     * Save Document to string stream
     * @deprecated since 2020 (3.2) use geotoolkit.report.dom.Node instead
     * @param domElement dom node
     * @param recursive save whole dom element structure
     */
    save(domElement?: Node, recursive?: boolean): string;
    /**
     * Returns exportable page header element
     * @param options export options
     * @param options.title optional title
     * @param options.date optional date
     */
    getPageHeaderElement(options?: object | { title?: string; date?: Date; } ): PageElement | null;
    /**
     * Returns exportable page body element
     * @param options document options
     * @param options.orientation document options
     */
    getPageBodyElement(options?: any | object | { orientation?: Orientation; } ): CompositeDocumentElement;
    /**
     * Returns exportable page footer element
     * @param options export options
     * @param options.title optional title
     * @param options.date optional date
     */
    getPageFooterElement(options?: object | { title?: string; date?: Date; } ): PageElement | null;
    /**
     * Return default print settings
     */
    getDefaultPrintSettings(): {paperFormat: AbstractPaperFormat; orientation: PaperOrientation | string; scaling: ScalingOptions | string; left: number; top: number; right: number; bottom: number; units: string; keepAspectRatio: boolean; continuous: boolean} | object;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @example
     * ```javascript
     * // following example shows how to use exportPdf to get stream without downloading PDF
     * // and create Blob based on it
     *  document.exportPdf({
     *  'skipoutput': true,
     *   ...
     * }).then((stream) => {
     *   const content = stream.getContent();
     *   const blob = new Blob([content], {'type': 'application\/pdf'});
     *   const url = URL.createObjectURL(blob);
     *   ...
     * });
     * ```
     * @param options export options
     * @param options.title document title
     * @param options.date document title
     * @param options.output define optional output filename
     * @param options.save flag to save the pdf directly to file or open dialog
     * @param options.skipoutput flag to skip using output and return stream in promise
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
    exportToPdf(options?: object | { title?: string; date?: Date; output?: string; save?: boolean; skipoutput?: boolean; header?: PageElement; footer?: PageElement; documentheader?: HeaderComponent; documentfooter?: FooterComponent; printsettings?: object | { paperformat?: AbstractPaperFormat; top?: number; bottom?: number; left?: number; right?: number; orientation?: PaperOrientation | string; scaling?: ScalingOptions | string; keepaspectratio?: boolean; continuous?: boolean; } ; imagescalefactor?: number; imagecompression?: object | { mode?: ImageCompression; quality?: number; speed?: SpeedCompression; } ; streamcompression?: boolean; embededfonts?: EmbededFont[]; pdfstream?: IWritable; } ): Promise<IWritable>;
    /**
     * Parse DOM elements
     * @param xml XML template
     */
    parseDomElements(xml: string): Promise<any>;
}
