jQuery(function($){
    //页面加载数据
    $('#pageHeader').load('../html/header.html',function(){
          (function logincar(){
             let login1 = $("#login1");
              let login2 = $("#login2");
              
              let admin = $.cookie("urname");
              if(admin){
                login2.hide();
               login1.show().find("#admin").text($.cookie("urname"));
               $(".tuichu").on("click",function(){
                  location.href="html/login.html";
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
        $("#js_carttitle").on("click",function(){
            location.href="./html/car.html";
        })
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


    //传接数据
    
    $.ajax({
        url : "../api/list.php",
        type : "GET",
        dataType: 'json',
    success : function(data){
        xianshi(data);
        chuanchu(data);
        Pprice(data);
        Phot(data);
        Ptime(data);
        }

    });
    //传输据=============================================== 
    function chuanchu(data){
      let chuan = $(".chuan");
      for(let i=0;i<chuan.length;i++){
        chuan[i].index = i;
        $(chuan[i]).on("click",function(){
          let params = "";
          let n = this.index;
          for(var key in data[n]){
            params += key + "=" + data[n][key] + "&";
          }
          params = params.slice(0,-1);
          location.href = "../html/goods.html?" + encodeURI(params);
        });
      }
    }
// <a href="../images/g3.jpg" title="hahahah" data-options="zoomPosition: inner" rel="zoom-position:bottom" class="MagicZoom" data-options="autostart:true;"><img src="../images/g3.jpg"/></a>
    function xianshi(data){
      let output = $(".output");
        let html = data.map(function(item){
            return `<div class="iwf goods_item ratio3x4" data-guid="${item.id}" >
              <a class="likeLink yahei" href="" >找相似</a>
              <a  href="#" class="img pagani_log_link J_dynamic_imagebox loading_bg_120 J_loading_success"   >
                
                <img class="J_dynamic_img fill_img chuan" src="${item.imgurl}"  ><span class="date">${item.time}</span></a>
              <a  href="" class="pagani_log_link goods_info_container" >
                <p class="title yahei fl" style="height:40px;margin-bottom:3px">${item.title}</p>
                <div class="goods_info fl">
                  <b class="price_info yahei">¥${item.price}</b>
                  <p class="org_price fl yahei">¥&nbsp;
                    <span>${item.lprice}</span></p>
                  <span class="fav_num fr">
                    <img src="../images/xing.png" height="30" width="32" >${item.shouc}</span></div>
              </a>
            </div>`;
        }); 
        output.html(html);
    }
    //分页
    
    
    //移动入弹出相似
    $(".goods_item").on("mouseover",function(){
      $(".likeLink").show();
    }).on("mouseout",function(){
      $(".likeLink").hide();
    })
        
        //价格排序
      function Pprice(data){
        $(".priceBtn").on("click",function(data){
          let compare = true;
          if(compare==true){
            let str = data.sort(function(a,b){
              return a.price-b.price;
            });
              xianshi(data);
          }else if(compare==false){
            let str = data.sort(function(a,b){
              return b.price-a.price;
            });
              xianshi(data);
          }
        });
      }
      function Phot(data){
        //人气排序
        $(".reBtn").on("click",function(data){
          let compare_h = true;
          if(compare_h==true){
            let str = data.sort(function(a,b){
              return a.shouc-b.shouc;
            });
              xianshi(data);
          }else if(compare_h==false){
            let str = data.sort(function(a,b){
              return b.shouc-a.shouc;
            });
              xianshi(data);
          }
        });
      }
      function Ptime(data){
        //时间排序
        $(".dateBtn").on("click",function(data){
          let compare_t = true;
          if(compare_t==true){
            let str = data.sort(function(a,b){
              return Date.parse(a.time)-Date.parse(b.time);
            });
          }else if(compare_t==false){
            let str = data.sort(function(a,b){
              return Date.parse(b.time)-Date.parse(a.time);
            });
          }
        });
      };
  topcar();
    function topcar(){
     let admin = $.cookie("urname")||"";
     console.log(admin);
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
          console.log(data);
          let cabianqty=0;
           let ul = $(".max_height_ie6");
          let html = data.map(function(item){
            cabianqty+=parseInt(item.qty);
            let str ="";
            str=item.imgurl.split("&");
            $(".num").html(cabianqty);
            return `<li guid="${item.id}">
                      <a rel="nofollow" href="car.html" class="imgbox">
                        <img src="${item.imgurl}" alt="" width="45"></a>
                      <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                      <span class="info">颜色: 黑色 尺码: 均码</span>
                      <span class="price">¥${item.curprice}</span>
                      <span data-stockid="1osumus" class="del">删除</span>
                    </li>`;
          }).join('');
           $(".jian").html(cabianqty);
          ul.html(html);
          ul.on("click",".action-delete",function(){
             var currentGuid = $(this).attr("data-guid");
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
                      let cabianqty=0;
                      let ul = $(".max_height_ie6");
                      let html = data.map(function(item){
                        cabianqty+=parseInt(item.qty);
                        let str ="";
                        str=item.imgurl.split("&");
                        return `<li guid="${item.id}">
                              <a rel="nofollow" href="car.html" class="imgbox">
                                <img src="${item.imgurl}" alt="" width="45"></a>
                              <a rel="nofollow" href="car.html" target="_blank" class="title" >${item.Sname}</a>
                              <span class="info">颜色: 黑色 尺码: 均码</span>
                              <span class="price">¥${item.curprice}</span>
                              <span data-stockid="1osumus" class="del">删除</span>
                            </li>`;
                      }).join('');
                    $(".jian").html(cabianqty);
                      // cebianlan(cabianqty);
                      ul.html(html);
                      }
                  });
          });
          }
        });
  };
        
})