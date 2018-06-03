# WebVR OSC Bridge

<img width="400" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://user-images.githubusercontent.com/1003196/40891737-20ce0106-6759-11e8-901d-82da4f565268.png">


## Installation

This project is derived from:
- [aframe-oscsend-Component](https://github.com/rm8x/aframe-oscsend-component) by [rm8x](https://github.com/rm8x/)
- [node-osc](https://github.com/MylesBorins/node-osc) by [rm8x](https://github.com/MylesBorins/)
- [osc-jst](https://github.com/adzialocha/osc-js) by [adzialocha](https://github.com/adzialocha/)

Follow the instructions below to install webvr_osc:

    git clone https://github.com/ianpetrarca/webvr_osc.git
    cd webvr_osc
    npm install
 
### Local Server
To start locally sending OSC data use the following command:

    npm run local-osc

This command starts a Node.js server that listens to HMD rotation data on localhost:9900

### External Server
To start sending HMD data to an external server using OSC, use the following command:

    npm run external-osc

This command will now send HMD data over OSC to the server specified in external_server.js. To change the server you send data to change lines 3 and 4 in **external_server.js**

    const EXTERNAL_SERVER_ADDRESS = '192.168.1.215';
    const EXTERNAL_SERVER_ADDRESS_PORT = '9900';


###  Notes

The WebVR link should be opened in **Firefox**. The OSC server must be running before the web-server is started. If you reload the page you will need to restart the OSC node.js server.

Testing:
6.3.18 - Demo compatible with MacOS and Windows

