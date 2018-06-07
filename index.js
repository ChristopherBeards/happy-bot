// Support for environmental variables
require('dotenv/config');

// Botkit package
const Botkit = require('botkit');

// Controller for the Slackbot
const controller = Botkit.slackbot({
  debug: false
});

// Connect the bot to your Slack app using Token
controller.spawn({
  token: process.env.TOKEN
}).startRTM();

// Determines behaviour
controller.hears(['hello', 'hi'], ['ambient', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "Hello.");
});

controller.hears(['what does your name mean?'], ['direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "My given name is Greek for _without a name_ or _namelessness_");
});