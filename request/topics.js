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

async function queryTopic(topic, group, noask, offset, partionID) {

    var message = await superagent
        .get(topicGetURL.replace('{topic}', topic))
        .send(JSON.stringify(content))
        .set('accept', 'json')
        .end((err, res) => {
            console.log(err, res);
        });

    console.log(` Kafka订阅消息：`, topic, ` 返回结果：`, message);

    return message;
}

window.queryTopic = queryTopic;