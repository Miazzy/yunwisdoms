const topicPostURL = `https://api.shengtai.club/topics/{topic}/messages?key=default&sync`;
const topicGetURL = `https://api.shengtai.club/topics/{topic}/messages?group=0`;

/**
 * @function 通过Kafka推送消息函数
 * @param {*} topic 发布/订阅消息的topic
 * @param {*} message 推送的消息
 */
async function sendTopic(topic, message) {

    var content = {
        sender: topic,
        message: message,
        timestamp: new Date().getTime()
    }

    message = await superagent
        .post(topicPostURL.replace('{topic}', topic))
        .send(JSON.stringify(content))
        .set('Content-Type', 'text/plain')
        .set('accept', 'text')
        .end((err, res) => {
            console.log(err, res);
        });

    console.log(` Kafka推送消息：`, content, ` 返回结果：`, message);

    return message;
}

window.sendTopic = sendTopic;

/**
 * @function 通过kafka订阅消息
 * @param {*} topic 
 * @param {*} group 
 * @param {*} noask 
 * @param {*} offset 
 * @param {*} partionID 
 */
async function queryTopic(topic, group, noask, offset, partionID) {

    var message = await superagent
        .get(topicGetURL.replace('{topic}', topic))
        .send(JSON.stringify(content))
        .set('accept', 'json')
        .end((err, res) => {
            console.log(err, res);
        });

    message.key = decodeBase64(message.key);
    message.value = decodeBase64(message.value);

    console.log(` Kafka订阅消息：`, topic, ` 返回结果：`, message);

    return message;
}

window.queryTopic = queryTopic;

/**
 * @function Base64解密
 * @param {*} message 
 */
function decodeBase64(message) {
    return decodeURIComponent(window.atob(message));
}

window.decodeBase64 = decodeBase64;