import { config } from 'dotenv'

config()

import { Client } from 'discord.js'

console.log('Starting bot...')
// console.log(process.env.BOT_SECRET)

const client = new Client({
    intents: [],
})

console.log(client)
