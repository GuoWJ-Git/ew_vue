/**
 * Labeling helper class
 */
export class LabelingHelper {
    /**
     * Labeling helper class
     */
    constructor();
    /**
     * Returns instance of the helper
     * @deprecated since 2020.1 (3.1) Create a new instance of geotoolkit.schematics.widgets.utils.LabelingHelper instead.
     */
    static getInstance(): LabelingHelper;
    /**
     * Gets default option set for {@linkgeotoolkit.schematics.labeling.DefaultLabelShape}-style
     * labeling (normally, for all modes but "Adjacent")
     */
    getDefaultLabelOptions(): any;
    /**
     * Gets default option set for {@linkgeotoolkit.schematics.labeling.SymbolLabelShape}-style
     * labeling (normally, for "Adjacent" labeling mode)
     */
    getSymbolLabelOptions(): any;
}
