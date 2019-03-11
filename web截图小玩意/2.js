/**
 *
 * @param img 图片元素
 * @param proportion 选框比例 "3:1"，"4:3"
 * @param callback 回调 参数一：图片的src
*/
function clipPic(img, proportion, callback){
    var outBox = $$('div',{style:{cssText:'position:absolute; left:0; top:0; right:0; bottom:0;text-align:center; z-index:2;'}},document.body);
    var bigBox = $$('div',{style:{cssText:"display: inline-block; font-size: 0; position: relative;margin-top:100px;"}}, outBox),
        canvas = $$('canvas', {}, bigBox),
        ctx = canvas.getContext('2d'),
        htmlModel = '<span>100*200*</span>\n' +
            '        <span data-direction="LT" style="position: absolute;left: -5px; top: -5px;width: 10px; height: 10px; background: rgba(139,222,79,0.7); cursor: nw-resize;"></span>\n' +
            '        <span data-direction="RT" style="position: absolute;left: 100%; top: -5px;width: 10px; height: 10px; background: rgba(139,222,79,0.7); margin-left: -5px; cursor: ne-resize;"></span>\n' +
            '        <span data-direction="LB" style="position: absolute;left: -5px; top: 100%;width: 10px; height: 10px; background: rgba(139,222,79,0.7); margin-top: -5px; cursor: sw-resize;"></span>\n' +
            '        <span data-direction="RB" style="position: absolute;left: 100%; top: 100%;width: 10px; height: 10px; background: rgba(139,222,79,0.7); margin-top: -5px; margin-left: -5px; cursor: se-resize"></span>',
        choseArea = $$('div', {innerHTML:htmlModel, style:{cssText:'position: absolute;top: 0; border: 1px dashed rgb(40,118,41);cursor: move;'}},bigBox),
        btn = $$('button',{innerText:"裁剪"},bigBox),
        scalcArr = proportion.split(':'),
        proW = scalcArr[1]/scalcArr[0],
        proH = scalcArr[0]/scalcArr[1];


    img.onload = function(){

        canvas.width = img.width;
        canvas.height = img.height;

        if((rH = img.width * proH) <= img.height){
            choseArea.style.width = img.width + 'px';
            choseArea.style.height = rH + 'px';
        }else if((rW = img.height * proW) <= img.width){
            choseArea.style.width = rW + 'px';
            choseArea.style.height = img.height + 'px';
        }else{
            choseArea.style.width = 100 + 'px';
            choseArea.style.height = 100 * proH + 'px';
        }

        ctx.drawImage(img, 0, 0);

    };

    document.body.onmousedown = function(e){
        var choseEl = e.target,
            startX = e.clientX,
            startY = e.clientY,
            aTop = choseArea.offsetTop,
            aLeft = choseArea.offsetLeft,
            aW = choseArea.clientWidth,
            aH = choseArea.clientHeight;
        e.preventDefault();

        document.body.onmousemove = function(e){
            var offsetX = e.clientX - startX,
                offsetY = e.clientY - startY;

            if(choseEl === choseArea) {
                var moveX = aLeft + offsetX,
                    moveY = aTop + offsetY;
                if (moveX < 0) {
                    choseArea.style.left = 0;
                } else if (aW + moveX > canvas.width) {
                    choseArea.style.left = (canvas.width - aW) + 'px';
                } else {
                    choseArea.style.left = moveX + 'px';
                }

                if (moveY < 0) {
                    choseArea.style.top = 0;
                } else if (aH + moveY > canvas.height) {
                    choseArea.style.top = (canvas.height - aH) + 'px';
                } else {
                    choseArea.style.top = moveY + 'px';
                }
            }

            if(choseEl.getAttribute('data-direction') == "RB"){
                if(aTop + (aW + offsetX) * proH > canvas.height || aW + offsetX + aLeft > canvas.width || (aW + offsetX) * proH < 50)
                    return;
                choseArea.style.width =  aW + offsetX + 'px';
                choseArea.style.height =  (aW + offsetX) * proH + 'px';
            }else if(choseEl.getAttribute('data-direction') == "RT"){
                if(aTop + (aH - (aW + offsetX) * proH) < 0 || aW + offsetX + aLeft > canvas.width || (aW + offsetX) * proH < 50)
                    return;
                choseArea.style.width =  aW + offsetX + 'px';
                choseArea.style.height = (aW + offsetX) * proH + 'px';
                choseArea.style.top = aTop + (aH - (aW + offsetX) * proH)+ 'px';
            }else if(choseEl.getAttribute('data-direction') == 'LB'){
                if( aLeft + offsetX < 0 || aTop + (aW - offsetX) * proH > canvas.height || (aW - offsetX) * proH < 50 )
                    return;
                choseArea.style.width =  aW - offsetX + 'px';
                choseArea.style.height = (aW - offsetX) * proH + 'px';
                choseArea.style.left = aLeft + offsetX + 'px';
            }else if(choseEl.getAttribute('data-direction') == 'LT'){
                if(aTop + (aH - (aW - offsetX) * proH) < 0 || aLeft + offsetX < 0 || (aW - offsetX) * proH < 50 )
                    return;
                choseArea.style.width =  aW - offsetX + 'px';
                choseArea.style.height = (aW - offsetX) * proH + 'px';
                choseArea.style.left = aLeft + offsetX + 'px';
                choseArea.style.top = aTop + (aH - (aW - offsetX) * proH)+ 'px';
            }
        };

        document.body.onmouseup = function(e){
            e.preventDefault();
            document.body.onmousemove = null;
            document.body.onmouseup = null;
        }
    };

    btn.onclick = function(){
        toDataURL(img.src, choseArea, canvas, callback);
    }
}

function toDataURL(src, choseArea, canvas, callback) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        var el =choseArea;
        canvas.width = el.clientWidth;
        canvas.height = el.clientHeight;
        ctx.drawImage(this, el.offsetLeft, el.offsetTop, canvas.width, canvas.height, 0, 0, canvas.width,canvas.height);

        dataURL = canvas.toDataURL();
        callback(dataURL);
    };
    img.src = src;
}

function showSize(base64url) {
    //获取base64图片大小，返回MB数字
    var str = base64url.replace('data:image/png;base64,', '');
    var equalIndex = str.indexOf('=');
    if(str.indexOf('=')>0) {
        str=str.substring(0, equalIndex);
    }
    var strLength=str.length;
    var fileLength=parseInt(strLength-(strLength/8)*2);
    // 由字节转换为MB
    var size = "";
    size = (fileLength/(1024 * 1024)).toFixed(2);
    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1 ,2)            //获取小数点后两位的值
    if(dou == "00"){                                //判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}
