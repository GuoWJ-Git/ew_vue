import {IComponent} from '../IComponent';
import {LinkConnection} from './LinkConnection';

/**
 * Base interface for links
 */
export abstract class ILink extends IComponent {
    /**
     * Gets array of connections
     */
    abstract getConnections(): LinkConnection[];
    /**
     * Gets array of connections
     * @param force force
     */
    abstract updateLinks(force?: boolean): void;
}
