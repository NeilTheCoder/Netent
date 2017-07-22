## Installation
### Windows
**Installing Netent bot on Widnows  
Requirements:**  
**`Windows 7 or Above`**  
**`NodeJS 8+`**  
**`Visual Studio`**  
**- How to install**  
**1. Install the file for Netent  
2. Change the file name `settings_example.json` to `settings.json` and change the Credentials inside it.  
3. Run the code through Visual Studio**

### Linux
**Installing Netent bot on Linux  
Requirements:  
`NodeJS 8+  
Git`**  
**- How to Install**  
**1. Type `git clone git@github.com:NeilTheCoder/Netent.git` on the File.  
1.1 If not work, try `git clone https://github.com/NeilTheCoder/Netent.git`  
2. Type `cd path/to/your/bot/folder`on your Terminal on Linux  
3. Once in the Folder, type on the terminal `npm install discord.js --save`  
4. Then lastly, run it by typing `node nenent.js` or `node nenent`**


## Commands

### Making your Own Command
**If you're willing to make your Own Command for the Bot, follow this guide.**  
**After the `});` put**  
```js
bot.on("message", netent => {
  if (netent.content.startsWith(config.prefix + "hello")) {
    netent.channel.send("Hi!");
  }
});
```

**You can edit that guide :)**  

## Version
### Current Version
**1.0.1**
### Previous Version
**1.0.0**
### Next Version
**1.0.2**
