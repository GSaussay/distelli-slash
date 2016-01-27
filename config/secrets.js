module.exports = {
  team: {
    username: process.env.USERNAME,
    slackToken: process.env.SLACKTOKEN,
    slackTeam: process.env.SLACKTEAM
  },
  users: {
    //Replace with your Slack UserName: Set an Env variable with your Distelli API Token
    "al": process.env.APITOKEN,
    "rsingh": process.env.APITOKEN,
    "boris": process.env.APITOKEN
  }
}
