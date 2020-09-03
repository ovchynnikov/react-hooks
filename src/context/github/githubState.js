import React, {useReducer} from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../actionTypes';

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()
        // ... axios

        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUser = async name => {
        setLoading()
        //... axios

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //... axios

        dispatch({
            type: GET_REPOS,
            payload: {}
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

    const {user, users, repos, loading} = state

    return (
        <GithubContext.Provider value={{
            search, getUser, getRepos, clearUsers, setLoading,
             user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}