import {ProxyEventArgs} from '../../controls/tools/ProxyEventArgs';
import {EventArgs} from '../../controls/tools/EventArgs';
import {Rect} from '../../util/Rect';

/**
 * Tool name: 'MD-rubberband'
 */
export class MDRubberBandEventArgs extends ProxyEventArgs {
    /**
     * Tool name: 'MD-rubberband'
     * @param eventArgs 
     * @param options 
     * @param options.area selected parent model area (used with RubberBand.Events.onZoomEnd event)
     * @param options.startmd start MD-value (used with RubberBand.Events.onZoomStart and RubberBand.Events.onRangeChanged events)
     * @param options.endmd end MD-value (used with RubberBand.Events.onRangeChanged event)
     */
    constructor(eventArgs: EventArgs, options: object | { area?: Rect; startmd?: number; endmd?: number; } );
    /**
     * Gets start MD-value
     */
    getStartMD(): number;
    /**
     * Gets end MD-value
     */
    getEndMD(): number;
    /**
     * Gets selected area in parent model coordinates
     */
    getArea(): Rect | null;
}
