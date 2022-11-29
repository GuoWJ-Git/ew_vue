import {AbstractCommand} from './AbstractCommand';
import {Group as SceneGroup} from '../../../../scene/Group';

/**
 * Command to group nodes into a single parent node
 */
export class Group extends AbstractCommand {
    /**
     * Command to group nodes into a single parent node
     */
    constructor();
    /**
     * Sets group to use as a common parent node
     * @param group group to contain all the children
     */
    setGroup(group: SceneGroup): this;
    /**
     * Returns common parent node
     */
    getGroup(): SceneGroup;
}
/**
 * Command to ungroup composite node into its children
 */
export class Ungroup extends AbstractCommand {
    /**
     * Command to ungroup composite node into its children
     */
    constructor();
}
