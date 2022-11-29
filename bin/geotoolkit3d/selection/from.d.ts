import {Object3D} from '../scene/Object3D';
import {QueryBuilder} from '../../geotoolkit/selection/QueryBuilder';

/**
 * Query all nodes from the specified node and do the specified action
 * @example
 * ```javascript
 * import {from} from '@int/geotoolkit3d/selection/from';
 * from(node)
 *      .where((node) => node.getId() === 'line')
 *      .selectFirst();
 * ```
 * @param node node to start search
 */
export function from(node: Object3D): QueryBuilder;
