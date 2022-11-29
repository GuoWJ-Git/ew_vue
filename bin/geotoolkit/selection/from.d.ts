import {Node} from '../scene/Node';
import {INodeEnumerable} from '../scene/INodeEnumerable';
import {Direction} from './Direction';
import {QueryBuilder} from './QueryBuilder';

/**
 * Query all nodes from the specified node and do the specified action
 * @example
 * ```javascript
 * import {from} from '@int/geotoolkit/selection/from';
 * from(node)
 *  .where((node) => return node.getId() === 'line')
 *  .select((node) => node.setLineStyle(mystyle));
 * ```
 * @param node node or enumerable item to start search
 * @param direction traverse direction, for Node type
 */
export function from(node: Node | INodeEnumerable, direction?: Direction): QueryBuilder;
