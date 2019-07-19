import api from './api'

export const getReposUser = user => api.get(`/users/${user}/repos`) 

export const getRepoFromUser = (user_repo) => api.get(`/repos/${user_repo}`)