# Express Pokedex App

This is a simple REST API written with Node and Express. 



## Routes
| ACTION | PATH | PURPOSE | 
| ------ | ---- | ------- |
|  GET   |  /  | Get all Pokemon Types |
|  GET   | /api/:type? | Get Pokemon details by type | 



## Docker
I finally have a laptop capable of running Docker (🎉!) so have been experimenting with containers. So if you have Docker Desktop installed, you can join the container party with these steps:



### 1. clone this repo
        git clone git@github.com:teknoboten/catch-em-all.git catch-em-all

### 2. change to the /express directory (where the Dockerfile lives)

        cd catch-em-all/express


### 3. build your docker image

        docker build . -t express-pokedex

### 4. run it!

        docker run -p 127.0.0.1:9000:9000 -d express-pokedex

### 5. test it:

         curl -i localhost:9000

if everything worked, you should get the following response:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 151
ETag: W/"97-9h5Hv8B4p9sJaaPLSJ5gZxPOCqg"
Date: Thu, 16 Feb 2023 18:34:54 GMT
Connection: keep-alive
Keep-Alive: timeout=5

["Grass","Fire","Water","Bug","Normal","Poison","Electric","Ground","Fairy","Fighting","Psychic","Rock","Ghost","Ice","Dragon","Dark","Steel","Flying"]%  
```


### 6. celebrate! 🍰