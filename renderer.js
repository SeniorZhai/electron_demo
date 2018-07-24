var request = require('request')
var btn = document.getElementById('button')

btn.addEventListener('click',function(){
    var strHtml = '<img class="thumbnail" src="http://lorempixel.com/400/200/" alt=""/>'
    result.innerHTML = strHtml;
})