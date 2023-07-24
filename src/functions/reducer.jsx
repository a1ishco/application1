export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
        return{...state, errorMessage: false, isLoading: true }
    case "FETCH_SUCCESS":
        return{...state , isLoading: false , show: true}
    case "FETCH_ERROR":
        return{...state , errorMessage: true , isLoading: false , show: false  }

    default:
      return state;
  }
};
