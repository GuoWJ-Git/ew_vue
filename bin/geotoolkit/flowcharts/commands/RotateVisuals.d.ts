import {TransformVisuals} from './TransformVisuals';
import {IComponent} from '../shapes/IComponent';
import {AnchorType} from '../../util/AnchorType';

/**
 * Rotates the visual based on the provided rotation anchor type.
 */
export class RotateVisuals extends TransformVisuals {
    /**
     * Rotates the visual based on the provided rotation anchor type.
     * @param options command options
     * @param options.visual a visual to rotate
     * @param options.anchortype rotation anchor
     */
    constructor(options: object | { visual?: IComponent; anchortype?: AnchorType; } );
}
