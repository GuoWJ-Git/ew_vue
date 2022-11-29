import {Group} from '../scene/Group';
import {Rect} from '../util/Rect';
import {Document} from '../scene/exports/Document';
import {StringStream} from '../util/stream/StringStream';
import {AbstractPaperFormat} from '../scene/exports/AbstractPaperFormat';
import {AbstractUnit} from '../util/AbstractUnit';
import {ImageCompression} from './ImageCompression';
import {SpeedCompression} from './SpeedCompression';
import {FontSubType} from './FontSubType';
import {IWritable} from '../util/stream/IWritable';

/**
 * Utility class to export node
 */
export class PdfExport {
    /**
     * Utility class to export node
     */
    constructor();
    /**
     * Export group to PDF
     * @param root root node to be used for export.
     * @param imageWidth image width(Optional)
     * @param imageHeight image height (Optional)
     * @param modelLimits modellimits (Optional)
     */
    exportToPdf(root: Group, imageWidth: number, imageHeight: number, modelLimits: Rect): string | Uint8Array;
    /**
     * Export document to PDF
     * @param document document to be exported
     * @param printSettings info about print settings
     * @param printSettings.pdfStream output stream for pdf
     * @param printSettings.paperFormat paper format
     * @param printSettings.outputUnit unit
     * @param printSettings.author author
     * @param printSettings.clippingEnabled if this flag is set then clipping is enabled
     */
    documentExportToPdf(document: Document, printSettings: object | { pdfStream?: StringStream; paperFormat?: AbstractPaperFormat | string; outputUnit?: AbstractUnit | string; author?: string; clippingEnabled?: boolean; } ): string | Uint8Array;
    /**
     * set image compression settings for the pdf export.
     * right now three methods are available @see {@link @int/geotoolkit/pdf/ImageCompression.ImageCompression},
     * if you select the PNG method, then you could pass a {@link @int/geotoolkit/pdf/SpeedCompression.SpeedCompression} speed parameter
     * if you select the JPEG method, then you could pass a number ranged from 0 to 1 to specify the quality of the image
     * if you select the NONE method, all parameters will be ignored.
     * WARNING! if you select the NONE method and memory is not enough, the PNG method will be selected
     * @param method method
     * @param quality level of quality
     * @param speed compression speed
     */
    setImageCompression(method: ImageCompression, quality?: number, speed?: SpeedCompression): this;
    /**
     * Enable or disable stream compression. By default it is enable
     * @param enable enable or disable image compression
     */
    setStreamCompression(enable: boolean): this;
    /**
     * Return status of stream compression if it is enable or disable
     */
    getStreamCompression(): boolean;
    /**
     * Embeds font into PDF
     * @param subType sub type
     * @param fontName font name
     * @param fontWeight font weight
     * @param fontStyle font style
     * @param fontBase64EncodedFile base64 encoded True Type Font file (TTF)
     * @param encoding encoding Identity-H
     */
    embedFont(subType: FontSubType, fontName: string, fontWeight: string, fontStyle: string, fontBase64EncodedFile: string, encoding: string): void;
    /**
     * Export document to PDF stream
     * @param document document to export
     * @param printSettings info about print settings
     * @param printSettings.pdfStream output stream for pdf
     * @param printSettings.paperFormat paper format
     * @param printSettings.outputUnit unit
     * @param printSettings.author author
     * @param printSettings.clippingEnabled if this flag is set then clipping is enabled
     * @param pdfStream output stream for pdf
     */
    documentExportToPdfStream(document: Document, printSettings: object | { pdfStream?: StringStream; paperFormat?: AbstractPaperFormat | string; outputUnit?: AbstractUnit | string; author?: string; clippingEnabled?: boolean; } , pdfStream?: IWritable): IWritable;
    /**
     * Export document to PDF stream asynchronously
     * @param document document to export
     * @param printSettings info about print settings
     * @param printSettings.pdfStream output stream for pdf
     * @param printSettings.paperFormat paper format
     * @param printSettings.outputUnit unit
     * @param printSettings.author author
     * @param printSettings.clippingEnabled if this flag is set then clipping is enabled
     * @param pdfStream output stream for pdf
     */
    documentExportToPdfStreamAsync(document: Document, printSettings: object | { pdfStream?: StringStream; paperFormat?: AbstractPaperFormat | string; outputUnit?: AbstractUnit | string; author?: string; clippingEnabled?: boolean; } , pdfStream?: IWritable): Promise<any>;
    /**
     * Returns true if exporting a PDF is supported by this browser
     */
    static isSupported(): boolean;
    /**
     * Static method to Enable/Disable Text and Image Clipping in Pdf
     * @param textClippingEnabled Text Shape Clipping (default: true)
     * @param imageClippingEnabled Image Shape Clipping (default: true)
     */
    public static enableClipping(textClippingEnabled: boolean, imageClippingEnabled: boolean): void;
    /**
     * Sets maximum image size (in bytes)
     * @param maximumImageSize image size for forced selecting PNG compression method
     */
    static setMaximumImageSize(maximumImageSize: number): void;
}
/**
 * Defines embeded font
 */
export type EmbededFont = { fontName: string; fontWeight: string; fontStyle: string; fontBase64EncodedFile: string; encoding: string}
