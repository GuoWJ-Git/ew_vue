/**
 * Base interface for commands
 */
export abstract class ICommand {
    /**
     * Executes the command
     */
    abstract execute(): boolean;
    /**
     * Rewinds the command
     */
    abstract undo(): boolean;
}
