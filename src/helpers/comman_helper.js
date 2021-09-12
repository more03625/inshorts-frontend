export const Host = 'http://localhost:5254';

export const Endpoints = {
    news: '/news',
    category: '/category'
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