import axios from 'axios';
import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { MessageButtonStyles } from 'discord.js/typings/enums';

export default class DiscordService {
    username;
    avatar_url;
    webhook_url;

    constructor(webhook_url: string, username: string, avatar_url: string) {
        this.username = username;
        this.avatar_url = avatar_url;
        this.webhook_url = webhook_url;
    }

    async sendWebhookMessage(message: string, embeds: Array<MessageEmbed>): Promise<void> {
        await axios.post(this.webhook_url, {
            username: this.username,
            avatar_url: this.avatar_url,
            content: message,
            embeds: embeds.map((embed) => embed.toJSON()),
        });
    }
}
