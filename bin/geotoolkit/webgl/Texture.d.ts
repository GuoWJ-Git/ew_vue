/**
 * This class create a texture for WebGL.
 */
export class Texture {
    /**
     * This class create a texture for WebGL.
     * @param options The options for texture
     * @param options.name texture name
     * @param options.image pixel source for texture
     * @param options.wraps define how the texture is wrapped horizontally in UV mapping
     * @param options.wrapt define how the texture is wrapped vertically in UV mapping
     * @param options.magfilter define how the texture is sampled when a texel covers more than a pixel
     * @param options.minfilter define how the texture is sampled when a texel covers less than a pixel
     * @param options.format define the format of texel data
     * @param options.type define the data type of texel data
     * @param options.flipy whether to flip the texture along the vertical axis
     */
    constructor(options: object | { name?: string; image?: HTMLImageElement | HTMLCanvasElement | ArrayBufferView; wraps?: number | GLenum; wrapt?: number | GLenum; magfilter?: number | GLenum; minfilter?: number | GLenum; format?: number | GLenum; type?: number | GLenum; flipy?: boolean; } );
    /**
     * Set name for this texture
     * @param name the attribute name
     */
    setName(name: string): this;
    /**
     * Set image for this texture
     * @param image the pixel source
     */
    setImage(image: HTMLImageElement | HTMLCanvasElement | ArrayBufferView): this;
    /**
     * Set how this texture is wrapped in UV mapping.
     * @param U the U in UV mapping
     * @param V the V in UV mapping
     */
    setWrap(U?: number | GLenum, V?: number | GLenum): this;
    /**
     * Set how this texture is sampled when a texel covers more or less than a pixel
     * @param magFilter texel covers more than a pixel
     * @param minFilter texel covers less than a pixel
     */
    setFilter(magFilter?: number | GLenum, minFilter?: number | GLenum): this;
    /**
     * Set the format of texel data
     * @param format the format
     */
    setFormat(format: number | GLenum): this;
    /**
     * Set the data type oof texel data
     * @param type the data type
     */
    setType(type: number | GLenum): this;
    /**
     * Set whether to flip texture along vertical axis
     * @param flag the flag
     */
    setFlipY(flag: boolean): this;
    /**
     * Return the pixel source of this texture
     */
    getImage(): HTMLImageElement | HTMLCanvasElement | ArrayBufferView;
    /**
     * Return the name of the texture
     */
    getName(): string;
    /**
     * Return the attributes of the texture
     */
    getAttributes(): {name: string; id: number; image: HTMLImageElement | HTMLCanvasElement | ArrayBufferView; wraps: number | GLenum; wrapt: number | GLenum; magfilter: number | GLenum; minfilter: number | GLenum; format: number | GLenum; type: number | GLenum; flipy: boolean} | object;
}
