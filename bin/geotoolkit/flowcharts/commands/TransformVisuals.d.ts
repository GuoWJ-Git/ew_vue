import {ICommand} from './ICommand';
import {IComponent} from '../shapes/IComponent';
import {Transformation} from '../../util/Transformation';

/**
 * Transforms visuals
 */
export class TransformVisuals implements ICommand {
    /**
     * Transforms visuals
     * @param options command options
     * @param options.visual a visual to move
     * @param options.transformation model location
     */
    constructor(options: object | { visual?: IComponent; transformation?: Transformation; } );
    /**
     * Executes the command
     */
    execute(): boolean;
    /**
     * Rewinds the command
     */
    undo(): boolean;
}
