# Drew Roberts React App
Some jazz to learn react

## Building container
To build the docker container run:
```bash
docker build -t DOCKERHUBNAME/REPONAME:latest .
```

To push to docker hub run:
```bash
docker push DOCKERHUBNAME/REPONAME:latest
```

To run the container run:
```bash
docker run -d \
    -p 80:80 \
    --name reactApp \
    --restart unless-stopped \
    DOCKERHUBNAME/REPONAME
```