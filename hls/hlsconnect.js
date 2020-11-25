var http = require('http');
var fs=require('fs')
var exec = require('child_process').exec;


function convert(req,res) { 
fs.stat('test360/360p.m3u8', function(err) {
  if (!err) {
      console.log('file already exists');
  }
  else if (err.code === 'ENOENT') {
      console.log('file or directory does not exist');
      child = exec('  ffmpeg -hide_banner -y -i data/out.mp4 \
      -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod  -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k -hls_segment_filename test360/360p_%03d.ts test360/360p.m3u8 \
      -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_segment_filename test480/480p_%03d.ts test480/480p.m3u8 \
      -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename test720/720p_%03d.ts test720/720p.m3u8',
    function (error, stdout, stderr) {
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
  }
});


}
//2. Express.js
var express = require('express');
var app = express();
app.use(express.static('./'));


//Create a route for the first http connection
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/HLSPage.html');
    console.log(request.url);
    convert(request,response);

});

//3. Create a server that will serve both http and socket connection using the app function of Express.js
var server = http.createServer(app);



//6. Listen to the "shared" server (not the Express.js app)
server.listen(3000, console.log("Listening to port 3000"));
         