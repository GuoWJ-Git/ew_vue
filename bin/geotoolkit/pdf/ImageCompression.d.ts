/**
 * ImageCompression
 */
export enum ImageCompression {
    /**
     * NONE
     */
    NONE = 'none',
    /**
     * JPEG
     */
    JPEG = 'jpeg',
    /**
     * PNG
     */
    PNG = 'png',
    /**
     * AUTO mode. Save original compress images in original format. JPEG in JPEG,
PNG in PNG, other tries to save to PNG
     */
    AUTO = 'auto'
}
