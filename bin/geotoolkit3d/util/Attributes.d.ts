import {LineStyle} from '../../geotoolkit/attributes/LineStyle';
import {LineBasicMaterial, LineDashedMaterial, MeshLambertMaterial, MeshPhongMaterial} from '../THREE';
import {FillStyle} from '../../geotoolkit/attributes/FillStyle';

/**
 * Utility class offering various functions to manipulate attributes and threejs materials.<br>
 * <br>
 */
export class Attributes {
    /**
     * Utility class offering various functions to manipulate attributes and threejs materials.<br>
     * <br>
     */
    constructor();
    /**
     * Builds a line material for the given linestyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     * <br>
     * Note that supported patterns are only the simple regular ones.<br>
     * Per THREEJS requirements for the LineDashedMaterial you will also have to call line.computeLineDistances() on your THREE.Line object.<br>
     * <br>
     * Note that style.width is not supported on windows-webgl.<br>
     * See:<br>
     * {@link https://threejs.org/docs/#api/en/objects/Line.computeLineDistances}<br>
     * {@link http://alteredqualia.com/tmp/webgl-linewidth-test/}<br>
     * {@link http://en.wikipedia.org/wiki/WebGL#Desktop_browsers}<br>
     * {@link https://code.google.com/p/angleproject/issues/detail?id=334}<br>
     * <br>
     * @param style The style to use to create a material
     */
    static createLineMaterial(style: LineStyle): LineBasicMaterial | LineDashedMaterial;
    /**
     * Build a mesh material (Lambertian reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     * @param style The style to build a material for
     */
    static createMeshMaterial(style: FillStyle): MeshLambertMaterial;
    /**
     * Build a mesh material (Phong reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     * @param style The style to build a material for
     */
    static createPhongMeshMaterial(style: FillStyle): MeshPhongMaterial;
    /**
     * Convert a color coded as a css-color to a THREE color.<br>
     * @param cssColor The color in css format
     */
    static getThreeColor(cssColor: string): object;
    /**
     * Updates a mesh material (Lambert) for the given fillstyle.<br>
     * @param material The material to update
     * @param style The style to use to update the material
     */
    static updateMeshMaterial(material: MeshLambertMaterial, style: FillStyle): MeshLambertMaterial;
}
