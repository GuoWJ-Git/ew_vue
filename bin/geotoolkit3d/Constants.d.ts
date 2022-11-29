/**
 * Constant class offering general constants for geotoolkit3d<br>
 * <br>
 */
export class Constants {
    /**
     * Constant class offering general constants for geotoolkit3d<br>
     * <br>
     */
    constructor();
}
/**
 * Seismic display mode enum.<br>
 * <br>
 * This enum is used to determine how to transform Index coordinates when rendering Seismic related objects.<br>
 */
export enum SeismicModes {
    /**
     * Display mode for Inline-crossline, ij, index.
     */
    ij = 'IJ',
    /**
     * Display mode for Inline-crossline, ij, index with the I coordinate flipped
     */
    ijflipped = 'IJFLIPPED',
    /**
     * Display mode for XY
     */
    xy = 'XY'
}
/**
 * Enum for value modes
 */
export enum HeightMapColorBarValueMode {
    /**
     * Black and white value mode: canvas has only grayscale colors, black - 0.0, white - 1.0
     */
    BlackAndWhite = 0,
    /**
     * Terrarium value mode: color on canvas decodes by Terrarium (see https://www.mapzen.com/blog/elevation/ File formats section)
     */
    Terrarium = 1,
    /**
     * Normal value mode: color on canvas depends on alpha-channel (see https://www.mapzen.com/blog/elevation/ File formats section)
     */
    Normal = 2
}
/**
 * Builtin picking modes.<br>
 * <br>
 * This is used to tell the GPU which picking phase is currently occurring.<br>
 * It will be use din the picking shaders to choose which information to encode in the picked pixel.<br>
 */
export enum PickingModes {
    /**
     * ID mode, shader will encode the shape unique id.
     */
    Id = 0,
    /**
     * X mode, shader will encode the picked point x coordinate.
     */
    X = 10,
    /**
     * ID mode, shader will encode the picked point y coordinate.
     */
    Y = 20,
    /**
     * ID mode, shader will encode the picked point z coordinate.
     */
    Z = 30
}
/**
 * Strategy for painting of color
 */
export enum Colors {
    /**
     * NoColors is the default and applies the material's color to all faces.
     */
    NoColors = 0,
    /**
     * FaceColors colors faces according to each Face3 Color value.
     */
    FaceColors = 1,
    /**
     * VertexColors colors faces according to each Face3 vertexColors value. This is an array of three Colors, one for each vertex in the face.
     */
    VertexColors = 2
}
/**
 * Defines which side of faces will be rendered
 */
export enum Side {
    /**
     * Front
     */
    FrontSide = 0,
    /**
     * Back
     */
    BackSide = 1,
    /**
     * Both
     */
    DoubleSide = 2
}
/**
 * Grid axis anchor
 */
export enum Anchor {
    start = 'start',
    end = 'end'
}
/**
 * Anti-aliasing mode
 * <br>
 * Anti-aliasing (AA) is a technique to eliminate jaggies (pixelated edges) that appear in 3D plot.
 * Each AA technique has different visual result and consumes different resources.<br>
 * Pixel scale (determined by monitor resolution) affects the AA quality.
 * The default AA for retina and 2K (2560x1440) and above monitor is fast approximate AA (FXAA), and super-resolution AA (SRAA) for lower resolution.
 */
export enum AntiAliasing {
    /**
     * Super-sampling anti-aliasing
     */
    SSAA = 'ssaa',
    /**
     * Fast Approximate anti-alising
     */
    FXAA = 'fxaa',
    /**
     * Super-resolution anti-aliasing
     */
    SRAA = 'sraa'
}
