const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
var cmdCooldown = new Set();

client.on("ready", () => {
	client.user.setActivity("vcsetups.online/dev", {type: "PLAYING"});
	client.user.setStatus("dnd")
	console.log("aaa");
});

client.on("message", async message => {

    if(message.content.startsWith(prefix + "hub")) {
	    if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• HUB CORE Features: •••**\n*- Hub Core like VeltPvp, Faithful, Minehq*\n*- Special Features: Custom Tab, Queue system in Scoreboard/Tab.*\n**TAB Placeholders:**\n*-  10+ Placeholders for customize your custom tab like Players Count, Servers Status(Online/Offline), Deathban Status(Hcf mode), Player-Status(Muted/Banned/Warned), Online-Staff(Count: 2/3), Servers-Name(HCF,Kitmap), 60-lines, Custom Messages.*\n**SCOREBOARD Placeholders:**\n*- Same Placeholders like Tab Placeholders.*\n**SELECTOR Placeholders:**\n*- Same placeholders like Tab/Scoreboard but have one more placeholder like Map Kit your server(example: %gtmapkit@HCF).*\n**HOTBAR Placeholders:**\n*- Only you can use one placeholder like*\n      *(Server Selector)*\n        *total online: 87*\n**Player-Visibler Placeholders:**\n*- You can use only 3 placeholders like Players-Visible/Hidden, Only-Staff visible, Only-Owners visible.*\n**Custom-Join MSG Placeholders:**\n*- You can use 3 placeholders like Staff-Online Count, Network-Online Count, Deathban (example: HCF: Deathbanned/Non-deathbanned) and you can add 10+ lines.*\n**Staff-Chat Placeholders:**\n*- Only have 3 placeholders like Custom Colors/Tags/Group prefix (example: [Staff]VINCARE: Hello)*\n**Request/HelpOp:**\n*- You can enable/disable BungeeHelpOp from config (Bungee: false/true) but need to have minimum 2GB of your Bungeecord server for best perfomance and no problems.*\n*- Only have 2 Placeholders like Sender, Only-Admins-Alert*\n**Permissions/Commands:**\n*- All permissions added to a custom notepad when you Start your server with this Hub core and automatically created a Notepad with permissions*\n\n*- All commands you can check when you type (/hub: and press tab)*\n*- 30+ commands and permissions!*\n\n**••• Core Purchase Information: •••**\n*You can purchase this HUB Core*\n*only for 6.00$ with best quality and performance.*\n\n*Full Hub Core server with this core is 15.00$ (Lobby/NPC-Connected/Configurated)*\n\n**• Purchase from: vincare#1476**");
		cmdCooldown.add(message.author.id);
    } else if(message.content.startsWith(prefix + "cbungee")) {
	    if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• cBungeeCord: •••**\n*- Good configurated Bungeecord jar file to get a smooth and better connection on your server (like 30/45ms max 110) with bad internet connection you can get high ping (like 90ms max 175)*\n\n*- You can run your other servers with best performance like 19/19.50 TPS without problems but minimum TPS you can get is 17/18 (problems with low tps you need to reset your Bungeecord server to fix your TPS problem)*\n\n**Custom Mesaage:**\n*- When start your server you receive in your console a message like*\n(Network is now Online)\n  HCF: online (10 players)\n  Kitmap: online (17 players)\n  Practice: offline (10 mins ago)\n This message will be sent every 5 minutes in your Console (you can stop this feature from bungee-cfg.yml file)\n*- You can change /alert (Alert Message) like &6[Alert] &e<message>*\n\n**••• cBungee Purchase Information •••**\n*You can purchase this BungeeCord*\n*only for 3.50$ with great performance & quality.*\n\n*You can purchase full Bungeecord server only for 8.50$ with configuration and smooth proxy settings*\n\n**• Purchase from: vincare#1476**");
		cmdCooldown.add(message.author.id);
	} else if(message.content.startsWith(prefix + "system")) {
		if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• SYSTEM INFORMATION •••**\n*- This discord server has been created on 4/1/2018 8:45pm*\n\n1**• Seller Info:**\n*- Here Vincare selling servers, setups, configurations, plugins-code*\n\n*-  He selling his products very Cheap with great quality to people who do not have a big budget.*\n\n**• Purchase Info:**\n*-  When you purchase one product like HCF Server you receive Role with your purchase*\n\n*-  You have problems with your purchase? You need to contact with me ”Vincare” but need a one Proof of your purchase!*\n\n**• Other Info:***- Website Store is now in maintenance and soon will be Online to check all information about my things & more*\n\n*- Support Email, Store link, Official Discord link & more you can find in #general channel.*\n\n**• Full Network Information:**\n*- Selling full network “CrownPvP - my biggest closed network” with servers like Hcf, Kitmap, Hub, Practice, UHC-Meetup, Builder-Lounge, cBungee*\n\n*- Support from owner: 12/7*\n*- Domain: YES “crownfactions.eu”*\n*- Sub-Domain: YES “store.<name>.eu”*\n                                     *”discord.<name>.eu”*\n\n**• Price Information •**\n*Exclusive Price: 40$*\n      *First Buy-er!*\n*- Normal Price: 50$*");
		cmdCooldown.add(message.author.id);
	} else if(message.content.startsWith(prefix + "pspigot")) {
		if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• pSpigot: •••**\n*- Good configurated Practice spigot to get a smooth and better connection on your server without any problems with your Internet connection.*\n\n*- You can run your server smooth with 19.75/19.90 TPS without problems but minimum TPS you can get is 18.50/19.20 (problems with low tps you need to restart your server and check your Plugins errors to fix your TPS problem)*\n\n**• Custom Message:**\n*- When start your server you receive in your console a message like*\n*- (pSpigot is enabled at 19.95 TPS)*\n     *Players Online: 37*\n     *Plugins Errors: PracticeCore*\n*- Hold your cursor to plugin name to see errors *\n *(Errors: 2 | Lagging: YES/NO/Need to fix | PL-Packets: 11ms)*\n*- TPS from last 1m | 5m | 10m is 19.77 | 19.83 | 20.00*\n\n*- This message will be sent every 5 minutes in your Console (you can stop this feature from spigot.yml file) “info-msg: true/false”*\n\n**• Knockback Settings:**\n*- You can change inhert-velocity, sprint-slowdown, horizontal-kb, vertical-kb, floaty-vertical, vertical-limit, wtap-ticks, vertical-wtap, pots-d, no-damage-ticks, pearl-horizontal-offset*\n\n*- You can use 2/3 Profiles and you can to change your KB Profiles from your server*\n *“example: /profile smoothKB”*\n\n**••• pSpigot Purchase Information •••**\n *You can purchase this Spigot*\n *only for 6.25$ with super great performance & quality and practice features.*\n\n*You can purchase full Practice server only for 10.00$ with this Spigot and configuration with smooth KB settings and potion register!*\n\n**• Purchase from: vincare#1476**");
		cmdCooldown.add(message.author.id);
	} else if(message.content.startsWith(prefix + "ipwhitelist")) {
		if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• IP WHITELIST FIX •••**\n              *only 3 steps*\n[1]\n *Go to plugins>ipwhitelist>config.yml*\n\n[2]\n*Open this config.yml file and remove the ip in file or delete config.yml file*\n\n[Final]\n* Restart your Spigot server and you are ready*\n**• Did not work? contact me again! •**\n\nDiscord: vincare#1476");
		cmdCooldown.add(message.author.id);
	} else if(message.content.startsWith(prefix + "forwading")) {
		if(cmdCooldown.has(message.author.id)) {
		return message.channel.send("Hey " + message.author + " you are currently on cooldown try again in 1 minute");
	    }
		message.channel.send("Hey " + message.author + " look at your dm's there is more information about it!");
		message.author.send("**••• IP FORWADING BUNGEE •••**\n               *Two ways to fix this*\n[1]\n*In your BungeeCord server, locate the config.yml file on the root directory and ensure that “ipforward: true”*\n*- You need to change to “false”*\n\n[2]\n*In your Spigot servers, locate the spigot.yml file on the root directory and ensure that “bungeecord: true”*\n*- You need to change to “false”*\n\n[Final]*Restart the Spigot servers and BungeeCord*\n**•  Did not work? contact me again! •**\n\nDiscord: vincare#1476");
		cmdCooldown.add(message.author.id);
	} 
	
	setTimeout(function() {
        cmdCooldown.delete(message.author.id);
    }, 60000)
});

client.login(process.env.TOKEN);
