import { AbstractStatusCommand } from "../../shared/status";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class StatusCommand extends AbstractStatusCommand {
    public static description = "Show the relay status";

    public static examples: string[] = ["$ ark relay:status"];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
    };

    public getClass() {
        return StatusCommand;
    }

    public getSuffix(): string {
        return "relay";
    }
}
