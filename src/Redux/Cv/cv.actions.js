export const CLICK_ABOUT ='CLICK_ABOUT';
export const CLICK_EDUCATION ='CLICK_EDUCATION';
export const CLICK_EXPERIENCE ='CLICK_EXPERIENCE';
export const CLICK_MORE ='CLICK_MORE';


export const clickAbout = () => (dispatch) => {
    dispatch({
        type: CLICK_ABOUT,
    });
}
export const clickEducation = () => (dispatch) => {
    dispatch({
        type: CLICK_EDUCATION,
    });
}

export const clickExperience = () => (dispatch) => {
    dispatch({
        type: CLICK_EXPERIENCE,
    });
}
export const clickMore = () => (dispatch) => {
    dispatch({
        type: CLICK_MORE,
    });
}