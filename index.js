const express = require('express')
const app = new express()
const thumb=require('./src/thumbnail')
const bodyparser=require('body-parser')
const path=require('path')
const url=require('url')


app.use(bodyparser.json());

app.get('/',function(req,res){
  res.send("Hello to all you out there. Is hot inside")

})

app.post('/createthumbnail',function(req,res){
  var sourcepath=req.body.filepath
  
  var filename=path.basename(sourcepath)
 
  var extension=path.extname(filename)
  console.log(extension)
  var thumbnailName=filename.replace(extension,'.png')
  console.log(thumbnailName)

  thumb.createthumbnail(sourcepath,thumbnailName,function(response){
    res.send(response)
 })
})

app.get('/test',function(req,res){
  res.send("hello world")
})

 
 
const port = process.env.PORT || 4000
app.listen(port, err => {
  if (err) console.error(err)
  console.log('App Listening on Port 4000')
})