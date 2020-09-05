import React, {useReducer} from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING, GET_ME } from '../actionTypes';
import Axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const addCredentials = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}
export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        userMe: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()
        const response = await Axios.get(
            addCredentials(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()
        const response = await Axios.get(
            addCredentials(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getMe = async name => {
        // setLoading()
        const response = await Axios.get(
            addCredentials(`https://api.github.com/users/ovchynnikov?`)
        )

        dispatch({
            type: GET_ME,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()
        const response = await Axios.get(
            addCredentials(`https://api.github.com/users/${name}/repos?per_page=50&`)
        )


        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const {user, users, repos, loading, userMe} = state

    return (
        <GithubContext.Provider value={{
            search, getUser, getRepos, clearUsers, setLoading, getMe,
             user, users, repos, loading, userMe
        }}>
            {children}
        </GithubContext.Provider>
    )
}