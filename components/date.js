import { parseISO, format } from 'date-fns';

//可以在 date-fns 網站查看不同的 format 字串選項。
export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}