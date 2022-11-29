/**
 * Tile reciever mode
 */
export enum LoaderType {
    /**
     * Image - use if tile reciever will get image
     */
    Image = 0,
    /**
     * Base64 - use if tile reciever will get base64 of image
     */
    Base64 = 1,
    /**
     * Canvas - use if tile reciever will get canvas with drawn image
     */
    Canvas = 2
}
