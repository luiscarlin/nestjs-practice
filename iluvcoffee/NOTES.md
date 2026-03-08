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

- `nest-cli.json` -> nest specify file
- `main.ts` -> entrypoint of app
- decorator is just a function that adds functionality to Classes, methods, properties, and parameters
- Main goal of separation of concerns is 
  - reusability
  - testability
  - organize code

Project Structure

- App Module
  - root module of the app
  - uses `@Module` decorator to hold everything important to the module context
- Controller 
  - uses `@Controller` decorator
  - this is where requests are handled by the application
  - the should be NO business logic in the Controller - use services/ providers for that
  - pass providers that the controller uses in the constructor
  - Defines `@Get` to handle GET requests
- Providers/ Services 
  - Business logic goes here
  - uses `@Injectable`
 
---

- `nest generate controller` -> generates a controller (also `nest g co`)
- use lowercase name
- the controller gets added to app module dependencies
- `@Controller("coffees")` -> "coffees" is metadata for routing. Network calls to `/coffees` will be handled by this controller
- `@Get("flavors")` -> nested URL (/coffees/flavors)
- `@Get(':id')` -> endpoint is expecting id as a route parameter /coffees/10. id = 10
- you can access a single param by doing `findOne(@Param('id') id: string)` in the method signature
- if you use `findOne(@Param() params)` you can access ALL params in the method
- you can access request body properties in POST, by using `@Body()`
  - `create(@Body() body)` -> validates all properties in the request body
  - `create(@Body('name') name)` -> CAUTION: only validates name from the request body
- By default GET requests return 200 and POST return 201
- if you need static status code (deprecated), you can use `@HttpCode(HttpStatus.GONE)`, but this is a static status code
- with `findAll(@Res() response)` you can access Express' response object, but it's not recommended because
  - Platform dependent (not easy to move to Fastify or another underlying framework)
  - lose Nest features, like interceptors
