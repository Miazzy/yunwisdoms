debugger;

//定义工具
window.tools = null;

/**
 * @function 获取问卷信息列表
 */
const queryQuestionById = async(id, page = 0, size = 99) => {

    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/bs_questions?_where=(id,eq,${id})&_p=${page}&_size=${size}`;

    try {
        //发送请求
        const res = await superagent.get(queryURL);

        //业务数据
        const list = res.body[0];

        //返回业务数据
        return list;
    } catch (err) {
        console.log(err);
        //未获取到数据，返回空
        return null;
    }

}

window.queryQuestionById = queryQuestionById;

/**
 * @function 获取问卷信息列表
 */
const queryQuestionList = async(username, page = 0, size = 99) => {

    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/bs_questions?_where=(create_by,eq,${username})&_p=${page}&_size=${size}`;

    try {
        //发送请求
        const res = await superagent.get(queryURL);

        //业务数据
        const list = res.body;

        //返回业务数据
        return list;
    } catch (err) {
        console.log(err);
    }

}

window.queryQuestionList = queryQuestionList;

/**
 * @function 查询业务数据
 */
const queryBusinessTotal = async() => {
    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/onl_cgform_head/count`;

    try {
        //发送请求
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //业务数据
        const ratio = res.body[0]['no_of_rows'];

        //返回业务数据
        return ratio;
    } catch (err) {
        console.log(err);
    }
}

window.queryBusinessTotal = queryBusinessTotal;

/**
 * @function 查询上月月度新增用户数
 */
const queryNewUserTotalLastMonth = async() => {

    try {
        //获取日期格式
        var cmonth = moment().month(moment().month() - 1).format('YYYY-MM');

        //提交URL
        var queryURL = `${window.requestAPIConfig.restapi}/api/v_user_monthly?_where=(month,eq,${cmonth})`;

        //发送请求
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //月度新增用户数
        const ratio = res.body[0]['total'];

        //返回月度新增用户数
        return ratio;
    } catch (err) {
        console.log(err);
        //返回月度新增用户数
        return 0;
    }
}

window.queryNewUserTotalLastMonth = queryNewUserTotalLastMonth;

/**
 * @function 查询月度新增用户数
 */
const queryNewUserTotal = async() => {

    try {
        //获取日期格式
        var cmonth = moment().format('YYYY-MM')

        //提交URL
        var queryURL = `${window.requestAPIConfig.restapi}/api/v_user_monthly?_where=(month,eq,${cmonth})`;

        //发送请求
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //月度新增用户数
        const ratio = res.body[0]['total'];

        //返回月度新增用户数
        return ratio;
    } catch (err) {
        console.log(err);
        //返回月度新增用户数
        return 0;
    }
}

window.queryNewUserTotal = queryNewUserTotal;

/**
 * @function 查询流程总数
 */
const queryWflowMonthlyRatio = async() => {
    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/v_workflow_monthly`;

    try {
        //打印
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //流程日同比率
        const ratio =
            parseInt(
                ((res.body[0]['total'] - res.body[1]['total']) / res.body[1]['total']) *
                10000
            ) / 100;

        //返回流程日同比率
        return ratio;
    } catch (err) {
        console.log(err);
    }
}

window.queryWflowMonthlyRatio = queryWflowMonthlyRatio;

/**
 * @function 查询流程总数
 */
const queryWflowDailyRatio = async() => {
    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/v_workflow_daily`;

    try {
        //打印
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //流程日同比率
        const ratio =
            parseInt(
                ((res.body[0]['total'] - res.body[1]['total']) / res.body[1]['total']) *
                10000
            ) / 100;

        //返回流程日同比率
        return ratio;
    } catch (err) {
        console.log(err);
    }
}

window.queryWflowDailyRatio = queryWflowDailyRatio;

/**
 * @function 查询流程总数
 */
const queryWflowDayCount = async(tools) => {

    //初始化
    window.tools = window.tools == null ? tools : window.tools;

    //获取日期格式
    var ctime = tools.formatDate(new Date(), 'yyyy-MM-dd');

    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/v_workflow_total?_where=(ctime,eq,${ctime})`;

    try {
        const res = await superagent.get(queryURL);
        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));
        return res.body.length;
    } catch (err) {
        console.log(err);
    }
}

window.queryWflowDayCount = queryWflowDayCount;

/**
 * @function 查询月度流程数
 */
const queryWflowMonthCount = async() => {
    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/v_workflow_monthly`;

    try {
        //打印
        const res = await superagent.get(queryURL);

        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));

        //流程日同比率
        const ratio = res.body[0]['total'];

        //返回流程日同比率
        return ratio;
    } catch (err) {
        console.log(err);
    }
}

window.queryWflowMonthCount = queryWflowMonthCount;

/**
 * @function 查询流程总数
 */
const queryWflowCount = async() => {
    //提交URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/v_workflow_total/count`;

    try {
        const res = await superagent.get(queryURL);
        console.log(' url :' + queryURL + ' result :' + JSON.stringify(res));
        return res.body[0]['no_of_rows'];
    } catch (err) {
        console.log(err);
    }
}

window.queryWflowCount = queryWflowCount;