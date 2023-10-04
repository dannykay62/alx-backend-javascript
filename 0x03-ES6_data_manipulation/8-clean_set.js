export default function cleanset(set, startString) {
    if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
    return [...set]
        .filter((el) => el.startsWith(startString))
        .map((el) => el.slice(startString.length)
        .join('-');
}