import {TextStyle} from '../attributes/TextStyle';
import {Text} from './shapes/Text';

/**
 * Defines helper method(s) to create annotation title instance
 */
export class AnnotationTitleFactory {
    /**
     * Defines helper method(s) to create annotation title instance
     */
    constructor();
    /**
     * Returns instance of the factory
     */
    static getInstance(): AnnotationTitleFactory;
    /**
     * Creates annotation title
     * @param options annotation title options
     * @param options.text text
     * @param options.textstyle text style
     * @param options.textstyle.color text color
     * @param options.textstyle.font text font
     * @param options.sizeisindevicespace device size flag
     */
    create(options: object | { text?: string; textstyle?: TextStyle | string | object | { color?: string; font?: string; } ; sizeisindevicespace?: boolean; } ): Text;
}
