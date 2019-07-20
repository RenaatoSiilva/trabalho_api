import api from './api'

export const getReposUser = user => api.get(`/users/${user}/repos`) 

export const getRepoFromUser = (user_repo) => api.get(`/repos/${user_repo}`)

export const getIssuesFromRepo = (user_repo) => api.get(`/${user_repo}/issues`);