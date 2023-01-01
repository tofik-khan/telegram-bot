var axios = require('axios');

exports.main = async () => {

    console.log("... Starting Bot ...");

    // Get Chat info
    const chat_id = "-1001815542928";

    // Create Message Body
    const message = `Testing New Function`;

    const encoded_message = encodeURIComponent(message);

    // Create URL
    const url = `https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage?chat_id=${chat_id}&text=${encoded_message}?&parse_mode=markdown`

    const config = {
        method: 'post',
        url: url,
        headers: { }
      };
    
    console.log("Dispatching message to Telegram API");

     await axios(config)
        .then((response) => {
            logResult(response.data);
        })
        .catch((error) => {
            logResult(error);
        });

    console.log("... Bot Done ...")
    return {"body": "Process Complete"};
}

const logResult = (data) => {
    if(data.ok) {
        // Response was successful
        console.log("Message Dispatched Successfully");
        console.log("Send to: ", data.result.chat.title);
        console.log("Sent at: ", epochToUTC(data.result.date));
    }
    else {
        console.log("Message Dispatch Failed");
        console.log(data.message);
    }
}

const epochToUTC = (epoch) => {
    const dateObj = new Date(epoch * 1000);
    return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()} UTC-time`;
}
