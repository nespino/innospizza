# InnosPizza
InnosPizza Challenge - Not giving client name to minimize cheating

## Demo
https://innospizza.herokuapp.com/

## Dev Times

- 1st night: 3hs to get up a docker stack with laravel through nginx and mysql
- 2nd night: 2hs to get up laravel API and first model
- 2nd night: 2hs to get up React working along with laravel
- 3rd night: 2hs documentation reading
- 3rd night: 1hr to improve build process, provide installation steps and configure entrypoint
- 3rd night: 4hs React frontend design, visual fx and implementation
- Last day: 1hr Image search and edition
- Last day: 2hs for responsiveness details
- Last day: 4hs working with Heroku
- Last night: 1hr applying unit tests for API
- Last night: 2hs code improvement
- Last night: 3hs working with Heroku
- Last night: 1hr working with the conversion and code cleaning
- Last night/day: 1hr playing with buttons and visual effects

## Prerequisites

- Docker and docker-compose

## Installation

Clone this repo
```bash
git clone https://github.com/nespino/innospizza.git
```

Build the image
```bash
cd innospizza
docker-compose build
```

Get up the full stack
```bash
docker-compose up -d
```

Create a mysql user for the laravel app and give permissions
```bash
docker-compose exec -T db mysql -u root -psecret_pass <<< "GRANT ALL ON laravel.* TO 'laraveluser'@'%' IDENTIFIED BY 'user_password'; FLUSH PRIVILEGES;"
```

Restart app to run migrations
```bash
docker-compose restart app
```







