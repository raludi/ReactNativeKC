import { createSelector } from 'reselect';
 
const SET_CHARACTER = 'characters/SET_CHARACTER';
const SET_IS_FETCHING = 'characters/SET_IS_FETCHING';
const CHARACTERS_LIST_UPDATED = 'characters/CHARACTERS_LIST_UPDATED';
const CHARACTERS_ERROR = 'characters/CHARACTERS_ERROR';

const initialState = {
    list: [],
    isFetching: false,
    selected: null,
    error: null,
}
 
//REDUCER
export default function filters(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS_LIST_UPDATED:
      return {
        ...state,
        list: action.payload,
        error: null
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
        error: null
      }
    case SET_CHARACTER:
      return {
        ...state,
        selected: action.payload,
        error: null
      }
    case CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
 
//ACTION CREATORS
export const actions = {

  fetchCharactersList() {
    return (dispatch, getState, api) => {
        dispatch(actions.setIsFetching(true))
        api.fetchCharacters()
          .then((data) => {
            dispatch(actions.updateCharacters(data))
            dispatch(actions.setIsFetching(false))
          })
          .catch((err) => {
            dispatch(actions.showError(err))
            dispatch(actions.setIsFetching(false))
          });          
    }
  },

  setIsFetching(isTrue) {
    return {
      type: SET_IS_FETCHING,
      payload: isTrue
    }
  },

  setCharacter(item) {
    return {
      type: SET_CHARACTER,
      payload: item
    };
  },
 
 updateCharacters(data) {
    return {
      type: CHARACTERS_LIST_UPDATED,
      payload: data
    };
  },

  showError(error) {
    return {
      type: CHARACTERS_ERROR,
      payload: error,
    };
  },
};


 
const characters = (state) => state.characters || initialState;
export const getCharacters = createSelector([characters], filterState => filterState);



