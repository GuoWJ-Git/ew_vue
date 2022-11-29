import {AbstractLoader} from '../AbstractLoader';
import {LineReader} from '../../../../geotoolkit/util/stream/LineReader';

/**
 * Callback for load/parse().
 */
export type loadCallback = (json: object | { metadata?: object | { dataset?: object | { points?: number; dimensions?: number[]; type?: string; } ; header?: string; title?: string; type?: string; } ; data?: object | { position?: number[]; fielddata?: object | { name?: object; type?: object; arrays?: object[]; arrays0?: object | { name?: string; stride?: number; values?: number[]; } ; } ; ATTRIBUTE?: object | { name?: string; type?: string; values?: number[]; } ; index?: number[]; lineindex?: number[][]; pointindex?: number[]; cells?: number[]; } ; } ) => void;
/**
 * This class can parse vtk files and return a comprehensive json object.<br>
 * <br>
 * This JSON object can be used to generate Geometries and Object3D.<br>
 * See {@link @int/geotoolkit3d/data/loader/vtk/VTKLoader.loadCallback loadCallback} for the JSON specification.<br>
 * See {@link @int/geotoolkit3d/data/loader/vtk/VTKFactory.VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
 * <br>
 * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
 * <br>
 * Note that, for now, only ASCII format is supported.
 */
export class VTKLoader extends AbstractLoader {
    /**
     * This class can parse vtk files and return a comprehensive json object.<br>
     * <br>
     * This JSON object can be used to generate Geometries and Object3D.<br>
     * See {@link @int/geotoolkit3d/data/loader/vtk/VTKLoader.loadCallback loadCallback} for the JSON specification.<br>
     * See {@link @int/geotoolkit3d/data/loader/vtk/VTKFactory.VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
     * <br>
     * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
     * <br>
     * Note that, for now, only ASCII format is supported.
     */
    constructor();
    /**
     * Loads the vtk file at the given URL.<br>
     * <br>
     * This convenience function exists to mimic THREEJS loaders API.<br>
     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
     * <br>
     * One could also use directly the function parse() to handle loading the dataset manually/differently.
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param url The url of the VTK file
     * @param onLoad The function called upon success
     * @param onError The function called if an error occurs
     */
    load(url: string, onLoad: loadCallback, onError: Function): void;
    /**
     * Parses the content of the given reader.<br>
     * <br>
     * This function will asynchronously parse the content of the VTK dataset and build a JSON representation of it.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the parsing has been done.<br>
     * <br>
     * @param reader The reader
     * @param onLoad callback function
     * @param onError The function called if an error occurs
     */
    parse(reader: LineReader, onLoad: loadCallback, onError: Function): Promise<any>;
}
