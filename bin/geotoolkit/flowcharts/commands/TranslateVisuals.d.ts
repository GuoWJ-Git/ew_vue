import {TransformVisuals} from './TransformVisuals';
import {IComponent} from '../shapes/IComponent';
import {Point} from '../../util/Point';

/**
 * Translates visual using a delta
 */
export class TranslateVisuals extends TransformVisuals {
    /**
     * Translates visual using a delta
     * @param options command options
     * @param options.visual a visual to move
     * @param options.delta model location
     */
    constructor(options: object | { visual?: IComponent; delta?: Point; } );
}
