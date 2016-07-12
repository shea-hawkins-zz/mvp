
SYNC MVP

// Socket design:
// independent socket file that lives as if it were a components
// subscribeSocketToStore
// mapDispatchToSocket


Necessary features:
-- Viewing a youtube video
  x-- Write a component that displays a youtube video

// All 'major' requests will be done through REST api calls.
  // Major requests: getting the room state, visitor list, message history
// All major requests should next be performed through graphQL (iteration)
// All 'live' requests will be done through sockets.
-- Viewing the same youtube video on multiple clients
  x-- Retrieve the 'nowPlaying' video from the server
  x-- Display the 'nowPlaying' video on the user side

// When a socket is opened, the clients need to receive a
-- Pauses/resumes on one video broadcast to all other clients
  x- Open socket client to server to recieve 'Play' and 'Pause' events.
  x- Open socket to send 'Play' and 'Pause' events
-- Video queue
  x- Videos are added to the queue in order.
  x- Retrieve queue from server.
  x- Send queue additions to server.
-- Video queue changes broadcast to all other clients
  x- Open socket between client and server for 'videoChange' events


// Stretch:
-- Refactor to mapDispatchToSocket and subscribeSocketToStore
-- Songs in addition to a youtube
-- separate rooms
-- Application loading
-- Chat
-- Visualizer
