import {AbstractTextElement} from './AbstractTextElement';

/**
 * ContainerElement is an interface which has padding style;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export class ContainerElement extends AbstractTextElement {
    /**
     * ContainerElement is an interface which has padding style;
     * for example, inheriting the same set of methods, or being testable in the same way.<br>
     * <br>
     * @param options The options
     * @param options.name name of the node.
     */
    constructor(options?: object | { name?: string; } );
    /**
     * Set content transformation angle
     * @param angle content transformation angle (90deg|180deg|270deg|-90deg)
     */
    setContentTransform(angle: string): this;
    /**
     * Return content transformation angle if any
     */
    getContentTransform(): string | null;
}
