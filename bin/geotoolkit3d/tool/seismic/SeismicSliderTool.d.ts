import {SliderMoveTool} from '../SliderMoveTool';
import {Volume} from '../../scene/seismic/Volume';

/**
 * A tool specialized in moving a seismicslice.<br>
 * <br>
 * This tool uses the given Volume object to limit the slice displacement.<br>
 * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
 */
export class SeismicSliderTool extends SliderMoveTool {
    /**
     * A tool specialized in moving a seismicslice.<br>
     * <br>
     * This tool uses the given Volume object to limit the slice displacement.<br>
     * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
     * @param options See geotoolkit3d.tool.SliderMoveTool for inherited options
     * @param options.volume The seismic volume that this slider should operate on
     * @param options.callback The callback function triggered when a slice is being moved
     * @param options.snap The function used to adjust the computed ijz value to an existing seismic inline/xline/slice.
     * @param options.name tool name
     */
    constructor(options: object | { volume: Volume; callback?: Function; snap?: Function; name?: string; } );
    /**
     * Sets volume
     * @param volume volume
     */
    setVolume(volume: Volume): void;
}
