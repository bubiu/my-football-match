var url = 'http://op.juhe.cn/onebox/football/league';
var key = '57f9aa5bc196693fc582f4edc81a1034'
Page({
    data:{
        matchlist1:[],
        matchlist2:[],
        tabs:{},
        key:'',
        sheshoubang:[],
        jifenbang:[],
        saicheng:[],
        isFirst:true,
        tag:'saicheng'
    },
    onLoad: function (){
        var that = this;
        wx.request({
          url: url + '?key=' + key + '&league=德甲',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: { 
              'content-type': 'application/json'
          }, // 设置请求的 header
          success: function(res){
            // success
            var data = res.data.result;
            console.log(data)
            that.setData({
                key: data.key,
                matchlist1: data.views.saicheng1,
                matchlist2: data.views.saicheng2,
                sheshoubang: data.views.sheshoubang,
                jifenbang: data.views.jifenbang,
                tabs: data.tabs,
                saicheng: data.views.saicheng1
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
    },
    firstSaicheng: function(){
        var that = this;
        that.setData({
            saicheng:that.data.matchlist1,
            isFirst:true
        });
    },
    secondSaicheng: function(){
        var that = this;
        that.setData({
            saicheng:that.data.matchlist2,
            isFirst:false
        });
    },
    firstTab:function(){
        var that = this;
        that.setData({
            tag:'saicheng'
        });
    },
    secondTab:function(){
        var that = this;
        that.setData({
            tag:'jifenbang'
        });
    },
    thirdTab:function(){
        var that = this;
        that.setData({
            tag:'sheshoubang'
        });
    }
})