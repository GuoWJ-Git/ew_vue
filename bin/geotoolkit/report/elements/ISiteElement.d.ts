/**
 * Define an object that represents the report site element
 */
export abstract class ISiteElement {
    /**
     * Return Design time state
     */
    abstract isDesignTime(): boolean;
}
