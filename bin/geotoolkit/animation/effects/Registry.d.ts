import {AnimatedNode} from '../../scene/AnimatedNode';
import {AbstractEffect} from './AbstractEffect';

/**
 * Registry which stores animation effect.
 * If you want to add your own effect you should call geotoolkit.animation.effects.Registry.getInstance().registerEffect(class_name)
 * If you want to instantiate class from object you should call geotoolkit.animation.effects.Registry.getInstance().createEffect(effect_object)
 */
export class Registry {
    /**
     * Registry which stores animation effect.
     * If you want to add your own effect you should call geotoolkit.animation.effects.Registry.getInstance().registerEffect(class_name)
     * If you want to instantiate class from object you should call geotoolkit.animation.effects.Registry.getInstance().createEffect(effect_object)
     */
    constructor();
    /**
     * Finds class appropriate passed object and instantiates it
     * @param effect effect properties
     * @param node node to which effect would be applied
     */
    createEffect(effect: any, node: AnimatedNode): AbstractEffect;
    /**
     * Register effect in registry
     * @param Effect effect
     */
    registerEffect(Effect: Function): this;
    /**
     * Sets default effect class, that will be used in createEffect
     * @param Effect effect
     */
    setDefaultEffect(Effect: Function): this;
    /**
     * Returns instance of the Effects registry
     */
    static getInstance(): Registry;
}
