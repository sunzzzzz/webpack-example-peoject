function generateText(){
    var ele =document.createElement('p');
    ele.innerHTML = 'hello world webpack';
    return ele;
}
module.exports = generateText;