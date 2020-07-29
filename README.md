# InnosPizza
InnosPizza Challenge - Not giving client name to minimize cheating


## Dev Times

- 1st night: 3hs to get up a docker stack with laravel through nginx and mysql
- 2nd night: 2hs to get up laravel API and first model
- 2nd night: 2hs to get up React working along with laravel
- 3rd night: 1hs to improve build process, provide installation steps and configure entrypoint

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







