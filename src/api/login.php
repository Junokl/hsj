<?php
    $urname = isset($_GET["urname"])? $_GET["urname"] : "aa";
    $psw = isset($_GET["password"])?$_GET["password"] : "11";
    
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mogujie';
    //插入数据
    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    $sql='select * from login';//
    $result = $conn->query($sql);
        // var_dump($urname,$psw);
    
    // $result=mysql_query($sql);$res = $result->fetch_row();
    $row= $result->fetch_all(MYSQLI_ASSOC);
    
   // $red = array_column($row,'urname');//获取单边的数组
   foreach($row as $key=>$value){
        // var_dump($row[$key]);
        $res =$row[$key];
                // var_dump($res);
                
                if($res['urname']==$urname){
                    echo $res['password']==$psw ? $urname : "2";
                }
    }
    // echo json_encode($red);
    $result->close();
    $conn->close();
?>