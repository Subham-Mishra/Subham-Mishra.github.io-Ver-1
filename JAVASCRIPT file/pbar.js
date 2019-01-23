//Default circles
$( document ).ready(function() {
    var blankCircle='<svg viewBox="0 0 200 200" class="radial-circle" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path width="200" height="200" d="M100,100 v-100 a100,100 0 0,1 0,0 z" id="outer-circle" fill="#999" stroke-width="0" /><circle id="inner-circle" fill="#FFFFFF" cx="50%" cy="50%" r="40%"/></svg>';
    
$(".radial").append(blankCircle);  

//Setup
jQuery('.radial').each(function() {
    var element = $(this).attr('class');
    var elementvar = element.substring(7,element.length);
    elementvar = "."+elementvar;
    var value = $(elementvar).attr('value');
    updateRadial(elementvar, value);
});

function drawCircleArc(elem, angle) {
    var endAngleDeg = angle - 90;
    var endAngleRad = (endAngleDeg * Math.PI) / 180;
    var largeArcFlag = (angle < 180 ? '0' : '1');

    var endX = Math.cos(endAngleRad) * 100;
    var endY = 100 + (Math.sin(endAngleRad) * 100);

    var data = 'M100,100 v-100 a100,100 0 ' + largeArcFlag + ',1 ' + endX + ',' + endY + ' z';

    $(elem).attr('d', data);
}

function radial(y) {
    value = $(y).attr('value');
    updateRadial(y,value);
}

function updateRadial(y, x) {
    var angle = (360/100)*x;
    if (x==100) angle = 359.999
    var circleElem = y + " #outer-circle"
    var inCircleElem = y + " #inner-circle"
    drawCircleArc(circleElem , angle);
        
    //text
    $(y+" .radial-text").remove();
    
    var textFlag = $(y).attr('text');  
    var suffix = $(y).attr('suffix'); 
    if (textFlag == undefined){
        
        //suffix
        if (suffix == undefined) $(y).append('<span class="radial-text">'+x+'</span>');
        else $(y).append('<span style="" class="radial-text">'+x + '<span class="suffix">'+suffix+'</span></span>');
    }
    
        //custom text
    if (textFlag != undefined && textFlag != "off") {
        if (suffix == undefined) $(y).append('<span class="radial-text">'+textFlag+'</span>');
        else $(y).append('<span class="radial-text">'+textFlag + '<span class="suffix">'+suffix+'</span></span>');
    }
    
    //Text styles
    var fontsize = $(y).attr('font-size');
    $(y + ' .radial-text').attr('style', 'color: #333; position: absolute; left: 10%;width: 80%; text-align: center; top: 40%; height: 20%; font-size: '+fontsize+'em;');
    
    $(y + ' .radial-text .suffix').attr('style','font-size: 50%');
    
    
    //size (unifnished)
    var size = $(y).attr('size');
    
    $(y).attr('style', 'width: '+size+'px; position: relative;display: inline-block;');
    
    //radius
    var radius = $(y).attr('radius');  
    if (radius != undefined){
        radius/=2;
        radius+="%";
        $(inCircleElem).attr('r', radius);
    }
    
    //color-fg
    var colorfg = $(y).attr('colorfg');  
    if (colorfg != undefined){
        $(circleElem).attr('fill', colorfg);
    }
        
    //color-bg
    var colorbg = $(y).attr('colorbg');  
    if (colorbg != undefined){
        $(inCircleElem).attr('fill', colorbg);
    }
}
});
