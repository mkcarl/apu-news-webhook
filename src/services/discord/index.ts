import DiscordService from './service';
import dotenv from 'dotenv';
import { StudentNews } from '../../types/apu';
import { MessageEmbed } from 'discord.js';
import TurndownService from 'turndown';

dotenv.config();

const client = new DiscordService(process.env.WEBHOOK_URL || '', 'APU News', 'https://i.imgur.com/6D4J329.png');

const turndownService = new TurndownService();

export async function sendNewsMessage(rawNews: StudentNews) {
    const newsEmbed = new MessageEmbed()
        .setTitle(rawNews.title.rendered)
        .setColor(0x696969)
        .setDescription(turndownService.turndown(rawNews.content.rendered))
        .setImage(rawNews.featured_image_src)
        .setURL(rawNews.link)
        .setFooter({
            iconURL:
                'https://avatars.githubusercontent.com/u/53103933?s=400&u=3280cf7b3aceba5ce0fccbe1a65ca15d31dec857&v=4',
            text: 'Made by mkcarl (@Leysu#0620)',
        });

    await client.sendWebhookMessage(`Incoming News @ ${rawNews.date}`, [newsEmbed]);
}
