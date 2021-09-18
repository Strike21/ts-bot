import { Client, Collection, Message } from 'discord.js';

declare module 'discord.js' {
    export interface Client {
        commands: Collection<string, ICommand>;
    }

    export interface ICommand {
        name: string,
        run(client: Client, message: Message, args: string[]): Promise<void>;
    }
}