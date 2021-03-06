# 1) Clear and fill database for all microservices

```
sh install/restore.sh // if your microservices are't located in microservices directory call script with folder name like: `sh install/restore.sh path_to_microservices`
```

# 2) Run docker container with RabbitMq

```
docker run -d -p 5672:5672 rabbitmq
```

# 3) Install packages

```
npm i
```

# 4) Launch development mode

```
npm run dev // for actual domain
npm run dev_expired // for outdated domain
```

# 5) Open in browser and make request to microservice

* For actual domain use
    ```
    http://localhost:3000/comments/main.752hfh77fhgy23f99fhsuyh
    http://localhost:3000/comments/about.752hfh77fhgy23f99fhsuyh

    ```
* For outdated domain use
    ```
    http://localhost:3001/comments/main.752hfh77fhgy23f99fhsuyh
    http://localhost:3001/comments/about.752hfh77fhgy23f99fhsuyh

    ```
