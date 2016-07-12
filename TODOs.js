
SYNC MVP

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
  
-- Pauses/resumes on one video broadcast to all other clients
  -- Open socket client to server to recieve 'Play' and 'Pause' events.
  -- Open socket to send 'Play' and 'Pause' events
-- Video queue
  -- Videos are added to the queue in order.
  -- Retrieve queue from server.
  -- Send queue additions to server.
-- Video queue changes broadcast to all other clients
  -- Open socket between client and server for 'videoChange' events


// Stretch:
-- Songs in addition to a youtube
-- separate rooms
-- Application loading
-- Chat
-- Visualizer
