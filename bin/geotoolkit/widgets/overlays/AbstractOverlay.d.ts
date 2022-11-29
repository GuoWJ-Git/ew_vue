import {EventDispatcher} from '../../util/EventDispatcher';
import {BaseWidget} from '../BaseWidget';

/**
 * Defines an abstract implementation of a widget overlay. Abstract overlay supports ...
 */
export class AbstractOverlay extends EventDispatcher {
    /**
     * Defines an abstract implementation of a widget overlay. Abstract overlay supports ...
     * @param widget widget to create overlay
     */
    constructor(widget: BaseWidget);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Returns widget
     */
    getWidget(): BaseWidget;
    /**
     * @param state state
     */
    protected onStateChanged(state: object): this;
    /**
     * Return visibility state
     */
    getVisible(): boolean;
    /**
     * Set visibility state
     * @param visible visibility of overlay
     */
    setVisible(visible: boolean): this;
    /**
     * Return enabled state
     */
    getEnabled(): boolean;
    /**
     * Set enabled state
     * @param enabled enable or disable tools
     */
    setEnabled(enabled: boolean): this;
}
/**
 * AbstractOverlay Events
 */
export enum Events {
    /**
     * This Event is fired when the Abstract Overlay State (props: visible, enable) has been changed
     */
    StateChanged = 'StateChanged'
}
