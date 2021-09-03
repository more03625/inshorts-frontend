export const Host = 'http://localhost:5256';

export const Endpoints = {
    getNews: '/news'
}
export const convertToSlug = (shortsTitle) => {
    return shortsTitle
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
};