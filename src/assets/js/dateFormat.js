export default function formatDate (passDate) {
    let date = new Date (passDate);
    return date.getDate() + "/" + (date.getMonth() + 1);
}