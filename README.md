# Dockerize Express app

This project is proof of concept how to Dockerize Express app and enable a convenient development environment.

Main goal is to avoid managing different Node.js version on local (host) computer. 

Alternative approach will be usage of [nvm](https://github.com/creationix/nvm).

## Stack

* Express
* Nodemon
* Babel 7
* Typescript

## Prerequisite 

* Docker
* Docker-compose

## How to run

To start a container run
```bash
docker-compose up --build -d
```

To stop a container run
```bash
docker-compose down
```

To add dependency
```bash
docker exec -it <container id> npm i -S express
```

## Nodemon

Nodemon is configured over CLI args.
```bash
nodemon --exec babel-node --extensions '.ts' src/server.ts
``` 

babel-node documentation is [here](https://babeljs.io/docs/en/babel-node).

[Great post](https://iamturns.com/typescript-babel/) about babel and typescript

## Babel configuration (.babelrc)

* presets.@babel/preset-env - enables latest JavaScript syntax

* presets.@babel/preset-typescript - enables transpiling Typescript to Javascript

* plugins.@babel/proposal-class-properties - expected by @babel/preset-typescript

* plugins.@babel/proposal-object-rest-spread - expected by @babel/preset-typescript

## Typescript configuration (tsconfig.json)

* target - use latest because it runs on server

* noEmit - don't creates js files when compiled with tsc, let Babel transpile all TS source

* moduleResolution - search under node_modules for non-relative imports [read more](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

* esModuleInterop - ??? 
 
Complete list of options can be found [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).