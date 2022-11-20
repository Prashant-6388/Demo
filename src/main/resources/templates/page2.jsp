<html>
    <head>
        <title>Home Page</title>
        <script language="JavaScript" type="text/javascript" src="../js/welcome.js"></script>
        <script language="JavaScript" type="text/javascript" src="../js/page2.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/welcome.css" />
    </head>
    <body>
        <h1>Hello !</h1>
        <p>Welcome to <span th:text="${pageName}"> </span></p>
        <p>Date: <input type="text" id="datepicker"></p>
    </body>
</html>