// import { connect } from 'react-redux';
// import VideoPlayer from '../components/VideoPlayer.js';
// import changeVideo from '../actions/currentVideo.js';

// const = mapStateToProps = (store) => ({
//   video: store.video;
// })
// const = mapDispatchToProps = (dispatch)=>({
//   onClick : video
// });

// var VideoPlayerContainer = () => {};

// //TODO: define a VideoPlayerContainer component which will hook up your action
// //dispatchers with your VideoPlayer component props.

// export default VideoPlayerContainer;
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


var mapStateToProps = (state) => ({
  video: state.currentVideo
});

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;