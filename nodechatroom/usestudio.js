
var http = require("http");

var user = [] // 用户数组

var userRes = { // 用户response对象

}

var message = { // 离线消息对象

}

var server = http.createServer(function (req, res) {
    // 发送消息处理函数
    if (req.url === '/send' && req.method === "POST") {
        // 接收post数据
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            post = JSON.parse(post);
            var result = userRes[post.rece].end(JSON.stringify(post))
            if (!result) {
                // 若为false 证明连接失效 加入离线消息
                if (message[post.rece] === undefined) {
                    message[post.rece] = []
                }
                message[post.rece].push(post)
            }
        });
        // 获取未读消息
    } else if (req.url === "/getUnread" && req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html;application/json;charset=utf-8", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With' });
        // 接收post数据
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            // 若有离线消息 直接发送
            if (message[post] !== undefined) {
                res.end(JSON.stringify(message[post]))
                delete message[post]
            } else {
                res.end(0)
            }
        });
        // 轮询
    } else if (req.url === "/polling" && req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html;application/json;charset=utf-8", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With' });
        // 接收post数据
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            // 将response对象加入userRes对象中
            userRes[post] = res
            if (user.indexOf(post) === -1) {
                // 将用户加入user数组中
                user.push(post)
            }
        });
        // 获取当前在线用户
    } else if (req.url === "/getUser" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html;application/json;charset=utf-8", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With' });
        for (var i in userRes) {
            // 向所有用户发送用户数组
            userRes[i].end(JSON.stringify(user))
        }
    }
});
server.listen(1347, "localhost", function () {
    console.log("开始监听" + server.address().port + "......");
});