import {QueryParser} from './QueryParser';

/**
 * Provides search by any item in the hierarchical structure
 */
export class QueryBuilder {
    /**
     * Provides search by any item in the hierarchical structure
     * @param item item to apply this query
     * @param options an additional options
     * @param options.parser a parser to be used to parse search request
     * @param options.map a map of functions to be used
     * @param options.enumerateItems enumerate children items
     * @param options.values function to return a map of values to be used in query like node
     */
    constructor(item: any, options?: object | { parser?: QueryParser; map?: Function[]; enumerateItems?: Function; values?: Function; } );
    /**
     * Iterates over the children of the given item.
     * This iterator does not support concurrent modification (the callback provided should not add/remove children)
     * @param item item to apply this query
     * @param callback The callback function taking the parameters: (child, index, node, this)
     */
    enumerateNodes(item: any, callback: Function): void;
    /**
     * Specify filter
     * @param f function or condition to provide filter of items or string to specify query
     */
    where(f: Function | string): this;
    /**
     * Execute all queries
     * @param callback function called for each item that matches this query condition
     */
    select(callback: Function): this;
    /**
     * Register functions
     * @example
     * ```javascript
     * import {from} from '@int/geotoolkit/selection/from';
     * import {Line} from '@int/geotoolkit/scene/shapes/Line';
     * import {Rectangle} from '@int/geotoolkit/scene/shapes/Rectangle';
     * from(group1)
     *      .functions({'isLine': (node) => node instanceof Line,
     *                  'isRect': (node) => node instanceof Rectangle})
     *      .where( 'node => isLine(node) || node => isRectangle(node)' )
     * ```
     * @param functions allows to register additional functions
     */
    functions(functions: Function[]): this;
    /**
     * Execute all queries
     * @param callback function called for each item that matches this query condition
     */
    execute(callback: Function): this;
    /**
     * Select all items to array
     */
    selectToArray(): object[];
    /**
     * Select the first item
     */
    selectFirst(): object | any;
}
