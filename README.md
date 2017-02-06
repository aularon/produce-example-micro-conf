# produce-example-micro-conf
A micro-configuration example for [`produce`](https://github.com/etabits/node-produce) engine.

Very similar to the [no-conf](https://github.com/aularon/produce-example-no-conf) example: `produce` looks at your [`package.json`](https://github.com/aularon/produce-example-micro-conf/blob/master/package.json) and finds plugins, automatically sets `rules` with proper options from your package file:
## package.json
```json
{
  "dependencies": {
    "babel-preset-es2015": "^6.22.0",
    "produce-babel": "^0.1.1",
    "produce-less": "^0.1.1",
    "produce-pug": "^0.1.0"
  },
  "produce": {
    "plugins": {
      "babel": {
        "presets": [
          "es2015"
        ]
      }
    }
  }
}
```

Then, based command line arguments it sets `source` and `target` (more info on this in the [Run](#run) section below)

## Setup
### 1. Clone repository
```sh
git clone https://github.com/aularon/produce-example-micro-conf.git
cd produce-example-micro-conf/
npm install
```
### 2. Install `produce` globally
```sh
npm install -g produce
```

## Run
### 1. Development mode (serve/preview/etc.)
This mode takes one argument, that is the source directory, and creates a `FileSystemSource` out of it, then delivers it over HTTP (using `HTTPTarget`) on port 9000 (or `PORT` environment variable)
```sh
PORT=9001 produce source/
```
After that point your browser at [http://localhost:9001/index.html](http://localhost:9001/index.html) and it will serve automatically-transformed files

![Example TTY GIF for dev mode run](https://aularon.github.io/produce-example-micro-conf/dev.gif)

### 2. Production mode (dist/build/etc.)
This mode takes two arguments, first is the source directory and the second is the target directory, and creates a `FileSystemSource` and `FileSystemTarget` out of them, then runs transforming every file in source dir to target dir, using the transformation rules provided by the automatically loaded plugins
```sh
produce source/ target/
```

![Example TTY GIF for production mode run](https://aularon.github.io/produce-example-micro-conf/prod.gif)

`target/` is an arbitrarily named folder, it can be anything.
