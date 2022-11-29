import {IExportable} from '../scene/exports/IExportable';
import {AbstractDocumentElement} from '../scene/exports/AbstractDocumentElement';
import {Group} from '../scene/Group';
import {Shape} from '../scene/shapes/Shape';
import {IWritable} from '../util/stream/IWritable';
import {Rect} from '../util/Rect';
import {BinaryStream} from '../util/stream/BinaryStream';

/**
 * Utility class for CGM rendering
 */
export class CgmExport {
    /**
     * Utility class for CGM rendering
     */
    constructor();
    /**
     * Export group to CGM stream
     * @param root options object or root node to be used for export.
     * @param root.root root node to be used for export.
     * @param root.stream output stream
     * @param root.usesimplegradient set true if use two-coloured gradients
     * @param root.exportbounds export bounds
     * @param root.exportoptions options to be used with IExportable element
     * @param cgmStream deprecated (since 2021.1 (3.3)), use first argument as an object. output stream
     * @param exportBounds deprecated (since 2021.1 (3.3)), use first argument as an object. export bounds
     * @param options deprecated (since 2021.1 (3.3)), use first argument as an object. export options
     * @param options.usesimplegradient set true if use two-coloured gradients
     */
    exportToCgmStream(root: object | { root?: IExportable | AbstractDocumentElement | Group | Shape; stream?: IWritable; usesimplegradient?: boolean; exportbounds?: Rect; exportoptions?: any; }  | IExportable | AbstractDocumentElement | Group | Shape, cgmStream?: BinaryStream, exportBounds?: Rect, options?: object | { usesimplegradient?: boolean; } ): BinaryStream;
}
