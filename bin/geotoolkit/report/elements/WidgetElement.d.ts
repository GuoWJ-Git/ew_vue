import {Element} from './Element';
import {AbstractNode} from '../../scene/AbstractNode';
import {ISiteElement} from './ISiteElement';
import {CompositeTool} from '../../controls/tools/CompositeTool';
import {EventArgs} from '../../controls/tools/EventArgs';
import {Element as DomElement} from '../dom/Element';
import {ParserContext} from '../ParserContext';

/**
 */
export class WidgetElement extends Element {
    /**
     * @param options contentElement or properties object
     * @param options.contentelement contentElement
     */
    constructor(options?: AbstractNode | object | { contentelement?: AbstractNode; } );
    /**
     * On de-initialize design time (happens only once)
     * @param site site element
     */
    protected onConnectToSite(site: ISiteElement): this;
    /**
     * On initialize design time (happens only once)
     * @param site site element
     */
    protected onDisconnectFromSite(site: ISiteElement): this;
    /**
     * Return Design time state
     */
    protected isDesignTime(): boolean;
    /**
     * Returns root tool associated to this element
     */
    getTool(): CompositeTool;
    /**
     * Return Dom element
     * @param eventArgs event args
     */
    hitTest(eventArgs: EventArgs): DomElement | null;
    /**
     * Process native keyboard event
     * @param nativeEventArgs arguments of the DOM event
     */
    onKeyDown(nativeEventArgs: Event): boolean;
    /**
     * Set active element
     * @param activeElement active element
     */
    setActiveElement(activeElement: any): this;
    /**
     * Get active element
     */
    getActiveElement(): any;
    /**
     * Initialize widget element
     * @param json JSON object with data to initialize
     * @param context parser context
     */
    initialize(json: any, context: ParserContext): this;
}
