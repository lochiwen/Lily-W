var sum = 0
var sum2 = 0
$('#input').on('click', function() {
    var s = $('#score').val()
    var r = $('#ratio').val()

    s = Number(s)
    r = Number(r) / 100

    sr = s * r
    sum = sum + sr;
    sum2 = sum2 + r

    var $item = $('<div>')
    $item.attr('class', 'item')
    $item.text(r)
    var $col = $('<div>').attr('class', 'col-1').append($item)
    $('#data').append($col)
})


$('#compute').on('click', function() {

    var h = $('#hope').val()
    h = Number(h)
    up = h - sum
    down = 1 - sum2
    var result = up / down
    $('#result').val(result)
})




$('#clear').on('click', function() {
    $('#data').empty()
    $('#result').val('')
    $('#ratio').val('')
    $('#score').val('')
    $('#hope').val('')
    sum = 0
    sum2 = 0
});