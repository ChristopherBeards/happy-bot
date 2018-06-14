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

//------------------------------------------------------
//                  General Functionality
//------------------------------------------------------

// Determines behaviour
controller.hears(['hello', 'hi', 'what\'s up'], ['direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "Hello");
});


//------------------------------------------------------
//                    JavaScript
//------------------------------------------------------

controller.hears(/(JavaScript)/gi, ['direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.");
});

//------------------------------------------------------
//                    React
//------------------------------------------------------

controller.hears(/(React)/gi, ['direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "A JavaScript library for building user interfaces.");
});