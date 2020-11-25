

Step 1 : Install nodeJS :
(see https://doc.ubuntu-fr.org/nodejs#depuis_un_personal_package_archives_ppa_depots_officiels_nodesource)

Open a new terminal, and launch the following commands :
 
sudo apt-get update
sudo apt-get install nodejs npm
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
sudo ln -s /usr/bin/npm /usr/local/bin/npm

Step 2 : Install FFmpeg

From the same terminal, launch :

sudo apt-get install ffmpeg


Step 3 : Prepare the server dependencies

From the same terminal, launch (make sure you are in the hls folder) :

npm install

Step 4 : Launch the HLS server

From the same terminal, launch :

node hlsconnect.js


Step 5 : Connect to the server as a client

From a NEW terminal, launch :

firefox http://localhost:3000



Step 6 : Look at the result !

You can also type "CTRL+Shift+C" to display the Inspect Mode : a frame will pop up.
In that frame, click on the "Network" tab. From theron, you can change network caracteristics by changine the "Online" mode to "Slow 3G" for instance.
