jQuery(function($){
    //页面加载数据
    $('#pageHeader').load('../html/header.html',function(){
      (function logincar(){
         let login1 = $("#login1");
          let login2 = $("#login2");
          login1.find(".tuichu").attr("href","./login.html");
          let admin = $.cookie("urname");
          if(admin){
            login2.hide();
           login1.show().find("#admin").text($.cookie("urname"));
           $("#login1 .tuichu").on("click",function(){
              $.cookie('urname',null,{expires: -1,path: '/'});
              logincar();
              topcar();
           });
          }else{
             login2.show();
             login1.hide();
             $('.tui').hide();
          }
      })();
     // topcar();
      $(".btn-sidecart").attr("href","html/car.html");
      $('.nav-category a').each(function(){
            $(this).attr("href","html/list.html");
        });
       });
   $('#pageFooter').load('../html/footer.html',function(){
   });



   //to top
    var backButton=$('.mgj-back2top');  
    function backToTop(){  
        $('html,body').animate({  
            scrollTop: 0  
        }, 800);  
    }  
    backButton.on('click', backToTop);  
      //当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示  
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > $(window).height())  
            backButton.fadeIn();  
        else  
            backButton.fadeOut();  
    });  
    // $(window).trigger('scroll');//触发滚动事件，避免刷新的时候显示回到顶部按钮

    //鼠标i移动到小二维码到处大二维码
    $(".qrcode").on("mouseover",function(){
        $(".qrcode-pic").css("display","block");
    }).on("mouseout",function(){
        $(this).css("display","none");
    })

    //当鼠标移动至某一高度，tabbar-box、cart-hd、shop-hd、tabbar-bg、tabbar-box吸顶。添加类名ui-fixed
    //
    //

    //接收数据=============================================
    // var xiaotu  = document.querySelectorAll("xiaotu");
    var xiaotu = $(".xiaotu");
    var J_BigImg = $("#J_BigImg");
    var bigImg = $("#bigImg");
    var params = decodeURI(location.search).slice(1);
    var paramsArr = params.split("&");
    var paramsObj = {};
    // console.log(paramsArr);
    paramsArr.map(function(item){
        var arr = item.split("=");
        // console.log(arr);
        paramsObj[arr[0]] = arr[1];
    });
    
    let imgurl =paramsObj.imgurl;
    // console.log(imgurl);
    // xiaotu.src = ;
    xiaotu.attr("src",imgurl);
    J_BigImg.attr("src",paramsObj.imgurl);
    J_BigImg.attr("jqimg",paramsObj.imgurl);
    bigImg.attr("href",paramsObj.imgurl);
    // MagicZoom.src=paramsObj.imgurl;
    $(".goods-title").html(paramsObj.title);
    $(".price").html(paramsObj.price);
    $(".lprice").html(paramsObj.lprice);
     let buyBtn =$(".buy-now");//加入购物车按钮
     let shuliang =$(".numB");//加减
     let qty = $(".num-input");//input
      shuliang.on("click",".num-disable",function(){
          var sli = qty.val()-1;
          if(sli>666){
            sli=666;
          }
          qty.val(sli);
      }).on("click",".num-add",function(){
          var bli = parseInt(qty.val())+1;
          if(bli<1){
            bli=1;
          }
          qty.val(bli);
      });
    //买了添加到数据库
    buyBtn.on("click",function(){
      
      let admin =  $.cookie("urname")||"";
      // console.log(admin);
      if(admin==""){
        // location.href="./login.html";
        return;
      }
       var key="qty";
       var value=parseInt(qty.val());
          paramsObj[key]=value;
        // console.log(paramsObj);
      $.ajax({
          url: '../api/car.php',
          type: 'get',
          dataType: 'json',
          
          data: {
                  admin:admin,
                  Sname: paramsObj.title,
                  curprice: paramsObj.price,
                  id: paramsObj.id,
                  imgurl: paramsObj.imgurl,
                  oldprice: paramsObj.lprice ,
                  qty:  paramsObj.qty
          },
           success: function(data){
                         if(data){
                           topcar();
                         }
                        }
          });

    });
  topcar();
    function topcar(){
     let admin = $.cookie("urname")||"";
     if(admin==""){
        location.href="./login.html";
        return;
       }
       $.ajax({
        url: '../api/topcar.php',
        type: 'get',
        dataType: 'json',
        data: {admin:admin},
         success: function(data){
          let touqty=0;
           let ul = $(".max_height_ie6");
          let html = data.map(function(item){
            touqty+=parseInt(item.qty);
            let str ="";
            str=item.imgurl.split("&");
            $(".num").html(touqty);
            return `<li class="topcart" guid="${item.id}">
                      <a rel="nofollow" href="car.html" class="imgbox">
                        <img src="${item.imgurl}" alt="" width="45"></a>
                      <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                      <span class="info">颜色: 黑色 尺码: 均码</span>
                      <span class="price">¥${item.curprice}</span>
                      <span data-stockid="1osumus" class="del">删除</span>
                    </li>`;
          }).join('');
           $(".jian").html(touqty);
          ul.html(html);
          ul.on("click",".del",function(){
             var currentGuid = $(this).closest(".topcart").attr("guid");
             console.log(currentGuid);
             let admin = $.cookie("urname")||"";
             if(admin==""){
                location.href="./login.html";
                return;
               }
                 $.ajax({
                  url: '../api/topcar.php',
                  type: 'get',
                  dataType: 'json',
                  data: {id:currentGuid,admin:admin},
                   success: function(data){
                      let touqty=0;
                      let ul = $(".max_height_ie6");
                      let html = data.map(function(item){
                        touqty+=parseInt(item.qty);
                        let str ="";
                        str=item.imgurl.split("&");
                        return `<li class="topcart" guid="${item.id}">
                              <a rel="nofollow" href="car.html" class="imgbox">
                                <img src="${item.imgurl}" alt="" width="45"></a>
                              <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                              <span class="info">颜色: 黑色 尺码: 均码</span>
                              <span class="price">¥${item.curprice}</span>
                              <span data-stockid="1osumus" class="del">删除</span>
                            </li>`;
                      }).join('');
                    $(".num").html(touqty);
                    $(".jian").html(touqty);
                      ul.html(html);
                      }
                  });
          });

          }
        });
  };
})