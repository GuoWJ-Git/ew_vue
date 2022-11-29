import {AbstractComponentNodeFactory} from './AbstractComponentNodeFactory';
import {ComponentNode} from '../scene/ComponentNode';
import {ComponentNodeProxy} from '../scene/ComponentNodeProxy';

/**
 * ComponentNodeProxyFactory
 */
export class ComponentNodeProxyFactory extends AbstractComponentNodeFactory {
    /**
     * ComponentNodeProxyFactory
     * @param parameter callback method to create an instance of a component node OR
     * an instance of a component node factory to create the component node
     * @param componentNode reusable component node instance
     */
    constructor(parameter: Function | AbstractComponentNodeFactory, componentNode?: ComponentNode);
    /**
     * Creates component node and return it.
     * @param data data to build the node of
     * @param forceCreateNewNode if "true" brand new component node instance is placed in the proxy
     * @param deepCopyData if "true" the data will be fully copied before set
     */
    createComponentNode(data?: any, forceCreateNewNode?: boolean, deepCopyData?: boolean): ComponentNodeProxy;
}
