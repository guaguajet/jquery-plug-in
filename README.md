<h1>基于JQUERY的插件库，喜欢请在右上角给星，好人一生平安！附加demo！</h2>
<h2>组件库（componentGallery）</h2>
<h4>使用方法</h4>
<div>
	<p style="line-height: 26px;">1.引入css文件（建议复制粘贴至项目css文件中）</p>
	<p style="line-height: 26px;">2.引入pomelo.js文件（需要引入jquery）</p>
	<p style="line-height: 26px;">3.创建相应的对象，并传入参数。</p>
</div>
<hr>
<h4>导航滚动(slideNav)参数说明</h4>
<p style="line-height: 20px;">
			var test=new slideNav({    <br><br>
			aBtn:".slideBtn",    触发器，传入类选择器<br><br>
			aTarget:".slideTarget",   滚动目标点，传入类选择器 <br><br>
			pos:0   目标点的位置浮动，可传入负值<br><br>
		})<br><br>
</p>
<hr>
<h4>万能选项卡(tab)参数说明</h4>
<p style="line-height: 20px;">
			var test=new tab({    <br><br>
			style:"fade",   效果,fade(淡入，默认效果)，slide(滑动)<br><br>
			tabBtn:".tab-nav",  选项卡按钮，参数为类选择器。<br><br>
			tabBox:".tab-box",   选项卡盒子，参数为类选择器。<br><br>
			choseCall:function(index){}  选中后的回调函数，index为当前选中的按钮的索引值。<br><br>
		})<br><br>
</p>
<hr>
<h4>多功能回到顶部(backTop)参数说明</h4>
<p>速度可调控，带隐藏效果，返回过程中可回滚。</p>
<p style="line-height: 20px;">
			var test=new backTop({    <br><br>
			btn:"backTop",    回到顶部按钮的ID（此处无#）<br><br>
			speed:4,    滚动速度1-10,值越小速度越大<br><br>
			showPos:200    返回顶部按钮出现的位置，200为在滚动条滚动200后出现回到顶部按钮。<br><br>
		})<br><br>
</p>
<hr>
<h4>滚动触发器(scrollTrigger)参数说明</h4>
<p style="line-height: 20px;">
			var test=new scrollTrigger({    <br><br>
			type:"show",    默认为“show”，“show”意为当能够在可视区看到指定位置的节点时触发，“scroll”意为浏览器滚动过指定结点时触发。<br><br>
			pos:"#scrollBox",     触发位置，传入ID选择器，在此意为滚动到看到#scrollBox结点后触发<br><br>
			delayDistance:0,      在触发位置的浮动距离，单位为像素，可传入负值<br><br>
			single:true,      是否为单次触发<br><br>
			passCallback:function(){},         超过指定位置后的回调函数<br><br>
			backCallback:function(){}         回滚过指定位置后的回调函数<br><br>
		})<br><br>
</p>
<hr>
<h4>水平滚动banner(scrollBanner)参数说明</h4>
<p style="line-height: 20px;">
new scrollBanner({         <br><br>
vis:4,                //中间区域可显示的 li 个数 <br><br>
scroll:2,               //每次滚过的li个数，若大于vis，则取 scroll%vis的余数<br><br>
wrap:".scroll-main ul",                 //中间区域的包裹层选择器<br><br>
item:".scroll-main ul li",          //中间区域每个li的选择器<br><br>
btnPre:".pre-scroll",                //左滚按钮的选择器<br><br>
btnNext:".next-scroll"           //右滚按钮的选择器<br><br>
});<br><br>
</p>


