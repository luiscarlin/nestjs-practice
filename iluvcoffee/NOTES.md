NestJS Course

Intro

- node.js is barebones by default (up to the devs to add functionality to it through libaries)
- Express, Fastify are libraries that add functionality to node.js
- Nest.js adds abstraction on top of Node.js by using Express under the hood (you can swap it with Fastify if you want)
- With Nest.js, you can build
  - rest api
  - MVC apps
  - microservices
  - graphql apps
  - websockets
  - clis
  - cron jobs


Nest CLI

- companion tool to Nest
- you can scaffold projects, generate files, run, compile, bundle app (`nest --help` to list all functionality)
- `nest new` -> scaffold a new project + files

Fresh Project

- nest-cli.json -> nest specify file
- entrypoint of app is 