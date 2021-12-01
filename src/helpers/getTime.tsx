

export default function getTime(n: number): string {
    const minutes = n / 60;
    const m = Math.floor(minutes);
    const seconds = (minutes - m) * 60;
    const s = Math.round(seconds);
    return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`
}