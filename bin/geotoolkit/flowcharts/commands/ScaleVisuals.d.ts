import {TransformVisuals} from './TransformVisuals';
import {IComponent} from '../shapes/IComponent';
import {Transformation} from '../../util/Transformation';

/**
 * Extends Transform visuals and performs scaling
 */
export class ScaleVisuals extends TransformVisuals {
    /**
     * Extends Transform visuals and performs scaling
     * @param options command options
     * @param options.visual a visual to move
     * @param options.transformation model location
     */
    constructor(options: object | { visual?: IComponent; transformation?: Transformation; } );
}
