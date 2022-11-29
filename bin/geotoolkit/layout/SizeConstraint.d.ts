/**
 * Define resize mode of the layoutable.
 */
export enum SizeConstraint {
    /**
     * The layoutable item is not constrained.
     */
    NoConstraint = 'noconstraint',
    /**
     * The layoutable item returns preferred width and height from the layout manager
     */
    PreferredSize = 'preferredsize',
    /**
     * The layoutable item returns preferred width from the layout manager
     */
    PreferredWidth = 'preferredwidth',
    /**
     * The layoutable item returns preferred height from the layout manager
     */
    PreferredHeight = 'preferredheight'
}
