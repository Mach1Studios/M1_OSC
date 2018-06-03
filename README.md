# M1 OSC Test

<img width="902" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://user-images.githubusercontent.com/1003196/40891770-79055d92-6759-11e8-8e70-14d8b65c4636.png">


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
