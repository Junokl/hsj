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
               $("#login2 a").on("click",function(){
                  $.cookie('urname',null,{expires: -1,path: '/'});
                  logincar();
               });
              }else{
                 login2.show();
                 login1.hide();
                 $('.tui').hide();
              }
          })();
          topcar();
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

    //鼠标i移动到小二维码到处大二维码
    $(".qrcode").on("mouseover",function(){
        $(".qrcode-pic").css("display","block");
    }).on("mouseout",function(){
        $(this).css("display","none");
    })




theCar();   
function theCar(){
  let yonghuming = $.cookie("urname")||"";
     console.log(yonghuming);
     if(yonghuming==""){
        location.href="./login.html";
        return;
  }
  $.ajax({
    url : '../api/topcar.php',
    type : 'get',
    dataType : 'json',
    data : {admin:yonghuming},
    success : function(data){
      let cabianqty=0;
      let goodsprice =0;
      let goodsTr = $(".goods");
      let payjian =$(".goodsNum");//买了多少件
      let fuqian = $(".allPrice");//花多少钱
      let html ="";
      html = data.map(function(item){
        cabianqty+=parseInt(item.qty);
        $(".num").html(cabianqty);
        goodsprice=parseInt(item.qty*item.curprice);
        return `<tr class="cart_mitem " data-guid="${item.id}">
                  <td class="vm ">
                  <input type="checkbox" class="cart_thcheck checkbox" data-stockid="117du302"></td>
                  <td class="cart_table_goods_wrap">
                  <a href="" target="_blank" class="cart_goods_img">
                  <img class="cartImgTip" src="${item.imgurl}" width="78" height="78" alt="${item.title}">
                  <img class="pintuanImgTip" src=""></a>
                  <a href="" target="_blank" class="cart_goods_t cart_hoverline" title="${item.title}">${item.Sname}</a>
                  <p class="remind_btm">
                  </td>
                  <td>
                    <p class="cart_lh20">颜色：毛呢外套</p>
                    <p class="cart_lh20">尺码：M</p></td>
                  <td class="cart_alcenter">
                    <p class="cart_lh20 cart_throughline cart_lightgray">￥ ${item.oldprice}</p>
                    <p class="cart_lh20  cart_data_sprice p" >￥ ${item.curprice}</p>
                    <p>
                    <span class="cart_tip_yellow cart_tip_focuswidth">促销价</span></p>
                  </td>
                  <td class="cart_alcenter">
                  <div>
                  <div class="cart_num cart_counter" >
                    <input type="text" class="cart_num_input shu cart_bold" maxlength="6" value="${item.qty}">
                    <span class="cart_num_add add"></span>
                    <span class="cart_num_reduce min disable"></span>
                  </div>
                  </div>
                  </td>
                  <td class="cart_alcenter">
                    <p class="cart_deep_red cart_font16 item_sum" >￥ ${item.curprice*item.qty}</p></td>
                  <td class="cart_alcenter">
                    <a href="javascript:;" class="cart_hoverline del">删除</a></td>
                </tr>`;
      
      }).join("");
      goodsTr.append(html);
      let allBtn = $("#s_all_h");//全选
      let payBtn =$("#payBtn");//付款按钮
      let sCheckbox = $(":checkbox").not("#s_all_h ");
      allBtn.on("click",function(){
        sCheckbox.prop("checked",this.checked);
        yunsuan();
      });
      sCheckbox.on("click",function(){
        $(this).find(":checkbox").prop("checked",payBtn.hasClass('cart_deep_red'));
        quanxuan();
        yunsuan();
      });

      function quanxuan(){//点满全选
        let len = sCheckbox.length;
        let checkedlen = sCheckbox.filter(":checked").length;
        if(len == checkedlen){
            allBtn.prop("checked",true);
        }else{
            allBtn.prop("checked",false);
            yunsuan();
        }
      };

      yunsuan();
      function yunsuan(){
          let input = $(".cart_mitem input:checked");//获取复选框选中的元素
          let jiage=0;
            let zongshu=0;
          $.each(input,function(idx,item){
            jiage += parseInt($(this).closest(".cart_mitem").children('.cart_alcenter').children(".item_sum").text().replace(/[^0-9]/g, ""));
            zongshu+=parseInt($(this).closest(".cart_mitem").find("input[ type='text' ]").val());
          })
          payjian.text(zongshu);
          fuqian.text(`${jiage}`);
      };
      //删除当前tr
      goodsTr.on("click",".del",function(){
        let yonghuming = $.cookie("urname");
        let currentId = $(this).closest(".cart_mitem").attr("data-guid");
        $.ajax({
          url : '../api/topcar.php',
          type : 'get',
          dataType : 'json',
          data:{id:currentId,admin:yonghuming},
          success : function(data){
            if(data){
              theCar();
              topcar();
            }
          }
        });

      });

    }
  })
}



   topcar();
    function topcar(){
     let yonghuming = $.cookie("urname")||"";
     // console.log(yonghuming);
     if(yonghuming==""){
        location.href="./login.html";
        return;
       }
       $.ajax({
        url: '../api/topcar.php',
        type: 'get',
        dataType: 'json',
        data: {admin:yonghuming},
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
          ul.html(html);
          ul.on("click",".action-delete",function(){
             var currentGuid = $(this).attr("data-guid");
             console.log(currentGuid);
             let yonghuming = $.cookie("urname")||"";
             if(yonghuming==""){
                location.href="./login.html";
                return;
               }
                 $.ajax({
                  url: '../api/topcar.php',
                  type: 'get',
                  dataType: 'json',
                  data: {id:currentGuid,admin:yonghuming},
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
                      ul.html(html);
                      }
                  });
          });
          }
        });
  };
})