var isopen = false;
var cardnow = 0;

var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

var back = function(temp) {
    console.log(temp);
    $(temp).attr("src", "./poker/back.png");
    $("[card$=" + cardnow + "]").attr("src", "./poker/back.png");
}



var choose = function(n) {

    $('#data').empty();
    var poker = [];
    for (var i = 1; i <= n; i++) {
        poker.push(i);
    }

    // 洗牌
    for (var i = 1; i <= 10 * n; i++) {
        var r = rand(1, n) - 1;
        var t = poker[0];
        poker[0] = poker[r];
        poker[r] = t;
    }

    for (var i = 0; i <= n - 1; i++) {
        var $img = $('<img>').attr("src", "./poker/back.png").attr("card", poker[i]);
        var $col = $('<div>').attr('class', 'col-2 text-center').append($img);
        $('#data').append($col);

    }

    $("img").on('click', function() {

        if (isopen == false) {
            var card = $(this).attr("card");
            $(this).attr("src", "./" + n + "/pic" + card + ".png");
            isopen = true;
            cardnow = card;
            console.log(cardnow)
        } else {
            var card = $(this).attr("card");
            if (Math.ceil(card / 2) == Math.ceil(cardnow / 2)) {
                $(this).attr("src", "./" + n + "/pic" + card + ".png");
            } else {
                $(this).attr("src", "./" + n + "/pic" + card + ".png");
                obj = this;
                setTimeout(function() {
                    console.log(obj);
                    $(obj).attr("src", "./poker/back.png");
                    $("[card=" + cardnow + "]").attr("src", "./poker/back.png");
                    isopen = false;
                    cardnow = 0;

                }, 1000)

            }
        }

    });
}