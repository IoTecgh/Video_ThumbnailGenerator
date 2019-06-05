const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath=require('@ffprobe-installer/ffprobe').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);
const path=require('path')



  
  

  const createthumbnail= function createthumbnail(sourcepath,thumbnailName,callback){
    var destinationpath=path.dirname(sourcepath)
    
    ffmpeg(sourcepath)
    .on('end', function() {
      return callback("Saved succesfully")
    })
    .on('error', function(err) {
      return callback(err.message)
    
    })
    .screenshots({ count: 1, timemarks:['50%'],  size: '150x100',filename:thumbnailName },destinationpath);
  
  }
  

  module.exports={
    createthumbnail
  }