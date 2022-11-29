import {NumericGauge} from './NumericGauge';
import {Orientation} from '../util/Orientation';
import {LineStyle} from '../attributes/LineStyle';
import {FillStyle} from '../attributes/FillStyle';

/**
 */
export class TrafficGauge extends NumericGauge {
    /**
     * @param options JSON with properties
     * @param options.orientation Orientation of the gauge (horizontal or vertical)
     * @param options.trafficlights An array with properties of each traffic light or an object with a single light
     * @param options.trafficlights.name Name of the light, all the operations on this light will be referenced by this name
     * @param options.trafficlights.linestyle Line style of the light shape
     * @param options.trafficlights.activefill Fill style applied to this light when the value of the gauge falls within its range
     * @param options.trafficlights.inactivefill Fill style applied to this light when the value of the gauge falls out of its range
     * @param options.trafficlights.painter Painter used to draw the light shape
     * @param options.trafficlights.preserveaspectratio A flag defining if the shape should have equal width and height regardless of its container dimensions
     * @param options.trafficlights.padding Padding inside the container of this light in CSS notation. This will be applied to all the sides.
     * @param options.trafficlights.low Lower bound of the range in which this light is active
     * @param options.trafficlights.high Higher bound of the range in which this light is active
     */
    constructor(options: object | { orientation?: Orientation; trafficlights?: object | { name?: string; linestyle?: string | LineStyle; activefill?: string | FillStyle; inactivefill?: string | FillStyle; painter?: string | Function; preserveaspectratio?: boolean; padding?: string | number; low?: number; high?: number; }  | object[]; } );
    /**
     * Sets properties pertaining to traffic gauge.
     * @param props JSON with properties
     * @param props.orientation Orientation of the gauge (horizontal or vertical)
     * @param props.trafficlights An object with properties of each traffic light or an object with a single light see {@link @int/geotoolkit/gauges/TrafficGauge.TrafficGauge#setTrafficLightProperties}
     * @param props.trafficlights.name Name of the light, all the operations on this light will be referenced by this name
     * @param props.trafficlights.linestyle Line style of the light shape
     * @param props.trafficlights.activefill Fill style applied to this light when the value of the gauge falls within its range
     * @param props.trafficlights.inactivefill Fill style applied to this light when the value of the gauge falls out of its range
     * @param props.trafficlights.painter Painter used to draw the light shape
     * @param props.trafficlights.preserveaspectratio A flag defining if the shape should have equal width and height regardless of its container dimensions
     * @param props.trafficlights.padding Padding inside the container of this light in CSS notation. This will be applied to all the sides.
     * @param props.trafficlights.low Lower bound of the range in which this light is active
     * @param props.trafficlights.high Higher bound of the range in which this light is active
     */
    setProperties(props: object | { orientation?: Orientation; trafficlights?: object | { name?: string; linestyle?: string | LineStyle; activefill?: string | FillStyle; inactivefill?: string | FillStyle; painter?: string | Function; preserveaspectratio?: boolean; padding?: string | number; low?: number; high?: number; }  | object[]; } ): this;
    /**
     * Sets properties pertaining to this object.
     */
    getProperties(): {orientation: Orientation; trafficlights: {name: string; linestyle: LineStyle; activefill: string | FillStyle; inactivefill: string | FillStyle; painter: string | Function; preserveaspectratio: boolean; padding: string | number; low: number; high: number}} | any;
    /**
     * Adds a traffic light or an array of traffic lights to the
     * @param lights Object with properties of the light or array with such objects
     * @param lights.name Name of the light, all the operations on this light will be referenced by this name
     * @param lights.linestyle Line style of the light shape
     * @param lights.activefill Fill style applied to this light when the value of the gauge falls within its range
     * @param lights.inactivefill Fill style applied to this light when the value of the gauge falls out of its range
     * @param lights.painter Painter used to draw the light shape
     * @param lights.preserveaspectratio A flag defining if the shape should have equal width and height regardless of its container dimensions
     * @param lights.padding Padding inside the container of this light in CSS notation. This will be applied to all the sides.
     * @param lights.low Lower bound of the range in which this light is active
     * @param lights.high Higher bound of the range in which this light is active
     * @param name Name of the light, used to reference this light in the future
     */
    addTrafficLights(lights: object | { name?: string | LineStyle; linestyle?: string | LineStyle; activefill?: string | FillStyle; inactivefill?: string | FillStyle; painter?: string | Function; preserveaspectratio?: boolean; padding?: string | number; low?: number; high?: number; }  | object[], name?: string): this;
    /**
     * Sets properties pertaining to a specific light in the traffic gauge. The properties will be applies to the light with
     * provided name, or to none.
     * @param name Name of the light, all the operations on this light will be referenced by this name,
     * array with light properties, or object with light properties containing name inside
     * @param props JSON with properties
     * @param props.name Name of the light, all the operations on this light will be referenced by this name
     * @param props.linestyle Line style of the light shape
     * @param props.activefill Fill style applied to this light when the value of the gauge falls within its range
     * @param props.inactivefill Fill style applied to this light when the value of the gauge falls out of its range
     * @param props.painter Painter used to draw the light shape
     * @param props.preserveaspectratio A flag defining if the shape should have equal width and height regardless of its container dimensions
     * @param props.padding Padding inside the container of this light in CSS notation. This will be applied to all the sides.
     * @param props.low Lower bound of the range in which this light is active
     * @param props.high Higher bound of the range in which this light is active
     */
    setTrafficLightProperties(name: object[] | object | string, props?: object | { name?: string; linestyle?: string | LineStyle; activefill?: string | FillStyle; inactivefill?: string | FillStyle; painter?: string | Function; preserveaspectratio?: boolean; padding?: string | number; low?: number; high?: number; } ): this;
    /**
     * Gets an array with JSON properties of all registered traffic lights
     */
    getTrafficLightsProperties(): object[];
    /**
     * Updates the state of the gauge
     */
    update(): void;
    /**
     * Updates the value of gauge, this will trigger the update of every dynamic component and
     * fire 'gaugeValueUpdated' event
     * @param value New value to set
     */
    setValue(value: number): this;
    /**
     * Returnt current value of the traffic gauge
     */
    getValue(): number;
}
