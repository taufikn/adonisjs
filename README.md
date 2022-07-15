# Adonis fullstack application

AdonisJS V4.

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## System Requirements

The only dependencies of the framework are Node.js and npm.
Ensure your versions of those tools match the following criteria:

* Node.js >= 8.0.0
* npm >= 3.0.0
* git
* Mysql >=5

## Installing AdonisJs

### Via AdonisJs CLI

AdonisJs CLI is a command line tool to help you install AdonisJs.

Install it globally via npm like so:

```bash
 npm i -g @adonisjs/cli
 ```

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
