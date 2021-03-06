import { FETCH_CURRENT_SET } from "../actions/types";

const initState = {
  welcome: {
    song: {
      title: "Blessed Be Your Name",
      artist: "Matt Redman",
      key: "A",
      plays: "0",
      rating: "8"
    },
    ambient_pad: true,
    lighting_color: "blue"
  }
};

const CurrentSetReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_SET:
      return action.payload;
    default:
      return state;
  }
};
export default CurrentSetReducer;
