 // Require Modules+Define Variables
const OSC = require('osc-js')
const EXTERNAL_SERVER_ADDRESS = '192.168.1.215';
const EXTERNAL_SERVER_ADDRESS_PORT = '9900';
var osc_relay = require('node-osc');
var orientation,yaw,pitch,roll;

//Configure Local UDP->Websockets Bridge
const config = { udpClient: { port: 3000 } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })
osc.open(); // start a WebSocket server on port 8080
var osc_relay_server = new osc_relay.Server(3000, '0.0.0.0');//Configure Relay Server


//Configure Client for Sending External Messages
osc_relay_server.on("message", function (msg, rinfo) {
      orientation = msg[0]; //Map Message Arguments to new OSC Message
      yaw = msg[1];
      pitch = msg[1];
      roll = msg[2];

      //Configure Client
      client = new osc_relay.Client(EXTERNAL_SERVER_ADDRESS, EXTERNAL_SERVER_ADDRESS_PORT);

       //Send Message
      client.send(orientation, yaw,pitch,roll, function () {
            client.kill();
      });
});