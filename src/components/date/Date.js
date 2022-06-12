const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

export const openingDate = `${month + 1}/${date}/${year}`;
export const closeingDate = `${month + 4}/${date + 3}/${year}`;
