import {ProxyEventArgs} from '../../controls/tools/ProxyEventArgs';
import {IAnnotation} from './IAnnotation';
import {EventArgs} from '../../controls/tools/EventArgs';

/**
 * Creates default implementation of the annotation overlay event args
 */
export class AnnotationEventArgs extends ProxyEventArgs {
    /**
     * Creates default implementation of the annotation overlay event args
     * @param annotation annotation
     * @param eventArgs contains info about the event
     */
    constructor(annotation: IAnnotation, eventArgs: EventArgs);
    /**
     * Cancel event
     */
    cancel(): this;
    /**
     * Return annotation
     */
    getAnnotation(): object | IAnnotation;
    /**
     * Set object
     * @param annotation annotation object
     */
    setAnnotation(annotation: object): this;
}
