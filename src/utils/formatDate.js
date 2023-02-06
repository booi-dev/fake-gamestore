
import { format } from 'date-fns';

function formatDate(date) {
    const gameReleasedDate = new Date(date);
    return format(gameReleasedDate, 'dd MMM, yyyy');
}

export default formatDate;