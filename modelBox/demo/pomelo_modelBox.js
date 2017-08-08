	(function(){
		function Dialog(obj){
			this.settings={
				cover:true,
				num:0,			
				pos:"center",
				w:300,
				h:300,
				scroll:true,
				content:true,
				closeBtn:true,
				style:"fade"
			}
			$.extend(this.settings,obj)
			if(this.settings.num){
				this.init();
			}else{
				alert("模态框初始化时num项为必填！")
			}



		}
		var markFlag=false;
		Dialog.prototype.init=function(){
			this.oDialog=$("<div class='model-box'></div>");
			this.oDialog.appendTo($("body"));
			this.setData();
			if(this.settings.pos=="center"){
				this.oDialog.css({
						"left":(document.documentElement.clientWidth-parseInt(this.settings.w))/2+"px",
						"top":(document.documentElement.clientHeight-parseInt(this.settings.h))/2+"px"
				})
			}
			if(this.settings.content==true){
				this.fillContent();
			}

			if(this.settings.pos=="rightBottom"){
				this.oDialog.css({
						"right":0,
						"bottom":0
				})
			}
			if(this.settings.style=="fade"){
				this.oDialog.css({"opacity":0})
				this.oDialog.animate({"opacity":"1"},"swing");
			}
			if(this.settings.style=="slide"){
                this.oDialog.css({"top":-this.settings.h+"px"})
                if(this.settings.pos=="center"){
                this.oDialog.animate({"top":(document.documentElement.clientHeight-this.settings.h)/2+"px","opacity":"1"},"swing")                	
            }else if(this.settings.pos=="rightBottom"){
            	this.oDialog.animate({"top":(document.documentElement.clientHeight-this.settings.h)+"px","opacity":"1"},"swing") 
            }

			}
			if(this.settings.cover==true){
				this.createMark();
				if(this.settings.style=="fade"){
					$("#mark").animate({"opacity":"0.5"},"swing")
				}
			}
			if(this.settings.scroll==false){
				$("body").css({"height":document.documentElement.clientHeight+"px","overflow":"hidden"})
			}


			
			if(this.settings.closeBtn==true){
				this.createBtn();
			}
			
		}

		Dialog.prototype.setData=function(){

			this.oDialog.css({
				"width":this.settings.w+"px",
				"height":this.settings.h+"px"
			})

		}
		Dialog.prototype.createMark=function(){
			this.mark=$("<div id='mark'></div>")
			$("#mark").css({"opacity":"0.5","display":"block"})
			if(markFlag==false){
			   this.mark.appendTo($("body"))
			}
			markFlag=true;
		}
		Dialog.prototype.createBtn=function(){
			var _this=this;
			this.closeBtn=$("<i class='closeBtn'><img src='images/close.png'></i>")
			this.closeBtn.appendTo(this.oDialog)
			this.closeBtn.click(function(){
				_this.close();
			})
		}

		
		Dialog.prototype.fillContent=function(){
			this.oModelCon=$(".model-con"+this.settings.num+"").eq(0);
			this.oModelCon.appendTo(this.oDialog)
			this.oDialog.find(".model-con").css({"display":"block"})
		}
		Dialog.prototype.close=function(){
            	this.oDialog.animate({"opacity":"0"})
            	this.oDialog.css({"display":"none"})
            	if(this.settings.cover==true){
            		$("#mark").animate({"opacity":"0"})
            		$("#mark").css({"display":"none"})
            		markFlag==false;
            	}
		}


		window.Dialog=Dialog;
	})()