import {NumericalDataSeries} from '../../../data/NumericalDataSeries';
import {IWritable} from '../../../util/stream/IWritable';

/**
 * LAS writer for LAS version 2.0
 */
export class Las20Writer {
    /**
     * LAS writer for LAS version 2.0
     * @param indexData data series which stores index values (depth, time or index)
     */
    constructor(indexData: NumericalDataSeries);
    /**
     * Sets company name
     * @param value value
     */
    setCompanyName(value: string): this;
    /**
     * Sets well name
     * @param value value
     */
    setWellName(value: string): this;
    /**
     * Sets field
     * @param value value
     */
    setField(value: string): this;
    /**
     * Sets location
     * @param value value
     */
    setLocation(value: string): this;
    /**
     * Sets province
     * @param value value
     */
    setProvince(value: string): this;
    /**
     * Sets county
     * @param value value
     */
    setCounty(value: string): this;
    /**
     * Sets state
     * @param value value
     */
    setState(value: string): this;
    /**
     * Sets country
     * @param value value
     */
    setCountry(value: string): this;
    /**
     * Sets service company
     * @param value value
     */
    setServiceCompany(value: string): this;
    /**
     * Sets date
     * @param value value
     */
    setDate(value: string): this;
    /**
     * Sets unique well id
     * @param value value
     */
    setUWI(value: string): this;
    /**
     * Sets API number
     * @param value value
     */
    setAPINumber(value: string): this;
    /**
     * Sets licence number
     * @param value value
     */
    setLicenceNumber(value: string): this;
    /**
     * Save
     * @param stream stream to save file
     */
    save(stream: IWritable): void;
    /**
     * Adds parameter
     * @param mnemonic mnemonic
     * @param unit unit
     * @param value value
     * @param description description
     */
    addParameter(mnemonic: string, unit: string, value: string, description: string): this;
    /**
     * @param curveData curve data series
     * @param mnemonic mnemonic
     * @param unit unit
     * @param value value
     * @param description description
     */
    addCurve(curveData: NumericalDataSeries, mnemonic?: string, unit?: string, value?: string, description?: string): this;
    /**
     * Adds comment to version section
     * @param position position
     * @param comment comment
     */
    addVersionComment(position: number, comment: string): this;
    /**
     * Adds comment to well section
     * @param position position
     * @param comment comment
     */
    addWellComment(position: number, comment: string): this;
    /**
     * Adds comment to parameter section
     * @param position position
     * @param comment comment
     */
    addParameterComment(position: number, comment: string): this;
    /**
     * Adds comment to curve section
     * @param position position
     * @param comment comment
     */
    addCurveComment(position: number, comment: string): this;
    /**
     * @param value null value
     */
    setNullValue(value: number): this;
    /**
     */
    getNullValue(): number;
}
