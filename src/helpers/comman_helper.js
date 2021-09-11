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
};

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