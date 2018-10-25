<?php
    $admin = isset($_GET['admin'])? $_GET['admin'] :"";
    $qty = isset($_GET['qty'])? $_GET['qty'] :"";
    $Sname =  isset($_GET['Sname'])? $_GET['Sname'] : "";
    $id =  isset($_GET['id'])? $_GET['id'] : "";
    $imgurl =  isset($_GET['imgurl'])? $_GET['imgurl'] : "";
    $oldprice =  isset($_GET['oldprice'])? $_GET['oldprice'] : "";
    $curprice =  isset($_GET['curprice'])? $_GET['curprice'] : "";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mogujie';

    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
        // 根据前端传过来的数据搜索表中是否存在符合条件的数据,存在修改，不存在插入
        $cunzai = "SELECT * FROM car WHERE id='.$id.' and admin='".$admin."'"; 
        $_cunzai = $conn->query($cunzai); 
        $cunzai = $_cunzai->fetch_all(MYSQL_ASSOC);
        if($cunzai){
                foreach ($cunzai as  $item) {
                   $qty+=$item["qty"];
                }  
           $xiugai = "update car set qty='".$qty."' where id=".$id;
            $ccc = $conn->query($xiugai); 
             if ($ccc) {
                echo "true";
            } else {
                echo "Error: " . $xiugai . "<br>" . $conn->error;
            } 
            // $ccc>close();
        }else{
             $sql = "INSERT INTO car (id, admin, Sname, imgurl,oldprice,curprice,qty)
                VALUES ('".$id."', '".$admin."', '".$Sname."', '".$imgurl."', '".$oldprice."', '".$curprice."', '".$qty."')";

            $result = $conn->query($sql); 

             if ($result) {
                echo "true";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            } 
            // $result->close();
        }
    
   

   
    $conn->close();

    
?>