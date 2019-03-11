function clipPic(el){
    var canvas = document.querySelector('#canvas'),
        ctx = canvas.getContext('2d');

    document.body.onmousedown = function(e){
        var elA = el.getBoundingClientRect();

        var startX = e.clientX,
            startY = e.clientY,
            markL = 0,
            markT = 0;

        if(startX >= elA.left && startY >= elA.top){
            var mark = $$('div',{style:{cssText:"position:absolute; border: 1px dashed black"}},document.body);

            mark.style.left = startX +'px';
            mark.style.top = startY + 'px';

            document.body.onmousemove = function(e){
                var mx = e.clientX,
                    my = e.clientY,
                    markW = Math.abs(mx - startX),
                    markH = Math.abs(my - startY);

                if(startX > mx){
                    markL = mx - startX
                }else{
                    markL = 0
                }

                if(startY > my){
                    markT = my - startY;
                }else{
                    markT = 0
                }

                mark.style.width = markW + 'px';
                mark.style.height = markH + 'px';
                mark.style.transform = 'translate('+markL+'px, '+ markT+'px)';
            };

            document.body.onmouseup = function(e){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                var cW = Math.abs(startX -  e.clientX),
                    cH = Math.abs(startY - e.clientY),
                    clipX = (startX + markL - elA.left),
                    clipY = (startY + markT - elA.top),
                    Img = el;

                if(e.clientX > (elA.left + elA.width)){
                    cW = elA.width;
                }else if(e.clientX < elA.left){
                    cW = startX -elA.left;
                    clipX = 0
                }

                if(e.clientY > (elA.top + elA.height)){
                    cH = elA.height;
                }else if(e.clientY < elA.top){
                    cH = startY - elA.top;
                    clipY = 0;
                }

                ctx.drawImage(Img, clipX, clipY, cW, cH, 0, 0, cW, cH);
                document.body.removeChild(mark);

                document.body.onmousemove = null;
                document.body.onmouseup = null;
            };
        }
    }
}