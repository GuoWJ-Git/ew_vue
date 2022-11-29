import {Graphics} from './Graphics';
import {RenderingContext} from './RenderingContext';

/**
 * Define buffer of commands
 */
export class RenderingState extends Graphics {
    /**
     * Define buffer of commands
     */
    constructor();
    /**
     * Clear buffer
     */
    clear(): void;
    /**
     * Draw buffer on context.
     * @param context 
     */
    draw(context: RenderingContext): void;
    /**
     * Check if the state is valid for the current context
     * @param context context to check
     */
    isValid(context: RenderingContext): boolean;
}
