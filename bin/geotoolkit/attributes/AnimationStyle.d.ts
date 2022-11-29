import {Style} from './Style';

/**
 * Defines properties of transition animation. Its transition duration, easing function and array of animated properties
 */
export class AnimationStyle extends Style {
    /**
     * Defines properties of transition animation. Its transition duration, easing function and array of animated properties
     * @param effects Please refer to geotoolkit.animation.effects.AbstractEffect properties
     */
    constructor(effects: object | object[]);
    /**
     * Returns true if animation is active
     */
    isActive(): boolean;
    /**
     * Makes effect active when an event occurs
     * @param id event id. See {@link https://www.w3.org/TR/SVG/animate.html#BeginValueSyntax} for details.
     */
    activateEffects(id: string): void;
    /**
     * Create or get style from object
     * @param object effect
     */
    static fromObject(object: object | AnimationStyle | any): AnimationStyle | null;
    /**
     * Enable / disable all animations
     * @param enabled flag to enable/disable animation
     */
    static enableAnimation(enabled: boolean): void;
    /**
     * Return status of the global animation
     */
    static isAnimationEnabled(): boolean;
}
/**
 * Type of state changes
 */
export enum Events {
    /**
     * Animation starts
     */
    AnimationBegin = 'AnimationBegin',
    /**
     * Animation ends
     */
    AnimationEnd = 'AnimationEnd'
}
