<?php
if(isset($_POST['token'])){
    $secretKey = "6LfoZQMjAAAAAJbeV9I6mBhkm2_B33L1FO8ccXru";
    $ip = $_SERVER['REMOTE_ADDR'];
    $url =  'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey .  '&response=' . $_POST['token'];
    $response = file_get_contents($url);
    $responseKeys = json_decode($response,true);
    if($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
        $token = "5336292184:AAEtCgY05v--CongmXoEF7-Uh6XWj1tjKww";
        $chat = "-1001560231947";

        if (isset($_POST['phone']))
        {
            $question = $_POST['question'];
            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $dlina = $_POST['dlina'];
            $shirina = $_POST['shirina'];
            $visota = $_POST['visota'];
            $krisha = $_POST['krisha'];
            $hid = $_POST['hid'];
            
            
            $message = "Загаловок: " . $hid ."%0AВопрос: " . $question . "%0AТелефон: " . $phone . "%0AИмя: " . $name .  "%0AДлина: " . $dlina .  "%0AШирина: " . $shirina .  "%0AВысота: " . $visota . "%0AТипа крыши: " . $krisha . "%0A";

            $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat}&parse_mode=html&text={$message}","r");
        } else {
            echo "Поля не заполнены";
        };
    ?>
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Спасибо</title>

            <link rel="icon" type="image/png" href="images/favicon.png">
            <link rel="canonical" href="https://znavesov.ru/">
            <link rel="stylesheet" href="css/thank.css">
            <link rel="stylesheet" href="css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|PT+Sans:400,700" rel="stylesheet">

            <script async src="js/tag.js"></script>
            <script async src="js/fbevents.js"></script>
            <script type="text/javascript" async src="js/leadback.js"></script>
            <script type="text/javascript" async id="topmailru-code" src="js/code.js"></script>
            <script type="text/javascript" async src="https://mod.calltouch.ru/init.js?id=9pvxehnj"></script>
            <script type="text/javascript" async src="https://vk.com/js/api/openapi.js?168"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-T55WJ7L23Y"></script>

            <script type="text/javascript">
            var __cs = __cs || [];
            __cs.push(["setCsAccount", "Gbw12G27mAMggV8gMWAYYOD1zHSUOEH4"]);
            </script>
            <script type="text/javascript" async src="js/cs.min.js"></script>

            <!-- Yandex.Metrika counter -->
            <script type="text/javascript">
            (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(89320642, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/89320642" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <!-- /Yandex.Metrika counter -->
            <!-- base xhtml4 -->

            <script type="text/javascript">
            ! function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?168", t.onload = function() {
                VK.Retargeting.Init("VK-RTRG-520375-ddKNi"), VK.Retargeting.Hit()
                }, document.head.appendChild(t)
            }();
            </script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-520375-ddKNi" style="position:fixed; left:-999px;" alt></noscript>

            <script type="text/javascript">
            ! function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?168", t.onload = function() {
                VK.Retargeting.Init("VK-RTRG-866300-7GnQF"), VK.Retargeting.Hit()
                }, document.head.appendChild(t)
            }();
            </script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-866300-7GnQF" style="position:fixed; left:-999px;" alt></noscript>
        </head>
        <body class="thanks-page-wr">
            <main class="thanks-page">
                <div class="popup PopupThanks">
                    <div class="content">
                        <div class="popup__body">
                            <div class="logo_item">
                                <img src="./images/logo.png" alt="logo">
                            </div>
                            <h3 class="title">Спасибо за заявку!</h3>
                            <div class="descr">
                                <p>
                                    Мы перезвоним вам через 5 минут, а пока можете <br>
                                    <a href="/">посмотреть каталог наших работ</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
        </html>
    <?php
    } else {
        echo json_encode(array('success' => 'false', 'om_score' => $responseKeys["score"], 'token' => $_POST['token']));
    }
}
?>