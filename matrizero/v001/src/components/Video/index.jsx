import YouTube from 'react-youtube';
import Vid from '../../assets/images/canvas.mp4';



export const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: '590', // Adjust the height as needed
    width: '100%', // Make the width 100% to fit its container
    playerVars: {
      autoplay: 0
    }
  };

  return <YouTube videoId={videoId} opts={opts} />;
};



export const Canvas = () => {
  

  return(
    <div>

    <video controls width="640" height="360">
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
    );
};