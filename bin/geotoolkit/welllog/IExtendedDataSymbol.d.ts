/**
 * Extended data symbol interface
 */
export abstract class IExtendedDataSymbol {
    /**
     * Sets data from data source to symbol
     * @param data data
     */
    abstract setMetaInfo(data: object): this;
    /**
     * Returns data from symbol
     */
    abstract getMetaInfo(): object;
    /**
     * Check data from source, true if source contains info for symbol
     * @param data data
     */
    abstract acceptMetaInfo(data: object): boolean;
}
