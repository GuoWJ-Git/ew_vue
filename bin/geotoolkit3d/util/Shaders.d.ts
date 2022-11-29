import {Vector4} from '../THREE';

/**
 * Utility class providing glsl code snippets that can be included in shaders.<br>
 */
export class Shaders {
    /**
     * Utility class providing glsl code snippets that can be included in shaders.<br>
     */
    constructor();
    /**
     * @param float [0...1[
     */
    static packFloatToRGBA(float: number): Vector4;
    /**
     * Unpack a Vector4 as a float value
     * @param vec4 RGBA vector4 components should be contained in [0...1[
     */
    static unpackVec4ToFloat(vec4: Vector4 | number[]): number;
}
