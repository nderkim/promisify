# promisify

Convert error-first callback style function to promise.

```js
const promisify = require('@nderkim/promisify');
```

```js
const res = await promisify(fn)(...args);
```

```
promisify :: fn -> (...args) -> Promise
fn :: (...args, cb) -> void
cb :: (err, res) -> void
```
