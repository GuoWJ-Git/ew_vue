/**
 * Defines the different indexing mode available.<br>
 * <br>
 * Indexing mode are used to determine the probable location of a given data row for a given depth value.<br>
 * The more accurate this prediction will be, the fastest reading a 'random' range of depth will be.<br>
 * However some of those indexing modes requires specific conditions to operate.<br>
 */
export class IndexMode extends Function {
    /**
     * The fastest indexing mode.<br>
Computes index based on STRT and STEP as provided by LAS 2.0 header.<br>
Works only on simple LAS 2.0 (STRT < STOP, no wrap, STEP > 0) and is not tolerant to files not following the LAS 2.0 specification.
     */
    static readonly StrictIndex: IndexMode;
    /**
     * Slower indexing mode.<br>
Builds an index as it reads the file (during the requests).<br>
Works on any LAS 2.0 scenario and is 'more' fault tolerant.<br>
     */
    static readonly LiveIndex: IndexMode;
    /**
     * Slowest indexing mode.<br>
No index is used and each query may require reading the full file.<br>
Extremely fault tolerant.<br>
     */
    static readonly NoIndex: IndexMode;
}
