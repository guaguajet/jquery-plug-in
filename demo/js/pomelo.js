(function(){
	(function(){
		console.log("欢迎使用pomelo组件库,博客园交流地址 http://www.cnblogs.com/pomelott")
	})()

	function initHeight(nodeClass,hObj){
		$(nodeClass).each(function(i,ele){
			hObj[i]=$(ele).outerHeight();
		})
	}


	function slideNav(obj){
		this.set={
			aBtn:".slideBtn",
			aTarget:".slideTarget",
			pos:0
		}
		$.extend(this.set,obj)
		this.init=function(){
			this.targetObj={};
			var _this=this;
			$(this.set.aTarget).each(function(i,ele){
				_this.targetObj[i]=$(ele).offset().top
			})
			$(this.set.aBtn).each(function(i,ele){
				$(ele).attr("index",i)

				$(ele).click(function(){
	
					$("html,body").animate({scrollTop:_this.targetObj[$(this).attr("index")]+_this.set.pos+"px"},"swing")	
				})
			})
			console.log(this.targetObj)
		}
		this.init();
	}



	function tab(obj){
		this.set={
			style:"fade",
			tabBtn:".tab-nav",
			tabBox:".tab-box",
			choseCall:function(index){}

		}
		var index;
		$.extend(this.set,obj);
		this.init=function(){
			var _this=this;
			this.hObj={};
			initHeight(this.set.tabBox+" ul li",this.hObj);
			$(this.set.tabBox+" ul li").eq(0).css({"display":"block","opacity":1})
			$(this.set.tabBtn+" ul li").each(function(i,ele){
				$(ele).attr("index",i);
				$(ele).click(function(){
					index=$(this).attr("index");
					$(_this.set.tabBox+" ul li").each(function(i,ele){
						if(_this.set.style=="fade"){
							$(ele).css({"display":"none","opacity":"0"})
						}
						if(_this.set.style=="slide"){
							$(ele).css({"display":"none","opacity":"0","height":"0px"})
						}
					})
					if(_this.set.style=="fade"){
						console.log(_this)
						$(_this.set.tabBox+" ul li").eq($(this).attr("index")).css({"display":"block"}).animate({"opacity":1},"swing")
					}
					if(_this.set.style=="slide"){
						$(_this.set.tabBox+" ul li").eq($(this).attr("index")).css({"display":"block"}).animate({"opacity":1,"height":_this.hObj[$(this).attr("index")]+"px"},"swing")
					}
					_this.set.choseCall(index);
				})
			})
		}
		this.init();
	}

function backTop(obj){
		this.set={
			btn:"backTop",
			speed:4,
			showPos:200
		}
		$.extend(this.set,obj)
	this.oTop=document.getElementById(this.set.btn);
    this.timer=null;
    this.iNow=null;
    this.init=function(){
    	var flag=1;
    	var _this=this;
    	window.onscroll=function(){
    		var nowTop=document.documentElement.scrollTop||document.body.scrollTop;
    		if(flag==1){
    			clearInterval(_this.timer)
    		}
    		flag=1;
    		if(nowTop>_this.set.showPos){
    			$("#backTop").css({"display":"block"})
    		}else{
    			$("#backTop").css({"display":"none"})
    		}
    	}
    	this.oTop.onclick=function(){
    		_this.timer=setInterval(function(){
    			flag=2;
    			var nowTop=document.documentElement.scrollTop||document.body.scrollTop;
    			if(nowTop<=0){
    				clearInterval(_this.timer);
    			}else{
    				_this.iNow=document.documentElement.scrollTop||document.body.scrollTop;
    				document.documentElement.scrollTop=document.body.scrollTop=_this.iNow+Math.floor((0-_this.iNow)/_this.set.speed);
    			}

    		},30)
    	}
    }
    this.init();
	}


    function scrollTrigger(obj){
        this.set={
            type:"show",
            pos:"#scrollBox",
            delayDistance:0,
            single:true,
            passCallback:function(){},
            backCallback:function(){}
        }
        this.passFlag=false;
        this.backFlag=false;
        $.extend(this.set,obj)
        var _this=this;
        this.init=function(){
                $(window).scroll(function(){
                    if(_this.set.type=="scroll"){
                        if($(window).scrollTop()>=$(_this.set.pos).offset().top+_this.set.delayDistance){
                            if(_this.set.single==true&&_this.passFlag==false){
                                    _this.set.passCallback();
                                    _this.passFlag=true;
                            }else if(_this.set.single==true&&_this.passFlag==true){
                                    
                            }else{
                                _this.set.passCallback();
                            }
                        }
                        if($(window).scrollTop()<$(_this.set.pos).offset().top+_this.set.delayDistance){
                            if(_this.set.single==true&&_this.backFlag==false){
                                    _this.set.backCallback();
                                    _this.backFlag=true;                            
                            }else if(_this.set.single==true&&_this.backFlag==true){
                                
                            }else{
                                _this.set.backCallback();
                            }
                        }
                    }
                    if(_this.set.type=="show"){
                        if($(window).scrollTop()>=$(_this.set.pos).offset().top-$(window).height()+_this.set.delayDistance){
                            if(_this.set.single==true&&_this.passFlag==false){
                                    _this.set.passCallback();
                                    _this.passFlag=true;
                            }else if(_this.set.single==true&&_this.passFlag==true){
                                    
                            }else{
                                _this.set.passCallback();
                            }
                        }
                        if($(window).scrollTop()+$(window).height()<$(_this.set.pos).offset().top+_this.set.delayDistance){
                            if(_this.set.single==true&&_this.backFlag==false){
                                    _this.set.backCallback();
                                    _this.backFlag=true;                            
                            }else if(_this.set.single==true&&_this.backFlag==true){
                                
                            }else{
                                _this.set.backCallback();
                            }
                        }
                    }
                })                    
        }
        this.init();
    }

	function scrollBanner(obj){
    this.set={
        vis:4,
        scroll:4,
        wrap:".scroll-main ul",
        item:".scroll-main ul li",
        btnPre:".pre-scroll",
        btnNext:".next-scroll"
    }
    var _this=this;
    $.extend(this.set,obj)
    this.set.scroll=this.set.scroll>this.set.vis?this.set.scroll%this.set.vis:this.set.scroll;
    var itemNum=$(_this.set.item).length;
    var itemW=$(_this.set.item).outerWidth();
    $(_this.set.wrap).css({"width":itemNum*itemW+"px"})

    $(_this.set.btnPre).eq(0).click(function(){
        var nowL=parseInt($(_this.set.wrap).eq(0).css("left"))
        if(nowL>=0){
            $(_this.set.wrap+":not(:animated)").eq(0).animate({"left":-(itemNum-_this.set.vis)*itemW+"px"})
        }else{
            $(_this.set.wrap+":not(:animated)").eq(0).animate({"left":nowL+_this.set.scroll*itemW+"px"})
        }
        
    })
    $(_this.set.btnNext).eq(0).click(function(){
        var nowL=parseInt($(_this.set.wrap).eq(0).css("left"))
        if(nowL<=-(itemNum-_this.set.vis)*itemW){
            $(_this.set.wrap+":not(:animated)").eq(0).animate({"left":"0px"})
        }else{
            $(_this.set.wrap+":not(:animated)").eq(0).animate({"left":nowL-_this.set.scroll*itemW+"px"})
        }
    })
	}

	$.extend(window,{slideNav:slideNav,tab:tab,backTop:backTop,scrollTrigger:scrollTrigger,scrollBanner:scrollBanner})
})()