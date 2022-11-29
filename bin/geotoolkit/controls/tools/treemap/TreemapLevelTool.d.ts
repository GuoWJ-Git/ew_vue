import {AbstractTool} from '../AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {Treemap} from '../../shapes/Treemap';

/**
 * TreemapLevelTool handles visualization of data according to hierarchy.
 */
export class TreemapLevelTool extends AbstractTool {
    /**
     * TreemapLevelTool handles visualization of data according to hierarchy.
     * @param options tool options
     * @param options.group manipulator layer
     * @param options.name name of the tool
     * @param options.chart chart shape
     * @param options.callback callback to return information about current level and it's parent nodes. callback return object {'list' :[...], 'action': 'added' / 'removed} depending on operation.
     */
    constructor(options: object | { group?: CompositeNode; name?: string; chart: Treemap; callback?: Function; } );
}
