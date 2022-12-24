var axios = require('axios');

exports.main = () => {

    // Get Chat info
    const chat_id = "@tofik_testbot";

    // Create Message Body
    const message = "I am now sending my first message from Digital Ocean Function";

    // Create URL
    const url = `https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage?chat_id=${chat_id}&text=${message}?&parse_mode=markdown`

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
