import {Accumulate} from '../Accumulate';
import {Additive} from '../Additive';
import {CalcMode} from '../CalcMode';
import {AnimationFill} from '../AnimationFill';
import {Functions} from '../Easing';
import {AbstractProcessor} from '../processors/AbstractProcessor';
import {Node} from '../../scene/Node';
import {AnimatedNode} from '../../scene/AnimatedNode';
import {Transformation} from '../../util/Transformation';

/**
 * Defines abstract animation effect, API is subset of SMIL animation with two extensions: <br>
 *     1. Can accept param 'function' - like transition-timing-function in CSS <br>
 *     2. Can accept value 'auto' as 'begin' parameter - animation will run automatically when animated attribute is changed.
 */
export class AbstractEffect {
    /**
     * Defines abstract animation effect, API is subset of SMIL animation with two extensions: <br>
     *     1. Can accept param 'function' - like transition-timing-function in CSS <br>
     *     2. Can accept value 'auto' as 'begin' parameter - animation will run automatically when animated attribute is changed.
     * @param options object that contains effect options
     * @param options.accumulate Controls whether or not the animation is cumulative. For more information
     * @param options.additive Controls whether or not the animation is additive. For more information .
     * @param options.begin The begin time of an animation in ms or 'auto' for transition animation
     * @param options.calcmode Defines effect's interpolation mode.
     * @param options.duration effect duration
     * @param options.fill Defines animation behavior after it ends.
     * @param options.unit unit, by default effects work in model coordinates
     * @param options.keypoints 
     * @param options.repeatcount repeat count
     * @param options.id effect id
     * @param options.attributename name of animated attribute
     * @param options.function easing function, if provide keypoints param will be ignored
     * @param options.from start value of animated attribute, ignored when 'begin'='auto'
     * @param options.to end value of animated attribute, ignored when 'begin'='auto'
     * @param options.processor processor for the animation data
     * @param options.type type animated attribute for  'attributename'='transform', valid value: 'translate', 'scale', 'rotate'
     */
    constructor(options: object | { accumulate?: Accumulate; additive?: Additive; begin?: string; calcmode?: CalcMode; duration: number; fill?: AnimationFill; unit?: string; keypoints?: number[]; repeatcount?: number; id?: string; attributename: string; function?: Functions | Function; from?: string | number; to?: string | number; processor?: AbstractProcessor; type?: string; } );
    /**
     * Returns true if this class can accept passed effect as a parameter
     * @param effect effect parameters
     * @param node target node
     */
    isApplicable(effect: any, node: Node): boolean;
    /**
     * Called immediately after the effect begins.
     */
    protected started(): void;
    /**
     * Called immediately after the effect ends.
     */
    protected ended(): void;
    /**
     * Extracts value which can animated from node
     * @param node animated node
     */
    protected getAnimatedValue(node: Node): any;
    /**
     * Returns current value, which should be applied
     */
    protected getCurrentValue(): any;
    /**
     * Set processor, which will be used for calculate intermediate values
     * @param processor processor for calculate intermediate values
     */
    protected setProcessor(processor: AbstractProcessor): this;
    /**
     * Gets the number of the time segment.
     * @param time time from effect's start
     */
    getTimeSegmentIndex(time: number): number;
    /**
     * Returns transformation, that will be applied to the node
     * @param node target node
     */
    protected getTransformation(node: AnimatedNode): Transformation | null;
    /**
     * Applies effect to node and invalidate it
     * To add animation support to target class create new Animation Effect by inherit from this class,
     * and override method 'apply' to apply intermediate_value to target class(for example with setters)
     * @param node target node
     */
    protected apply(node: AnimatedNode): void;
    /**
     * Stop effect
     * @param node target node
     */
    protected stop(node: AnimatedNode): void;
    /**
     * Create or get effect from object
     * @param object effect
     */
    static fromObject(object?: object | AbstractEffect): AbstractEffect | null;
}
