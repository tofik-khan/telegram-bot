var axios = require('axios');

exports.main = () => {

    // Get Chat info
    const chat_id = "-1001815542928";

    // Create Message Body
    const message = `ٱلسَّلَامُ عَلَيْكُمْ \nThis is me testing a private chat ID`;

    const encoded_message = encodeURIComponent(message);

    // Create URL
    const url = `https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage?chat_id=${chat_id}&text=${encoded_message}?&parse_mode=markdown`

    const config = {
        method: 'post',
        url: url,
        headers: { }
      };
    
      axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

    return {"body": "Process Complete"};
}
