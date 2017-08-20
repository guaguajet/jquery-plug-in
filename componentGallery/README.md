# jquery-plug-in
<h1>基于JQUERY的插件库，喜欢请在右上角给星，好人一生平安！组件的详细使用方法请进入相应的文件夹查看！</h2>
<h2>组件库（componentGallery）</h2>
<h4>使用方法</h4>
<div>
	<p>1.引入css文件（建议复制粘贴至项目css文件中）</p>
	<p>2.引入pomelo.js文件</p>
	<p>3.创建相应的对象，并传入参数。</p>
</div>
<h4>导航滚动(slideNav)参数说明</h4>
<p>
			var test=new slideNav({    <br>
			aBtn:".slideBtn",    触发器，传入类选择器<br>
			aTarget:".slideTarget",   滚动目标点，传入类选择器 <br>
			pos:0   目标点的位置浮动，可传入负值<br>
		})<br>
</p>
<h4>万能选项卡(tab)参数说明</h4>
<p>
			var test=new tab({    <br>
			style:"fade",   效果,fade(淡入，默认效果)，slide(滑动)<br>
			tabBtn:".tab-nav",  选项卡按钮，参数为类选择器。<br>
			tabBox:".tab-box",   选项卡盒子，参数为类选择器。<br>
			choseCall:function(index){}  选中后的回调函数，index为当前选中的按钮的索引值。<br>
		})<br>
</p>
<h4>多功能回到顶部(backTop)参数说明</h4>
<p>
			var test=new backTop({    <br>
			btn:"backTop",    回到顶部按钮的ID（此处无#）<br>
			speed:4,    滚动速度1-10,值越小速度越大<br>
			showPos:200    返回顶部按钮出现的位置，200为在滚动条滚动200后出现回到顶部按钮。<br>
		})<br>
</p>
<h4>滚动触发器(scrollTrigger)参数说明</h4>
<p>
			var test=new scrollTrigger({    <br>
			pos:"#scrollBox",     触发位置，传入ID选择器，在此意为滚动到看到#scrollBox结点后触发<br>
			delayDistance:0,      在触发位置的浮动距离，单位为像素，可传入负值<br>
			single:true,      是否为单次触发<br>
			passCallback:function(){},         超过指定位置后的回调函数<br>
			backCallback:function(){}         回滚过指定位置后的回调函数<br>
		})<br>
</p>

