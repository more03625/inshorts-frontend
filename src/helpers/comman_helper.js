import toast from 'react-hot-toast';

export const Host = window.location.host === 'reactjs-newsdb.netlify.app' ? 'http://inshorts-backend-env-2.eba-f92mnyih.ap-south-1.elasticbeanstalk.com' : 'http://localhost:5254';
export const appVersion = 1.1
export const Endpoints = {
    news: '/news',
    category: '/category',
    signup: '/api/register',
    login: '/api/login',
    follow: '/api/user-follow',
    dashboard: '/news/admin/dashboard',
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
export const togglePassword = (inputID) => {
    let x = document.getElementById(inputID);
    console.log('x.type ===> ', x)
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    x.classList.toggle('fa-eye-slash')
    // <i class="far fa-eye-slash"></i>
    // <i class="far fa-eye"></i>
}
export const webErrors = {
    unSupportedFileError: 'Only PDF, JPG, PNG, DOC allowed!',
    inValidPhoneNumberError: 'Please enter a 10 digit valid phone number!',
    inValidEmailError: 'Please enter a valid email address!',
    invalidPasswordError: 'Password should be of minimum 8 characters!',
    passwordMismatch: 'Both password should match',
    enterCurrentPassword: 'Please enter your current password',
    currentPasswordSameAsNewPassword: 'New password should not be a old password!',
    catchError: 'Something went wrong, Please try again!'
}