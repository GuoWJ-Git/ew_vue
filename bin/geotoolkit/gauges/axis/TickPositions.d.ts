/**
 * Enumerator defining the positions of ticks
 */
export enum TickPositions {
    /**
     * Center position - ticks grow from center in and out
     */
    Center = 'center',
    /**
     * Inside position - ticks grow from inner bound of the axis and towards the center
     */
    Inside = 'inside',
    /**
     * Outside position - ticks grow from outer bound of the axis and away from center
     */
    Outside = 'outside'
}
