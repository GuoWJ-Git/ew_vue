import {LinearGradientStyle} from '../../attributes/LinearGradientStyle';

/**
 * Helper class
 */
export class ComponentUtils {
    /**
     * Helper class
     */
    constructor();
    /**
     * Gets depth from value
     * @param geometryData geometry data
     */
    static getDepthFrom(geometryData: object | any[]): number | null;
    /**
     * Gets depth to value
     * @param geometryData geometry data
     */
    static getDepthTo(geometryData: object | any[]): number | null;
    /**
     * Gets biggest outer diameter
     * @param geometryData geometry data
     */
    static getOuterDiameter(geometryData: object | any[]): number | null;
    /**
     * Validates array of diameters
     * @param diameters array of diameters
     */
    static validDiameters(diameters: any[]): boolean;
    /**
     * Create reflected linear gradient style
     * @param outerColor outer color
     * @param innerColor inner color
     * @param outerX outer X or vertical flag (in this case all next arguments ignored)
     * @param innerX inner X
     * @param outerY outer Y
     * @param innerY inner Y
     * @param vertical vertical
     */
    static createReflectedLinearGradientStyle(outerColor?: string, innerColor?: string, outerX?: number | boolean, innerX?: number, outerY?: number, innerY?: number, vertical?: boolean): LinearGradientStyle;
}
