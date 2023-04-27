function windowHeight() {
    $he_1 = $("header").height(), $he_2 = $(".nav_sem").height(), $summ_he = $he_1 + $he_2, $(this).scrollTop() >= $summ_he ? $(".head_line").fadeIn() : $(".head_line").fadeOut()
}


$(".nal_li ul a").click(function() {
    $(".nal_li ul li").each(function() {
        $(this).removeClass("active")
    }), $(this).parent().addClass("active");
    var i = $(this).parent().index();
    return $(".list_prem .im").each(function() {
        $(this).removeClass("active")
    }), $(".list_prem .im:eq(" + i + ")").addClass("active"), !1
})

$(".data_ras").click(function() {
    $samik = $(this).parent().find(".samri").html(), $("#form_raschet .ttl b").html($samik), $("#form_raschet .hid_raschet").val("Всплывающая форма - Расчет на " + $samik)
})

$(".data_ras2").click(function() {
    $samik = $(this).parent().find(".samri").html(), $("#form_raschet2 .ttl").html($samik), $("#form_raschet2 .hid_raschet").val("Всплывающая форма - " + $samik)
})

$(window).scroll(windowHeight), windowHeight(), $("#calc").change(function() {
    var i = $("#length").val() * $("#width").val(),
        i = '<div class="line"><div class="sm1">Металлические столбы 60х60</div><div class="sm2">6</div><div class="sm3">шт</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Силовые боковые балки</div><div class="sm2">2</div><div class="sm3">шт</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Ферма</div><div class="sm2">5</div><div class="sm3">шт</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Лаги 40х20х2мм</div><div class="sm2">5</div><div class="sm3">шт</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Поликарбонат</div><div class="sm2">' + i + '</div><div class="sm3">м2</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Соединительные профили</div><div class="sm2">1</div><div class="sm3">к-т</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Окрашивание грунтом</div><div class="sm2">' + i + '</div><div class="sm3">м2</div> <div class="clear"></div> </div><div class="line"><div class="sm1">Итого</div><div class="sm2">' + $("#calc input[type='radio']:checked").data("price") * i + '</div><div class="sm3">руб</div> <div class="clear"></div> </div><div class="line bold"><div class="sm1">Со скидкой</div><div class="sm2">' + $("#calc input[type='radio']:checked").data("price") * i * .9 + '</div><div class="sm3">руб</div> <div class="clear"></div> </div>';
    $(".list_calc .right .table .in_table").html(i)
})

$("#calc .submit").click(function() {
    if ($("#length").val() <= 0) return $("#length").addClass("has-error"), $(".list_calc .right .bsg").fadeIn(), !1;
    if ($("#length").removeClass("has-error"), $("#width").val() <= 0) return $("#width").addClass("has-error"), $(".list_calc .right .bsg").fadeIn(), !1;
    if ($("#width").removeClass("has-error"), $("#height").val() <= 0) return $("#height").addClass("has-error"), $(".list_calc .right .bsg").fadeIn(), !1;
    $("#height").removeClass("has-error"), $(".list_calc .right .bsg").fadeOut();
    var i = $("#length").val() * $("#width").val(),
        a = $("#calc input[type='radio']:checked").data("price") * i,
        i = $("#calc input[type='radio']:checked").data("price") * i * .9;
    $(".list_calc .right .par1").val("Длина - " + $("#length").val()), $(".list_calc .right .par2").val("Ширина - " + $("#width").val()), $(".list_calc .right .par3").val("Высота - " + $("#height").val()), $(".list_calc .right .par4").val("Крыша - " + $("#krisha").val()), $(".list_calc .right .par5").val("Цена - " + a + ",  Цена со скидкой - " + i)
})

$(".name").click(function() {
    $(this).removeClass("has-error")
})

$(".phone").click(function() {
    $(this).removeClass("has-error")
})

$(".mail").click(function() {
    $(this).removeClass("has-error")
})

var now = new Date,
    formated_date = now.format("d.m.Y");

function getQueryVariable(i) {
    for (var a = window.location.search.substring(1).split("&"), s = 0; s < a.length; s++) {
        var e = a[s].split("=");
        if (e[0] == i) return e[1]
    }
    return !1
}

const selectMenu = document.querySelector('.select_menu');
const submenu = document.querySelector('.submenu');

selectMenu.addEventListener('mouseover', () => {
    submenu.style.display = 'flex';
});

selectMenu.addEventListener('mouseout', () => {
    submenu.style.display = 'none';
});

const container = document.querySelector('.list_slid'); // Выбираем блок, который нужно свайпать
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing'; // Изменяем курсор при зажатии мыши
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab'; // Возвращаем стандартный курсор после отпускания мыши
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});