import {Dimensions, PixelRatio} from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT_SCREEN = Dimensions.get('screen').height;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const DESIGN_HEIGHT = 812;
export const DESIGN_WIDTH = 375;

// It is based on the screen width of your design layouts e.g Height 600 x Width 375
const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width: number) => {
  let percent = (width / DESIGN_WIDTH) * 100;
  const elemWidth = parseFloat(percent + '%');
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

export const vh = (height: number) => {
  let percent = (height / DESIGN_HEIGHT) * 100;
  const elemHeight = parseFloat(percent + '%');
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};
export const BANNER = {
  height: vw(50),
  width: vw(DESIGN_WIDTH),
};

export default {
  vh,
  vw,
  normalize,
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BANNER,
};
