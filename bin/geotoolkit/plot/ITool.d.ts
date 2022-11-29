/**
 * Define an interface that implement plot tool
 */
export abstract class ITool {
    /**
     * return tool name if any
     */
    abstract getName(): string;
    /**
     * set enable state
     * @param enabled sets the enabled state
     */
    abstract setEnabled(enabled: boolean): this;
    /**
     * returns enable state
     */
    abstract isEnabled(): boolean;
}
