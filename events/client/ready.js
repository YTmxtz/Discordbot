

module.exports = (Discord, client) =>{
    function presence() {
        let status = [`,help | Helping in ${client.guilds.cache.size} servers`, ',help | discord.gg/fnvWa53e63'] //you can add how many you like
        let rstatus = Math.floor(Math.random() * status.length); //this chooses a status from the ones you typed up
        client.user.setPresence({
            status: "dnd", //you can change to offline, dnd
            activity: {
                name: `${status[rstatus]}`, //rhese sets the status                type: "WATCHING" //you can change to listening, streaming, playing (just a quick google search :) )
            }
        });
    }
    console.log(`Uber is online!`); // the presence needs to be like this, near the ready event
    setInterval(presence, 30000) //you can reduce/add the time (milliseconds) if you reduce it l3ss then 15 seconds your bot will get ratelimited
}
