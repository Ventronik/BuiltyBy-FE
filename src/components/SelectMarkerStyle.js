
const K_WIDTH = 60;
const K_HEIGHT = 60;

const SelectedMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  // lineHeight: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  flexDirection:'column',

  border: '5px solid #2B3990',
  borderRadius: K_HEIGHT,
  backgroundColor: '#5970AF',
  textAlign: 'center',
  color: '#F2F3F2',
  fontSize: 24,
  fontWeight: 'bold',
  padding: 4
};

export {SelectedMarkerStyle};
