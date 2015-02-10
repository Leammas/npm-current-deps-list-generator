NPM installed dependencies list generator
=========================

After usual `npm update` you may experience your app doesn't work at all due to several packages have no backward compability.
`npm shrinkwrap` [https://docs.npmjs.com/cli/shrinkwrap] or `lockdown` [https://www.npmjs.com/package/lockdown] could help.
But sometimes they throw error too. 
Though you have working version on production server and that's the case you may use this little tool.

Usage
-----

Make currently installed modules list via
```
npm list --json --depth 1 > list.json
```

Download generator.js to your project directory and run

```
node generator.js
```

`deps.json` now contains fixed versions of installed deps. You may copy it to your package.json and run `npm update`.

Notice: it will mix up dev and common dependencies if dev are installed.
