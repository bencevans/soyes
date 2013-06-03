# Soyes

(WIP) A web-based controller for Sonos devices.


## Aims:

* Edit Groups
* Play/Pause/Stop Music
* View Queue
* JSON & WebSocket API
* Real-Time (WebBrowser-Server=WebSockets, Server-SonosNetwork=UPNP Subsciptions)
* Mobile Friendly
* All actions proxied by server (no direct connection to Sonos requied)

## Rough Design:

![](https://pbs.twimg.com/media/BJSxtSlCEAAEczq.png:large)

## Clone and Help

If anyone's interested in helping, I'd be more than happy to merge pull-requests. Please see aims and hack away! Any functionality that directly communicates with the sonos device please submit pull-requests to the [node-sonos](https://github.com/bencevans/node-sonos) project.

Current Tech:

* Server-Side: [node.js](http://nodejs.org/), [express](http://expressjs.com), [node-sonos](https://github.com/bencevans/node-sonos)
* Client-Side: [Angular.js](http://www.angularjs.org/), [jQuery](http://jquery.com/), [Underscore](http://underscorejs.org/), [Flatstrap](http://littlesparkvt.com/flatstrap/index.html)

## Setting up

1. Clone Project: `git clone https://github.com/bencevans/soyes.git && cd soyes`
2. Install dependencies `npm install` (requires node.js and npm)
3. Set a Sonos Zone Player IP Address in server.js
4. Start The Server `node server.js`

## Licence

MIT

## Contact

@bencevans on [Twitter](https://twitter.com/bencevans) & [GitHub](https://github.com/bencevans)

http://bensbit.co.uk on the Internet

ben@bensbit.co.uk by Email