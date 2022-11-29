import {EventDispatcher} from '../../../util/EventDispatcher';
import {AbstractEditor} from './AbstractEditor';

/**
 * Editors history that stores editing commands and is able to undo/redo it
 */
export class History extends EventDispatcher {
    /**
     * Editors history that stores editing commands and is able to undo/redo it
     */
    constructor();
    /**
     * Checks if there is command in history to undo
     */
    canUndo(): boolean;
    /**
     * Checks if there is command in history to redo
     */
    canRedo(): boolean;
    /**
     * Cancels last command in history (if possible)
     */
    undo(): this;
    /**
     * Reapplies last canceled command in history (if possible)
     */
    redo(): this;
    /**
     * Pushes editor's command to the history
     * @param command command to push
     * @param editor editor generated command
     */
    push(command: any, editor?: AbstractEditor): this;
    /**
     * Returns current position in history (number of commands recorded from initial to the current state)
     */
    getCurrentPosition(): number;
    /**
     * Removes all records from the history
     */
    clear(): this;
}
