// npm install node-cron
const cron = require('node-cron');

cron.schedule('* */5 */1 * * *', () => {
    console.log('⏰ This message shows every 5 seconds');
});

/*
* * * * * *
| | | | | |
| | | | | └─ Day of week (0-6)
| | | | └─── Month (1-12)
| | | └───── Day of month (1-31)
| | └─────── Hour (0-23)
| └───────── Minute (0-59)
└─────────── Second (0-59)
*/