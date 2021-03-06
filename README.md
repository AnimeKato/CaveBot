
## CaveBot
A bot for the Shitpage discord server.

## Please...
...DO feel free to host this bot yourself for you own server.\
...DO NOT host a public version of this bot.\
Thank you.

## Contributing
Feel free to fork this repo and submit a pull request, maybe even fix my code if you want.

## Hosting The Bot
First, create an application with a bot. To do this, go to the [Discord Developer Dashboard](https://discord.com/developers/applications), and click "New Application", as shown: 

![Image](https://imgur.com/AcIlxMsl.png)

And add a name.

Next, go to "Bot" on the left and add a bot. Then use `git` to clone the source code:
```bash
git clone https://github.com/animekato/CaveBot.git
```
And cd to the bot dir:
```bash
cd CaveBot
```
At this point, you will want to create your `config.json` file. To do this, you, on Windows, should be able to type:
```cmd
explorer
```
And an explorer window should open in the bot's directory. If you are on Linux, run your file manager in the terminal and it should open in the bot's directory. Next, create a file called `config.json`, and open it in a text editor like Notepad, Mousepad, or Vim and paste in the following:
```json
{"PREFIX": "bot-prefix", "TOKEN": "your-bot-token"}
```
Replacing `bot-prefix` with the prefix you want, and `your-bot-token` with your bot token. (To get your bot token, go back to the discord bot dash where you created the bot, and click "Copy token".)
Then is adding the bot to your server. To do this. on the bot dashboard, click "OAuth2" on the side. There, from "SCOPES", select `bot`, then from "PERMISSIONS", select "Administrator". Copy the link from the text box under "SCOPES", Open a new tab, paste in the link you just copied, and press Enter.
![The link to copy](https://imgur.com/zDw2maTl.png) 
(The link to copy)\
Last, install Node.js, discord.js, and run the bot. To do this, go to the [Node.js Download page](https://nodejs.org/en/download/) and download one of the installers. If you need help, go to the bottom of the page and click one of the green links. Then, with your cmd or terminal window in the bot folder, type:
```bash
sudo npm install --global yarn
yarn add discord.js
```
on Linux, or, on Windows as Administrator,\
```
npm install --global yarn
yarn add discord.js
```
and then:
```bash
node main.js
```
Remember, **Please DO NOT host a public version of this bot!!**
