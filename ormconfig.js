module.exports =
[
    {
      "name" : "default",  
      "type" : "postgres",
        "url" : process.env.DATABASE_URL,
        "entities": [
            "dist/modules/**/infra/typeorm/entities/*.js"
        ],
        "migrations" : [
            "dist/shared/infra/typeorm/migrations/*.js"
        ],
        "cli": {
          "migrationsDir": "./dist/shared/infra/typeorm/migrations"
        }
    }
    ,
    {
      "name": "mongo",
      "type" : "mongodb",
      "url" : process.env.URL_DATABASE_MONGO,
      "useUnifiedTopology": true,
      "entities": [
          "./dist/modules/**/infra/typeorm/schemas/*.js"
      ]
    }
  ]

