import {AbstractTool} from '../AbstractTool';
import {TableView} from '../../shapes/tableview/TableView';

/**
 * Defines Row manipulator for Table View shape
 * Tool name: 'RowHandler'
 */
export class RowHandler extends AbstractTool {
    /**
     * Defines Row manipulator for Table View shape
     * Tool name: 'RowHandler'
     * @param options table view shape or tool options
     * @param options.tableview table view shape
     */
    constructor(options?: TableView | object | { tableview?: TableView; } );
    /**
     */
    protected onActiveStateChanged(): void;
}
/**
 * Events
 */
export enum Events {
    /**
     * onStart
     */
    onStart = 'onStart',
    /**
     * onHover
     */
    onHover = 'onHover',
    /**
     * onMove
     */
    onMove = 'onMove',
    /**
     * onScroll
     */
    onScroll = 'onScroll'
}
