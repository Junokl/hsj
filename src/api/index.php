
<?php
    $output = isset($_GET["output"]) ? $_GET["output"] : "";
    //数据库调用数据
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mogujie";

    //建立连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die($conn->connect_error);
    }
    $conn->set_charset('utf8');
    $sql="select * from goods";
    $result = $conn->query($sql);
    
    // $result=mysql_query($sql);$res = $result->fetch_row();
    $row= $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);

    $result->close();
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>