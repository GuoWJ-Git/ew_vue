/**
 * Enum of Reservoir Highlighting Modes.<br>
 * <br>
 * The values of this enums can be used to determine the highlight mode of a reservoir.
 */
export enum HighlightMode {
    /**
     * When user clicks the reservoir, the face(s) exposed to user will be highlighted
     */
    FrontFace = 'frontface',
    /**
     * When user clicks the reservoir, the selected cell will be highlighted
     */
    Cell = 'cell',
    /**
     * The highlight effect is disabled
     */
    None = 'none'
}
