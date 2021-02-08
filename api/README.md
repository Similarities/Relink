# Relink API

This is an API to create new, update old or fetch all users that are inside
the relink database.


# Prerequisites

* **docker**
    * on [Windows][DOCKER_WINDOWS]
    * on [Mac][DOCKER_MAC] 
    * on [Ubuntu][DOCKER_UBUNTU]
* **node.js** (including npm)
    * on [Windows][NODE_WINDOWS] 
    * on Mac with homebrew: `brew install node`
    * on Ubuntu: `sudo apt install nodejs`


# Quick Setup

Inside a terminal/PS navigate into the `api` folder and ... 

1) Install all dependencies that are inside `packages.json`. This installs 
   packages that are necessary to run the `api` as well as packages that 
   are only used for development (e.g. `babel` compiler and `nodemon` for hot
   refresh).
    ```
    npm install
    ```
2) Set up development database, this will build and run a docker
   conatiner containing the development database. Additionally it
   runs all migration, so the database schema is up to date and 
   fills the database tables with seeds (e.g. users).
    ```
    npm run dev:db:create 
    ```

3) To start the development `api` you only need to type...
    ```
    npm run dev
    ```

4) [**optional**] After everything was successful you can try to 
   request all users using the `humao.rest-client` plugin and
   executing a request from inside `api/requests.rest` file.

> **HINT**: You can stop the server by pressing `Ctrl+C`

> **HINT**: From time to time you need to refresh the database, 
  e.g. if you add a newe table to it. You can do that by typing: 
  `npm run dev:db:reset`


# Migrations & Seeds
We use migrations, because we want to do changes onto the database 
without recreating the whole database over and over again in production
and apply little changes, e.g. adding a new column to the `users` table.

We use seeds to fill up the database with some demo data that is helpful 
in development. E.g. we create random user data to test the `api`.

See how to work with migrations and seeds on [this page][SEQUELIZE_CLI]


[DOCKER_WINDOWS]: https://docs.docker.com/docker-for-windows/install/
[DOCKER_MAC]: https://docs.docker.com/docker-for-mac/install/
[DOCKER_UBUNTU]: https://docs.docker.com/engine/install/ubuntu/
[NODE_WINDOWS]: https://nodejs.org/de/download/
[SEQUELIZE_CLI]: https://sequelize.org/master/manual/migrations.html
