import {ICommand} from './ICommand';
import {DiagramWidget} from '../shapes/DiagramWidget';
import {IComponent} from '../shapes/IComponent';
import {Point} from '../../util/Point';

/**
 * Adds a new visual to the DiagramWidget.
 */
export class AddVisual implements ICommand {
    /**
     * Adds a new visual to the DiagramWidget.
     * @param options command options
     * @param options.widget a host widget
     * @param options.visuals visuals to add
     * @param options.center flag indicating if the location denotes visual's center
     * @param options.location model location
     */
    constructor(options: object | { widget?: DiagramWidget; visuals?: IComponent[]; center?: boolean; location?: Point; } );
    /**
     * Executes the command
     */
    execute(): boolean;
    /**
     * Rewinds the command
     */
    undo(): boolean;
}
