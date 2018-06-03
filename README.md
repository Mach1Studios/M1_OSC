# M1 OSC Test

## Installation

Follow the instructions below in **order**

    git clone https://github.com/ianpetrarca/M1_OSC.git
    cd M1_OSC
    npm install
    
    node server.js //Starts OSC Websocket->UDP Bridge
 
Open new terminal window at M1_OSC directory and enter:
    
    npm run start //Creates HTTP server for WebVR content hosted at localhost:7000


### Notes

- The Node.js Server must be running before the HTTP server is started
- The Node.js Server ends when you reload the page. If that happens restart the Node.js server then reload the localhost:7000 page. 

Mac Notes:
- Change the name of "debug-log" node_module to "debug" for this to work 
