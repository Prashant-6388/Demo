<html>
    <head>
        <title>Home Page</title>
        <script language="JavaScript" type="text/javascript" src="../js/welcome.js"></script>
        <script language="JavaScript" type="text/javascript" src="../js/start.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/welcome.css" />
    </head>
    <body>
        <h1>Hello !</h1>
        <p>Welcome <span th:text="${username}"> </span> to our app</p>
        <button id="btn1">Click Me</button>
        <button id = "btn2" onclick="mainFunction();">Click me 1</button>
    </body>
</html>