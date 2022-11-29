/**
 * An enumeration for byte orders.
 */
export enum ByteOrder {
    /**
     * Constant denoting little-endian byte order.
In this order, the bytes of a multibyte value
are ordered from least significant to most significant.
     */
    LittleEndian = 'LITTLE_ENDIAN',
    /**
     * Constant denoting big-endian byte order. In this order, the bytes of a
multibyte value are ordered from most significant to least significant.
     */
    BigEndian = 'BIG_ENDIAN'
}
