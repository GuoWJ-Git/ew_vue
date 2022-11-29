import {Object3D} from '../scene/Object3D';

/**
 * A highlight tool used to highlight objects returned from picking.<br>
 * The style of highlight is based on the picked material.<br>
 * By default, it will magnify the original object, set it to a lower opacity, and show at the same position.<br>
 * This creates a highlight effect.<br>
 * <br>
 * For 2D objects, it supports geotoolkit3d.scene.pointset.PointCloud and geotoolkit3d.widgets.scatter.ScatterPlot. <br>
 * For 3D objects, it supports THREE.Mesh.<br>
 * <br>
 * Usage: add highlighter as a cursor tool to plot, and create a movelistener to detect cursor movement.<br>
 * Check cursor tutorials for example.
 */
export class Highlighter extends Object3D {
    /**
     * A highlight tool used to highlight objects returned from picking.<br>
     * The style of highlight is based on the picked material.<br>
     * By default, it will magnify the original object, set it to a lower opacity, and show at the same position.<br>
     * This creates a highlight effect.<br>
     * <br>
     * For 2D objects, it supports geotoolkit3d.scene.pointset.PointCloud and geotoolkit3d.widgets.scatter.ScatterPlot. <br>
     * For 3D objects, it supports THREE.Mesh.<br>
     * <br>
     * Usage: add highlighter as a cursor tool to plot, and create a movelistener to detect cursor movement.<br>
     * Check cursor tutorials for example.
     * @param options See geotoolkit3d.scene.Object3D for inherited options
     * @param options.multiplier the size multiplier added to highlighter
     * @param options.opacity the opacity of highlighter
     */
    constructor(options: object | { multiplier?: number; opacity?: number; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     */
    setOptions(options?: object): this;
    /**
     * Set the highlighter (geometry & material) based on the type of picked object.<br>
     * This method gets called by cursor listener.<br>
     * @param object the picked object to be highlighted
     * @param index the index of the picked object
     */
    setPickedObject(object: Object3D, index: number): void;
    /**
     * Dispose highlighter
     */
    dispose(): void;
}
