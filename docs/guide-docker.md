# Super8 in a docker image

> **super8** is also a **self-hosted** option.

You can run **super8** on your own server.

[Docker hub](https://hub.docker.com/r/pigeonposse/super8)

## Prerequisites

- [Docker installation](https://docs.docker.com/engine/install/)

## Installation

### Docker cli

```bash
docker run -d --name super8 -p 1312:80 --restart always pigeonposse/super8:latest
```

### Docker compose

```yaml
##################### SUPER8 DOCKER-COMPOSE ############################
#
# BUILD SUPER8 IN DOCKER WITH DOCKER COMPOSE
#
# @see https://docs.super8.pigeonposse.com/guide-docker
# @description File for build and run project with Docker.
#              use cli 'docker compose -f {this/file.yml} up --build -d'
#
########################################################################

version: "3.8"
services:
  super8:
    container_name: super8
    image: pigeonposse/super8:latest
    ports:
      - '1312:80'
    restart: always


```

## Usage

**Super8** container is the same official web of super8. For know how to use see [documentation](/guide-filters).
