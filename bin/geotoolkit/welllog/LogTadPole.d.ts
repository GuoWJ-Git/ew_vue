import {LogCurve} from './LogCurve';
import {LogData} from './data/LogData';
import {TadPoleSymbol} from './TadPoleSymbol';
import {SymbolShape} from '../scene/shapes/SymbolShape';

/**
 * Creates a logtadpole using the dataobject that contains a datasource for the depth and dip values {@link @int/geotoolkit/welllog/data/LogData.LogData}  and symbols{@link @int/geotoolkit/welllog/TadPoleSymbol.TadPoleSymbol}.<br>
 * It also contains arrays for symbol types (string), symbol fillStyle (geotoolkit.attributes.FillStyle) and lineStyle (geotoolkit.attributes.LineStyle).<br>
 * Finally it contains arrays for ticks azimuths (arrays of number), lengths (arrays of number) and lineStyles (arrays of geotoolkit.attributes.LineStyle)
 * A tadpole is associated with one or several ticks and defined by a depth, a dip, and a TadpoleSymbol. <br>
 * User has to first create a track and then add LogTadPole to it. see example below.
 * @deprecated since 2021.1 (3.3) Use geotoolkit.welllog.TadPole instead.
 */
export class LogTadPole extends LogCurve {
    /**
     * Creates a logtadpole using the dataobject that contains a datasource for the depth and dip values {@link @int/geotoolkit/welllog/data/LogData.LogData}  and symbols{@link @int/geotoolkit/welllog/TadPoleSymbol.TadPoleSymbol}.<br>
     * It also contains arrays for symbol types (string), symbol fillStyle (geotoolkit.attributes.FillStyle) and lineStyle (geotoolkit.attributes.LineStyle).<br>
     * Finally it contains arrays for ticks azimuths (arrays of number), lengths (arrays of number) and lineStyles (arrays of geotoolkit.attributes.LineStyle)
     * A tadpole is associated with one or several ticks and defined by a depth, a dip, and a TadpoleSymbol. <br>
     * User has to first create a track and then add LogTadPole to it. see example below.
     * @param datasource datasource or properties object
     * @param datasource.datasource data source to be displayed
     * @param datasource.symbols symbols to be displayed
     * @param symbols symbols to be displayed
     */
    constructor(datasource?: object | { datasource?: LogData; symbols?: TadPoleSymbol[]; }  | LogData, symbols?: TadPoleSymbol[]);
    /**
     * Returns symbols to be displayed
     */
    getSymbols(): TadPoleSymbol[];
    /**
     * Returns symbols to be displayed
     * @param symbols symbols to be set
     */
    setSymbols(symbols: TadPoleSymbol[]): this;
    /**
     * Update symbols if they are changed
     */
    updateSymbols(): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.symbol An object containing the properties to set to symbol
     */
    setProperties(properties: object | { symbol?: object | SymbolShape; } ): this;
}
