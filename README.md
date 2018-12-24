# promisify

Convert error-first callback style function to promise.

```js
const promisify = require('@nderkim/promisify');
```

```js
promisify(fn)(...args);
```

```
promisify :: fn -> Promise
fn :: (...args, cb) -> void
cb :: (err, ...res) -> void
```
