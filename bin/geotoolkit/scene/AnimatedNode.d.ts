import {Node} from './Node';
import {AnimationStyle} from '../attributes/AnimationStyle';

/**
 * Defines an abstract implementation of an animated node.
 */
export class AnimatedNode extends Node {
    /**
     * Defines an abstract implementation of an animated node.
     * @param options options
     * @param options.animationstyle animation style
     */
    constructor(options?: object | { animationstyle?: AnimationStyle; } );
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {animationstyle: AnimationStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.animationstyle animation style
     */
    setProperties(properties?: object | { animationstyle?: AnimationStyle; } ): this;
    /**
     * Register animation style.
     * @param root root node for node
     */
    registerAnimationStyle(root: AnimatedNode): void;
    /**
     * Unregister animation style.
     * @param root root node for node
     */
    unregisterAnimationStyle(root: AnimatedNode): void;
    /**
     * Return animation style
     */
    getAnimationStyle(): AnimationStyle | any;
    /**
     * Sets animation style
     * @param animationStyle animation style
     */
    setAnimationStyle(animationStyle: AnimationStyle | any): this;
}
