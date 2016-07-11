
SYNC MVP

Necessary features:
-- Viewing a youtube video
  -- Write a component that displays a youtube video
-- Viewing the same youtube video on multiple clients
  -- Retrieve the 'nowPlaying' video from the server
  -- Display the 'nowPlaying' video on the user side
-- Pauses/resumes on one video broadcast to all other clients
  -- Open socket client to server to recieve 'Play' and 'Pause' events.
  -- Open socket to send 'Play' and 'Pause' events
-- Video queue
  -- Videos are added to the queue in order.
  -- Retrieve queue from server.
  -- Send queue additions to server.
-- Video queue changes broadcast to all other clients
  -- Open socket between client and server for 'videoChange' events
-- Visualizer?
