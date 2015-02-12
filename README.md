NPM & Bower installed dependencies list generator
=========================
Makes json list of currently installed dependencies versions which later may be used to fix versions.

After usual `npm update` you may experience your app doesn't work at all due to several packages have no backward compability.
`npm shrinkwrap` [https://docs.npmjs.com/cli/shrinkwrap] or `lockdown` [https://www.npmjs.com/package/lockdown] could help.
But sometimes they throw error too. 
Though you have working version on production server and that's the case you may use this little tool.

Usage
-----

**NPM**: Make currently installed modules list via
```
npm list --json --depth 1 > list.json
```

**Bower**:
If you have bower installed as local package
```
./node_modules/.bin/bower list --json > list.json
```
And the next one for global installation
```
bower list --json > list.json
```

Download generator.js to your project directory and run

```
node generator.js
```

`deps.json` now contains fixed versions of installed deps. You may copy it to your package.json and run `npm update`.

Notice: it will mix up dev and common dependencies if dev are installed.
