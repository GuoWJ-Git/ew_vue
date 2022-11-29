import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {SeismicViewWidget} from '../SeismicViewWidget';
import {SnapPickingStrategy} from '../../data/snap/SnapPickingStrategy';
import {LineStyle} from '../../../attributes/LineStyle';
import {SymbolShape} from '../../../scene/shapes/SymbolShape';
import {AnchoredShape} from '../../../scene/shapes/AnchoredShape';

/**
 * Horizon picker tool - generates horizon, depended on seismic data.
 */
export class HorizonPicker extends AbstractTool {
    /**
     * Horizon picker tool - generates horizon, depended on seismic data.
     * @param widget seismic widget
     * @param options options object
     * @param options.snappickingstrategy snap picking strategy (geotoolkit.seismic.data.snap.LocalAbsolutePicking by default)
     * @param options.linestyle linestyle of horizon (default is red)
     * @param options.highlightlinestyle linestyle of highlighted horizon (default is red)
     * @param options.mode mode of horizon picker
     * @param options.focussymbol symbol for point focus (default is red square)
     * @param options.erasersize eraser size
     * @param options.focusthreshold focus threshold (in devices)
     * @param options.propagatorthresholderror propagator threshold error (in percents, must be > 0)
     * @param options.erasershape eraser shape (default is red square)
     * @param options.extendedfocus true for extended focus
     */
    constructor(widget: SeismicViewWidget, options?: object | { snappickingstrategy?: SnapPickingStrategy; linestyle?: LineStyle; highlightlinestyle?: LineStyle; mode?: Mode; focussymbol?: SymbolShape; erasersize?: number; focusthreshold?: number; propagatorthresholderror?: number; erasershape?: AnchoredShape; extendedfocus?: boolean; } );
    /**
     * Sets properties
     * @param properties properties object
     * @param properties.snappickingstrategy snap picking strategy
     * @param properties.linestyle linestyle of horizon
     * @param properties.highlightlinestyle linestyle of highlighted horizon
     * @param properties.mode mode of horizon picker
     * @param properties.focussymbol symbol for point focus
     * @param properties.erasersize eraser size
     * @param properties.focusthreshold focus threshold
     * @param properties.propagatorthresholderror propagator threshold error
     * @param properties.erasershape symbol for eraser mode
     * @param properties.extendedfocus true for extended focus
     */
    setProperties(properties?: object | { snappickingstrategy?: SnapPickingStrategy; linestyle?: LineStyle; highlightlinestyle?: LineStyle; mode?: Mode; focussymbol?: SymbolShape; erasersize?: number; focusthreshold?: number; propagatorthresholderror?: number; erasershape?: AnchoredShape; extendedfocus?: boolean; } ): this;
    /**
     * Get properties
     */
    getProperties(): {snappickingstrategy: SnapPickingStrategy; linestyle: LineStyle; highlightlinestyle: LineStyle; mode: Mode; focussymbol: SymbolShape; erasersize: number; focusthreshold: number; propagatorthresholderror: number; erasershape: AnchoredShape; extendedfocus: boolean} | any;
    /**
     * Get trajectory data
     */
    getTrajectoryData(): {x: number[]; y: number[]; z: number[]} | object;
    /**
     * Set horizon visible
     * @param visible true if visible
     */
    setVisible(visible: boolean): this;
    /**
     * Get horizon visible
     */
    getVisible(): boolean;
    /**
     * Clear horizon picker trajectories
     */
    clear(): void;
}
/**
 * Enum of horizon picker modes
 */
export enum Mode {
    /**
     * Editor mode
In this mode tool will drag the nearest point with left mouse button and delete the nearest point with right mouse button.
     */
    Editor = 'Editor',
    /**
     * Eraser mode
In this mode tool will erase points that will be in eraser area with left mouse button.
     */
    Eraser = 'Eraser',
    /**
     * Insert mode
In this mode tool will create new points with left mouse button.
     */
    Insert = 'Insert',
    /**
     * Horizon move mode
In this mode tool highlights trajectory and moves it vertically with left mouse button.
     */
    HorizonMove = 'HorizonMove'
}
/**
 * Horizon picker events
 */
export enum Events {
    /**
     * Event type fired when auto creating of horizon is started
     */
    PropagationStarted = 'PropagationStarted',
    /**
     * Event type fired when auto creating of horizon is finished
     */
    PropagationFinished = 'PropagationFinished'
}
