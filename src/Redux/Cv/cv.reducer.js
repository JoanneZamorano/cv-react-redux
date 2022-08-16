import * as actions from './cv.actions'


const INITIAL_STATE = {menu: 0};

const cvReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case actions.CLICK_ABOUT: {
            console.log(actions.CLICK_ABOUT);
            return { ...state, menu: 1,};
        }
        case actions.CLICK_EDUCATION: {
            console.log(actions.CLICK_EDUCATION);
            return { ...state, menu: 2,};
        }
        case actions.CLICK_EXPERIENCE: {
            console.log(actions.CLICK_EXPERIENCE);
            return { ...state, menu: 3,};
        }
        case actions.CLICK_MORE: {
            console.log(actions.CLICK_MORE);
            return { ...state, menu: 4,};
        }
        default:
            return state;
    }

};

export default cvReducer;