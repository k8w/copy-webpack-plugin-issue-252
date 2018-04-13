# copy-webpack-plugin-new-file-issue

Relative to issue https://github.com/webpack-contrib/copy-webpack-plugin/issues/252

### Step to reproduce

```
npm i
npm run dev
```

If I add a `3.txt` into `res`, it would not trigger webpack recompile.(watch mode)