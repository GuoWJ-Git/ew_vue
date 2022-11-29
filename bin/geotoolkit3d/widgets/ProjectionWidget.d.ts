import {AbstractWidget} from './AbstractWidget';
import {Object3D} from '../scene/Object3D';
import {GridLegend} from '../scene/grid/legend/GridLegend';

/**
 * Widget for projection of meshes. Use method .addMesh to add mesh to widget and it creates grid with projected mesh as shadow painting.
 */
export class ProjectionWidget extends AbstractWidget {
    /**
     * Widget for projection of meshes. Use method .addMesh to add mesh to widget and it creates grid with projected mesh as shadow painting.
     * @param options options object
     * @param options.grid options for grid customization (see {@link @int/geotoolkit3d/scene/grid/Grid.Grid#setOptions} for more info)
     * @param options.planes options for planes visibility
     * @param options.planes.left left plane visiblity
     * @param options.planes.right right plane visibility
     * @param options.planes.top top plane visibility
     * @param options.planes.bottom bottom plane visibility
     * @param options.planes.front front plane visibility
     * @param options.planes.back back plane visibility
     * @param options.meshes meshes to project on grid
     */
    constructor(options?: object | { grid?: object; planes?: object | { left?: boolean; right?: boolean; top?: boolean; bottom?: boolean; front?: boolean; back?: boolean; } ; meshes?: Object3D[]; } );
    /**
     * Sets options
     * @param options options object
     * @param options.grid options for grid customization (see {@link @int/geotoolkit3d/scene/grid/Grid.Grid#setOptions} for more info)
     * @param options.planes options for planes visibility
     * @param options.planes.left left plane visiblity
     * @param options.planes.right right plane visibility
     * @param options.planes.top top plane visibility
     * @param options.planes.bottom bottom plane visibility
     * @param options.planes.front front plane visibility
     * @param options.planes.back back plane visibility
     * @param options.meshes meshes to project on grid
     */
    setOptions(options?: object | { grid?: object; planes?: object | { left?: boolean; right?: boolean; top?: boolean; bottom?: boolean; front?: boolean; back?: boolean; } ; meshes?: Object3D[]; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
    /**
     * Add mesh to widget
     * @param mesh mesh to project on grid
     */
    addMesh(mesh: Object3D): this;
    /**
     * Remove mesh from widget
     * @param mesh mesh to remove from widget
     */
    removeMesh(mesh: Object3D): this;
    /**
     * Add GridLegend to widget
     * @param legend legend to display on grid
     */
    addLegend(legend: GridLegend): this;
}
