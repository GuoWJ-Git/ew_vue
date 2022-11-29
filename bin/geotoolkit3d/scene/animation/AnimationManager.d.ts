import {Object3D} from '../Object3D';
import {AbstractAnimation} from './AbstractAnimation';

/**
 * This class manage animations in the scene.<br>
 * <br>
 * It provides an easy way to insert animations and can handle several animations at a time.<br>
 * Note that this AnimationMechanism is focused on providing smooth animation while keeping the resources usage as low as possible.<br>
 * Therefore the animation intermediate steps count is not guaranteed.<br>
 * <br>
 * Once added, an animation will be started and will be executed for each frame until it returns 'true'.<br>
 * Then it will be discarded.<br>
 * <br>
 * This manager will optimize the animations to run around 60 fps (if possible), it may pause animation when the plot is not visible.<br>
 * <br>
 * To use this AnimationManager, insert it into the scene like a regular node.<br>
 * Then push an animation function in it.<br>
 * <br>
 * Note that this class is not responsible for actually interpolating values between steps.<br>
 * Client code should implement the logic to compute intermediate steps.<br>
 */
export class AnimationManager extends Object3D {
    /**
     * This class manage animations in the scene.<br>
     * <br>
     * It provides an easy way to insert animations and can handle several animations at a time.<br>
     * Note that this AnimationMechanism is focused on providing smooth animation while keeping the resources usage as low as possible.<br>
     * Therefore the animation intermediate steps count is not guaranteed.<br>
     * <br>
     * Once added, an animation will be started and will be executed for each frame until it returns 'true'.<br>
     * Then it will be discarded.<br>
     * <br>
     * This manager will optimize the animations to run around 60 fps (if possible), it may pause animation when the plot is not visible.<br>
     * <br>
     * To use this AnimationManager, insert it into the scene like a regular node.<br>
     * Then push an animation function in it.<br>
     * <br>
     * Note that this class is not responsible for actually interpolating values between steps.<br>
     * Client code should implement the logic to compute intermediate steps.<br>
     */
    constructor();
    /**
     * Check for an animation in the manager<br>
     * @param animation deprecated (since 2020 (3.0)). function type deprecated, use geotoolkit3d.scene.animation.AbstractAnimation instead. A function that will be called by the AnimationManager
     */
    checkAnimation(animation: Function | AbstractAnimation): boolean;
    /**
     * remove an animation from the manager<br>
     * @param animation deprecated (since 2020 (3.0)). function type deprecated, use geotoolkit3d.scene.animation.AbstractAnimation instead. function that will be removed from the manager
     */
    removeAnimation(animation: Function | AbstractAnimation): void;
    /**
     * Add a animation function that will be called to update the animation state.<br>
     * <br>
     * It will be called before the rendering occurs.<br>
     * The provided function is responsible of animating one or several objects.<br>
     * <br>
     * If the animation has ended, the function should return True to notify the AnimationManager to remove/discard this animation.<br>
     * Otherwise it will be called indefinitely.<br>
     * @param animation deprecated (since 2020 (3.0)). function type is deprecated, use geotoolkit3d.scene.animation.AbstractAnimation instead. A function that will be called by the AnimationManager
     */
    addAnimation(animation: Function | AbstractAnimation): this;
}
