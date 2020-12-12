const generateMessage = (message) => ({
  text: message,
  date: new Date().getTime(),
});

module.exports = {
  generateMessage,
};
