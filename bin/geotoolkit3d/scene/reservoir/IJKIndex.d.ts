/**
 * A Reservoir IJK index
 * This object represents a cell index
 */
export class IJKIndex {
    /**
     * A Reservoir IJK index
     * This object represents a cell index
     * @param options The input for IJK coordinates as an object or an array
     * @param options.i I coordinate
     * @param options.j J coordinate
     * @param options.k K coordinate
     */
    constructor(options: number | object | { i?: number; j?: number; k?: number; }  | number[]);
    /**
     * Set the ijk coordinate from the given array ([i, j, k])
     * @param array The array containing the ijk values
     */
    fromArray(array: number[]): this;
    /**
     * Get an array representation of the IJK
     */
    toArray(): number[];
    /**
     * Set the value of the object<br>
     * @param options The input for IJK coordinates as an object
     * @param options.i I coordinate
     * @param options.j J coordinate
     * @param options.k K coordinate
     */
    fromJson(options: object | { i?: number; j?: number; k?: number; } ): this;
    /**
     * Get a json representation of the object<br>
     */
    toJSON(): {i: number; j: number; k: number} | object;
    /**
     * Set the the ijk values
     * @param i The I coordinate
     * @param j The J coordinate
     * @param k The K coordinate
     */
    set(i: number, j: number, k: number): this;
    /**
     * Set the ijk coordinates.
     * @param options The input for IJK coordinates as an object or an array or the I coordinate
     * @param options.i I coordinate
     * @param options.j J coordinate
     * @param options.k K coordinate
     * @param j J coordinate
     * @param k K coordinate
     */
    setOptions(options: number | object | { i?: number; j?: number; k?: number; }  | number[], j?: number, k?: number): this;
    /**
     * Get the ijk coordinates.
     * (see {@link @int/geotoolkit3d/scene/reservoir/IJKIndex.IJKIndex#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Return I index
     */
    getI(): number;
    /**
     * Return J index
     */
    getJ(): number;
    /**
     * Return K index
     */
    getK(): number;
    /**
     * Add ijk index to this index
     * @param ijk adds ijk to this index
     */
    add(ijk: IJKIndex): this;
    /**
     * Subtract ijk index to this index
     * @param ijk subtracts ijk to this index
     */
    sub(ijk: IJKIndex): this;
}
