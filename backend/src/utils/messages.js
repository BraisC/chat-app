const generateMessage = (username, message) => ({
  username,
  text: message,
  date: new Date().getTime(),
});

module.exports = {
  generateMessage,
};
