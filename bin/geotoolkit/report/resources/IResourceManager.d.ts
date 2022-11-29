import {IResource} from './IResource';

/**
 * Define resource manager interface
 */
export abstract class IResourceManager {
    /**
     * Return resource
     * @param iResourceType resource type
     * @param url 
     */
    abstract resolve(iResourceType: Function, url: string): IResource | null;
}
