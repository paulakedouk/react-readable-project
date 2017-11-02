export const API = `http://localhost:5001`;

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8);

export const headers = {
    Accept: 'application/json',
    Authorization: token,
    'Content-Type': 'application/json'
};
