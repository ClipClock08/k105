# K105 Rails site

## Getting started
1. Install [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/).
2. Create `.env` file `cp .env.example .env`.
3. Modify values in `.env` file if required. (usually not required)
4. Build Docker images `docker-compose build`
5. Install gems `docker-compose run --rm web bundle install`
6. Setup the database `docker-compose run --rm web rails db:setup`

## Running the project
- `docker-compose up -d`
- Go to [http://localhost:3000](http://localhost:3000) to view the app
- Go to [http://localhost:1080](http://localhost:1080) to view the mailcatcher

## Running commands in container
- `docker-compose run --rm web rails c`
- `docker-compose run --rm web rails db:migrate`
- `docker attach k105_web_1` - attach to container for debug
- `docker-compose logs --tail="200" web` - view logs for container

## Restart the project
`docker-compose restart`

## List all running services
`docker-compose ps`

## Stop the project
`docker-compose stop`

## Uninstall the project
`docker-compose down --volumes`