<?php
    $qty = isset($_GET['qty'])? $_GET['qty'] :25;
    $curpage =  isset($_GET['curpage'])? $_GET['curpage'] : 1;
    $idx = ($curpage-1)*$qty;

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mogujie';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $quabu = 'select * from list';
    $_quanbu = $conn->query($quabu); 
    $quan = $_quanbu->fetch_all(MYSQL_ASSOC);
    // var_dump($quan);
    //分页
    $sql = 'select * from list order by id limit '.$idx.','.$qty;
    $result = $conn->query($sql); 
    $row = $result->fetch_all(MYSQL_ASSOC);

     $res = array(
            "dataArr" => $row,
            "quanbuArr" => $quan,
            "len" => count($quan),
            "qty" => $qty*1,
            "nowye" => $curpage*1
        );
    $result->close();
    $_quanbu->close();
    // var_dump($res[qty]);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    $conn->close();

    
?>