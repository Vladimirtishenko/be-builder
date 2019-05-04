# 1) Clear and fill database for ll microservices

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
npm run dev
```