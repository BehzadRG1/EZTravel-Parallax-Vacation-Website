var layer1 = document.getElementById('layer1')
var layer2 = document.getElementById('layer2')
var layer3 = document.getElementById('layer3')
var text = document.getElementById('text')

scroll = window.pageYOffset
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset
    scroll = offset
    layer1.style.width = (40 + scroll / 30) + '%'
    layer1.style.left = -(scroll / 20) + '%'
})

scroll = window.pageYOffset
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset
    scroll = offset
    layer2.style.width = (30 + scroll / 50) + '%'
    layer2.style.right = -(scroll / 20) + '%'
})

scroll = window.pageYOffset
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset
    scroll = offset
    layer3.style.top = -(scroll / 10) + '%'
})

scroll = window.pageYOffset
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset
    scroll = offset
    text.style.top = scroll / 9 + '%'
})