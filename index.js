module.exports = fn => (...args) => new Promise((resolve, reject) => fn(...args, (err, res) => err ? reject(err) : resolve(res)));
