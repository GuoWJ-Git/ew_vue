import {ConnectorShape} from './ConnectorShape';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * LineConnector Shape
 */
export class LineConnector extends ConnectorShape {
    /**
     * LineConnector Shape
     * @param options 
     */
    constructor(options?: object);
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
}
