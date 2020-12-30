# Migrations
See how to do migration on [this page](https://sequelize.org/master/manual/migrations.html)


# Set up development database

You need to be in the folder 'api' to run the following commands.

Build docker image:

    docker build -t relink-dev-db . --target=dev

Run docker container:

    docker run -d -p 5441:5432 relink-dev-db


# Set up test database

You need to be in the folder 'api' to run the following commands.

Build docker image:

    docker build -t relink-test-db . --target=test

Run docker container:

    docker run -d -p 5442:5432 relink-test-db


# Set up database without docker

1) install PostgreSQL
2) create the appropriate user for the environment
3) create the database with `npx sequelize-cli create:db`
