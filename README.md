# Dungeon Crawler API

This is a simple API to power the dungeon crawler game engine I'm building (https://github.com/gannondigital/dungeon-crawler-prototype). Prior to this, the game data was simply compiled into the frontend assets at build time. 

### Why?
This API is for demonstration only, as a portfolio piece, and as a functional platform to power other portfolio pieces (e.g. my browser-based game engine).

## API Design
The API will be RESTful, including support for editing game content through appropriate PUT/PUSH requests. This would support future development of a level editor client.

### Current Status
Brand new. For now it replicates the existing data contract in the client application, which is "load all objects of type X into one big collection." Once the API is fully integrated with the front end, I'll begin shifting both codebases to a model where individual data objects are fetched only as needed, and this will begin to look like a more typical REST/CRUD api.

### Deployment
This API is planned to deploy via Heroku's free services. Assuming they have some free level of storage, game level data (currently JSON in this codebase) will be moved to a heroku storage API. This deployment is only intended to power the demo game, hosted and playable at https://gannondigital.github.io/dungeon-crawler-prototype/. 