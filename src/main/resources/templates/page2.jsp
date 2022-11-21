<html>
    <head>
        <title>Home Page</title>
        <script language="JavaScript" type="text/javascript" src="../js/page2.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/welcome.css" />
        <link rel="stylesheet" type="text/css" href="../css/page2.css" />
    </head>
    <body>
        <h1>Hello !</h1>
        <p>Welcome to <span th:text="${pageName}"> </span></p>
        <p>Date: <input type="text" id="mydatepicker"></p>
        <button id = "btn2" onclick="btnClick('test');">Page 2 Click Me - 2</button>
        <button id = "btn3">Page 2 Click Me - Btn1</button>
     </body>
</html>