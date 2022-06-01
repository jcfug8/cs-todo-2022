## Set up docker db

```
docker run -d --name cs-todo-2021-mongo -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password -e MONGO_INITDB_DATABASE=cs-todo-2022 -p 27017:27017 -v $PWD/mongo-entrypoint/:/docker-entrypoint-initdb.d/ mongo
```
