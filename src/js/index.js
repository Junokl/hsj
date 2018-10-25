jQuery(function($){
    //页面加载数据
    $('#pageHeader').load('html/header.html',function(){
          (function logincar(){
             let login1 = $("#login1");
              let login2 = $("#login2");
              let admin = $.cookie("urname");
              if(admin){
                login2.hide();
               login1.show().find("#admin").text($.cookie("urname"));
               $(".tuichu").on("click",function(){
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
          $(".nav_wrap").attr("href","html/car.html");
          $('.nav_wrap a').each(function(){
                $(this).attr("href","html/list.html");
            });
       });
   $('#pageFooter').load('html/footer.html',function(){
        $("#js_carttitle").on("click",function(){
            location.href="./html/car.html";
        })
   });
   //当鼠标移动时改变商品列表
   $(".nav_list").find('li').on("mouseover",function(){
        // console.log($(this));
        var indx = $(".nav_list").find('li').index(this);
        // console.log(indx);
        // console.log( $(this).parent(".nav_list").next().find(`.A_${indx}`));
        $(this).parent(".nav_list").next().find(`.A_${indx}`).show();
   });
    $(".nav_list").find('li').on("mouseout",function(){
        // console.log($(this));
        var indx = $(".nav_list").find('li').index(this);
        // console.log( $(this).parent(".nav_list").next().find(`.A_${indx}`));
        $(this).parent(".nav_list").next().find(`.A_${indx}`).hide();
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
    $(window).trigger('scroll');//触发滚动事件，避免刷新的时候显示回到顶部按钮

    // $('.banner').setSlide({
    //       fullScreenw:true,
    //       pagination:true,
    //       slideLih:440,
    //       pagingTrigger:'hover',
    //       slideTime:2000,
    //       autoPlay:true
    //     });
    // $(window).resize(function(){
    //        $('.banner').setSlide({
    //         fullScreenw:true,
    //         slideLih:440,
    //         pagingTrigger:'hover',
    //         slideTime:2000,
    //         autoPlay:true
    //       });
    //     });
    // $('.slide-box-demo1').setSlide({
    //   isBlock:true,
    //   pagination:true
    // });
    // $('.slide-box-demo2').setSlide({
    //   isBlock:true,
    //   pagination:true,
    //   slideLiw:651,
    //   slideLih:555
    // });
    //移入显示二维码
    // $("#qrcode").on("mouseover",function(){
    //   ${"#detail-qrcode").css("display","block");
    // })

    // $(".fill_img").on("mouseover",function(){
    //   $(".fill_img").hide("top","15");
    // }).on("mouseout",function(){
    //   $(".fill_img").css("top","0");
    // })
    $.ajax({
        url : "api/index.php",
        type : "GET",
        dataType: 'json',
    success : function(data){
       shang(data);
       xia(data);
        }
    });
    function shang(data){
      let output = $(".daArr");
        let html = "";
         $.each(data,function(idx,item){
                 if(idx>=4){  return;  }
            html +=  ` <div class="output fl">
                    <a href="" class="cube-acm-node has-log-mod"  >
                      <div class="swiper-img-wrap J_dynamic_imagebox J_loading_success">
                      <img class="J_dynamic_img fill_img" src="${item.imgurl}"></div>
                      <p class="swiper-item-title">${item.title}</p>
                      <p class="swiper-item-price">
                        <span>¥</span>${item.price}</p></a>
                  </div> `;                
        });
        output.html(html);
    }
     function xia(data){
      let output = $(".dbArr");
        let html = "";
        let xiaArr=[];
        console.log(data);
        let xiaStr=data[8];
        // xiaStr=data.split(",");
        // console.log(xiaStr);
        
        for(let i=8;i<data.length;i++){
          // console.log(data);
          console.log(xiaStr);
        }
         $.each(data,function(idx,item){
                 if(idx>=6){  return;  }
            html +=  ` <div class="output fl">
                    <a href="" class="cube-acm-node has-log-mod"  >
                      <div class="swiper-img-wrap J_dynamic_imagebox J_loading_success">
                      <img class="J_dynamic_img fill_img" src="${item.imgurl}"></div>
                      <p class="swiper-item-title">${item.title}</p>
                      <p class="swiper-item-price">
                        <span>¥</span>${item.price}</p></a>
                  </div> `;                
        });
        output.html(html);
    }


    topcar();
    function topcar(){
     let admin = $.cookie("urname")||"";
     // console.log(admin);
     if(admin==""){
     //    location.href="html/login.html";
        return;
       }
       $.ajax({
        url: './api/topcar.php',
        type: 'get',
        dataType: 'json',
        data: {admin:admin},
         success: function(data){
                // console.log(data);
                let cabianqty=0;
                 let ul = $(".max_height_ie6");
                let html = data.map(function(item){
                  cabianqty+=parseInt(item.qty);
                  let images = [];
                  let str ="";
                  str=item.imgurl.split("&");
                  $(".num").html(cabianqty);
                  $.each(str,function(idx,item){
                    images.push(item.substr(3));
                  });
                  return `<li guid="${item.id}">
                            <a rel="nofollow" href="car.html" class="imgbox">
                              <img src="${images[0]}" alt="" width="45"></a>
                            <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                            <span class="info">颜色: 黑色 尺码: 均码</span>
                            <span class="price">¥${item.curprice}</span>
                            <span data-stockid="1osumus" class="del">删除</span>
                          </li>`;
                }).join('');
                 $(".jian").html(cabianqty);
                 // console.log(cabianqty);
                // cebianlan(cabianqty);
                ul.html(html);
                ul.on("click",".action-delete",function(){
                   var currentGuid = $(this).attr("data-guid");
                   console.log(currentGuid);
                   let admin = $.cookie("urname")||"";
                   if(admin==""){
                   //    location.href="html/login.html";
                      return;
                     }
                       $.ajax({
                        url: './api/topcar.php',
                        type: 'get',
                        dataType: 'json',
                        data: {id:currentGuid,admin:admin},
                         success: function(data){
                            let cabianqty=0;
                            let ul = $(".max_height_ie6");
                            let html = data.map(function(item){
                              cabianqty+=parseInt(item.qty);
                              let images =[];
                              let str ="";
                              str=item.imgurl.split("&");
                              $.each(str,function(idx,item){
                                images.push(item.substr(3));
                              });
                              return `<li guid="${item.id}">
                                    <a rel="nofollow" href="car.html" class="imgbox">
                                      <img src="${images[0]}" alt="" width="45"></a>
                                    <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                                    <span class="info">颜色: 黑色 尺码: 均码</span>
                                    <span class="price">¥${item.curprice}</span>
                                    <span data-stockid="1osumus" class="del">删除</span>
                                  </li>`;
                            }).join('');
                          $(".jian").html(cabianqty);
                            ul.html(html);
                            }
                        });
                });
          }
        });
  };

})