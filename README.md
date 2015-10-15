# NGTS-starter

> Starter repo for building scalable apps with Angular, TypeScript, and JSPM

## Features

- Best practice in file organization for Angular
- Frictionless package management and module loader with JSPM
- Ready to go build system for working with TypeScript

TODO:

- Task for generating component boilerplate with angular, including test
- Testing system ready to go
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
