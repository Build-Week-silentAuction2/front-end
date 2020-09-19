import axios from "axios";

const REGISTER_USER_START = "REGISTER_USER_START";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const LOGIN_USER_START = "LOGIN_USER_START";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

function registerUser(user, history) {
    return dispatch => {
        dispatch({type: REGISTER_USER_START});
        axios.post("...waiting for url", user)
        .then(response => {
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data});
            localStorage.setItem("token", response.data /*token*/);
            localStorage.setItem("user", JSON.stringify(response.data));

            if (response.data.role === "seller") {
                history.push("/seller-dashboard");
            }

            if (response.data.role === "buyer") {
                history.push("/buyer-dashboard")
            }
        })
        .catch(error => {
            dispatch({type: REGISTER_USER_FAILURE,
            payload: "Unable to register"
            });
        });
    }
}

function loginUser(user, history) {
    return dispatch => {
        dispatch({type: LOGIN_USER_START});
        axios.post("...waiting for url for auth login", user)
        .then(response => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
        localStorage.setItem("token", response.data /*token*/);
        localStorage.setItem("user", JSON.stringify(response.data));

        if (response.data.role === "seller") {
            // console.log(response.data.role) for future reference
            history.push("/seller-dashboard");
          }
  
          if (response.data.role === "buyer") {
            // console.log(response.data.role)
            history.push("/buyer-dashboard");
          }
        })
        .catch(error => {
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: "Unable to Login"
            })
        })
    }
}

export { registerUser, loginUser,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
  };