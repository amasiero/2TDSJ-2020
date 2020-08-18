const Message = require('./domain');

Message.methods(['get', 'post', 'put', 'delete']);
Message.updateOptions({ new: true, runValidators: true });

module.exports = Message;