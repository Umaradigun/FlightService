## WELCOME TO MY FLIGHT SERVICE

# Project
- Clone the project
- Execute `npm i` to install dependencies in the root directory
- Create `.env` file in the root  and add the following environment variable
    - `PORT = 3000`
    - Inside the `src/config` folder create a config.json file with this following piece of json

```
    {
  "development": {
    "username": <your username>,
    "password": <your password>,
    "database": "FlightandSerchService",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mariadb"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once that is done navigate to your src folder and run `npx sequelize db:create`


## Flights Table 
- `id`
- `departure_city_id`
- `destination_city_id`
- `airplane_id`
- `departure`
- `arrival`
- `Flight number`