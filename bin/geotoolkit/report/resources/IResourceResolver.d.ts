import {IResource} from './IResource';

/**
 * Define resource resolver interface
 */
export abstract class IResourceResolver {
    /**
     * Load resource
     */
    abstract load(): Promise<any>;
    /**
     * @param url 
     * @param iResourceType resource type
     */
    abstract canResolve(url: string, iResourceType?: Function): boolean;
    /**
     * Return resource
     * @param url 
     * @param iResourceType resource type
     */
    abstract get(url: string, iResourceType?: Function): IResource;
}
