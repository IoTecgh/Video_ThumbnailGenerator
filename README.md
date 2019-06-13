Video Thumbnail Generator microservice created with Node js and Docker.
To test Api

1.Clone repository
2.Run docker build -t preferred name
3.Run Image by docker run -p 49160:4000-d preferred name
4.Visit any Browser with localhost:49160
5.To test api, pass the file directory of the video you want thumbnail through the a post route
eg. localhost:49160/createthumbnail using postman
