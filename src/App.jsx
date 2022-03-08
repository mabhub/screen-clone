/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const videoStyle = { width: '100%', background: '#ddd' };

const App = () => {
  const videoRef = React.useRef();

  const handleClick = async () => {
    const video = videoRef.current;

    if (video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      video.srcObject = null;
    } else {
      try {
        video.srcObject = await navigator.mediaDevices.getDisplayMedia({
          video: { cursor: 'always' },
          audio: false,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return (
    <video
      autoPlay
      ref={videoRef}
      style={videoStyle}
      onClick={handleClick}
    />
  );
};

export default App;
