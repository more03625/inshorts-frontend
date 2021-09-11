import {Host} from '../helpers/comman_helper';


export const signup = (user) => {
    return fetch(`${Host}/api/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return (response.json())
        })
        .catch(err => {
            console.log(err)
        })
}

export const signin = (user) => {
    return fetch(`${Host}/api/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return (response.json())
        })
        .catch(err => {
            console.log(err)
        })
}

export const authenticate = (data, next) => {
    if(typeof window !== undefined) {
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}

export const signout = (next) => {
    if(typeof window !== undefined) {
        localStorage.removeItem('jwt')
        next();
        return fetch(`${Host}/api/signout`, {
            method:'GET'
        })
            .then(response => response.json())
            .then(res=>console.log(res))
            .catch(err => console.log(err));
    }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        return false
    }
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}