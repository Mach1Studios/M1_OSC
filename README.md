# WebVR OSC Bridge

<img width="400" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://user-images.githubusercontent.com/1003196/40891737-20ce0106-6759-11e8-901d-82da4f565268.png">


## Installation

This project is derived from:
- [aframe-oscsend-Component](https://github.com/rm8x/aframe-oscsend-component) by [rm8x](https://github.com/rm8x/)
- [node-osc](https://github.com/MylesBorins/node-osc) by [rm8x](https://github.com/MylesBorins/)
- [osc-jst](https://github.com/adzialocha/osc-js) by [adzialocha](https://github.com/adzialocha/)

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
