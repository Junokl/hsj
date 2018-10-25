jQuery(function($){
    $('#pageFooter').load('../html/footer.html',function(){
        $("#js_carttitle").on("click",function(){
            location.href="../html/car.html";
        })
   });
    //点击切换二维码登陆，toggle-qrcode =>hidden
    //qrcode-wrapper => show
    //formbox =>hidden
    //login_mod_tab =>hidden
    $(".toggle-qrcode").on("click",function(){
        $(".qrcode-wrapper").show();
        // $(this).hide();
        $(".login_mod_tab").hide();
        $(".formbox ").hide();
    });
    // 点击返回登陆
    $(".toggle-regular").on("click",function(){
        $(".qrcode-wrapper").hide();
        $(".toggle-qrcode").show();
        $(".toggle-regular").show();
        $(".formbox").show();
        $(".login_mod_tab").show();
    });
    //普通注册
    $(".eb_mod").on("click",function(){
        $('.lo_mod ').removeClass('tab_on');
        $(this).addClass("tab_on");
        $(".lg_item").show();
        $(".mod_box ").hide();
        $(".sub").hide();
        $(".sub_zc").show();
    });
    //返回登录
    $(".lo_mod").on("click",function(){
        $('.eb_mod ').removeClass('tab_on');
        $(this).addClass("tab_on");
        $(".lg_item").show();
        $(".lg_item ").hide();
        $('.lg_name').show();
        $('.lo_mod_box').show();
        $('.lg_pass').show();
        $('.sub_zc').hide();
        $('.sub').show();
    });
    
    //登录
    
    var btn_login = $(".sub");
    btn_login.on("click",function(){
        event.preventDefault();
        let tip = $(".tip");
        let urname = $(".urname").val();
        let password = $(".password").val();
        // console.log(username);
        // console.log(psw);
        $.ajax({
            url: '../api/login.php',
            type: 'GET',
            dataType: 'text',
            data: {urname:urname,password:password},
            success : function(res){
                console.log(res);
                if(res == urname){
                    // console.log(res.urname);
                    $.cookie("urname",res,{path:"/"});
                    location.href = "../index.html";
                    console.log(res);
                    alert("欢迎尊贵的VIP");
                    
                 }else if(res =="2"){
                    alert("用户名或者密码错误");
                }
            }
            // error:function(){
            //    console.log(222);
                     
            // }
        })

    });
    //注册
    var btn_zhuce = $(".sub_zc");
    btn_zhuce.on("click",function(){
        event.preventDefault();
        var tiwthword = $(".tiwthword").val();
        var tipname = $('.tipname');
        var tippsw = $('.tippsw');
        var regname = $(".regname").val();
        var regpassword = $(".regpassword").val();
        $.ajax({
            url : '../api/zhuce.php',
            type : 'get',
            dataType : 'text',
            data :{regname:regname,regpassword:regpassword},
            success : function(res){
                if(res =="true"){
                    alert('注册成功！快去登陆吧');
                }else if(res =="false"){
                    alert( '该用户名已被注册');
                }
            }
        })
    });
})