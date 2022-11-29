import {ProxyEventArgs} from '../../controls/tools/ProxyEventArgs';
import {EventArgs} from '../../controls/tools/EventArgs';
import {AnnotationLocation} from '../../layout/AnnotationLocation';

/**
 */
export class LegendToolEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param fromAnnotation move from Annotation
     * @param toAnnotation move to Annotation
     */
    constructor(eventArgs: EventArgs, fromAnnotation: AnnotationLocation, toAnnotation: AnnotationLocation);
    /**
     * Get annotation location from
     */
    getFromAnnotation(): AnnotationLocation;
    /**
     * Get annotation location to
     */
    getToAnnotation(): AnnotationLocation;
}
