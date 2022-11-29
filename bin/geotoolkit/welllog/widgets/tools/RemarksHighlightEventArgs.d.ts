import {ProxyEventArgs} from '../../../controls/tools/ProxyEventArgs';
import {EventArgs} from '../../../controls/tools/EventArgs';

/**
 */
export class RemarksHighlightEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param text text value of the comment section highlighted, null if no section found
     */
    constructor(eventArgs: EventArgs, text?: string | any);
    /**
     * Returns comment section text value, null if no section found
     */
    getTextValue(): string | any;
}
