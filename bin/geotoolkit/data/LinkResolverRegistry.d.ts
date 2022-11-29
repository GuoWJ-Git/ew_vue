import {EventDispatcher} from '../util/EventDispatcher';
import {ILinkResolver} from './ILinkResolver';

/**
 * Define link resolver registry
 */
export class LinkResolverRegistry extends EventDispatcher {
    /**
     * Define link resolver registry
     */
    constructor();
    /**
     * Registers a link resolver
     * @param provider provider to register
     */
    register(provider: ILinkResolver): void;
    /**
     * Returns resolver, which accepts data
     * @param data data to accept
     */
    getResolver(data: string): ILinkResolver | null;
    /**
     * Returns instance of the registry
     */
    static getInstance(): LinkResolverRegistry;
    /**
     * Registers resolver
     * @param provider provider to register
     */
    static registerResolver(provider: ILinkResolver): void;
}
/**
 * Link resolver registry events
 */
export enum Events {
    /**
     * ResolverRegistered
     */
    ResolverRegistered = 'ResolverRegistered'
}
