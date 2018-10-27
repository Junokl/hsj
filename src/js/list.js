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
        if ($(window).scrollTop() > $(window).height()) { 
            backButton.fadeIn();  
        }else  {
            backButton.fadeOut(); 
      }        
    });  
    $(window).trigger('scroll');//触发滚动事件，避免刷新的时候显示回到顶部按钮

    $(".selectbox").on("mouseover",function(){
      $(this).addClass("sele_hover");
    }).on("mouseout",function(){
      $(this).removeClass("sele_hover");
    });


    //传输据=============================================== 
    function chuanchu(data){
      // let chuan = $(".chuan");
      $(".chuan").on("click",function(){
        // console.log(data.dataArr);
          let params = "";
          let n = $(this).closest(".goods_item").attr("data-guid");
          console.log(n);
          for(let i=0;i<data.dataArr.length;i++){
                 for(var key in data.dataArr[i]){
                  let dataArr = data.dataArr[i];
                  // console.log(dataArr["id"]);
                  if(dataArr["id"]==n){
                     params += key + "=" + data.dataArr[i][key] + "&";
                  }
                }
              
          }
         
          params = params.slice(0,-1);
          // console.log(params);
          location.href = "../html/goods.html?" + encodeURI(params);
        });
      // for(let i=0;i<chuan.length;i++){
      //   chuan[i].index = i;
        
      // }
    }


// <a href="../images/g3.jpg" title="hahahah" data-options="zoomPosition: inner" rel="zoom-position:bottom" class="MagicZoom" data-options="autostart:true;"><img src="../images/g3.jpg"/></a>
      $.ajax({
      url :'../api/fenye.php',
      type : 'get',
      dataType : 'json',
      data :{qty:20},
      cache : false,
      success : function(data){
        // console.log(data);
             
        let output =$(".output");
        let prev =$(".append");
        let pagelen = (data.len/data.qty)+1;
        // console.log(pagelen);
        xianshi(data);
        
        paixu(data);
        chuanchu(data);
        
        for(var i=1;i<pagelen;i++){
          prev.before(`<a href="javascript:void(0);" class="flip">${i}</a>`);
          $(".pageview a").not("prev").not(".next").on("click",function(){
            var page = $(this).text();
            // console.log(page);
            $.ajax({
              url :'../api/fenye.php',
              type :'get',
              dataType : 'json',
              cache : false,
              data :{qty:20,curpage:page},
              success : function(data){
                output.empty();
                xianshi(data);
                
                paixu(data);
                chuanchu(data);
                
              }
            })
          })
        }

      }
    });
    function xianshi(data){

      let output = $(".output");
      $.each(data.dataArr,function(idx,item){//分页
        // console.log(item)
             
        // console.log(item);
        // chuanchu(data);//点击排序后重新传接，有G
        let html = `<div class="iwf goods_item ratio3x4" data-guid="${item.id}" >
                    
                    <a  href="javascript:void(0);" class="img pagani_log_link J_dynamic_imagebox loading_bg_120 J_loading_success"   >
                      
                      <img class="J_dynamic_img fill_img chuan" src="${item.imgurl}"  ><span class="date">${item.time}</span></a>
                    <a  href="javascript:void(0);" class="pagani_log_link goods_info_container chuan" >
                    <a class="likeLink yahei" href="javascript:void(0);" >找相似</a>
                      <p class="title yahei fl chuan" style="height:40px;margin-bottom:3px">${item.title}</p>
                      <div class="goods_info fl">
                        <b class="price_info yahei">¥${item.price}</b>
                        <p class="org_price fl yahei">¥&nbsp;
                          <span>${item.lprice}</span></p>
                        <span class="fav_num fr">
                          <img src="../images/xing.png" height="30" width="32" >${item.shouc}</span></div>
                    </a>
                  </div>`;

                  output.append(html);
      });
            
        
    }
    

    
    //移动入弹出相似
    $(".goods_item").on("mouseover",function(){
      $(".likeLink").show();
    }).on("mouseout",function(){
      $(".likeLink").hide();
    })
        

 paixu();
  function paixu(data){
    var pd=true;
    let output = $(".output");
    // console.log(data);
    $(".action-sort").unbind("click").bind("click",function(){
      // 异步执行的时候，会遇上点击一下，代码就执行了多次,引起这个原因很可能就是事件重复调用
      // unbind() 方法移除被选元素的事件处理程序
      let num = $(this).attr("data-sort");
          if(pd==true&&num==1){
               pd=false;
             let renqi={}
              let hot = data.dataArr.sort(function(a,b){
                  return parseInt(b.shouc) - parseInt(a.shouc);
              });
              renqi["dataArr"]=hot;
              output.empty();
              xianshi(renqi);
              chuanchu(data);
              return false;
          }else if(pd==false&&num==1){
              pd=true;
             let renqi={};
              let hot = data.dataArr.sort(function(a,b){
                  return parseInt(a.shouc) - parseInt(b.shouc);
              });
              renqi["dataArr"]=hot;
              output.empty();
              xianshi(renqi);
              chuanchu(data);
              return false;
          }
          if(pd==true&&num==2){
            pd=false;
             let shijian={}
              let _shijian = data.dataArr.sort(function(a,b){
                  return  Date.parse(b.time) - Date.parse(a.time);
              });
              shijian["dataArr"]=_shijian;
              output.empty();
              xianshi(shijian);
              chuanchu(data);
              return false;
          }else if(pd==false&&num==2){
              pd=true;
             let shijian={}
              let _shijian = data.dataArr.sort(function(a,b){
                  return  Date.parse(a.time) - Date.parse(b.time);
              });
              shijian["dataArr"]=_shijian;
              output.empty();
              xianshi(shijian);
              chuanchu(data);
              return false;
          }
          if(pd==true&&num==3){
               pd=false;
             let jiage={}
              let _jiage = data.dataArr.sort(function(a,b){
                  return parseInt(b.price) - parseInt(a.price);
              });
              jiage["dataArr"]=_jiage;
              output.empty();
              xianshi(jiage);
              chuanchu(data);
              return false;
          }else if(pd==false&&num==3){
              pd=true;
             let jiage={};
              let _jiage = data.dataArr.sort(function(a,b){
                  return parseInt(a.price) - parseInt(b.price);
              });
              jiage["dataArr"]=_jiage;
              output.empty();
              xianshi(jiage);
              chuanchu(data);
              return false;
          }
          
    })
  }

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