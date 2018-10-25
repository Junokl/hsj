<?php
    $regname = isset($_GET['regname']) ? $_GET['regname'] : '';
    $regpassword = isset($_GET['regpassword']) ? $_GET['regpassword'] : 666;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mogujie';

    // 1.创建与数据库的连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2. 检测连接失败
    if ($conn->connect_error) {
        die($conn->connect_error);
    } 
    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    // =================增加========================
    $sql = "select * from login";

    
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $res = array_column($row,'urname');//获取单边的数组
    $judge = in_array($regname, $res);
    // var_dump($judge,$res);
    if($judge){
        echo "false";
    }else{
         $sql = 'insert into login (urname,password) values ("'.$regname.'","'.$regpassword.'")';
        $charu = $conn->query($sql);
        // var_dump($charu);

        if($charu){
             echo "true";
        }
    }

    $result->close();
    $conn -> close();
?>
