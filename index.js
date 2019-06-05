const express = require('express')
const app = new express()
const thumb=require('./src/thumbnail')
const bodyparser=require('body-parser')
const path=require('path')


app.use(bodyparser.json());

app.get('/createthumbnail/:filepath/:filename',function(req,res){
  var sourcepath=req.params.filepath
  console.log(sourcepath)
  var filename=req.params.filename
  var extension=path.extname(filename)
  var thumbnailName=filename.replace(extension,'.jpg')

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