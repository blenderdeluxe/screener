const telegramNotification = require("./telegram");
const obsNotification = require("./obs");
const discordNotification = require("./discord");

const notifyAll = (signal) => {
  telegramNotification(signal);
  obsNotification(signal);
  discordNotification(signal);
};

module.exports = notifyAll;
