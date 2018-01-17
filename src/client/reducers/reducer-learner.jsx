import { FETCH_LEARNERS, DONE_LOADING, START_LOADING, NO_NAVBAR, YES_NAVBAR } from '../actions/';

export default function(state = [], action) {
  switch (action.type) {
    case START_LOADING:
      return {
        loading: action.loading,
      };
    case FETCH_LEARNERS:
      return {
        learners: action.payload,
        loading: action.loading,
      };
    case DONE_LOADING:
      return {
        learners: state.learners,
        loading: action.loading,
        exists: true,
      };
    case NO_NAVBAR:
      return {
        learners: state.learners,
        loading: state.loading,
        exists: action.exists,
      };
    case YES_NAVBAR:
      return {
        learners: state.learners,
        loading: state.loading,
        exists: action.exists,
      };
  }
  return state;
}
