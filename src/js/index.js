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
    $(".selectbox").on("mouseover",function(){
      $(this).addClass("sele_hover");
    }).on("mouseout",function(){
      $(this).removeClass("sele_hover");
    });



    var unslider04 = $('#b04').unslider({
    dots: true,

    });

    data04 = unslider04.data('unslider');
    
    $('.unslider-arrow04').click(function() {
          var fn = this.className.split(' ')[1];
          data04[fn]();
      });

    var unslider05 = $('#b05').unslider({
      dots: true,

    });

    data05 = unslider05.data('unslider');
    
    $('.unslider-arrow05').click(function() {
          var fn = this.className.split(' ')[1];
          data05[fn]();
      });

   


    $.ajax({
      url :'api/list.php',
      type : 'get',
      dataType : 'json',
      data :{},
      success : function(data){
        let output = $(".goodshop");
        $.each(data,function(idx,item){
          // console.log(item);
          var imgurl =[];
          let str ="";
          str = item.imgurl.split("&");
          // console.log(str);
          $.each(str,function(idx,item){
            imgurl.push(item.substr(3));
            // console.log(imgurl);
          });
          // chuanchu(data);
          let html = `<div class="iwf goods_item ratio3x4" data-guid="${item.id}" >
                      
                      <a  href="javascript:void(0);" class="img pagani_log_link J_dynamic_imagebox loading_bg_120 J_loading_success"   >
                        
                        <img class="J_dynamic_img fill_img chuan" src="${imgurl}"  ><span class="date">${item.time}</span></a>
                      <a  href="javascript:void(0);" class="pagani_log_link goods_info_container chuan" >
                      <a class="likeLink yahei" href="javascript:void(0);" >找相似</a>
                        <p class="title yahei fl chuan" style="height:40px;margin-bottom:3px">${item.title}</p>
                        <div class="goods_info fl">
                          <b class="price_info yahei">¥${item.price}</b>
                          <p class="org_price fl yahei">¥&nbsp;
                            <span>${item.lprice}</span></p>
                          <span class="fav_num fr">
                            <img src="images/xing.png" height="30" width="32" >${item.shouc}</span></div>
                      </a>
                    </div>`;

                    output.append(html);
        });
      }
    });

      
            
        
  // $(".goods_banner1").lmCarousel({fade:init()});

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
        // console.log(data[1]);
        let xiaStr=data[8];
        // xiaStr=data.split(",");
        // console.log(xiaStr);
        
        for(let i=8;i<data.length;i++){

          // console.log(len);
          // console.log(xiaStr);
        }
         $.each(data,function(idx,item){
          // console.log(idx);
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
        output.append(html);
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
                let touqty=0;
                 let ul = $(".max_height_ie6");
                let html = data.map(function(item){
                  touqty+=parseInt(item.qty);
                  let imaurl = [];
                  let str ="";
                  str=item.imgurl.split("&");
                  $(".num").html(touqty);
                  $.each(str,function(idx,item){
                    imaurl.push(item.substr(3));
                  });
                  return `<li guid="${item.id}">
                            <a rel="nofollow" href="car.html" class="imgbox">
                              <img src="${imaurl}" alt="" width="45"></a>
                            <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                            <span class="info">颜色: 黑色 尺码: 均码</span>
                            <span class="price">¥${item.curprice}</span>
                            <span data-stockid="1osumus" class="del">删除</span>
                          </li>`;
                }).join('');
                 $(".jian").html(touqty);
                 // console.log(touqty);
                ul.html(html);
                ul.on("click",".del",function(){
             var currentGuid = $(this).closest(".topcart").attr("guid");
             let admin = $.cookie("urname")||"";
             if(admin==""){
                // location.href="./login.html";
                return;
               }
                 $.ajax({
                  url: './api/topcar.php',
                  type: 'get',
                  dataType: 'json',
                  data: {id:currentGuid,admin:admin},
                   success: function(data){
                      let touqty=0;
                      let ul = $(".max_height_ie6");
                      let html = data.map(function(item){
                        touqty+=parseInt(item.qty);
                        let imgurl=[];
                        let str ="";
                        str = item.imgurl.split("&");
                        $.each(str,function(idx,item){
                          imgurl.push(item.substr(3));
                          // console.log(imgurl);
                        });
                        return `<li class="topcart" guid="${item.id}">
                              <a rel="nofollow" href="car.html" class="imgbox">
                                <img src="${imgurl}" alt="" width="45"></a>
                              <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                              <span class="info">颜色: 黑色 尺码: 均码</span>
                              <span class="price">¥${item.curprice}</span>
                              <span data-stockid="1osumus" class="del">删除</span>
                            </li>`;
                      }).join('');
                    $(".jian").html(touqty);
                    $(".num").html(touqty);
                      ul.html(html);
                      }
                  });
          });
          }
        });
  };

})