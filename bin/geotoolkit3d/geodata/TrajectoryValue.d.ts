/**
 * Class TrajectoryValue
 */
export class TrajectoryValue {
    /**
     * Class TrajectoryValue
     * @param name descriptor for what this value represents
     * @param values values that correspond to the xyz locations of the trajectory
     */
    constructor(name: string, values: number[]);
    /**
     * gets the name for this value array
     */
    getName(): string;
    /**
     * gets the name for this value array
     */
    getValues(): number[];
}
