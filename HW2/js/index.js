$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

$('#query').on('click', function() {
    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {

                // TODO HW2 作業寫在這裡


                $("#product-list").empty();
                $("#message").text('查詢成功');
                for (var i = 0; i < response.data.length; i++) {
                    var $img = $('<img>').attr("class", "thumb").attr("src", response.data[i].image);
                    var $h3 = $('<h3>').attr("class", "title").text(response.data[i].name);
                    var $p = $('<p>').attr("class", "price").text(response.data[i].price);
                    var $item = $('<div>').attr("class", "item").append($img).append($h3).append($p);
                    var $col = $('<div>').attr("class", "col-*").append($item);
                    $("#product-list").append($col);

                }

            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        console.log(response);
    }, "json");
})