<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <title>webpack base project</title>

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
    <meta name="format-detection" content="telephone=no">

    <link rel="icon" type="image/png" href="/static/images/favicon.png">

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet">

    <link rel="stylesheet" href="/static/main.css">

    <meta name="name" content=""/>
    <meta name="description" content=""/>

    <meta name="og:url" content="">
    <meta name="og:type" content="website"/>
    <meta name="og:title" content=""/>
    <meta name="og:site_name" content=""/>
    <meta name="og:image" content="">
    <meta name="og:image:secure_url" content="">
    <meta name="og:description" content=""/>

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">

</head>
<body class="" style="visibility:hidden;opacity:0;pointer-events:none;">

<div class="pn__wrapper">

    <div class="asd"></div>
    <div class="asd asd--asd"></div>

    <div class="menu">
        <a class="js-closemenu" href="javascript:void(0);" data-push="false">CLOSE</a>
        <br/>
        <a href="/index">PAGINA INDEX</a>
        <br/>
        <br/>
        <a href="/example">PAGINA EXAMPLE</a>
        <br/>
        <br/>
        <a href="/test/one">PAGINA TEST/ONE</a>
        <br/>
        <br/>
        <a href="/test/one" data-push="false">PAGINA TEST/ONE - NO PUSH</a>
    </div>

    <br/>
    <br/>

    <section class="js-router--home">

        <button type="button" class="js-button" data-route="example">TEST ROUTE EXAMPLE</button>

        <br/>
        <br/>

        <button type="button" class="js-button" data-route="random">TEST ROUTE
            RANDOM
        </button>

        <br/>
        <br/>

        <button type="button" class="js-button" data-route="random/one/two">TEST ROUTE
            RANDOM/ONE/TWO
        </button>

        <br/>
        <br/>

        <button type="button" class="js-button" data-route="">TEST
            ROUTE VUOTA
        </button>

        <br/>
        <br/>

        <button type="button" class="js-button" data-route="/">TEST
            ROUTE SLASH
        </button>

        <br/>
        <br/>

    </section>

    <c-view></c-view>

</div>

<script type="text/javascript" src="/static/main.js"></script>

</body>
</html>