import toast, { Toaster } from 'react-hot-toast';
import React, { useHistory } from 'react';

export const Host = window.location.host === 'localhost:3000' ? 'http://localhost:5254' : 'https://newsdb-api.herokuapp.com';

export const Endpoints = {
    news: '/news',
    category: '/category',
    signup: '/api/register',
    login: '/api/login',
    follow: '/api/user-follow'
}
export const convertToSlug = (shortsTitle) => {
    return shortsTitle
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
}
export const uppercaseFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}
export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (file !== undefined) {
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
        }
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export const createReader = (file, whenReady) => {
    var reader = new FileReader();
    reader.onload = function (evt) {
        var image = new Image();
        image.onload = function (evt) {
            var width = this.width;
            var height = this.height;
            if (whenReady) whenReady(width, height);
        };
        image.src = evt.target.result;
    };
    reader.readAsDataURL(file);
}
export const getUserToken = () => {
    return JSON.parse(localStorage.getItem('newsdb-auth')); // Convert String to Json Object
}
export const logout = () => {
    toast.success("Logged out successfully!");
    localStorage.removeItem('newsdb-auth');
    window.location.href = '/';

}