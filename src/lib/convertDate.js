import moment from 'moment';
import tz from 'moment-timezone';

export const convertDate = isoDate => {
    let momentDate = isoDate.replace(/\s/g, "");
    // Set to PDT
    // tz('Australia/Sydney').format('ha z'); 
    momentDate = moment(momentDate).tz('America/Los_Angeles');

    const outDate = {
        day: momentDate.format('ddd'),
        date: momentDate.format('MMM D'),
        time: momentDate.format('H:mm A'),
        timezone: momentDate.format('z')
    };

    return outDate;
}