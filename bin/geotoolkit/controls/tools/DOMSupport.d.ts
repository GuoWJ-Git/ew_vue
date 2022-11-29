import {Selection} from './Selection';
import {Plot} from '../../plot/Plot';

/**
 * DOMSupport tool is created on a plot (unique), makes one-time selection and if necessarily fires geotoolkit.dom.Events (hover/leave/enter/click/etc.)
 */
export class DOMSupport extends Selection {
    /**
     * DOMSupport tool is created on a plot (unique), makes one-time selection and if necessarily fires geotoolkit.dom.Events (hover/leave/enter/click/etc.)
     * @param options options
     * @param options.name tool name
     * @param options.plot plot to connect with tool
     */
    constructor(options: object | { name?: string; plot: Plot; } );
}
