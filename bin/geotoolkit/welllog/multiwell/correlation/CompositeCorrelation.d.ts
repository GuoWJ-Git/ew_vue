import {Node} from '../../../scene/Node';
import {Correlation} from './Correlation';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {ITrack} from '../../ITrack';
import {LogAbstractVisual} from '../../LogAbstractVisual';

/**
 * Function to filter nodes
 */
export type FilterCallback = (node: Node) => boolean;
/**
 * Define auto correlation to connect two nodes with the same names
 */
export class CompositeCorrelation extends Correlation {
    /**
     * Define auto correlation to connect two nodes with the same names
     * @param options additional options
     * @param options.visualclass class for build correlations
     * @param options.filter a function to filter visuals
     */
    constructor(options?: object | { visualclass?: Function; filter?: FilterCallback; } );
    /**
     * Render correlation
     * @param localContext context
     * @param leftTrack left track
     * @param rightTrack right track
     * @param correlationDesc correlation description
     */
    renderContent(localContext: RenderingContext, leftTrack: ITrack, rightTrack: ITrack, correlationDesc: any): void;
    /**
     * Get correlation names
     * @param visual visual
     */
    getNames(visual: LogAbstractVisual): any;
    /**
     * Transform depth
     * @param track track
     * @param depth depth
     */
    transformDepth(track: ITrack, depth: number): number;
}
