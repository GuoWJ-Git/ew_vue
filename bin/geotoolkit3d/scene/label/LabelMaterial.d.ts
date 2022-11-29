import {ShaderMaterial, Texture} from '../../THREE';

/**
 * Label's Material
 */
export class LabelMaterial extends ShaderMaterial {
    /**
     * Label's Material
     * @param options The options
     * @param options.map the texture
     * @param options.renderside the label side visibility, can be DoubleSide, FrontSide, BackSide.
     * @param options.opacity the label opacity from 0 to 1.
     */
    constructor(options: object | { map: Texture; renderside?: number; opacity?: number; } );
}
