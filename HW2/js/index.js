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

                // 一開始先把放資料的位子清空
                $('#product-list').empty()
                $('<div>').addClass("item").empty()
                $('<div>').addClass("col-*").empty()

                // 令 quantity 指商品資料數量
                var quantity = response.data.length
                for (var i = 0; i < quantity; i++) {
                    // 令商品資料庫內各項商品的圖片、商品名、價格資料為變數
                    src = "http://fakeimg.pl/160/?text=images"
                    var image = $('<img>').addClass("thumb").attr("src", response.data[i].image);
                    var name = $('<h3>').addClass("title").text(response.data[i].name);
                    var price = $('<p>').addClass("price").text("$NT " + response.data[i].price);
                    // 把分別抓的變數集結放到同一資料來源的商品下
                    var eachproduct = $('<div>').addClass("item").append(image).append(name).append(price);
                    // 商品列顯示資料齊全的商品
                    var showlist = $('<div>').addClass("col-*").append(eachproduct);
                    // 放到顯示商品的元件裡
                    $('#product-list').append(showlist);

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