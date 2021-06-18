
export function toUpperFirst(string) {
    if (!string || string.length === 0) {
        return string;
    }
    if (string.length === 1) {
        return string.toUpperCase();
    }
    return string[0].toUpperCase() + string.slice(1, string.length);
}