import {BaseEventArgs} from '../../../controls/tools/BaseEventArgs';
import {Rect} from '../../../util/Rect';
import {LogTrack} from '../../LogTrack';
import {LogFrameVisual} from '../../LogFrameVisual';

/**
 */
export class LogFrameEditorEventArgs extends BaseEventArgs {
    /**
     * @param eventName name of the event
     * @param rect a new shape bounds
     * @param track track
     * @param shape shape
     * @param previousRect a previous bounds
     */
    constructor(eventName: string, rect: Rect, track: LogTrack, shape: LogFrameVisual | null, previousRect?: Rect);
    /**
     * Define new area of the shape
     */
    rect: Rect;
    /**
     * Define previous area of the shape
     */
    previousRect: Rect;
    /**
     * Define a current track
     */
    track: LogTrack;
    /**
     * Define a current frame
     */
    shape: LogFrameVisual | null;
}
