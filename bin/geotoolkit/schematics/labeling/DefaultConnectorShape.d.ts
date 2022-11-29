import {ConnectorShape} from './ConnectorShape';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Polyline label connector shape representation
 */
export class DefaultConnectorShape extends ConnectorShape {
    /**
     * Polyline label connector shape representation
     * @param options 
     */
    constructor(options?: object);
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
}
