const profileModel = require('../../models/profileSchema');


module.exports = async(message,args, cmd, client, Discord,profileData, member)=>{
    let profile = await profileModel.create({
        UserID: member.id,
        serverid: member.guild.id,
        coins: 1000,
        bank: 0 
    });
    profile.save();
}