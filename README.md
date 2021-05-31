# Discord Blackjack
A NPM Package for blackjack games in Discord!

## Easy setup and use

### Installtion
```
npm install discord-blackjack
```
Use this in the console in the directory of your bot code

### Example Code (Regular)
```js
const Discord = require("discord.js")
const blackjack = require("discord-blackjack")
const client = new Discord.Client(ws: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"])
const prefix = "-"
const token = "TOKEN_GOES_HERE"
 
client.on("ready", () => {
    console.log("Bot has logged in!")
  })
 
client.on("message", async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return
 
  if (message.content == `${prefix}blackjack` || message.content == `${prefix}bj`) {
    let result = await blackjack(message, client)
    switch (result) {
      case 'Win':
        // do win stuff here
        break
      case 'Tie':
        // do tie stuff here
        break
      case 'Lose':
        // do lose stuff here
        break
      case 'Double Win':
        // do double win stuff here
        break
      case 'ERROR':
        // do whatever you want
        break
    }
   }
 }
 
client.login(token)
```

### Command Handler
```js
const blackjack = require("discord-blackjack")

module.exports = {
  name: "blackjack",
  async execute(message, args, client) {

    let result = await blackjack(message, client)
    switch (result) {
      case 'Win':
        // do win stuff here
        break
      case 'Tie':
        // do tie stuff here
        break
      case 'Lose':
        // do lose stuff here
        break
      case 'Double Win':
        // do double win stuff here
        break
      case 'ERROR':
        // do whatever you want
        break
    }
  }
}
```

### Output:
<img src="https://media.discordapp.net/attachments/842065905529651201/848458284222382081/unknown.png?width=278&height=473" alt="Welp, this image couldn't load...">

## Contact Us
You can contact us through our discord server [here](https://discord.gg/DcC4xFfTnB)
