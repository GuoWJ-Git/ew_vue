import {IResourceManager} from './resources/IResourceManager';
import {IResourceResolver} from './resources/IResourceResolver';
import {IResource} from './resources/IResource';

/**
 * Define default resource manager to register and resolve external resources by URL
 */
export class ResourceManager implements IResourceManager {
    /**
     * Define default resource manager to register and resolve external resources by URL
     */
    constructor();
    /**
     * Register resource resolver
     * @param iResourceType resource type
     * @param resourceResolver resource resolver
     */
    registerResolver(iResourceType: Function, resourceResolver: IResourceResolver): this;
    /**
     * Return default instance of the Resource Manager
     */
    static getDefaultInstance(): ResourceManager;
    /**
     * Return resource
     * @param iResourceType resource type
     * @param url 
     */
    resolve(iResourceType: Function, url: string): IResource;
}
