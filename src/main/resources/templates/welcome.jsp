
<html>
    <head>
        <title>Home Page</title>
        <script src="../js/bundle.js"></script>
        <script type = 'module' src="../js/welcome.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/welcome.css" />
    </head>
    <body>
        <h1>Hello !</h1>
        <p>Welcome <span th:text="${username}"> </span> to our app</p>
    </body>
</html>
