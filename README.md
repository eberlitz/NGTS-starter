# NGTS-starter

> Starter repo for building scalable apps with Angular, TypeScript, and JSPM

## Features

- Best practice in file organization for Angular
- Frictionless package management and module loader with JSPM
- Ready to go build system for working with TypeScript
- Unit Testing system ready to go

TODO:

- Task for generating component boilerplate with angular, including test
- E2E testing system ready to go
- Lazy Loading strategies for Angular

# Getting Started

## Dependencies

What you need to run this app:

* `node` and `npm`

Once you have those, you should install these globals with `npm i -g`:

* `jspm`
* `gulp`
* `tsd`
* `karma-cli`

```bash
npm i -g jspm gulp tsd karma-cli
```

## Installing

1. **clone** or **fork** this project;
2. `npm i` to install all dependencies (with JSPM there's usually a `jspm install` step too, but that is added to npm's `postinstall` for convenience, same thing for `tsd install`)

## Running the app

This project uses Gulp to build and start the dev environment. After you have installed all dependencies you can now run the app.
Run `gulp` to start a dev server and watch all files. The port will displayed to you.

## Testing

To run test, just run `npm test` or `karma start`.

The only difference from a regular `Karma` setup is the use of [`karma-jspm`](https://github.com/Workiva/karma-jspm) plugin to let JSPM handle spec files as modules. `Karma` will run all files that match `.spec.ts` inside the `app` folder. This is awesome because we can write tests for our components in the same folder with the rest of the component. Be sure to include your `spec` files in the appropriate component directory. You must name the spec file like so, `[name].spec.ts`. If you don't want to use the `.spec.ts` extension, you must change the `jspm.loadFiles` glob in `karma.conf.js` to look for whatever file(s) you want.

`Mocha` is the testing suite being used and `chai` is the assertion library. If you would like to change this, do so in `karma.conf.js`.

## Checking for TypeScript coding 

Run `gulp check` to have a report of the `gulp-tslint`. It uses the config file `tsconfig.json`.
