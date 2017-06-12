// 基本图文组件对象

var H5ComponentBase = function(Myname,cfg){
	var cfg = cfg || {};
	var id = ("H5_c_"+Math.random()).replace(".","_");
	//为组件添加class，规范class
	var cls = "_H5_c_type_"+cfg.type+ "_H5_c_name_"+Myname;
	var component = $("<div class='H5Component "+cls+"  id='"+id+"'>");

	cfg.text	&& 	component.text(cfg.text);
	cfg.width 	&& 	component.width(cfg.width/2);
	cfg.height 	&& 	component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	//为元素添加背景图片，注意看怎么把文本转换成的URL
	cfg.bg && component.css("backgroundImage","url("+cfg.bg+")");
	// component.css("backgroundColor","blue");
	if (cfg.center ===true) {
		component.css({
			marginLeft: (cfg.width/4 * -1) + 'px',
			left:'50%',
		})
	}
	return component;

}