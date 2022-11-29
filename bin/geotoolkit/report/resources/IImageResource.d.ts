import {IResource} from './IResource';

/**
 * Define image resource interface
 */
export abstract class IImageResource extends IResource {
    /**
     * Return image element
     */
    abstract get(): HTMLImageElement;
}
