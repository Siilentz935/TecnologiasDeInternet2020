/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-opacity-localstorage-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function v(a){i.cssText=a}function w(a,b){return v(l.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.opacity=function(){return w("opacity:.55"),/^0.55$/.test(i.opacity)},m.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(a){return!1}};for(var A in m)u(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),h=j=null,e._version=d,e._prefixes=l,e.testStyles=s,e}(this,this.document);

/*  Image Rotator Widget
* 	Uncompressed Version: /js/imgrotate.js 10/3/17
*/

$.widget("sw.imgrotate",{options:{startindex:0,transition:"fade",slideloop:!0,dots:!1,arrows:!0,timer:5E3,fadetimer:1E3,slidetimer:400,thumbs:null},_create:function(){this.state={index:this.options.startindex,cells:null,wrapper:null,dotselector:null,timerid:null,timeractive:!1,hasthumbs:!1,arrowleft:null,arrowright:null,inorder:!0,loopactive:!1,disabled:!1};this.options=this._constrain(this.options);this.state.cells=this.element.children();var a=this.state.cells;if(1<a.length){this.state.cells.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active");
var b=this.options.transition;this.state.wrapper=this.element.wrap("<div class='sw-imgrotate-wrap'></div>").parent(".sw-imgrotate-wrap");var c=this.state.wrapper;c.css("position","relative");this.element.css({"z-index":2});if("slide"===b)for(this.element.css({position:"relative",overflow:"hidden"}),i=b=0;i<a.length;i++)b=100*i-100*this.state.index,a.eq(i).css({position:"absolute",top:0,left:b+"%"});else"fade"===b&&(this.element.css("position","relative"),a.css({position:"absolute",top:0,left:0}),
a.not(":eq("+this.state.index+")").css({opacity:0,visibility:"hidden"}));this.options.dots&&this._initdots();this.state.hasthumbs&&this._initthumbs();this.options.arrows&&this._initarrows();if(0!==this.options.timer){this._timerstart();var d=this;c.on("mouseover",function(){d._timeroff()});c.on("mouseout",function(){d._timerstart()})}}else this.state.disabled=!0},_constrain:function(a){if(a.startindex>=this.element.children().length||0>a.startindex)a.startindex=0,this.state.index=0;"fade"!==a.transition&&
"slide"!==a.transition&&(a.transition="fade");1E4<a.timer&&(a.timer=1E4);0>a.timer&&(a.timer=0);5E3<a.fadetimer&&(a.fadetimer=5E3);0>a.fadetimer&&(a.fadetimer=0);2E3<a.slidetimer&&(a.slidetimer=2E3);0>a.slidetimer&&(a.slidetimer=0);null!==a.thumbs&&a.thumbs.length&&(this.state.hasthumbs=!0);return a},_initdots:function(){for(var a=this.state.cells,b=this.state.wrapper,c=$("<ul class='sw-imgrotate-dotwrap'></ul>"),d=0;d<a.length;d++)c.append("<li></li>");b.append(c);c.css({"z-index":3});this.state.dotselector=
c.children();this.state.dotselector.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active");var e=this;this.state.dotselector.on("click",function(a){a.preventDefault();a.stopPropagation();a=e.state.dotselector.index($(this));e.index(a)});this.state.dotselector.on("mousedown",function(a){a.preventDefault()})},_initthumbs:function(){this.options.thumbs.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active");var a=this,b=this.options.thumbs;
b.on("click",function(b){b.preventDefault();b.stopPropagation();b=a.options.thumbs.index($(this));a.index(b)});b.on("mousedown",function(a){a.preventDefault()});0!==this.options.timer&&(b.on("mouseover",function(){a._timeroff()}),b.on("mouseout",function(){a._timerstart()}))},_initarrows:function(){this.state.hasarrows=!0;this.state.arrowleft=$("<div class='sw-imgrotate-arrowleft'></div>");this.state.arrowright=$("<div class='sw-imgrotate-arrowright'></div>");var a=this;this.state.arrowleft.css({"z-index":3});
this.state.arrowright.css({"z-index":3});this.state.arrowleft.on("click",function(b){b.preventDefault();b.stopPropagation();a.prev()});this.state.arrowleft.on("mousedown",function(a){a.preventDefault()});this.state.arrowright.on("click",function(b){b.preventDefault();b.stopPropagation();a.next()});this.state.arrowright.on("mousedown",function(a){a.preventDefault()});this.state.wrapper.append(this.state.arrowleft).append(this.state.arrowright)},_timerstart:function(){if(0===this.options.timer)this._timeroff();
else{clearTimeout(this.state.timerid);this.state.timeractive=!0;var a=this;this.state.timerid=setTimeout(function(){a.next()},this.options.timer)}},_timerstop:function(){clearTimeout(this.state.timerid)},_timeroff:function(){clearTimeout(this.state.timerid);this.state.timeractive=!1},_fade:function(a){this._timerstop();var b=this.state.index,c=a,d=this.options.fadetimer,e=this.state.cells,g=this;c>e.length-1&&(c=e.length-1);0>c&&(c=0);e.eq(c).stop().css({"z-index":2,visibility:"visible",opacity:0}).animate({opacity:1},
d);e.eq(b).stop().css({"z-index":1}).animate({opacity:0},d,function(){$(this).css({visibility:"hidden"});g.state.timeractive&&g._timerstart()});this._updateindex(a)},_slide:function(a){if(!this.options.slideloop||!this.state.cells.is(":animated")){this._timerstop();var b=this.state.index,c=this.state.cells;a>c.length-1&&(a=c.length-1);0>a&&(a=0);this.state.loopactive?(b===c.length-1?this._slideloopright():0===b?this._slideloopleft():this._directslide(a),this.state.loopactive=!1):this._directslide(a)}},
_directslide:function(a){this.state.inorder||this._arrange();var b=this.state.index,c=this.state.cells,d=this.options.slidetimer,e=100*(a-b),g=this;c.stop();for(var f=0;f<c.length;f++){var h=100*(f-b);h-=e;f===c.length-1?c.eq(f).animate({left:h+"%"},d,function(){g.state.timeractive&&g._timerstart()}):c.eq(f).animate({left:h+"%"},d)}this._updateindex(a)},_slideloopright:function(){this.state.inorder||this._arrange();var a=this.state.cells,b=this.options.slidetimer,c=this,d=a.length-1;a.eq(0).css({left:"100%"});
for(var e=0;e<a.length;e++)0===e?(curpos=100,newpos=0):(curpos=100*(e-d),newpos=curpos-100),e===a.length-1?a.eq(e).animate({left:newpos+"%"},b,function(){c.state.timeractive&&c._timerstart()}):a.eq(e).animate({left:newpos+"%"},b);this._updateindex(0);this.state.inorder=!1},_slideloopleft:function(){this.state.inorder||this._arrange();var a=this.state.cells,b=this.options.slidetimer,c=this;a.eq(a.length-1).css({left:"-100%"});for(var d=0;d<a.length;d++)d===a.length-1?(curpos=-100,newpos=0):(curpos=
100*(d-0),newpos=curpos+100),d===a.length-1?a.eq(d).animate({left:newpos+"%"},b,function(){c.state.timeractive&&c._timerstart()}):a.eq(d).animate({left:newpos+"%"},b);this._updateindex(a.length-1);this.state.inorder=!1},_arrange:function(){var a=this.state.cells,b=this.state.index;a.not(":eq("+b+")").each(function(){var c=100*(a.index($(this))-b);$(this).css({left:c+"%"})});this.state.inorder=!0},_updateindex:function(a){var b=this.state.index;a!==b&&(this.state.index=a,this.state.cells.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active"),
this.options.dots&&this.state.dotselector.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active"),this.state.hasthumbs&&this.options.thumbs.removeClass("sw-imgrotate-active").eq(this.state.index).addClass("sw-imgrotate-active"),this._trigger("change",null,{index:this.state.index,prev:b}))},index:function(a){if(!this.state.disabled&&this.state.index!==a){var b=this.options.transition;"slide"===b?this._slide(a):"fade"===b&&this._fade(a)}},next:function(){if(!(this.state.disabled||
"slide"==this.options.transition&&this.options.slideloop&&this.state.cells.is(":animated"))){var a=this.state.index,b=a<this.state.cells.length-1?a+1:0;"slide"===this.options.transition?(a===this.state.cells.length-1&&this.options.slideloop&&(this.state.loopactive=!0),this._slide(b)):"fade"===this.options.transition&&this._fade(b)}},prev:function(){if(!(this.state.disabled||"slide"==this.options.transition&&this.options.slideloop&&this.state.cells.is(":animated"))){var a=this.state.index,b=0>=a?this.state.cells.length-
1:a-1;"slide"===this.options.transition?(0===a&&this.options.slideloop&&(this.state.loopactive=!0),this._slide(b)):"fade"===this.options.transition&&this._fade(b)}},timeroff:function(){this.state.disabled||this._timeroff()},timeron:function(){this.state.disabled||this._timerstart()}});



/*  Package Deal Widget
* 	Uncompressed Version: /js/package.js 1/4/16
*/
$.widget("rb.vertrotate",{options:{startindex:0,transition:"slide",arrows:!0,cellheight:133,slidetimer:400,opaczones:!0,formwrap:!1,reset:!1},_create:function(){this.state={index:this.options.startindex,cells:null,wrapper:null,timerid:null,arrowup:null,arrowdown:null,disabled:!1,resetbutton:null,resetcells:null,resetcol:null,array:{}};this.options=this._constrain(this.options);this.state.cells=this.element.children();var a=this.state.cells;this._populatearray();if(1<a.length){this.state.cells.removeClass("rb-vertrot-active").eq(this.state.index).addClass("rb-vertrot-active");
this.state.wrapper=this.element.wrap("<div class='rb-vertrot-wrap'></div>").parent(".rb-vertrot-wrap");this.state.wrapper.css("position","relative");this.element.css({"z-index":2});this._movecellup();this._movecellup();var a=this.state.cells,b=this.element;b.css({position:"relative",overflow:"hidden"});var c=0;for(i=0;i<a.length;i++)c=(i-1)*this.options.cellheight-this.state.index*this.options.cellheight,a.eq(i).css({position:"absolute",top:c+"px",left:"0%"});this.state.resetcells=this.state.cells;
this.state.resetcol=b.html();this._updateindex();this._updateprice(0);this.options.arrows&&this._initarrows();this.options.opaczones&&this._genopaczones();this.options.reset&&this._initreset()}else this.state.disabled=!0},_constrain:function(a){if(a.startindex>=this.element.children().length||0>a.startindex)a.startindex=0,this.state.index=0;2E3<a.slidetimer&&(a.slidetimer=2E3);0>a.slidetimer&&(a.slidetimer=0);return a},_initarrows:function(){this.state.hasarrows=!0;this.state.arrowup=$("<div class='rb-vertrot-arrowup'><span></span></div>");
this.state.arrowdown=$("<div class='rb-vertrot-arrowdown'><span></span></div>");var a=this;this.state.arrowup.css({"z-index":3});this.state.arrowdown.css({"z-index":3});this.state.arrowup.on("click",function(b){b.preventDefault();b.stopPropagation();a.prev()});this.state.arrowup.on("mousedown",function(a){a.preventDefault()});this.state.arrowdown.on("click",function(b){b.preventDefault();b.stopPropagation();a.next()});this.state.arrowdown.on("mousedown",function(a){a.preventDefault()});this.state.wrapper.prepend(this.state.arrowup).append(this.state.arrowdown)},
_initreset:function(){this.state.resetbutton=$("<span class='flat_button reset_small'>Reset</span>");var a=this;this.state.resetbutton.on("click",function(){a.reset()});this.state.wrapper.parent().append(this.state.resetbutton)},_populatearray:function(){for(var a=this.state.cells,b="",b={},c=0;c<a.length;c++)b=a.eq(c).find("img").data("code"),b={pcode:b,form:$.get("https://www.racquetballwarehouse.com/packfragment.html?pcode="+b)},this.state.array[c]=b},_genopaczones:function(){var a=$("<div class='rb-top-opac'></div>"),
b=$("<div class='rb-bot-opac'></div>");a.css({"z-index":3,height:this.options.cellheight,top:"10px"});b.css({"z-index":3,height:this.options.cellheight,bottom:"10px"});this.state.wrapper.prepend(a).append(b)},_slide:function(a){if(!this.state.cells.is(":animated")){var b=this.state.index,c=this.state.cells;a>c.length-1&&(a=c.length-1);0>a&&(a=0);b<a?this._slideloopup():this._slideloopdown()}},_slideloopup:function(){var a=this.options.slidetimer,b=this.options.cellheight,c=0;this._movecelldown();
for(var e=this.state.cells,d=0;d<e.length;d++)c=(d-1)*b,d===e.length-1?e.eq(d).animate({top:c+"px"},0):e.eq(d).animate({top:c+"px"},a);this._updateindex();this._updateformdata()},_slideloopdown:function(){var a=this.options.slidetimer,b=this.options.cellheight,c=0;this._movecellup();for(var e=this.state.cells,d=0;d<e.length;d++)c=(d-1)*b,0===d?e.eq(d).animate({top:c+"px"},0):e.eq(d).animate({top:c+"px"},a);this._updateindex();this._updateformdata()},_updateindex:function(){this.state.index=2;this.state.cells.removeClass("rb-vertrot-active").eq(this.state.index).addClass("rb-vertrot-active")},
_updateformdata:function(){function a(a){for(var b in d)if(d[b].pcode==a)return d[b].form}var b=this.element.attr("class").split(" "),c=this.state.cells.eq(2).find("img").data("code"),e=1,d=this.state.array,b=b[1],e=$("."+b+"_form");""===c||void 0===c?e.html("<span>No "+b+"</span>"):e.html(a(c).responseText);e=this.options.formwrap.find("select").length-1;this._updateprice(e)},_updateprice:function(a){var b=0,c=0;$(".rb-vertrot-active").each(function(){var a=parseFloat($(this).find("img").data("price"));
void 0!==a&&(b+=a)});c=Math.round(.05*b*a*100)/100;b-=c;$(".main_price").html("$"+b.toFixed(2));$(".saving_price").html("$"+c.toFixed(2))},_movecellup:function(){this.state.cells.eq(0).before(this.state.cells.eq(this.state.cells.length-1));this.state.cells=this.element.children()},_movecelldown:function(){this.state.cells.eq(this.state.cells.length-1).after(this.state.cells.eq(0));this.state.cells=this.element.children()},index:function(a){this.state.disabled||this.state.index!==a&&this._slide(a)},
next:function(){if(!this.state.disabled){var a=this.state.index;this._slide(a<this.state.cells.length-1?a+1:0)}},prev:function(){if(!this.state.disabled){var a=this.state.index;this._slide(0>=a?this.state.cells.length-1:a-1)}},reset:function(){this.state.cells=this.state.resetcells;this.element.html(this.state.resetcol);this._movecelldown();this._updateindex();this._updateformdata()}});

$(function(){
	
	$(".prod_slide.racquet").vertrotate({ cellheight:173, formwrap:$(".package_submit_wrap") });
	$(".prod_slide").not(".racquet").vertrotate({ cellheight:173, formwrap:$(".package_submit_wrap"), reset:true });
	
});

/*  Lightbox Widget
 * 	Uncompressed Version: /js/lightbox.js 12/06/19
 */
(function(c,f){var d=[];c.widget("sw.lightbox",{options:{height:400,width:640,stack:!0,lbClass:"",focusTarget:null},_create:function(){this.state={wrapper:null,closelayer:null,closebutton:null,top:0,left:0,shown:!0};var a=this;this.state.closelayer=c("<div class='sw-lightbox-closelayer'></div>");this.state.closelayer.addClass(this.options.lbClass);this.state.closelayer.css("height",c(document).height());this.state.closelayer.on("click",function(){a.destroy()});this.state.wrapper=c("<div class='sw-lightbox-wrap' role='dialog' tabindex='-1'></div>");
this.state.wrapper.addClass(this.options.lbClass);this._setdimensions();this.state.closebutton=c("<button type='button' class='sw-lightbox-closebutton' aria-label='Close'>X</button>");this.state.closebutton.on("click",function(){a.destroy()});this.state.wrapper.append(this.state.closebutton);this.state.wrapper.append(this.element);if(this.options.stack){d.push(this.element);var b=c.inArray(this.element,d);-1!==b&&this._hideothers(b)}c("body").append(this.state.closelayer);c("body").append(this.state.wrapper);
this._setTabTrap()},_setTabTrap:function(){var a=this.state.wrapper[0].querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]');if(0<a.length){var b=a[0],c=a[a.length-1];b.focus();a=function(a){9===a.keyCode&&(a.shiftKey&&document.activeElement===b?(a.preventDefault(),c.focus()):a.shiftKey||document.activeElement!==c||(a.preventDefault(),
b.focus()))};this.state.wrapper[0].addEventListener("keydown",a)}},_setdimensions:function(){var a=c(window).height(),b=c(window).width(),d=this.options.height,e=this.options.width;b=e>b?0:(b-e)/2;a=(d>a?0:(a-d)/2)+c(window).scrollTop();this.state.top=a;this.state.left=b;this.state.wrapper.css({height:d+"px",width:e+"px",top:a,left:b})},_hideothers:function(a){for(var b=0;b<d.length;b++)b!==a&&d[b].lightbox("isshown")&&d[b].lightbox("hide")},_destroy:function(){this._trigger("close");this.state.wrapper.detach();
this.state.closelayer.detach();if(this.options.stack){var a=c.inArray(this.element,d);-1!==a&&d.splice(a,1);0<d.length?d[d.length-1].lightbox("show").lightbox("resize"):null!==this.options.focusTarget&&this.options.focusTarget.focus()}else null!==this.options.focusTarget&&this.options.focusTarget.focus()},isshown:function(){return this.state.shown},hide:function(){this.state.wrapper.hide();this.state.closelayer.hide();this.state.shown=!1;this._trigger("hide")},show:function(){if(this.options.stack){var a=
c.inArray(this.element,d);-1!==a&&this._hideothers(a)}this.state.wrapper.show();this.state.closelayer.show();this.state.shown=!0;this._trigger("show")},hidestack:function(){this.hide();this._hideothers()},resize:function(a){a=a||{};var b=a.height||this.options.height;this.options.width=a.width||this.options.width;this.options.height=b;this._setdimensions();this._trigger("resize",null,{height:this.options.height,width:this.options.width,top:this.state.top,left:this.state.left})}})})(jQuery);

/* --- Dynamic Cart ---
  Uncompressed version: /js/dynamic_cart.js 10/03/17
*/

var CartHandler=function(){function w(a,b){this.code=a;this.qty=b;this.link=this.price=this.img=this.name=null;this.strike=this.sale=!1;this.strikeprice=null}function K(a,b){this.key=a;this.value=b}function C(){this.cells=this.arrow_down=this.arrow_up=this.inner=this.port=this.wrap=null;this.cellindex=0;this.cellheight=81;this.init_slider=L;this.slide_up=M;this.slide_down=N}function L(a){this.wrap=$("<div class='cart_slider'></div>");this.port=$("<div class='cart_slider_port'></div>");this.inner=
$("<div class='cart_slider_inner'></div>");this.arrow_up=$("<span class='cart_slider_arrow arrow_up'><span class='slider_arrow_icon'></span></span>");this.arrow_down=$("<span class='cart_slider_arrow arrow_down'><span class='slider_arrow_icon'></span></span>");this.cells=a;var b=this;this.arrow_up.on("click",function(a){a.preventDefault();b.slide_up()});this.arrow_down.on("click",function(a){a.preventDefault();b.slide_down()});this.wrap.append(this.arrow_up).append(this.arrow_down).append(this.port.append(this.inner));
for(var c=0;c<a.length;c++)this.inner.append(a[c])}function M(){if(!this.inner.is(":animated"))if(0>this.cellindex-3){var a=this.cells.length%3;0==a&&(a=3);this.cellindex=this.cells.length-a;var b=this;b.inner.animate({top:3*b.cellheight+"px"},400,function(){b.inner.animate({top:-1*b.cellheight*b.cells.length+"px"},0,function(){b.inner.animate({top:-1*b.cellindex*b.cellheight+"px"},100*a)})})}else this.cellindex-=3,this.inner.animate({top:this.cellindex*this.cellheight*-1+"px"},400)}function N(){if(!this.inner.is(":animated"))if(this.cellindex+
3>=this.cells.length){var a=this.cells.length-this.cellindex;this.cellindex=this.cells.length;var b=this;b.inner.animate({top:b.cellindex*b.cellheight*-1+"px"},100*a,function(){b.cellindex=0;b.inner.animate({top:3*b.cellheight+"px"},0,function(){b.inner.animate({top:b.cellindex*b.cellheight*-1+"px"})})})}else this.cellindex+=3,this.inner.animate({top:this.cellindex*this.cellheight*-1+"px"},400)}var r=null,e=null,x=null,y=null,z=null,k=null,O=$("#h_cart_items"),P=$("#h_cart_total"),Q=$("#h_view_cart"),
D=$("#h_checkout_button"),E="/workingorder.html",t=null,g=!0,u=!1,R=function(){e=$("<div id='h_cart_overlay' class='cf'></div>").hide();x=$("<div id='overlay_header'></div>");e.append(x);y=$("<a id='overlay_message' href='/workingorder.html'>View Shopping Bag</a>");z=$("<a id='overlay_x' tabindex='0' href='#'></a>");z.on("click",function(a){a.preventDefault();v()});e.on("mouseenter",function(){e.stop(!0,!1).css("opacity",1);l.cancel();g=!1});e.on("mouseleave",function(){l.start();
g=!0});x.append(y).append(z);k=$("<div id='overlay_body'></div>");e.append(k);r.append(e);Q.on("click",function(a){a.preventDefault();A(!1)});D.length&&(E=D.attr("href"))},m=function(){l.cancel();e.stop(!0,!1).css("opacity",1).show()},v=function(){e.stop(!0,!1).hide();l.cancel();e.css("opacity",1)},n=function(a){y.text(a)},B=function(a){a="undefined"!==typeof a?a:!0;n("Error");k.removeClass("loading").html("<p class='overlay_msg'>We're sorry. Your request could not be processed. Please try again in a few moments.</p>");
a&&l.start()},F=function(a,b){O.html(a+" "+(1==a?"item":"items"));P.html("$"+b)},l={fade:function(){G();delete this.timeoutID},start:function(){var a=e.is(":visible")&&!k.hasClass("loading")?!0:!1;this.cancel();var b=this;a&&(this.timeoutID=window.setTimeout(function(){b.fade()},3E3))},cancel:function(){"number"==typeof this.timeoutID&&(window.clearTimeout(this.timeoutID),delete this.timeoutID)}},G=function(){l.cancel();Modernizr.opacity?e.animate({opacity:0},1E3,function(){v()}):v()},H=function(a){var b=
a.name.replace(/(['"])/g,""),c=a.sale?" sale":"",d="",f=$("<div class='close'><a class='overlay_item_remove' href='#'></a></div>");f.on("click",function(b){b.preventDefault();A(!1,a.code+"=0")});var q=a.strike?"<span class='overlay_itemprice strike'>$"+a.strikeprice+" ea.</span><span class='overlay_itemprice now'>$"+a.price+" ea.</span>":"<span class='overlay_itemprice"+c+"'>$"+a.price+" ea.</span>";if(null==a.link||""==a.link)return d=null==a.img||""==a.img?"":"<span class='overlay_thumb'><img src='"+
a.img+"' alt='"+b+"' /></span>",$("<div class='overlay_thumb_wrap cf'>"+d+"<span class='overlay_itemname'>"+a.name+"</span><span class='overlay_qtyprice"+c+"'><span class='overlay_itemqty'>Qty: "+a.qty+"</span>"+q+"</span></div>").append(f);d=null==a.img||""==a.img?"":"<span class='overlay_thumb'><a href='"+a.link+"'><img src='"+a.img+"' alt='"+b+"' /></a></span>";return $("<div class='overlay_thumb_wrap cf'>"+d+"<span class='overlay_itemname'><a href='"+a.link+"'>"+a.name+"</a></span><span class='overlay_qtyprice'><span class='overlay_itemqty'>Qty: "+
a.qty+"</span>"+q+"</span></div>").append(f)},I=function(a,b){return $("<div class='overlay_summary cf'><span class='overlay_numitems'>"+a+" "+(1==a?"item":"items")+" in cart</span><span class='overlay_subtotal'>Subtotal: $"+b+"</span></div><div class='overlay_buttons cf'><a class='ordersubmit_button' href='"+E+"'>Check Out</a></div>")},A=function(a,b){$(window).scrollTop()>r.offset().top&&$("html, body").scrollTop(0);var c="undefined"!==typeof b?!0:!1;b=c?"?"+b:"";g=(a="undefined"!==typeof a?a:!0)?
!0:!1;u&&!c?(n("View Shopping Bag"),m(),(a||g)&&l.start(),g=!0):null==t||c?(k.html(""),k.addClass("loading"),n("Loading..."),m(),$.ajax({timeout:8E3,type:"GET",url:"/ajax/cartordering.xml"+b,dataType:"xml",success:function(b){S(b,a,c)},error:function(){g=!0;B()}})):(n("View Shopping Bag"),k.html(t),m(),u=!0,(a||g)&&l.start(),g=!0)},U=function(a){u=!1;$(window).scrollTop()>r.offset().top&&$("html, body").scrollTop(0);k.html("");k.addClass("loading");n("Adding to Bag...");m();$.ajax({timeout:8E3,
type:"GET",url:"/ajax/cartordering.xml?"+a,dataType:"xml",success:function(b){T(a,b)},error:function(){B()}})},T=function(a,b){J(b);for(var c=V(a),d=$("<div></div>"),f=[],q=0,e=0,p,h=0;h<c.length;h++)p=$(b).find("item[pcode='"+c[h].code+"']"),p.length&&(c[h].name=p.eq(0).find("name").text(),c[h].img=p.eq(0).find("image").text(),c[h].price=p.eq(0).find("itemprice").text(),c[h].link=p.eq(0).find("link").text(),c[h].sale=p.eq(0).find("sale").length?!0:!1,c[h].strike=p.eq(0).find("strikeprice").length?
!0:!1,c[h].strike&&(c[h].strikeprice=p.eq(0).find("strikeprice").text()),f.push(H(c[h])),q++,e+=parseInt(c[h].qty));if(3<q)c=new C,c.init_slider(f),d.append(c.wrap);else if(0<q)for(c=0;c<f.length;c++)d.append(f[c]);else B();f=$(b).find("summary");var m=0;$(b).find("item qty").each(function(){m+=parseInt($(this).text())});f=f.find("subtotal").text();d.append(I(m,f));k.removeClass("loading").html(d);1==e?n("Added to Your Bag"):n(e+" Items Added to Your Bag");g&&l.start();g=!0;F(m,f)},S=function(a,b,
c){b="undefined"!==typeof b?b:!0;J(a);var d=$(a).find("summary"),f=0;$(a).find("item qty").each(function(){f+=parseInt($(this).text())});a=d.find("subtotal").text();c?n("Shopping Bag Updated"):n("View Shopping Bag");k.removeClass("loading").html(t);u=!0;(b||g)&&l.start();g=!0;F(f,a)},J=function(a){var b=[],c=0,d=0,f=$("<div></div>");$(a).find("item").each(function(){var a=$(this).find("code").text(),e=$(this).find("qty").text();a=new w(a,e);a.name=$(this).find("name").text();a.img=$(this).find("image").text();
a.price=$(this).find("itemprice").text();a.link=$(this).find("link").text();a.sale=$(this).find("sale").length?!0:!1;a.strike=$(this).find("strikeprice").length?!0:!1;a.strike&&(a.strikeprice=$(this).find("strikeprice").text());b.push(H(a));c++;d+=parseInt(e)});if(3<c){var e=new C;e.init_slider(b);f.append(e.wrap)}else if(0<c)for(e=0;e<b.length;e++)f.append(b[e]);else f.append("<p class='overlay_msg'>Your Cart is Empty.</p>");if(0<c){e=$(a).find("summary");var g=0;$(a).find("item qty").each(function(){g+=
parseInt($(this).text())});a=e.find("subtotal").text();f.append(I(g,a))}t=f},V=function(a){var b=a.split("&");a=[];for(var c=[],d=0;d<b.length;d++)1<b[d].split("=").length&&a.push(new K(b[d].split("=")[0].toUpperCase(),b[d].split("=")[1].toUpperCase()));b=/^\d+$/;for(d=0;d<a.length;d++)""!=a[d].value&&(0==a[d].key.indexOf("PCODE")?a.length>d+1&&(0==a[d+1].key.indexOf("QTY")||0==a[d+1].key.indexOf("INCREMENTQTY"))&&""!=a[d+1].value&&b.test(a[d+1].value)&&(c.push(new w(a[d].value,a[d+1].value)),d++):
0!=a[d].key.indexOf("PCODE")&&0!=a[d].key.indexOf("QTY")&&0!=a[d].key.indexOf("INCREMENTQTY")&&b.test(a[d].value)&&c.push(new w(a[d].key,a[d].value)));return c};return{initcart:function(a){r=a;R()},showcart:function(){m()},hidecart:function(){v()},fadecart:function(){G()},order:function(a){U(a)},loadcart:function(a){A("undefined"!==typeof a?a:!0)}}}();

/* --- Item Slider ---
  Uncompressed version: /js/item_slider.js 1/18/16
*/
$.widget("sm.itemslider",{options:{cells:null,cellwidth:null,sliderwidth:null,slidertimer:200,index:0,switchlink:null},_create:function(){this.options.index=parseInt(this.options.index);this.state={wrapper:null,window:null,slider:null,arrowleft:null,arrowright:null,center:0,singleitem:!1};var a=this.options.cells;1>=a.length&&(this.state.singleitem=!0);var b=this;a.addClass("sw-itemslider-cell");this.state.center=(this.options.sliderwidth-this.options.cellwidth)/2;this.state.wrapper=$("<div class='sw-itemslider-wrap'></div>");
this.state.window=$("<div class='sw-itemslider-window'></div>");this.state.slider=$("<div class='sw-itemslider-slider cf'></div>");this.state.arrowleft=this.state.singleitem?"":$("<a class='sw-itemslider-arrowleft' href='#'><span class='sw-itemslider-arrowicon'></span></a>");this.state.arrowright=this.state.singleitem?"":$("<a class='sw-itemslider-arrowright' href='#'><span class='sw-itemslider-arrowicon'></span></a>");this._updateindex(this.options.index);this.state.slider.css("width",this.options.cellwidth*
a.length+"px");this.state.wrapper.append(this.state.window.append(this.state.slider)).append(this.state.arrowleft).append(this.state.arrowright);this.state.slider.css({position:"relative",left:this.state.center-this.options.index*this.options.cellwidth+"px"});a.each(function(){b.state.slider.append($(this));$(this).css({"float":"left"})});this.state.singleitem||(this.state.arrowright.on("click",function(a){a.preventDefault();a.stopPropagation();b.next()}),this.state.arrowleft.on("click",function(a){a.preventDefault();
a.stopPropagation();b.prev()}));null!==this.options.switchlink&&a.find("."+this.options.switchlink).each(function(){$(this).on("click",function(c){c.preventDefault();c.stopPropagation();c=$(this).parents(".sw-itemslider-cell");var d=a.index(c);d===b.options.index?b._trigger("activeclick",null,{cell:c}):b.index(d)})});this.element.append(this.state.wrapper)},_updateindex:function(a){var b=this.options.index;this.options.index=a;this.options.cells.removeClass("sw-itemslider-active").eq(a).addClass("sw-itemslider-active");
this.state.singleitem||(0===a?(this.state.arrowleft.addClass("sw-itemslider-disabled"),this.state.arrowright.removeClass("sw-itemslider-disabled")):(a===this.options.cells.length-1?this.state.arrowright.addClass("sw-itemslider-disabled"):this.state.arrowright.removeClass("sw-itemslider-disabled"),this.state.arrowleft.removeClass("sw-itemslider-disabled")));b!==a&&this._trigger("change",null,{index:a})},_destroy:function(){},index:function(a){if(a!==this.options.index){var b=this.state.center-a*this.options.cellwidth;
this.state.slider.stop(!0,!0).animate({left:b+"px"},this.options.slidertimer);this._updateindex(a)}},next:function(){this.options.index<this.options.cells.length-1&&this.index(this.options.index+1)},prev:function(){0<this.options.index&&this.index(this.options.index-1)}});

/* --- Outfit Builder ---
  Uncompressed version: /js/outfit_builder.js 1/18/16
  requires item slider (/js/item_slider.js)
*/
$.widget("sw.outfit",{options:{tops:$("#outfit_topcat .outfit_cell"),bottoms:$("#outfit_botcat .outfit_cell"),imglink:"outfit_imglink",orderingurl:"/ajax/outfitordering.html",caturl:"/ajax/outfitcat.html",infourl:"/ajax/outfitinfo.html",topindex:0,botindex:0,cellwidth:null,sliderwidth:780,topselect:null,botselect:null,topcat:null,botcat:null,topitem:0,botitem:0,ordertext:"See Ordering Options",hidetext:"Hide Ordering Options",sharetext:"Share with Friends",infolink:"outfit_info_link"},_create:function(){this.state=
{topwrap:null,botwrap:null,linkwrap:null,orderlink:null,sharelink:null,orderwrap:null};this.currentorder={shown:!1,loaded:!1,topitem:null,topstyle:null,botitem:null,botstyle:null};var b=this;this.state.topwrap=$("<div class='sw-outfit-topwrap'></div>");this.state.botwrap=$("<div class='sw-outfit-botwrap'></div>");this.state.linkwrap=$("<div class='sw-outfit-linkwrap'></div>");this.state.sharelink=$("<a class='sw-outfit-sharelink' href='#'>"+this.options.sharetext+"</a>");this.state.orderlink=$("<a class='sw-outfit-orderlink' href='#'>"+
this.options.ordertext+"</a>");this.state.orderwrap=$("<div class='sw-outfit-orderwrap'></div>").hide();this.state.orderwrap.on("submit",".ob_orderform",function(a){a.preventDefault();CartHandler.order($(this).serialize())});this._checkhash();this._updateshare();this.state.sharelink.on("click",function(a){a.preventDefault();b._sharepop()});this.state.orderlink.on("click",function(a){a.preventDefault();b.currentorder.shown?b._hideordering():b.currentorder.loaded?b._matchorder()?b._showordering():b._ajaxordering():
b._ajaxordering()});this.element.on("click","."+this.options.infolink,function(a){a.preventDefault();var c=$(this).parents(".outfit_cell");a=c.data("pcode");c=c.data("style");b._ajaxinfo(a,c)});if(null===this.options.topcat)this.state.topwrap.itemslider({cells:this.options.tops,cellwidth:this.options.cellwidth,sliderwidth:this.options.sliderwidth,switchlink:this.options.imglink,index:this.options.topitem}).on("itemsliderchange",function(a,c){b._itemchange(c.index,"tops")}).on("itemslideractiveclick",
function(a,c){b._activeclick(c.cell)});else this.changetops(this.options.topcat,this.options.topitem);if(null===this.options.botcat)this.state.botwrap.itemslider({cells:this.options.bottoms,cellwidth:this.options.cellwidth,sliderwidth:this.options.sliderwidth,switchlink:this.options.imglink,index:this.options.botitem}).on("itemsliderchange",function(a,c){b._itemchange(c.index,"bottoms")}).on("itemslideractiveclick",function(a,c){b._activeclick(c.cell)});else this.changebottoms(this.options.botcat,
this.options.botitem);this.element.html("").append(this.state.orderwrap).append(this.state.linkwrap.append(this.state.sharelink).append(this.state.orderlink)).append(this.state.topwrap).append(this.state.botwrap);null!==this.options.topselect&&(null!==this.options.topcat&&this._setselect("tops"),this.options.topselect.on("change",function(){var a=$(this).val();b.changetops(a,0)}),this.state.topwrap.before(this.options.topselect),select_enhance(this.options.topselect));null!==this.options.botselect&&
(null!==this.options.botcat&&this._setselect("bottoms"),this.options.botselect.on("change",function(){var a=$(this).val();b.changebottoms(a,0)}),this.state.botwrap.before(this.options.botselect),select_enhance(this.options.botselect))},_changecat:function(b,a,c){var d=this;b=$(b).find(".outfit_cell");"tops"===a?(a=$("<div class='sw-outfit-topwrap'></div>"),a.itemslider({cells:b,cellwidth:this.options.cellwidth,sliderwidth:this.options.sliderwidth,switchlink:this.options.imglink,index:c}).on("itemsliderchange",
function(a,b){d._itemchange(b.index,"tops")}).on("itemslideractiveclick",function(a,b){d._activeclick(b.cell)}),this.state.topwrap.replaceWith(a),this.state.topwrap=a,this._updateshare()):"bottoms"===a&&(a=$("<div class='sw-outfit-botwrap'></div>"),a.itemslider({cells:b,cellwidth:this.options.cellwidth,sliderwidth:this.options.sliderwidth,switchlink:this.options.imglink,index:c}).on("itemsliderchange",function(a,b){d._itemchange(b.index,"bottoms")}).on("itemslideractiveclick",function(a,b){d._activeclick(b.cell)}),
this.state.botwrap.replaceWith(a),this.state.botwrap=a,this._updateshare())},_ajaxcat:function(b,a,c){if("tops"===a||"bottoms"===a){this.currentorder.shown&&this._hideordering();var d=this;$.ajax({timeout:8E3,type:"GET",url:d.options.caturl+"?ccode="+b,dataType:"html",success:function(b){d._changecat(b,a,c)},error:function(a,b,c){}})}},_ajaxerror:function(b){console.log(b)},_ajaxordering:function(){var b=this,a=this.state.topwrap.find(".sw-itemslider-active").eq(0),c=this.state.botwrap.find(".sw-itemslider-active").eq(0),
d=a.data("pcode"),f=a.data("style"),e=c.data("pcode"),g=c.data("style");$.ajax({timeout:8E3,type:"GET",url:b.options.orderingurl+"?topitem="+d+"&topstyle="+f+"&botitem="+e+"&botstyle="+g,dataType:"html",success:function(a){b._loadordering(a);b.currentorder.topitem=d;b.currentorder.topstyle=f;b.currentorder.botitem=e;b.currentorder.botstyle=g},error:function(a,b,c){}})},_showordering:function(){this.currentorder.shown=!0;this.state.orderlink.html(this.options.hidetext);this.state.orderwrap.slideDown()},
_hideordering:function(){this.currentorder.shown=!1;this.state.orderlink.html(this.options.ordertext);this.state.orderwrap.slideUp()},_loadordering:function(b){this.currentorder.loaded=!0;b=$(b).find("#outfit_orderwrap");this.state.orderwrap.html("").append(b);this.currentorder.shown||this._showordering()},_matchorder:function(){var b=this.state.topwrap.find(".sw-itemslider-active").eq(0),a=this.state.botwrap.find(".sw-itemslider-active").eq(0),c=b.data("pcode"),b=b.data("style"),d=a.data("pcode"),
a=a.data("style"),f=!1,e=this.currentorder;c===e.topitem&&b===e.topstyle&&d===e.botitem&&a===e.botstyle&&(f=!0);return f},_checkhash:function(){for(var b=window.location.hash.slice(1).split("&"),a,c,d=0;d<b.length;d++)a=b[d].split("="),2===a.length&&(c=a[0],a=a[1],"topcat"===c&&a!==this.options.topcat&&null!==a?this.options.topcat=a:"botcat"===c&&a!==this.options.botcat&&null!==a?this.options.botcat=a:"topitem"===c&&a!==this.options.topitem&&null!==a?this.options.topitem=parseInt(a):"botitem"===c&&
a!==this.options.botitem&&null!==a&&(this.options.botitem=parseInt(a)))},_updateshare:function(){var b=this.options.topcat,a=this.options.botcat,c=this.options.topitem,d=this.options.botitem,f=window.location.href.split("#")[0],e="";null===b?e=null===a?e+("#topitem="+c+"&botitem="+d):e+("#botcat="+a)+("&topitem="+c+"&botitem="+d):(e+="#topcat="+b,null!==a&&(e+="&botcat="+a),e+="&topitem="+c+"&botitem="+d);this.state.sharelink.prop("href",f+e)},_setselect:function(b){"tops"===b?this.options.topselect.find("option[value="+
this.options.topcat+"]")&&this.options.topselect.val(this.options.topcat).change():"bottoms"===b&&this.options.botselect.find("option[value="+this.options.botcat+"]")&&this.options.botselect.val(this.options.botcat).change()},_itemchange:function(b,a){"tops"===a?this.options.topitem=b:"bottoms"===a&&(this.options.botitem=b);this.currentorder.shown&&this._hideordering();this._updateshare()},_sharepop:function(){var b=this.state.sharelink.prop("href");$("<div class='sw-outfit-sharebox'><p>Copy this link to share this outfit with your friends:</p><input type='text' class='sw-outfit-sharetext' value='"+
b+"' /></div>").lightbox({height:150,width:400})},_ajaxinfo:function(b,a){var c=this;$.ajax({timeout:8E3,type:"GET",url:c.options.infourl+"?pcode="+b+"&style="+a,dataType:"html",success:function(a){c._infopop(a)},error:function(a,b,c){}})},_infopop:function(b){$(b).find("#outfit_infowrap").lightbox({height:650,width:700})},_activeclick:function(b){var a=b.data("pcode");b=b.data("style");this._ajaxinfo(a,b)},changetops:function(b,a){this._ajaxcat(b,"tops",a);this.options.topcat=b;this.options.topitem=
a;this._updateshare()},changebottoms:function(b,a){this._ajaxcat(b,"bottoms",a);this.options.botcat=b;this.options.botitem=a;this._updateshare()}});

/*==============================================

		CUSTOM SELECT SCRIPT BEGIN
	
==============================================*/	

/*==============================================

		CUSTOM SELECT SCRIPT END
	
==============================================*/
$(function(){
//init fancy selects
	$(".fancy_select").each(utilities.create_coupled_select);
	
	$("#brandwrap").hide();
	
	$(".show_hide_brand").on("click",function(e){
		e.preventDefault();
		if ($(".show_hide_plus").hasClass("open")) {
			$("#brandwrap").slideToggle();
			$(".show_hide_plus").removeClass("open");
		} else {
			$("#brandwrap").slideToggle();
			$(".show_hide_plus").addClass("open");
		}
	});
	
});

var utilities = {
create_coupled_select: function() {
		$(this).selectmenu({
			width: $(this).parent().width(),
			icons: { button : "ui-icon-triangle-blue-s" },
			//position: { collision : "flipfit" }, 
			change: function( event, ui ) {
				ui.item.element.parent('select').trigger("change",{source: "selectmenu"});
			}
		});
		$(this).on("change",function(e,obj){
			if(!(obj && obj.source == "selectmenu"))
			{
				$(this).selectmenu("refresh");
			}
		});

		$(this).selectmenu("menuWidget").css("max-height", "232px");
	},
	
	enhance_qty: function(){
		if(!$(this).hasClass("enhanced")){
			var qty_input = $(this).find(".qty_text_input"),
				qty_wrap = $(this).find(".qty_wrap"),
				plus = $('<button type="button" class="increment">+<\/button>'),
				minus = $('<button type="button" class="decrement">-<\/button>'),
				amount = $('<span class="qty_entered"><\/span>'),
				label = $(this).find("label");
				
				
			qty_wrap.append($('<div class="buttons"><\/div>').append(plus).append(minus));
				
			var initial_qty = parseInt(qty_input.prop("value"));
			if(!(isNaN(initial_qty) || initial_qty <= 0)) {
				amount.text(" " + initial_qty);
			}
			
			minus.click(function(e){
				e.preventDefault();
				var qty = parseInt(qty_input.prop("value"));
				if(isNaN(qty) || qty <= 1) {
					qty = 1;
				}
				else {
					qty--;
				}
				qty_input.prop("value",qty).change();
			});
			plus.click(function(e){
				e.preventDefault();
				var qty = parseInt(qty_input.prop("value"));
				if(isNaN(qty) || qty < 0) {
					qty = 1;
				}
				else 
				{
					qty++;
				}
				qty_input.prop("value",qty).change();
			});
			qty_input.keydown(function(e) {
				if(e.which == 38 )
				{
					plus.click();
				}
				if(e.which == 40 )
				{
					minus.click();
				}
			});
			qty_input.on("change",function(){
				var qty = parseInt(qty_input.prop("value"));
				if(isNaN(qty) || qty <= 0) {
					qty = 1;
					$(this).prop("value",qty).change();
				}
				amount.text(" " + qty);
			});
			$(this).addClass("enhanced");
		}
	},
	
	initialize_descpagetop: function(options){
		//set up the defaults which are accessible by anonymous function which is returned
	
		var defaults = {
			type:"Standard",
			onAdd: function(e,obj){
				CartHandler.order($(this).serialize());
			}
		};

		var settings = $.extend({},defaults,options || {});

		return function() {
			var pagetop = $(this);
			
			if(pagetop.find('.product_image .mainimage').length){
				var ProductImageViewer = ProductImageViewerModule();
				ProductImageViewer.setmainimage(pagetop.find('.product_image .mainimage'));
				if(pagetop.find('.product_image.has_largeview').length)
				{
					ProductImageViewer.zoomviewinit(pagetop.find('.product_image.has_largeview').eq(0));
				}
				if(settings.type === "Quickview"){
					var imagecount = parseInt(pagetop.find('.product_image').data('imagecount'));
					if((!isNaN(imagecount)) && (imagecount > 1))
					{
						ProductImageViewer.setimagecount(parseInt(imagecount));
						var arrows = $('<div class="image_arrows"><\/div>');
						var leftarrow = $('<div class="image_left"><\/div>');
						var rightarrow = $('<div class="image_right"><\/div>');
						pagetop.find('.product_image').append($('<div class="image_arrows"><\/div>').append(leftarrow).append(rightarrow));
						ProductImageViewer.setbuttons(leftarrow,rightarrow);
					}
				} else {
					if(pagetop.find('.multiview').eq(0).find('a').not('.exclude').length)
					{
						ProductImageViewer.setimagecount(pagetop.find('.multiview').eq(0).find('a').not('.exclude').length);
						ProductImageViewer.setmultiview(pagetop.find('.multiview').eq(0));
						if(pagetop.find(".video_app_wrap").length){
							ProductImageViewer.enableVideo(pagetop.find('.multiview').eq(0).find('a.video_app_popup').data('vidcode'));
						}
					}
				}
			}
			
			pagetop.find('.sizing_pop').on("click",sizingPopup);
			
			pagetop.find(".order_replace .replace_avail").each(function(){
				$(this).text(parseDate($(this).text()));
			});

			if(pagetop.find(".order_replace .styled_subproduct_list").length){
				StyleOrdering = StyleOrderingModule();
				
				if(typeof ProductImageViewer !== "undefined")
				{
					StyleOrdering.setImageViewer(ProductImageViewer);
				}
				
				var is_shoe_ordering = false;/* $(".order_replace").is(".shoe_ordering .order_replace")*/;
				
				var ordering_style = "selects";
				if(pagetop.find(".order_replace .styled_subproduct_list").hasClass("display_boxes"))
				{
					ordering_style = "boxes";
				}
				
				pagetop.find(".order_replace .styled_subproduct_list .subproduct").each(function(){
					var productstyles = [];
					var orderable = ($(this).find('input').length > 0);
					$(this).find('.stylelist li').each(function(){
						var styletitle, styletitleref, styleitemname, styleitemcode, styleitemref, thumb, style_elem, styleitem_elem, stock_num;
						style_elem = $(this).find('.style');
						styleitem_elem  = $(this).find('.styleitem');
						styletitle = style_elem.text();
						styletitleref = style_elem.data("styleref");
						styleitemname = styleitem_elem.text();
						styleitemcode = styleitem_elem.data("scode");
						styleitemref = styleitem_elem.data("styleref");
						thumb = styleitem_elem.data("stylethumb");
						stock_num = $(this).find('.stocknum');
						
						if(stock_num.length)
						{
							stock_num = stock_num.text();
						}
						else
						{
							stock_num = null;
						}

						if(is_shoe_ordering)
						{
							styleitemname = styleitemname.split("In Stock: ")[0] + "In Stock: " + parseDate(styleitemname.split("In Stock: ")[1]);
						}
						
						if(typeof(thumb) == "undefined")
						{
							thumb = null;
						}

						productstyles.push(new styleinfo(styletitle,styletitleref,styleitemname,styleitemcode,styleitemref,thumb,stock_num));
					});
					StyleOrdering.addProduct($(this).data('code'),$(this).text(),$(this).find('.available').text(),productstyles,orderable,$(this).find('.available').hasClass('stock_notify'),$(this).find('.price').text());
				});
				StyleOrdering.setSubmit(pagetop.find(".ordersubmit_button").eq(0));
				StyleOrdering.setAlert(pagetop.find(".order_alert").eq(0));
				StyleOrdering.setForm(pagetop.find(".orderingform").eq(0));
				
				//when 'addtocart' event is triggered, run function that adds the item(s) to the cart
				pagetop.find(".orderingform").on("addtocart",function(e,obj){
					var addtocartform = $(this);
					//function to add item(s) is passed into initialize_descpagetop or pulled from defaults
					//called using the context of the cart form so it can be serialized for CartHandler
					//any condition to be checked before adding an item should be included here
					settings.onAdd.call(addtocartform,e,obj);
				});
				
				StyleOrdering.setOrderingStyle(ordering_style);
				if(pagetop.find('.sizing_ordering_info').length)
				{
					StyleOrdering.setSizingElement(pagetop.find('.sizing_ordering_info').eq(0));
				}
	
				StyleOrdering.preselectStyles();
				pagetop.find('.order_replace').eq(0).replaceWith(StyleOrdering.generateStyleBoxes());
				pagetop.find('.order_box').addClass("enhanced");
				
				pagetop.find('.order_box').eq(0).find('select').each(utilities.create_coupled_select);
			} else {
				var order_box = pagetop.find(".order_box").eq(0);
				var desctop_ordering_form = pagetop.find(".orderingform").eq(0);
				
				if(order_box.length)
				{
					if(order_box.hasClass("rac_ordering"))
					{
					
						if(order_box.hasClass("idapt_ordering"))
						{
							order_box.find(".styleboxes").each(function(){
								var styleboxes = $(this).find('.stylebox');
								styleboxes.each(function(){
									var radiobutton = $(this).find("input");
									if(radiobutton.is(':checked'))
									{
										$(this).addClass("selected");
									}
									else
									{
										$(this).removeClass("selected");
									}
									$(this).click(function(){
										$(this).find("input").prop("checked",true).change();
										styleboxes.each(function(){
											var radiobutton = $(this).find("input");
											if(radiobutton.is(':checked'))
											{
												$(this).addClass("selected");
											}
											else
											{
												$(this).removeClass("selected");
											}
										});
									});
								});
								styleboxes.find(".input_wrap").hide();
							});
						}
						
						
						
						var aux_wrap = $('<div class="stringcats aux_select_wrap"><\/div>');
						var stringcats_header = $("<p class='racorder'><b>Select A String<\/b><\/p>");
						var string_groups = order_box.find(".string_groups").eq(0);
						
						aux_wrap.append($('<label>Select A String</label>'));

						string_groups.find("optgroup").each(function(){
							var curid = $(this).data("auxid");
							var curtext = $(this).prop("label");
							var newwrap = $('<div class="auxselect_wrap" id="auxsel_' + curid + '"><\/div>');
							var newselect = $('<select "class="dropdown" name="pnamecomment,incrementqty"></select>');

							newwrap.append(newselect);
							
							/*var newoptgroup = $('<optgroup label="' + curtext + '"><\/optgroup>');*/
							/*newselect.append(newoptgroup);*/
							
							$(this).find("option").each(function(){
								newselect.append($(this));
							});
							
							var newoption = $('<option value="' + curid + '">' + curtext + '<\/option>');
							$(this).replaceWith(newoption);
							
							aux_wrap.append(newwrap.hide());
						});
						
						
						string_groups.closest(".order_rowwrap").after($('<div class="aux_wrap_reserve order_rowwrap"><\/div>').append(aux_wrap.hide()));
						
					
						string_groups.on("change",function() {
							
							aux_wrap.find('select').prop("disabled",true).removeClass("active");
							aux_wrap.find('.auxselect_wrap').hide();
							
							
							
							if($(this).prop("selectedIndex") > 1 && ($(this).val() != "hybrid"))
							{
								var selectedcat = "#auxsel_" + $(this).val();
								aux_wrap.show().find(selectedcat).show().find('select').prop('selectedIndex',0).prop("disabled",false).addClass("active").change();
							}
							else
							{
								aux_wrap.hide();
							}
						});
						
						/* Updated form validation */
						$(".orderingform.racvalidate").on("submit",function(){
							var that = $(this);
							if ($(this).find(".rac_gripsize").eq(0).prop("selectedIndex") == 0) {
								alert("Please select a Grip Size");
								return false;
							}
							
							 if(!$(this).find(".adapt_check").eq(0).is(":checked")){
							if ($(this).find(".string_sel").eq().prop("selectedIndex") == 0) {
								alert("Please select a String Pattern");
								return false;
							}
							}
							if (string_groups.prop("selectedIndex") == 0) {
								alert("Please select a String Group");
								return false;
							}
							var stringtype, rtension, rcomment;
							if (string_groups.prop("selectedIndex") == 1) {
								//unstrung
								rcomment = string_groups.find(":selected").text();
								$(this).find(".hybrid_comment").eq(0).val(rcomment);
							}	else {
								if (string_groups.val() == "hybrid") {
									$(this).attr("action","/orderhybrid.html");
								} else {
									if(string_groups.prop("selectedIndex") > 1) {
										var currentsel = $(this).find(".stringcats").eq(0).find("select.active").eq(0);
										if(currentsel.prop("selectedIndex") == 0) {
											alert("Please select a String");
										return false;
										}
										if(currentsel.val() == "hybrid") {
											$(this).attr("action","/orderhybrid.html");
										} else {
											if(currentsel.prop("selectedIndex") == 1){
												//unstrung
												rcomment = currentsel.find(":selected").text();
												$(this).find(".hybrid_comment").eq(0).val(rcomment);
											} else {
												if(currentsel.prop("selectedIndex") > 1) {
													if(isNaN($(this).find(".rac_tension").eq(0).val())){
														alert("Please enter in a valid Tension");
														return false;
													} else {
														stringtype = currentsel.find('option').eq(currentsel.prop("selectedIndex")).text();
														stringtype = stringtype.split(" - $")[0];
														rtension = $(this).find(".rac_tension").eq(0).val();
														rcomment = stringtype + " @ " + rtension;
														$(this).find(".hybrid_comment").eq(0).val(rcomment);	
													}
												}
											}
										}
									}
								}
							}
							if($(this).hasClass("idapt_ordering"))
							{
								var raccode = $('input[name=dunrac]:checked').val();
								var shockcode = $('input[name=dunshock]:checked').val();
								var gripcode = $(this).find('.grip_sel').eq(0).val();
								var shockcomp = raccode + "-comp-DUNLOPRACS-" + shockcode;
								var gripcomp = raccode + "-comp-DUNLOPRG-" + gripcode;
								$(this).prepend('<input type="hidden" name="pcode" value="' + raccode + '" \/>');
								$(this).find(".dundamp").eq(0).attr('name',shockcomp);
								$(this).find(".dunhand").eq(0).attr('name',gripcomp);
							}
							if($(this).hasClass("with_pattern"))
							{
								var raccode = $(this).find('.rac_gripsize').val();
								$(this).find(".HeadPat").eq(0).attr('name',	raccode + '-comp-HEADRACS-' + $(this).find('.string_sel').eq(0).val());
								$(this).find(".HeadButt").eq(0).attr('name',	raccode + '-comp-HEADATBC-' + $(this).find('.butt_sel').eq(0).val());
								$(this).find(".HeadLength").eq(0).attr('name',	raccode + '-comp-HEADATLEN-' + $(this).find('.length_sel').eq(0).val());
							}
							
							$(this).find('.adapt_check').on("change",function(){
								that.find('.butt_sel').eq(0).prop("selectedIndex", 0).change();
								that.find('.length_sel').eq(0).prop("selectedIndex", 0).change(); 
								that.find('.string_sel').eq(0).prop("selectedIndex", 0).change(); 
								if($(this).is(":checked")){
									$( ".HeadPat" ).prop( "disabled", false );
									$( ".HeadButt" ).prop( "disabled", false );
									$( ".HeadLength" ).prop( "disabled", false );
								
									that.find('.adapt_order').show();
								}
								else if($(this).is(":not(:checked)")){
									$( ".HeadPat" ).prop( "disabled", true );
									$( ".HeadButt" ).prop( "disabled", true );
									$( ".HeadLength" ).prop( "disabled", true );
									that.find('.adapt_order').hide();
								}
							});

							//FACEBOOK ADD TO CART TRACKING
							// NO return false yet, the form is valid and will be submitted.
							if(typeof fbq !== 'undefined')
							{
								var report_obj = {
									content_type: 'product'
								};
								
								var pcode_select = $(this).find('select.rac_gripsize').eq(0);
								
								if(pcode_select.length)
								{
									var selected_option = pcode_select.find('option:selected').eq(0);
									if(selected_option.length)
									{
										report_obj.content_ids = [pcode_select.val()]
										if(!isNaN(selected_option.data("price")))
										{
											report_obj.price = selected_option.data("price");
											report_obj.currency = 'USD';
										}
									}
								}
								else
								{
									var pcode_input = $(this).find('input[name="pcode"]').eq(0);
									if(pcode_input.length)
									{
										report_obj.content_ids = [pcode_input.val()]
										if(!isNaN(pcode_input.data("price")))
										{
											report_obj.price = pcode_input.data("price");
											report_obj.currency = 'USD';
										}
									}
								}
								fbq('track','AddToCart', report_obj);
							}
						});
					}
					else
					{
						desctop_ordering_form.on("submit",function(e){
							e.preventDefault();
							$(this).trigger("addtocart");
							
							if(typeof fbq !== 'undefined')
							{
								var report_obj = {
									content_type: 'product'
								};
			
								var pcode_select = $(this).find('select[name="pcode"]').eq(0);
								
								if(pcode_select.length)
								{
									var selected_option = pcode_select.find('option:selected').eq(0);
									if(selected_option.length)
									{
										report_obj.content_ids = [pcode_select.val()]
										if(!isNaN(selected_option.data("price")))
										{
											report_obj.price = selected_option.data("price");
											report_obj.currency = 'USD';
					}
									}
								}
								else
								{
									var pcode_input = $(this).find('input[name="pcode"]').eq(0);
									if(pcode_input.length)
									{
										report_obj.content_ids = [pcode_input.val()]
										if(!isNaN(pcode_input.data("price")))
										{
											report_obj.price = pcode_input.data("price");
											report_obj.currency = 'USD';
										}
									}
								}
								fbq('track','AddToCart', report_obj);
							}
						}).on("addtocart",settings.onAdd);
					}
					
					order_box.find('select').each(utilities.create_coupled_select);

				}
			}

		};
	}
};

function handleCheckboxes() {
	$(".fancy_check input").each(function(i, el) {
		if ($(el).is(":checked") || $(el).attr('checked') || $(el).prop('checked')) {
			el.setAttribute('aria-checked', "true");
		}
		else {
			el.setAttribute('aria-checked', "false");
		}
	});
}

function focusOnElement($element) {
	if (!$element.length) {
		return;
	}
	if (!$element.is(':focusable')) {
		// add tabindex to make focusable and remove again
		$element.attr('tabindex', -1).on('blur focusout', function () {
		$(this).removeAttr('tabindex');
	});
	}
	$element.focus();
}	

// Add skip link option dynamically
function skipLink(link, target) {
	var skipLink = $(link);
	var skipAnchor = $(target);
	var skipAnchorOffset = skipAnchor.offset().top;	 	
	skipLink.on('click', function(e) {		
		e.preventDefault();						        
		$(window).scrollTop(skipAnchorOffset);
		focusOnElement(skipAnchor);
	});	
}

/* --- Document Ready --- */
$(function(){
	$(".order_box").find(".qty_section").each(utilities.enhance_qty);
	
	//init Dynamic Cart (except for secure pages - login pages will just link to working order)
	if(!($("html.cart_disable").length)){
		if ($("#header_cart").length){
		    CartHandler.initcart($("#header_cart"));
	    }
	}
	
	if($('#skip-link').length) {		
		skipLink('#skip-link', '#main');
		
	}	
	if($('#skip-footer').length) {		
		skipLink('#skip-footer', '#mainfooter_wrap');		
	}
	
	$(".fancy_check input").change(function(e) {
		var item = e.target;
		switch(item.getAttribute('aria-checked')) {
			case "true":
				item.setAttribute('aria-checked', "false");
				break;
			case "false":
				item.setAttribute('aria-checked', "true");
				break;
		}
	});
	
	/* Working Order Shipping Calculator */
	$("#shipcalc_form").submit(function(e){
		$('.dropdownbox').removeClass("active");
		var action = $(this).prop("action");
		e.preventDefault();
		var serial = $(this).serialize();
		var calc_results = $("<div class='shipcalc_results cf'><\/div>");
		$(".shipcalc_results").remove();
		calc_results.load(action + "?" + serial + " #shipcalc_content", function(response, status, xhr){
			var close_button = $("<a class='shipcalc_close' href='/workingorder.html'>X<\/a>");
			close_button.on("click",function(e){
				e.preventDefault();
				$("#shipcalc_content").slideUp();
			});
			if(status == "success"){
				calc_results.find("#shipcalc_content").hide();
				calc_results.find("#shipcalc_content").append(close_button);
				$("#w_shipping").append(calc_results);
				$("#shipcalc_content").slideDown();
			} else {
				var calc_error = $("<div class='shipcalc_results cf'><div id='shipcalc_content'>Error loading shipping options. Please wait a moment and try again.<\/div><\/div>");
				calc_error.find("#shipcalc_content").append(close_button);
				$("#w_shipping").append(calc_error);
			}
			if(($(window).scrollTop() + $(window).height()) < ($("#shipcalc_content").offset().top + 15)){
				$("html, body").scrollTop($("#w_shipping").offset().top);
			}
		});
	});
	
	/* FP image rotate */
	$(".fp_rotate").imgrotate({ dots:true, timer:3000, transition:"fade", fadetimer:1000 });
	
	//hide shipping calc when opening custom selects
	if($("#w_shipping").length){
		$(".current_selection").on("click",function(){
			if($(this).parent().hasClass("active")){ $("#shipcalc_content").hide(); }
		});
	}
	
	//Working order gift cards
	$("#gc_redeem").on("submit",function(){
		$("#gc_code").prop("name",$("#gc_number").val() + "-CRED-REDEEM");
	});
	
	/* Focus email box on the login page */
	if($("#login_form").length){
		if($("#login_form").hasClass("focus_email")){
			if($("#memory").prop("checked")){
				$("#pass_field").focus();
			} else {
				$("#email_field").focus();
			}
		}
	}
	
	/* Focus email box on the password reset page */
	if($("#pw_reset_form").length){
		$("#email_field").focus();
	}
	
	/* login check */
	$("#login_form").submit(function(){
		var email = document.getElementById("email_field").value;
		var pass_field = document.getElementById("pass_field").value;
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		var check = pattern.test(email);
		if (!check) {
			alert("Please enter a valid email address");
			$("#email_field").focus();
			$("#email_field").select();
			return false;
		}
		if(pass_field == ""){
			alert("Please enter a password");
			$("#pass_field").focus();
			return false;
		}
	});
	
	/* password reset email check */
	$("#pw_reset_form").submit(function(){
		var email = $("#email_field").val();
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		var check = pattern.test(email);
		if (!check) {
			alert("Please enter a valid email address");
			$("#email_field").val("").focus();
			return false;
		}
	});
	
	/* Password change form on account page */
	$("#pass_change").submit(function(){
		var email = $(this).find(".email_box").val();
		var password = $(this).find(".pass_box").val();
		var pw1 = $("#pw_box_1").val();
		var pw2 = $("#pw_box_2").val();
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		var check = pattern.test(email);
		if(!check){
			alert("Please enter a valid email address");
			$(this).find(".email_box").val("").focus();
			return false;
		}
		if(password == ""){
			alert("Please enter your account password");
			$(this).find(".pass_box").val("").focus();
			return false;
		}
		if(pw1 != pw2){
			alert("Passwords do not match");
			$("#pw_box_1").val("");
			$("#pw_box_2").val("");
			$("#pw_box_1").focus();
			return false;
		}
		if(pw1.length < 6 || pw1.length > 19){
			alert("Your new password must be between 6 and 19 characters long");
			$("#pw_box_1").val("");
			$("#pw_box_2").val("");
			$("#pw_box_1").focus();
			return false;
		}
	});
	
	/* email change form on account page */
	$("#account_change").submit(function(){
		var password = $(this).find(".pass_box").val();
		var nl1 = $("#nl_box_1").val();
		var nl2 = $("#nl_box_2").val();
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		var valid = true;
		
		if(password == ""){
			alert("Please enter your account password");
			$(this).find(".pass_box").val("").focus();
			return false;
		}
		
		$(this).find(".email_box").each(function(){
			var check = pattern.test($(this).val());
			if(!check){
				alert("Please enter a valid email address");
				$(this).val("").focus();
				return valid = false;
			}
		});
		
		if(!valid){
			return valid;
		}
		
		if(nl1 != nl2){
			alert("Logins do not match");
			$("#nl_box_1").val("");
			$("#nl_box_2").val("");
			$("#nl_box_1").focus();
			return false;
		}
		
	});
	
	/* Top Nav Dropdowns via focus */
	$(".gnavdroplink, .gnavdrop li a").on("focusin",function(){
		$(this).parents(".gnavdrop").addClass("focus_view");
	});
	$(".gnavdroplink, .gnavdrop li a").on("focusout",function(){
		$(this).parents(".gnavdrop").removeClass("focus_view");
	});
	
	/* newsletter sign up */
	if($(".subscr_form").length){
		$(".subscr_form").on("submit",function(){
			var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
			var check = pattern.test($("#subscr_email").val());
			if(!check){
				alert("Please enter a valid email address");
				$("#subscr_email").val("").focus();
				return false;
			}
			if(!$(".news_checkbox").is(":checked")){
				alert("Please select at least one newsletter");
				return false;
			}
			//GA event tracking	
			var category = $(this).data("trackcategory");
			var action = $(this).data("trackaction");
			var label = $(this).data("tracklabel");
			if(category !== undefined && action !== undefined && label !== undefined){
				_gaq.push(["_trackEvent", category, action, label]);		
			}
			$(this).attr('target','phplist_overlay');
			$("<iframe name='phplist_overlay' scrolling='no' framborder='0' width='550px' height='194px' frameborder='0' allowfullscreen='' src='" + $(this).attr("action") + "&view=inpage'><\/iframe>").lightbox({height:194, width:550, focusTarget: $(this)});
		});
	}
	if($(".unsubscr_form").length){
		$(".unsubscr_form").on("submit",function(){
			var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
			var check = pattern.test($("#unsubscr_email").val());
			if(!check){
				alert("Please enter a valid email address");
				$("#unsubscr_email").val("").focus();
				return false;
			}
			$(this).attr('target','phplist_overlay');
			$("<iframe name='phplist_overlay' scrolling='no' framborder='0' width='550px' height='450px' frameborder='0' allowfullscreen='' src='" + $(this).attr("action") + "&view=inpage'><\/iframe>").lightbox({height:450, width:550, focusTarget: $(this)});
		});
	}
	//Outfit builder init
	if($("#team_outfit_wrap").length){
		$("#team_outfit_wrap").outfit({ cellwidth:156, sliderwidth:680, topselect: $("#outfit_topsel"), botselect: $("#outfit_botsel") });
	}
	if($("#app_outfit_wrap").length){
		$("#app_outfit_wrap").outfit({ cellwidth:156, sliderwidth:680 });
	}
	/* Gift Card Page */
	/*$("#egift_ordering").on("submit",function(){
		var comment = $("#egift_comment").val() + " - " + $("#egift_comment1").val();
		if(comment.length > 71){ comment = comment.substr(0,71); }
		$("#egift_comment").val(comment);
	});*/
	$("#egift_ordering").on("submit",function(){
		var email = $("#egift_comment");
		if(!isValidEmail(email.val())){
			alert("Please Enter a Valid Email Address");
			email.focus();
			return false;
		}
	});
	$("#Certificate").on("submit",function(){
		$("#cert_giftcode").attr("name",$("#cert_giftnum").val() + "-CRED-REDEEM");
	});
	//GA event tracking
	$(".ga_event").on("click",function(){
		var category = $(this).data("trackcategory");
		var action = $(this).data("trackaction");
		var label = $(this).data("tracklabel");
		var value = $(this).data("trackvalue");
		if(category !== undefined && action !== undefined && label !== undefined){
			if(value !== undefined){
				_gaq.push(["_trackEvent", category, action, label, value]);
			} else {
				_gaq.push(["_trackEvent", category, action, label]);		
			}
		}
	});
	
	$(".gnavdroplink, .gnavdrop li a").on("mouseenter",function(){
		$(this).attr("aria-expanded", "true");
	});
	$(".gnavdroplink, .gnavdrop li a").on("mouseleave",function(){
		$(this).attr("aria-expanded", "false");
	});
	

	
	/* Team Price Quote */
	$("#pq_form").on("submit",function(){
		if($("#pq_namefirst").val() === ""){
			alert("Please Enter a First Name");
			$("#pq_namefirst").focus();
			return false;
		}
		if($("#pq_namelast").val() === ""){
			alert("Please Enter a Last Name");
			$("#pq_namelast").focus();
			return false;
		}
		if($("#pq_email").val() === ""){
			alert("Please Enter an Email Address");
			$("#pq_email").focus();
			return false;
		}
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		if(!pattern.test($("#pq_email").val())){
			alert("Please Enter a Valid Email Address");
			$("#pq_email").focus();
			return false;
		}
		if($("#pq_phone").val() === ""){
			alert("Please Enter a Phone Number");
			$("#pq_phone").focus();
			return false;
		}
		if($("#pq_school").val() === ""){
			alert("Please Enter a School Name");
			$("#pq_school").focus();
			return false;
		}
		if($("#pq_schooldist").val() === ""){
			alert("Please Enter a School District");
			$("#pq_schooldist").focus();
			return false;
		}
		if($("#pq_schooltype").val() === ""){
			alert("Please Select a School Type");
			return false;
		}
		if($("#pq_address").val() === ""){
			alert("Please Enter a School Address");
			$("#pq_address").focus();
			return false;
		}
		if($("#pq_city").val() === ""){
			alert("Please Enter a City");
			$("#pq_city").focus();
			return false;
		}
		if($("#pq_state").val() === ""){
			alert("Please Enter a State");
			$("#pq_state").focus();
			return false;
		}
		if($("#pq_zip").val() === ""){
			alert("Please Enter a Zip Code");
			$("#pq_zip").focus();
			return false;
		}
		if($("#pq_gender").val() === ""){
			alert("Please Select a Team Gender");
			return false;
		}
		if($("#pq_colors").val() === ""){
			alert("Please Enter School Colors");
			$("#pq_colors").focus();
			return false;
		}
		if($("#pq_number").val() === ""){
			alert("Please Enter Number of Players");
			$("#pq_number").focus();
			return false;
		}
	});
	
	/* Trade In Quote Page */
	$("#trade_cust_quote").on("submit",function(){
		if($("#trade_first_name").val() === ""){
			alert("Please Enter a First Name");
			$("#trade_first_name").focus();
			return false;
		}
		if($("#trade_last_name").val() === ""){
			alert("Please Enter a Last Name");
			$("#trade_last_name").focus();
			return false;
		}
		if($("#trade_street_add").val() === ""){
			alert("Please Enter a Street Address");
			$("#trade_street_add").focus();
			return false;
		}
		if($("#trade_city_add").val() === ""){
			alert("Please Enter a City");
			$("#trade_city_add").focus();
			return false;
		}
		if($("#trade_state_add").val() === ""){
			alert("Please Enter a State");
			$("#trade_state_add").focus();
			return false;
		}
		if($("#trade_postal_add").val() === ""){
			alert("Please Enter a Postal Code");
			$("#trade_postal_add").focus();
			return false;
		}
		if($("#trade_email_add").val() === ""){
			alert("Please Enter an Email Address");
			$("#trade_email_add").focus();
			return false;
		}
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		if(!pattern.test($("#trade_email_add").val())){
			alert("Please Enter a Valid Email Address");
			$("#trade_email_add").focus();
			return false;
		}
		if($("#trade_phone_num").val() === ""){
			alert("Please Enter a Phone Number");
			$("#trade_phone_num").focus();
			return false;
		}
		var fileCheck = true;
		$('.quote_upload_button').each(function(){
			if($(this).val() === ""){
				alert("Please Select a File for Each Image");
				fileCheck = false;
				$(this).focus();
				return false;
			}
		});
		if(fileCheck === false){
			return false;
		}
	});
	
	/* Fancy Select focus handlers */
	$(".fancy_check input").focusin(function() {
		$(this).parent().find("label span").addClass("fake_fancy_focus");
	});
	$(".fancy_check input").focusout(function() {
		$(this).parent().find("label span").removeClass("fake_fancy_focus");
	});
	$(".ui-slider-handle").focusin(function() {
		$(this).addClass("fake_fancy_focus");
	});
	$(".ui-slider-handle").focusout(function() {
		$(this).removeClass("fake_fancy_focus");
	});
	
	/* Share Cart */
	if($(".workingorder_page.sharecart_load").length && $(".carterror_cookie").length){
		_gaq.push(["_trackEvent", "Share Cart", "Load Cart Cookie Error", "Desktop"]);
	}
	if($(".workingorder_page.sharecart_abort").length){
		_gaq.push(["_trackEvent", "Share Cart", "Load Cart Abort Order In Progress", "Desktop"]);
	}
	if($(".workingorder_page.sharecart_success").length && !($(".carterror_cookie").length)){
		_gaq.push(["_trackEvent", "Share Cart", "Load Cart Success", "Desktop"]);
	}
	if($(".workingorder_page.sharecart_fail").length){
		_gaq.push(["_trackEvent", "Share Cart", "Load Cart Fail", "Desktop"]);
	}
	
	$(".share_copy_wrap").each(function(){
		var linktext = $(this).find(".sharecart_linktext").eq(0);
		if(linktext.length){
			var copybutton = $("<button class='sharecart_copy'>Copy Link</button>");
			$(this).append(copybutton);
			copybutton.on("click",function(){
				linktext.select();
				var succeed;
				try {
						succeed = document.execCommand("copy");
				} catch(e) {
						succeed = false;
				}
				if(succeed){
					$(".sharecart_copymsg").remove();
					$(this).before($("<span class='sharecart_copymsg'>Text copied to the clipboard.</span>"));
				} else {
					$(".sharecart_copymsg").remove();
					$(this).before($("<span class='sharecart_copymsg error'>Error. Please try again or copy manually.</span>"));
				}
			});
		}
	});
	
	$(".sharecart_button").on("click",function(e){
		e.preventDefault();
		_gaq.push(["_trackEvent", "Share Cart", "Click Share Cart Button", "Desktop"]);
		var box = $("<div class='sharecart_pop'></div>");
		$.ajax({
			type: "GET",
			url: "/sharecart.html?popup_box=true",
			dataType: "html",
			success: function(data){
				_gaq.push(["_trackEvent", "Share Cart", "Success Creating Share Cart Link", "Desktop"]);
				_gaq.push(["_trackPageview", "/sharecart.html?popup_box=true"]);
				box.html("").append($(data));
				var linktext = box.find(".sharecart_linktext");
				if(linktext.length){
					var copybutton = $("<button class='sharecart_copy'>Copy Link</button>");
					box.find(".share_copy_wrap").append(copybutton);
					copybutton.on("click",function(){
						linktext.select();
						var succeed;
						try {
								succeed = document.execCommand("copy");
						} catch(e) {
								succeed = false;
						}
						if(succeed){
							$(".sharecart_copymsg").remove();
							$(this).before($("<span class='sharecart_copymsg'>Text copied to the clipboard.</span>"));
						} else {
							$(".sharecart_copymsg").remove();
							$(this).before($("<span class='sharecart_copymsg error'>Error. Please try again or copy manually.</span>"));
						}
					});
				}
				box.lightbox({ height:190, width:500, focusTarget: $(this) });
			},
			error: function(){
				_gaq.push(["_trackEvent", "Share Cart", "Error Creating Share Cart Link", "Desktop"]);
				var result = $("<div class='sharecart_box'><h1>Error</h1><p>Unable to generate share link. Please wait a moment and try again.</p></div>");
				box.html("").append(result).lightbox({ height:175, width:500, focusTarget: $(this) });
			}
		});
	});
	/* end Share Cart */
	
	/* Prop 65 Warning Pop Up  */
	if($(".warning_link").length){
		$(".warning_link").on("click",function(e){
			e.preventDefault();
			var warningbox = $('<div class="warningpopup"><h1 class="warning_header">Proposition 65</h1><div class="content cf"><span class="warning_symbol">&nbsp;</span>WARNING: Cancer and Reproductive Harm - <a href="http://www.P65Warnings.ca.gov">www.P65Warnings.ca.gov</a>.</div></div>');
			warningbox.lightbox({width:640, height:191, focusTarget: $(this)});
		});
	}
	
	function toggleButton(element) {
		// Check to see if the button is pressed
		var pressed = (element.getAttribute("aria-pressed") === "true");
		// Change aria-pressed to the opposite state
		element.setAttribute("aria-pressed", !pressed);
	}
	
	// Cookies Notify Overlay
	function privacyMsg(privacyDate){
		var dataMsg = 'We use cookies to make our website and your shopping experience effective, secure and user-friendly. If you stay on this website, you agree to the use of cookies. You&rsquo;ll find more information on cookies at <a href="https://www.racquetballwarehouse.com/privacy.html">Data Protection</a>';
		var dataWrap = $('<div id="data_protection"></div>');
		var dataClose = $('<span class="data_close">Close</span>');
		
		dataClose.on("click", function(e){
			dataWrap.remove();
			setPrivacyCookie("privacy_policy", privacyDate, 30);
		});
		dataWrap.append(dataMsg).append(dataClose);
		$('body').append(dataWrap);
	}
	
	function setPrivacyCookie(cname, cvalue, exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toUTCString();
		
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	function getPrivacyCookie(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		
		for (var i = 0; i < ca.length; i++){
			var c = ca[i];
			while (c.charAt(0) == ' '){
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0){
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	
	function checkPrivacyCookie(){
		var privacy = getPrivacyCookie("privacy_policy");
		var privacyDate = "180604";
		
		if (!(privacy != '' && privacy == privacyDate)){
			privacyMsg(privacyDate);
		}
	}
	
	checkPrivacyCookie();
	handleCheckboxes();
	
});
/* --- end Document Ready --- */


/*====================================

	AJAX PRODUCT SEARCH BEGIN
	
======================================*/	

/*Search Results Entry Object Class*/
function resultEntry(name, price, code)
{
	this.name = name;
	this.price = parseFloat(price);
	this.code = code;
}

/*Product Search Module*/
AjaxProductSearch = (function(){
	
	// "internal" variables and functions
	var producttype,
	textfield,
	links,
	filtered_catname = null,
	lasttextsearched,
	currentPage = 1,
	searchtext = "",
	resultstarget,
	resettarget,
	searchnavarea,
	resultsarea,
	finderform,
	textform,
	searchurl = 'https://www.racquetballwarehouse.com/search/searchresults.html?',
	productsearchurl = "https://www.racquetballwarehouse.com/search/searchtable.html?sort=no&",
	results = new Array(),
	sort = "alphaAtoZ",
	resultsPerPage = 30,
	searchPaused = false,
	eventLabel = "No Event Label Defined",
	
	getLocalPref = function() {
		if(Modernizr.localstorage)
		{
			var local_sort = null,
			local_perpage = null;
			
			local_sort = localStorage.getItem('sm.ajaxProductSearch.sort');
			local_perpage = localStorage.getItem('sm.ajaxProductSearch.resultsPerPage');
			
			if(local_sort != null)
			{
				sort = local_sort;
			}
			if(local_perpage != null)
			{
				resultsPerPage = local_perpage;
			}
		}
	},
	
	setLocalPref = function() {
		if(Modernizr.localstorage)
		{
			localStorage.setItem('sm.ajaxProductSearch.sort',sort);
			localStorage.setItem('sm.ajaxProductSearch.resultsPerPage',resultsPerPage)
		}
	},
	
	updatefinder = function() {
		if(typeof(finderform) !== "undefined")
		{
			var searcharray = searchtext.split('&');
			for(var i = 0; i < searcharray.length; i++)
			{
				var temp = searcharray[i];
				searcharray[i] = [temp.split('=')[0],temp.split('=')[1]];
			}
			
			for(var i = 0; i < searcharray.length; i++)
			{
				if(searcharray[i][0] == "opt_page") 
				{
					var cp_temp = parseInt(searcharray[i][1]);
					if(!isNaN(cp_temp))
					{
						currentPage = cp_temp;
					}
				}
				
				if(searcharray[i][0] == "opt_perpage")
				{
					var pp_temp = parseInt(searcharray[i][1]);
					if(!isNaN(pp_temp))
					{
						resultsPerPage = pp_temp;
					}
				}

				if(searcharray[i][0] == "opt_sort")
				{
					sort = searcharray[i][1];
				}
			}
			
			finderform.find('select').each(function(){
				var name = $(this).attr('name');
				var newval = null;
				for(var i = 0; i < searcharray.length; i++)
				{
					if(searcharray[i][0] == name)
					{
						if(searcharray[i][1] != "" || searcharray[i][1] != "null")
						{
							newval = searcharray[i][1];
						}
					}
				}
				if(newval == null)
				{
					if($(this).prop('selectedIndex') != 0)
					{
						$(this).attr('selectedIndex', 0).change();
					}
				}
				else
				{
					if($(this).val() != newval)
					{
						$(this).val(newval).change();
					}
				}
			});
			finderform.find('input[type="checkbox"]').each(function() {
				var name = $(this).attr('name'),
				checked = false;
				for(var i = 0; i < searcharray.length; i++)
				{
					if(searcharray[i][0] == name)
					{
						if(searcharray[i][1] != "" || searcharray[i][1] != "null")
						{
							if(searcharray[i][1] == $(this).val())
							{
								checked = true;
							}	
						}
					}
				}
				if($(this).prop("checked") != checked)
				{
					$(this).prop("checked",checked);
				}
			});
			
			finderform.find('.priceinputs input').each(function() {
				var name = $(this).attr('name'),
				checked = false;
				for(var i = 0; i < searcharray.length; i++)
				{
					if(searcharray[i][0] == name)
					{
						if(searcharray[i][1] != "" || searcharray[i][1] != "null")
						{
							$(this).val(searcharray[i][1]);
						}
					}
				}
				
			});
		}
	},
	
	generate_unfilteredlink = function() {
		var actionquery = "";
		var first = true;
		finderform.find('.keepinquery').each(function() {
			if(!$(this).is('input.cat_filter'))
			{
				actionquery += ((first)?"?":"&") + $(this).attr("name") + "=" + $(this).val();
				first = false
			}
		});
		var allcatstext = "";			
		finderform.find('.default_all').each(function (){
			if($(this).val() == "" || $(this).val() == "null")
			{
				$(this).find('option').each(function(){
					if($(this).val() != "" && $(this).val() != "null" )
					{
						allcatstext += "cat_all=" + $(this).val() + "&";
					}
				});
			}
			else
			{
				if($(this).hasClass('default_as_basecat'))
				{
					allcatstext += "cat_all=" + $(this).val() + "&";
				}
			}
		});
		var basecat  = "";
		
		if(finderform.find('input.cat_filter').length)
		{
			if(finderform.find('input.cat_filter').data("base") != null)
			{
				basecat = 'cat=' + finderform.find('input.cat_filter').data("base") + '&';
			}
		}		
		return(finderform.attr("action") + actionquery + '#' + basecat + allcatstext + finderform.find(':not(.cat_filter)').serialize() + serializeOptionsPrivate(1));
	},
	
	
	
	
	generateResetLinks = function() {
		if(typeof(finderform) !== "undefined")
		{			
			var resetsection = $('<div class="resetlinks cf">');
			var first = true;

			var filterinput = finderform.find('input.cat_filter');
			var filter_escape_link = null;
			if(filterinput.length)
			{
				var filter_text = filterinput.data("catname");
							
				if(typeof(filter_text) != "undefined")
				{
					if(filter_text != "")
					{
						filter_text = filter_text.replace(/_/g, " ");
					}
					else
					{
						filter_text = "Search All";
					}
				}
				else
				{
					filter_text = "Search All";
				}
				
				filtered_catname = filter_escape_link = $('<a href="' + generate_unfilteredlink() + '">' + filter_text + '<\/a>');
				if(first)
				{
					resetsection.append('<div class="title">Your Selections:<\/div>');
					resetsection.append(filter_escape_link);
					first = false;
				}
			}
			
			finderform.find('select').each(function() {
				if($(this).prop('selectedIndex') != 0)
				{
					if(first)
					{
						resetsection.append('<div class="title">Your Selections:<\/div>');
						first = false;
					}
					var temp = $(this);
					resetsection.append($('<a href="#">' + $(this).find('option').eq($(this).prop('selectedIndex')).html() + '<div class="reset"></div></a>').bind("click",function(e){
						e.preventDefault();
						temp.prop('selectedIndex',0).change();
						finderform.submit();
					}));
				}
			});
			finderform.find('input[type="checkbox"]').each(function() {
				if($(this).prop('checked') == true)
				{
					if(first)
					{
						resetsection.append('<div class="title">Your Selections:<\/div>');
						first = false;
					}

					var temp = $(this);
					resetsection.append($('<a href="#">' + $("label[for='" + $(this).attr("id") + "']").text() + '<div class="reset"></div></a>').bind("click",function(e){
						e.preventDefault();
						temp.prop('checked',false).change();
						finderform.submit();
					}));
				}
			});
			return resetsection;
		}
		else
		{
			return null;
		}
	},

	displayPage = function(pagenum) {
		
		var topofresults = resultstarget;

		if(topofresults.length)
		{
			if(($(window).scrollTop() > topofresults.offset().top)) 
			{
				if(($(window).scrollTop() > topofresults.offset().top))
				{
					$(window).scrollTop(topofresults.offset().top);
				}
			}
		}
		
		//var navbar = $('<div id="searchnavbar" class="clearfix">')
		/*var formreset = generateResetLinks();
		navbar.append(formreset);*/

		var searchtitle = "Search Results";
		if(typeof(textfield) !== "undefined")
		{
			lasttextsearched = lasttextsearched.replace(/[\u00A0-\u9999<>"',;\%\^\=\(\)\*\-\|\+\&\/\\]/gim, function(i) {
				 return '&#'+i.charCodeAt(0)+';';
			});
			searchtitle += " for \"" + lasttextsearched + "\"";
		}
		
		var answer;
		if(results.length == 0 )
		{
			_gaq.push(['_trackEvent',"Text Search: No Results", lasttextsearched ]);
			
			searchnavarea.empty().append($('<div class="searchlinks"><\/div>').append(links)).append(
				$('<h1 class="searchheader clearfix"></h1>').append('<span class="fl">'+ searchtitle +'<\/span>')
			)
			resultsarea.removeClass("loading").empty().append(
				$('<div id="producttarget"><p>0 Results Found.<\/p><\/div>')
			);
		}
		else
		{
			var pageTotal = Math.ceil(results.length/resultsPerPage);
			if(pagenum == null) pagenum = 1;
			currentPage = pagenum;
			searchtext = generateHash();
			window.location.hash = '#' + searchtext;
			
			_gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);
			
			if(currentPage > pageTotal) currentPage = pageTotal;
			
			var showntext = 'Showing ' + ((currentPage - 1)*resultsPerPage + 1) + ' - ';
			if(results.length > (currentPage*resultsPerPage))
			{
				showntext += currentPage*resultsPerPage;
			}
			else
			{
				showntext += results.length;
			}
			showntext += " of " + results.length;
			
			
			
			
			searchnavarea.empty().append($('<div class="searchlinks"><\/div>').append(links)).append(
				$('<h1 class="searchheader clearfix"></h1>').append('<span class="fl">'+ searchtitle +'<\/span><span class="fr">' + showntext + '<\/span>')
			).append(
				$('<div class="cf">').append(
					$('<div id="searchoptions" class="clearfix">').append(
						$('<div class="selectwrap">').append(
							generateSortSelect()
						)
					).append(
						$('<div class="selectwrap">').append(
							generatePerPageSelect()
						)	
					)
				).append(
					generatePageLinks()
				)
			);
			
			
			var lastitemindex = pagenum*resultsPerPage;
			if(lastitemindex > results.length) lastitemindex = results.length;
			
			var productsurl = productsearchurl;
			
			for(var i = (pagenum - 1)*resultsPerPage; i < lastitemindex; i++)
			{
				productsurl += "productlist=" + results[i].code + "&";
			}

			var productstarget = $('<div id="producttarget"><\/div>');
			resultsarea.removeClass("loading").empty().append(productstarget);
			resultstarget.find('select').each(utilities.create_coupled_select);
			
			
			
			productstarget.addClass("loading");
			var tempurl = productsurl;
			if(typeof(producttype) !== "undefined")
			{
				tempurl += "type=" + producttype + "&";
			}
			productstarget.load(tempurl, function( response, status, xhr ){
				if(status == "error")
				{
					$(this).html("<p>An Error Occurred.<\/p>")
				}
				else
				{
					$(this).removeClass("loading").after(generatePageLinks());
					$(this).find('.threesixty').each(function(){
						$(this).click(function(e){
							e.preventDefault();
							descpop_threesixty($(this).attr("href"));
						});
					});
					$(this).find('.ajax_string_ordering').each(function(){
						var tabindex = 1;
						$(this).find('input').each(function(){
							$(this).attr("tabindex",tabindex);
						});
						$(this).submit(function(){
							CartHandler.order($(this).serialize());
							this.reset();
							return false;
						});
					});
					$(this).find('.quick_view_link').click(quickviewPopup);
					$('.stocknotify_link').click(function(e){
						e.preventDefault();
						descpop_stocknotify($(this).attr("href"));
					});
				}	
			});
		}
	},

	/*Results Entry Sorting Functions*/
	sortByPriceAcc = function(a,b) {
		return a.price - b.price;
	},
	sortByPriceDec = function(a,b)
	{
		return b.price - a.price;
	},
	sortAlphaAtoZ = function(a,b)
	{
		return a.name.localeCompare(b.name);
	},
	sortAlphaZtoA = function(a,b)
	{
		return b.name.localeCompare(a.name);
	},

	
	sortResults = function(sortby,pagenum) {
		if((typeof pagenum ) === "undefined")
		{
			var pagenum = 1;
		}
		switch(sortby)
		{
			case "priceAcc":
				sort = sortby;
				results.sort(sortByPriceAcc);
				displayPage(pagenum);
				break;
			case "priceDec":
				sort = sortby;
				results.sort(sortByPriceDec);
				displayPage(pagenum);
				break;			
			case "alphaZtoA":
				sort = sortby;
				results.sort(sortAlphaZtoA);
				displayPage(pagenum);
				break;
			case "alphaAtoZ":
				sort = sortby;
				results.sort(sortAlphaAtoZ);
				displayPage(pagenum);
				break;
			default:
				sort = "alphaAtoZ";
				results.sort(sortAlphaAtoZ);
				displayPage(pagenum);
				break;
		}
	},
	generatePageLinks = function() {
		var answer = $('<div class="searchpagenav">');
		var pageTotal = Math.ceil(results.length/resultsPerPage);
		
		if(pageTotal == 1)
		{
			return null;
		}
		else
		{
			
			if(currentPage != 1)
			{
				answer.append(generateLinkToPage((currentPage - 1),'<span class="arrow"><<<\/<span>',"prev"));
			}
			else
			{
				answer.append(generateLinkToPage((currentPage),'<span class="arrow"><<<\/<span>',"prev"));
			}
			if(pageTotal < 9)
			{				
				for(var i=1; i <= pageTotal; i++)
				{	
					answer.append(generateLinkToPage(i));
				}
			}
			else
			{
				if(currentPage < 5)
				{
					for(var i=1; i <= 5; i++)
					{
						answer.append(generateLinkToPage(i));
					}
					
					answer.append("<span class=\"double\">. . .<\/span>");
					
					for(var i= (pageTotal - 2); i <= pageTotal; i++)
					{
						answer.append(generateLinkToPage(i));
					}
				}
				else
				{
					if(currentPage > (pageTotal - 4))
					{
						for(var i=1; i <= 3; i++)
						{
							answer.append(generateLinkToPage(i));
						}
						
						answer.append("<span class=\"double\">. . .<\/span>");
						
						for(var i=(pageTotal -4); i <= pageTotal; i++)
						{
							answer.append(generateLinkToPage(i));
						}
					}
					else
					{
						for(var i=1; i <=2; i++)
						{
							answer.append(generateLinkToPage(i));
						}
						
						answer.append("<span>...<\/span>");
						
						for(var i=(currentPage - 2); i <=(currentPage + 2); i++)
						{
							answer.append(generateLinkToPage(i));
						}
						
						answer.append("<span>...<\/span>");
						
						for(var i=(pageTotal - 1); i <=pageTotal; i++)
						{
							answer.append(generateLinkToPage(i));
						}
					}
				}
			}
			
			if(currentPage != pageTotal)
			{
				answer.append(generateLinkToPage((currentPage + 1),'<span class="arrow">>><\/<span>',"next"));
			}
			else
			{
				answer.append(generateLinkToPage((currentPage),'<span class="arrow">>><\/<span>',"next"));
			}
		}
		return answer;
	},

	generateSortSelect = function() {
		var select = $('<select>'),
		options = [
			{val:"alphaAtoZ",text:"Sort A-Z"},
			{val:"alphaZtoA",text:"Sort Z-A"},
			{val:"priceAcc",text:"Sort By Lowest Price"},
			{val:"priceDec",text:"Sort By Highest Price"}
		];
		for(var i=0;i<options.length;i++)
		{
			var choice = $('<option value="' + options[i].val + '" ' + ((sort == options[i].val)?'selected="selected"':'') + ' >' + options[i].text + '<\/option>');
			select.append(choice);
		}
		select.bind("change",function(e){
			sortResults($(this).val());
			setLocalPref();
		});
		return select;
	},
	
	generatePerPageSelect = function() {
		var select = $('<select>');
		var options = [30,60,120];
		for(var i=0;i<options.length;i++)
		{
			var choice = $('<option value="' + options[i] + '" ' + ((resultsPerPage == options[i])?'selected="selected"':'') + ' >' + options[i] + ' Results Per Page<\/option>');
			select.append(choice);
		}
		select.bind("change",function(e){
			setResultsPerPage($(this).val());
			setLocalPref();
		});
		return select;
	},
	
	populateSearchArray = function(data) {
		results.length = 0;
		var searchlinks = $($(data).find(".searchlinks").eq(0).html());
		var filtered = $(data).find(".filter_catname").eq(0).text();
		
		if(searchlinks.length)
		{
			links = searchlinks;
		}
		else
		{
			links = null;
		}
		if(filtered.length)
		{
			if(filtered_catname != null)
			{
				filtered_catname.text(filtered)
			}
		}
	
		//check for styles that need to be displayed with catcell_style (to avoid family thumbs)
		if($(data).find(".catcell_style").length){
			producttype = "styleapparel";
		} else if($(data).find(".catcell_nostyle").length){
			producttype = "nostyleapparel";
		}
		$(data).find(".result").each(function () {
			results.push(new resultEntry($(this).find(".name").text(), $(this).find(".price").text(), $(this).find(".code").text()));
		});
		sortResults(sort,currentPage);
	},
	
	generateLinkToPage = function(num,text,classtext) {

		var linktext,
		link = null;
		
		if(typeof(text) != "undefined") {
			linktext = text;
		} else {
			linktext = num;
		}
		if(num > 0)
		{
			if(num == currentPage)
			{
				link = $('<span class="current">' + linktext + '<\/span>');
			}
			else
			{
				link = $('<a href="#">' + linktext + '<\/a>').click(function(e){
					e.preventDefault();
					displayPage(num);
				});
			}
		}
		if(typeof(classtext) != "undefined") {
			link.addClass(classtext);
		}
		return link;
	},
	
	serializeOptionsPrivate = function(pagenum) {
		if(typeof(pagenum) !== "undefined")
		{
			return '&opt_page=' + pagenum + '&opt_sort=' + sort + '&opt_perpage=' + resultsPerPage;
		}
		else
		{
		return '&opt_page=' + currentPage + '&opt_sort=' + sort + '&opt_perpage=' + resultsPerPage;

		}
	},
	
	setResultsPerPage = function(num) {
		if(resultsPerPage != num)
		{
			resultsPerPage = num;
			displayPage(1);
		}
	},
	
	generateHash = function(){
		
		
		
		if((typeof finderform) !== "undefined")
		{
			var allcatstext = "";
			if(!(finderform.find('input.cat_filter').length))
			{
				finderform.find('.default_all').each(function (){
					if($(this).val() == "" || $(this).val() == "null")
					{
						$(this).find('option').each(function(){
							if($(this).val() != "" && $(this).val() != "null" )
							{
								allcatstext += "cat_all=" + $(this).val() + "&";
							}
						});
					}
					else
					{
						if($(this).hasClass('default_as_basecat'))
						{
							allcatstext += "cat_all=" + $(this).val() + "&";
						}
					}
				});
			}
			return allcatstext + finderform.serialize() + serializeOptionsPrivate();
		}
		else
		{
			if((typeof textfield) !== "undefined")
			{
				 return 'search=products&searchtext=' + encodeURI(lasttextsearched) + serializeOptionsPrivate();
			}
		}
	};

	return {
	
		resetOptions: function() {
			currentPage = 1;
			getLocalPref();
		},
		serializeOptions: function() {
			return serializeOptionsPrivate();
		},
		setproducttype: function(type) {
			producttype = type;
		},
		loadPrefs: function(){
			getLocalPref();
		},
		settarget: function(jqobj) {
			resultstarget = jqobj;
			resettarget = $('<div class="resettarget">');
			searchnavarea = $('<div id="searchnavbar" class="clearfix">');
			resultsarea = $('<div class="results">').append(resultstarget.html());
			resultstarget.empty().append(resettarget).append(searchnavarea).append(resultsarea);
		},
		
		assigntextfield: function(jqobj) {
			textfield = jqobj;
		},
		
		setproductsearchurl: function(url) {
			searchurl = url;
		},
		
		runSearch: function(text) {
			if(text != "")
			{
				if(typeof(textfield) !== "undefined")
				{
					if(searchtext !== text)
					{	
						searchtext = text;
						window.location.hash = text;
	
						var searcharray = searchtext.split('&');
						
						for(var i = 0; i < searcharray.length; i++)
						{
							var temp = searcharray[i];
							searcharray[i] = [temp.split('=')[0],temp.split('=')[1]];
						}
						for(var i = 0; i < searcharray.length; i++)
						{
							if(searcharray[i][0] == "opt_page") 
							{
								var cp_temp = parseInt(searcharray[i][1]);
								if(!isNaN(cp_temp))
								{
									currentPage = cp_temp;
								}
							}
							
							if(searcharray[i][0] == "opt_perpage")
							{
								var pp_temp = parseInt(searcharray[i][1]);
								if(!isNaN(pp_temp))
								{
									resultsPerPage = pp_temp;
								}
							}
			
							if(searcharray[i][0] == "opt_sort")
							{
								sort = searcharray[i][1];
							}
						}					
	
						tempsearchtext = text.split("searchtext=")[1];
						tempsearchtext = tempsearchtext.split("&")[0];
						lasttextsearched = decodeURIComponent(tempsearchtext);
						textfield.val(lasttextsearched);
						
						resettarget.empty();
						searchnavarea.empty().append('<h1 class="searchheader">Searching...<\/h1>');
						resultsarea.empty().addClass("loading");
			
						$.get(searchurl + "&" + text, function(data) {
							populateSearchArray(data);
						});
					}
				}
				else
				{
					if(!searchPaused)
					{
						if(searchtext !== text)
						{						
							searchtext = text;
							window.location.hash = text;						
							updatefinder();
							
							resettarget.empty().append(generateResetLinks);
							searchnavarea.empty().append('<h1 class="searchheader">Searching...<\/h1>');
							resultsarea.empty().addClass("loading");
				
							$.get(searchurl + "&" + text, function(data) {
								populateSearchArray(data);
							});
						}
					}
				}
			}
		},
		
		assigntextform: function(form) {
			textform = form;
			eventLabel = "Text Search";
		},
		
		assignfinder: function(form) {
			finderform = form;
			
			var data_xmlurl = finderform.data('xmlsearchurl'),
				data_evlabel = finderform.data('eventlabel');
			
			if(data_xmlurl)
			{
				if(data_xmlurl != "")
				{
					this.setproductsearchurl(data_xmlurl);
				}
			}
			
			if(data_evlabel)
			{
				if(data_evlabel != "")
				{
					eventLabel = data_evlabel;
				}
			}
		},
		
		runTextSearch: function() {

			var type = textform.find(".textsearchtype");
			if(type.length)
			{
				type = "&type=" + type.val();
			}
			else
			{
				type = "";
			}
			lasttextsearched = textfield.val();
			this.trackTextSearch(lasttextsearched);
			window.location.hash = '#' + generateHash();
		},
		
		runFinderSearch: function() {
			window.location.hash = '#' + generateHash();
		},
		
		trackTextSearch: function(interaction_label) {
			_gaq.push(['_trackEvent', 'Text Search', interaction_label]);
		},
		
		trackInteraction: function(interaction_label) {
			_gaq.push(['_trackEvent', 'Finder', eventLabel,interaction_label]);			
		},
		
		pauseSearch: function() {
			searchPaused = true;
		},
		
		unpauseSearch: function() {
			searchPaused = false;
		},
		
		isPaused: function() {
			return searchPaused;
		}
	};
	
})();


/*====================================

	AJAX PRODUCT SEARCH END
	
======================================*/	


function descpop_stocknotify(url) {
	$('<iframe scrolling="no" framborder="0" width="' + 580 + 'px" height="' + 230 + 'px" frameborder="0" allowfullscreen="" src="' + url + 
	'&view=inpage"><\/iframe>').lightbox({height:230, width:580, focusTarget: returnObj});
}

	var ProductImageViewerModule = function(){ return (function(){
	// "internal" variables and functions
	
	//jQuery objects 
	var mainimage = null,
	mainvideo = null,
	videoOverlay = null,
	viewport = null,
	leftbutton = null,
	rightbutton = null,
	imagecounter = null,
	multiview = null,
	mainloader = null,
	
	//Image viewer state variables
	imageurl = "",
	imageurlss= "",
	isloading = false,
	imagecount = 0,
	currentimage = 1,
	stylecode = null,
	//largeview = null,
		
	imgPat = /(.*)-([\d]+)?\.(jpg|gif|png)(.*)/i,
		
	zv_state_lrg_width = null,
	zv_state_lrg_height = null,
	zv_state_std_width = null,
	zv_state_std_height = null,
	zv_state_viewlarge_imgpat = /(https?:\/\/img.racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(&nw=)([\d]+)?/i,
	zv_state_viewlarge_rplpat = '$1$2$3$4.$5',
	
	show_loading = function() {
		isloading = true;
		setTimeout(function() {
			if(false && isloading){
				var wrap = $('.mainimage_wrap');
				if(mainloader == null)
				{
					mainloader = $('<div class="loader">loading<\/div>');
					wrap.append(mainloader);
				}
				wrap.addClass('loading');
			}
		},300);
	},

	hide_loading = function() {
		isloading = false;
		$('.mainimage_wrap').removeClass('loading');
	},
		
	loadmain = function() {
		var tempImg;
		// Replaces Entire Image temp image upon load 
		show_loading();
		tempImg = $('<img class="mainimage" \/>').hide();
		//bind load event to resize indicator box
		tempImg.bind('load', function() {
			if(tempImg.attr('src') == imageurl) {
				mainimage.attr("src",imageurl);
				mainimage.attr('srcset', imageurlss);
				tempImg.detach();

//				mainimage.replaceWith(tempImg.show());
//				mainimage = tempImg;
			}
			else
			{
				//console.log("ignore");
				tempImg.detach();
			}
			if(mainvideo){
				hideVideo();
			}
			hide_loading();
		});
		//append image and set src to trigger load event
		tempImg.attr('src', imageurl);
		tempImg.attr('srcset', imageurlss);
		$('body').append(tempImg);

	},
	
	updateimage = function() {
		imageurl = imageurl.replace(imgPat,'$1-' + currentimage + '.$3$4');
		imageurlss = imageurlss.replace(imgPat,'$1-' + currentimage + '.$3$4');
		loadmain();
	},
	
	updatestyle = function(){
		var /*imageurl = mainimage.attr('src'),*/ stylePat = /(https?:\/\/img.racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(&nw=)([\d]+)?/i, tempImg;
		
		imageurl = imageurl.replace(stylePat,'$1$2-'+stylecode+'-'+currentimage+'.$5$6$7');
		imageurlss = imageurlss.replace(stylePat,'$1$2-'+stylecode+'-'+currentimage+'.$5$6$7');
		loadmain();

		if(multiview)
		{
			multiview.find('img').each(function(i){
				var multiswap = $(this).attr("src");
				var multiswapss = $(this).attr("srcset");
				var imgNum = i+1;
				if($(this).hasClass("video_thumb")){
					imgNum = 3;
				}
				multiswap = multiswap.replace(/(https?:\/\/img.racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(&nw=)([\d]+)?/i,'$1$2-'+stylecode+'-'+imgNum+'.$5$6$7');
				$(this).attr('src',multiswap);
				
								if(multiswapss !== undefined){
					multiswapss = multiswapss.replace(/(https?:\/\/img.{0,2}racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(&nw=)([\d]+)?/i,'$1$2-'+stylecode+'-'+imgNum+'.$5$6$7');
					$(this).attr('srcset',multiswapss);
				}

			});
		}
	},
	
	updatemultiviewstate = function(){
		if(multiview)
		{
			multiview.find('li').removeClass("active").eq(currentimage - 1).addClass("active");
		}
	},
	
	updatebuttonstate = function(){
		if(imagecounter != null)
		{
			imagecounter.html(currentimage + " of " + imagecount);
		}
		if(leftbutton != null)
		{
			if(currentimage <= 1)
			{
				leftbutton.addClass("ui-disabled");
			}
			else
			{
				leftbutton.removeClass("ui-disabled");
			}
		}
		if(rightbutton != null)
		{
			if(currentimage >= imagecount)
			{
				rightbutton.addClass("ui-disabled");
			}
			else
			{
				rightbutton.removeClass("ui-disabled");
			}
		}
	},
	
	initVideo = function(vidCode){
		mainvideo = $('<video class="main_img_video" preload="auto" loop playsinline><source type="video/mp4" src="https://img.tennis-warehouse.com/vidApparel/'+ vidCode +'.mp4"></video>');
/*
		videoOverlay = $('<div class="video_overlay"></div>');
		mainvideo.on("playing", function(){
			videoOverlay.hide();
		});
		mainvideo.on("ended pause", function(){
			videoOverlay.show();
		});
		mainvideo.on("click", function(){
			$(this).get(0).pause();
		});
		videoOverlay.on("click", function(){
			mainvideo.get(0).play();
		});
*/
		mainvideo.hide();
// 		videoOverlay.hide();
		mainimage.parents(".mainimage_wrap").append(mainvideo)/* .append(videoOverlay) */;
	},
	
	showVideo = function(){
		mainimage.hide();
// 		videoOverlay.show();
		mainvideo.show();
		mainvideo.get(0).play();
	},
	
	hideVideo = function(){
		mainvideo.get(0).pause();
		mainvideo.hide();
// 		videoOverlay.hide();
		mainimage.show();
	},
	
	zoomviewinit_regular = function(){
		var indicator, 
		largeview; 
		//mainimage.closest('.product_image');
		mainimage.wrap('<div class="viewport clearfix"><\/div>');
		viewport = mainimage.closest('.viewport');
		indicator = $('<div class="indicator"><\/div>').append('<div class="note">Click for larger view.<\/div>');
		largeview = $('<div class="largeview"><\/div>');
		
		viewport.prepend(largeview).prepend(indicator);
		
		var std_width_padding = 0, std_height_padding = 0;
		
		viewport.hover(
			function () {
				var srcBig/* = mainimage.attr('src')*/, tempImg;
	
				//Sets largeview dimensions
				zv_state_lrg_width = parseInt(largeview.css('width'));
				zv_state_lrg_height = parseInt(largeview.css('height'));
				
				//Sets standard image dimesnions
				zv_state_std_width = parseInt(mainimage.css('width'));
				zv_state_std_height = parseInt(mainimage.css('height'));
				//console.log(zv_state_std_height);
				
				
				std_width_padding = parseInt(viewport.width() - zv_state_std_width);
				std_height_padding = parseInt(viewport.outerHeight() - zv_state_std_height);
				
				//Sets large view image url
				srcBig = imageurl.replace(zv_state_viewlarge_imgpat, zv_state_viewlarge_rplpat);
				largeview.css('background-image', "url(\'" + srcBig + "\')");
				
				//create hidden temp image
				tempImg = $('<img />').hide();
	
				//bind load event to resize indicator box
				tempImg.bind('load', function(){
					var indicator_height, indicator_width;
				
					indicator_height = Math.ceil(zv_state_std_height*(zv_state_lrg_height/($(this).height())));
					indicator_width = Math.ceil(zv_state_std_width*(zv_state_lrg_width/($(this).width())));				
					
					//disable hover if large image is not larger than standard image
				  	if((indicator_height > zv_state_std_height)||(indicator_width > zv_state_std_width))
					{
						viewport.unbind('hover').removeClass("active");
					}
					else
					{
						indicator.css({
							height: indicator_height + "px",
							width: indicator_width + "px"
						});
					}
					//remove temporary image
					$(this).remove();
				});
				
				//append image and set src to trigger load event
				$('body').append(tempImg);
				tempImg.attr('src', srcBig);
				$(this).addClass("active");
			},
			function () {
				$(this).removeClass("active");
			}
		);
		
		largeview.hover(function() {
			viewport.removeClass("active");
		});
		
		//Positions Viewport and View Indicator upon mouse/touch move
		viewport.mousemove(function(e){
			e.preventDefault();
			// subtract indicator border width to get viewport dimensions
			var viewportheight, viewportwidth, width, height, offset, left, top;
			
			
			viewportheight = zv_state_std_height - 2;
			viewportwidth = zv_state_std_width - 2;
			width = indicator.width();
			height = indicator.height();
			offset = mainimage.offset();
			
			if(e.type == 'mousemove')
			{
				left = e.pageX - offset.left;
				top = e.pageY - offset.top;
			}
			left -= width/2;
			top -= height/2;
			
			if(left < -(std_width_padding/2)) left = -(std_width_padding/2);
			if(left > (viewportwidth - width + (std_width_padding/2))) left = (viewportwidth - width + (std_width_padding/2));
			if(top < -(std_height_padding/2)) top = -(std_height_padding/2);
			if(top > (viewportheight - height + (std_height_padding/2))) top = (viewportheight - height + (std_height_padding/2));
			indicator.css('left', (left+(std_width_padding/2)) + "px ");
			indicator.css('top', (top+(std_height_padding/2)) + "px ");
			
			var bgpos_x = (100*left)/(viewportwidth-width) + "%";
			var bgpos_y = (100*top)/(viewportheight-height) + "%";
			
			largeview.css('backgroundPosition', bgpos_x  + " " + bgpos_y);
			
		});
		
		indicator.click( function(e){
			e.preventDefault();
			
			
			
			/*$('.closewindowlayer, .largeimagepop').detach();*/
			
			
			
			
			
			var srcBig = imageurl, tempImg;
			srcBig = srcBig.replace(zv_state_viewlarge_imgpat, zv_state_viewlarge_rplpat);
			tempImg = $('<img class="largemain"/>');
			tempImg.hide();
			tempImg.bind('load', function(){
				var largeimgheight, largeimgwidth, windowheight, windowwidth, tot_pad_vert, tot_pad_horz, thumbarea_width, scaledheight, scaledwidth, popupbox, popupboxthumbs;
			
				largeimgheight = $(this).height();
				largeimgwidth = $(this).width();
				windowheight = $(window).height();
				windowwidth = $(window).width();
				
				//Total padding for popup max sizing note: this includes the border and padding of popup window
				tot_pad_vert = 50;
				tot_pad_horz = 50;
				thumbarea_width = multiview ? Math.ceil(multiview.find('img').length/6)*60 : 0;
				
				//Find out necessary vertical and horizontal scaling
				scaledheight = Math.min(largeimgheight,windowheight - tot_pad_vert);
				scaledwidth = Math.min(largeimgwidth,windowwidth - tot_pad_horz - thumbarea_width);
				
				/*popupbox = $('<div class="largeimagepop"><\/div>').hide();*/
				popupbox = $('<div class="largeimagepop"><\/div>');
				
				//determine dimension to constrain and set large image height
				if( (scaledheight/largeimgheight) >= (scaledwidth/largeimgwidth) )
				{
					$(this).css('width', scaledwidth + "px");
					scaledheight = Math.ceil((scaledwidth/largeimgwidth)*largeimgheight);
				}
				else
				{
					$(this).css('height', scaledheight + "px");
					scaledwidth = Math.ceil((scaledheight/largeimgheight)*largeimgwidth);
				}
				
				//set popupbox dimensions
				
				popupbox.css({
					/*left: (((windowwidth - (scaledwidth + thumbarea_width) - 10)/2) + $(window).scrollLeft()) + "px",*/
					/*top: (((windowheight - scaledheight - 10)/2) + $(window).scrollTop()) + "px",*/
					width: (scaledwidth + thumbarea_width) + "px"
				});
				popupbox.append($(this).show());
				
				
				
				popupboxthumbs = $('<div class="popupthumbs clearfix"><\/div>').css("width",thumbarea_width + "px");
				if(multiview){
					multiview.find('img').each(function(i) {
						var pattern, patternss, link, image, imagess, thumb;
						pattern = /(https?:\/\/img.{0,2}racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(\&nw=)([\d]+)?/i;
						patternss = /(https?:\/\/img.{0,2}racquetballwarehouse.com\/watermark\/rs.php\?path=)([\w]+)(-[\w]+)?(-[\d]{1,2})\.(jpg|gif|png)(\&nw=)([\d]+)?/i;
						link = $(this).attr('src').replace(pattern,'$1$2$3$4.$5');
						image = $(this).attr('src').replace(pattern, '$1$2$3$4.$5$6' + '50');
						imagess = $(this).attr('srcset').replace(patternss, '$1$2$3$4.$5$6' + '100');
						thumb = $('<a href="'+ link +'"><\/a>').click(function (e){
							e.preventDefault();
							e.stopPropagation();
							$('.largeimagepop img').eq(0).attr('src', $(this).attr('href'));
						});
						if($(this).hasClass("video_thumb")){
							thumb = $('<a href="'+ link +'" class="video_app_popup"><\/a>');
						} else {
							thumb = $('<a href="'+ link +'"><\/a>').click(function (e){
								e.preventDefault();
								e.stopPropagation();
								$('.largeimagepop img').eq(0).attr('src', $(this).attr('href')).bind("load", function(){
									if(mainvideo){
										$(".large_video").hide().get(0).pause();
	// 									$(".large_overlay").hide();
										tempImg.show();
									}
								});
							});
						}
						popupboxthumbs.append(thumb.append('<img src="' + image + '" srcset="' + imagess + '" />'));
					});
				}
				if(mainvideo){
					var vidmulti, largevideo, largeOverlay, vidlink;
					vidmulti = popupboxthumbs.find(".video_app_popup").on("click", function(e){
						e.preventDefault();
						e.stopPropagation();
						tempImg.hide();
						largevideo.show();
						largevideo.get(0).play();
// 						largeOverlay.show();
					});
					vidlink = mainvideo.find("source").attr("src");
					largevideo = $('<video class="main_img_video large_video" preload="auto" loop><source type="video/mp4" src="'+ vidlink +'"></video>'),
/*
					largeOverlay = $('<div class="video_overlay large_overlay"></div>');
					
					largevideo.on("playing", function(){
						largeOverlay.hide();
					});
					largevideo.on("ended pause", function(){
						if(largevideo.is(":visible")){
							largeOverlay.show();
						}
					});
					largevideo.on("click", function(){
						$(this).get(0).pause();
					});
					largeOverlay.on("click", function(){
						largevideo.get(0).play();
					});
*/
					
					largevideo.hide();
// 					largeOverlay.hide();
					
					if( (scaledheight/largeimgheight) >= (scaledwidth/largeimgwidth) )
					{
						largevideo.css('width', scaledwidth + "px");
					}
					else
					{
						largevideo.css('height', scaledheight + "px");
					}
// 					largeOverlay.css('width', scaledwidth + "px");
					
					tempImg.after(largevideo);
				}
				popupbox.append(popupboxthumbs);
				
				
				/*
				popupbox.append($('<div class="closebutton">X<\/div>').click( function(e){
					$('.closewindowlayer, .largeimagepop').detach();
				})).append(popupboxthumbs);
		*/
		
				popupbox.append(popupboxthumbs);

				/*
		
				$('body').append($('<div class="closewindowlayer"><\/div>').css('height',$('body').height() + "px").click(function(e){
					e.stopImmediatePropagation();
					e.preventDefault();
					$('.closewindowlayer, .largeimagepop').detach();
				}));*/
				
				popupbox.lightbox({height:scaledheight + 10, width:(scaledwidth + thumbarea_width + 10)});
				
/*				popupbox.appendTo('body').show().click( function(e){
					$('.closewindowlayer, .largeimagepop').detach();
				});
*/				
				$(this).unbind('load');
				
				
				
			});
			$('body').append(tempImg);
			tempImg.attr('src', srcBig);
		});
	};
	
	//object containing publicly accessible functions
	return {
		//Sets up zoom view markup, accepts zoom view element jquery object.
		reset: function(){
			//jQuery objects 
			mainimage = null,
			viewport = null,
			leftbutton = null,
			rightbutton = null,
			imagecounter = null,
			multiview = null,
			mainloader = null,
			
			//Image viewer state variables
			imageurl = "",
			isloading = false,
			imagecount = 0,
			currentimage = 1,
			stylecode = null;
		},
		zoomviewinit: function(jqobject){
			zoomviewinit_regular();
		},
		setcurrent: function(i){
			if(currentimage == i)
			{
				return false;
			}
			else
			{
				if(i > imagecount)
				{
					currentimage = imagecount;
				}
				else
				{
					if(i <= 0)
					{
						currentimage = 1;
					}
					else
					{
						currentimage = i;
					}
				}
				if(currentimage === imagecount && mainvideo){
					showVideo();
				} else {
					updateimage();
				}
				updatemultiviewstate();
				updatebuttonstate();
				return true;
			}
		},
		setmultiview: function(jqobject){
			var imageviewer = this;
			multiview = jqobject;
			multiview.find('a:not(.exclude)').each(function(i){
				$(this).on('click', function(e){
					e.preventDefault();
					imageviewer.setcurrent(i + 1);
				});
			});
			imageviewer.setcurrent(1);
			updatemultiviewstate();

		},
		setimagecounter: function(jqobject){
			imagecounter = jqobject;
		},
		//Changes to next image if not already at last image, returns true if successful
		incrementimage: function() {
			if((currentimage + 1) > imagecount)
			{
				return false;
			}
			else
			{
				currentimage++;
				updateimage();
				updatemultiviewstate();
				updatebuttonstate();
				return true;
			}
		},
		//Changes to previous image if not already at first image, returns true if successful
		decrementimage: function() {
			if((currentimage - 1) <= 0)
			{
				return false;
			}
			else
			{
				currentimage--;
				updateimage();
				updatemultiviewstate();
				updatebuttonstate();
				return true;
			}
		},
		//Sets number of images
		setimagecount: function(i){
			imagecount = i;
			currentimage = 1;
		},
		//Sets main image to first image with specified stylecode
		setstyle: function(scode){
			//console.log("setstyle: " + scode);
			if(stylecode != scode)
			{
				stylecode = scode;
				updatestyle();
				updatemultiviewstate();
			}
		},
		//specifies jquery object for main image
		setmainimage: function(jqobject){
			mainimage = jqobject;
			imageurl = mainimage.attr('src');
			imageurlss = mainimage.attr('srcset');
		},
		setbuttons: function(l,r){
			leftbutton = l;
			rightbutton = r;
			var imageviewer = this;
			rightbutton.on('click',function(e){
				e.stopPropagation();
				e.preventDefault();
				imageviewer.incrementimage(); 
			});
			leftbutton.on('click',function(e){
				e.stopPropagation();
				e.preventDefault();
				imageviewer.decrementimage(); 
			});
			updatebuttonstate();
		},
		enableVideo: function(vidCode){
			initVideo(vidCode);
		}
	};
})();

}





function parseDate(text, ogText) {
	var rex = /^[\d]{1,2}\/[\d]{1,2}$/i;
	if ( rex.test(text) ) {
		var date, months;
		date = text.split("/", 2);
		months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		if (date[0].charAt(0) === "0") {
			date[0] = date[0].charAt(1);
		}
		if (date[1].charAt(0) === "0") {
			date[1] = date[1].charAt(1);
		}
		return months[parseInt(date[0], 10) - 1] + ' ' + date[1];
	}
	else
	{
		if(ogText){
			return text;
		} else {
			return null;
		}
	}
}

/*==============================================

	STYLE ORDERING SCRIPT BEGIN
	
==============================================*/	

/* Product Info Object */
function pinfo(code, name, avail, stylearray,orderable,stocknotify,price) {
    this.code = code;
    this.name = name;
    this.orderable = orderable;
	this.stocknotify = stocknotify;
	this.stockstatus = "";
	this.price = price;
	if(this.stocknotify)
	{
		/*console.log(name);*/
	}
	
	var newavail = parseDate(avail);
	if(newavail != null)
	{
		this.available = '<span class="label">In Stock:<\/span> ' + newavail;
		this.stockstatus = "backorder";
	}
	else
	{
		if(avail == "Out")
		{
			this.available = "Out of Stock";
			this.stockstatus = "out_of_stock";
		}
		else
		{
			if(avail === "Sold Out")
			{
				this.available = avail;
				this.stockstatus = "out_of_stock";
			}
			else
			{
				this.available = '<span class="label">In Stock:<\/span> ' + avail;
				this.stockstatus = "in_stock";
			}
		}
	}

    this.productstyles = stylearray;
}
		
/* Style Info Object */

function styleinfo(styletitle, styletitleref, styleitemname, styleitemcode, styleitemref, thumb, stock_num) {
    this.title = styletitle;
    this.ref = styletitleref;
    this.itemname = styleitemname;
    this.itemcode = styleitemcode;
    this.itemref = styleitemref;
    if(thumb == ""){
        this.thumb = null;
    } else {
        this.thumb = thumb;
		}
	this.stock = stock_num;
}

/* Style Item Object */

function styleitem(name, code, ref, thumb, stock_num) {
    this.ref = ref;
    this.name = name;
    this.code = code;
    if(thumb == ""){
        this.thumb = null;
    } else {
        this.thumb = thumb;
    }
    this.stock_num = stock_num;
}


/* Title Style Object */

function additem(itemname, itemcode, itemref, thumb, stock_num) {
    this.styleitems.push(new styleitem(itemname, itemcode, itemref, thumb, stock_num));
}

function itemIndex(ref) {
    var resultindex = -1;
    for(var i = 0; i < this.styleitems.length; i++) //loops styleitems of titlestyle object
		{
        if(this.styleitems[i].ref === ref) //Checks style for a matching styleitem
        {
            resultindex = i;
            break;
        }    
    }
    return resultindex;
		}
		
function hasItem(ref) {
    if(this.itemIndex(ref) >=0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function titlestyle(styleref, stylename) {
    this.styleref = styleref; //title style reference number
    this.stylename = stylename; //title style name
    this.styleitems = []; // array of style styleitem objects
    this.additem = additem; //adds a styleitem object to styleitems array
    this.itemIndex = itemIndex;
    this.hasItem = hasItem; //checks if a style is already in the styleitems array based on reference number returns boolean
    this.selectionindex = -1; //index of currently selected styleitem, -1 means no selection
    this.isstatic = false;
}

/* Style Ordering Module*/

var StyleOrderingModule = function() { return (function() {
    var styles = [], //array of titlestyle objects
	productinfo = [], //array of titlestyle objects
	
	submitSelector = null, //jQuery selector pointing to cart button
    formSelector = null, //jQuery selector pointing to the ordering form
    orderingBoxSelector = null, //jQuery selector pointing to the ordering box
    sizingSelector = null, //jQuery selector pointing to the sizing chart link
    notifySelector = null, //jQuery selector pointing to the stock notify link
    alertSelector = null, //jQuery selector pointing to container for ordering alert text
    colorNameSelector = null, //jQuery selector pointing to container for color name text
    colorStockSelector = null, //jQuery selector pointing to container for stock number text
    selectedColor = "", //currently selected color
    selectedColorCode = "", //style code for currently selected color
    shownColorCode = "", //style code for currently displayed color (hover doesn't select, only displays)
	stock_text = "In Stock",
	noselection_text = "Select Options Above",
	makeselection_text = "Make Selection",
	unavailable_text = "Currently Unavailable",
	ordering_style = "select", // (default)"select" or set to "boxes"
    //selectedColorOffset = null,
	onAddCallback = null,
// 	price_section = null,
	sorting_obj = null,
	imageviewer = null,
	
	retrieveMatches =  function(styleitemref) { //optionally pass a hypothetical selection 
	
		var matches = [];
		var currentstyles = [];
		for(var i = 0; i < styles.length; i++) //loop through styles and populate current styles with styleitemrefs
		{
			if(styles[i].selectionindex < 0) //if no selection
			{
				currentstyles.push(-1);
			}
			else
			{
				currentstyles.push(styles[i].styleitems[styles[i].selectionindex].ref);
			}
			if(styleitemref != null) //if a styleitemref was passed and it applies to this style override currentstyles for matching purposes
			{
				if(styles[i].itemIndex(styleitemref) >= 0)
				{
					currentstyles[i] = styleitemref;
				}
			}

		}
		//printdebug(currentstyles);
		
		
		for(var i = 0; i < productinfo.length; i++) //loop productinfo array
		{
			var match = true; //assume it matches
			for(var j = 0; j < currentstyles.length; j++) //loop currentstyles check if all match or are unselected
			{
				if(currentstyles[j] != -1)
				{
					if(currentstyles[j] != productinfo[i].productstyles[j])
					{
						//printdebug(currentstyles[j] + ' ' + productinfo[i].productstyles[j].itemref);
						match = false;
					}
				}
			}
			if(match) //if it's a match add references to matches to array, these are not copies just references
			{					
				matches.push(productinfo[i]);
			}
		}
		
		return matches;
	},

	generatePriceText = function(){
		var currentMatches = retrieveMatches();
		var pricetext = "";
		if(currentMatches.length == 0)
		{
			
		}
		else
		{
			var prices = [];
			for(var i = 0; i < currentMatches.length; i++)
			{
				var match = currentMatches[i];
				prices.push(match.price);
			}
			var minprice = Math.min.apply(null,prices);
			var maxprice = Math.max.apply(null,prices);
			pricetext = "$" + minprice.toFixed(2);
			if(maxprice > minprice)
			{
				pricetext += " - $" + maxprice.toFixed(2);
			}
		}
		return pricetext;
	},

	allSelected = function() {
		for(var i=0; i<styles.length; i++)
		{
			if(styles[i].selectionindex < 0) //if no selection
			{
				return false;
			}
		}
		return true;
	},
	enableSubmit = function() {
		if(submitSelector != null)
		{
			submitSelector.removeClass("disabled_cart");
		}
	},
	disableSubmit = function() {
		if(submitSelector != null)
		{
			submitSelector.addClass("disabled_cart");
		}
	},
	orderAlert = function(text,error) {
		alertSelector.html(text);
		alertSelector.find('.notify_stock').click(function(e){
			e.preventDefault();
			descpop_stocknotify($(this).attr("href"));
		});
		if(error)
		{
			alertSelector.css("color","#AD0000");
		}
		else
		{
			alertSelector.css("color","#000000");
		}
	};

    // "Public" Interface
    return {
//BEGIN DEBUG CODE REMOVE BEFORE DEPLOYMENT
		clearData:function() {
			styles = [], 
			productinfo = [], 
			submitSelector = null, 
			formSelector = null, 
			sizingSelector = null, 
			notifySelector = null,
			alertSelector = null,
			selectedColor = "",
			selectedColorCode = "",
			selectedColorStock = "",
			shownColorCode = "",
			onAddCallback = null;
		},
		
		setImageViewer: function(imageviewer_obj) {
			imageviewer = imageviewer_obj;
		},
		
		setSort: function(dataobj) {
			sorting_obj = dataobj;
		},
		
		sortStyles: function() {
			if(sorting_obj != null)
			{
				for(var i=0; i<styles.length; i++)
				{
					if(sorting_obj["style_"+styles[i].styleref])
					{
						styles[i].styleitems;
						styles[i].styleitems.sort((function(sort_order){return function(a,b){
							return sort_order.indexOf(a.ref) - sort_order.indexOf(b.ref);
						}}(sorting_obj["style_"+styles[i].styleref])));
					}
				}
			}
		},
		
		setOrderingStyle: function(orderingtype)
		{
			if(orderingtype == "boxes" || orderingtype == "selects")
			{
				ordering_style = orderingtype;
			}
		},
		
		onAddToCart:function(callback)
		{
			if(typeof(callback) == "function")
			{
				onAddCallback = callback;
			}
		},
		
		printstring: function() {
			var result = "";
			for(var i=0; i<styles.length; i++)
			{
				result += '<label>' + styles[i].styleref + ': ' + styles[i].stylename + '<\/label><ul>';
				for(var j=0; j<styles[i].styleitems.length; j++)
				{
					result += '<li>' + styles[i].styleitems[j].ref + ': ' + styles[i].styleitems[j].name + '<\/li>';
				}
				result += '<\/ul>';
			}
			result += '<table class="producttable">';
			for(var i=0; i<productinfo.length; i++)
			{
				result += '<tr><td>' + productinfo[i].code + '<\/td><td>' + productinfo[i].available + '<\/td><td>' + productinfo[i].name + '<\/td>';
				for(var j=0; j<productinfo[i].productstyles.length; j++)
				{
					result += '<td>' + productinfo[i].productstyles[j] + '<\/td>';
				}
				result += '<\/tr>'
			}
			result += '<\/table>';
			return result;
		},
		
		//END DEBUG CODE 

		clearStyle:  function(styleindex) {
			styles[styleindex].selectionindex = -1;
		},

		getSelectedColor: function(){
			return selectedColor;
		},
		
		getColorStyles: function() {
			var style_array = [];
			for(var i=0; i<styles.length;i++)
			{
				if(styles[i].styleitems[0].thumb != null)
				{
					for(var j = 0; j<styles[i].styleitems.length; j++)
					{
						style_array.push({
							name: styles[i].styleitems[j].name,
							code: styles[i].styleitems[j].code
						})
					}
				}
			}
			if(style_array.length > 0)
			{
				return style_array;
			}
			else
			{
				return null;
			}
		},
		
		getSelectedColorCode: function(){
			return selectedColorCode;
		},
		
		getSelectedColorStock: function(){
			return selectedColorStock;
		},
		
		getShownColorCode: function(){
			return shownColorCode;
		},
        addStyle: function(i, pstyle){

            if(styles[i] == null)
            {
                styles[i] = new titlestyle(pstyle.ref,pstyle.title);
                styles[i].additem(pstyle.itemname,pstyle.itemcode,pstyle.itemref,pstyle.thumb,pstyle.stock_num);
            }
            else
            {
                if(styles[i].styleref === pstyle.ref)
                {
                    if(styles[i].hasItem(pstyle.itemref))
                    {
                        //Do nothing, styleitem is already in the list
                    }
                    else
                    {
                        styles[i].additem(pstyle.itemname,pstyle.itemcode,pstyle.itemref,pstyle.thumb,pstyle.stock_num);
                    }
                }
                else
                {
                    //alert("Error: Non-Matching Title Styles**");
                }
            }
        },
        
        addProduct: function(code, name, available, pstyles,orderable,stocknotify,price) {
            var stylearray = [];
            for(var i = 0; i < pstyles.length; i++)
            {
                if(styles[i] == null)
                {
                    styles[i] = new titlestyle(pstyles[i].ref,pstyles[i].title);
                    styles[i].additem(pstyles[i].itemname, pstyles[i].itemcode, pstyles[i].itemref, pstyles[i].thumb, pstyles[i].stock);
                }
                else
                {
                    if(styles[i].styleref === pstyles[i].ref)
                    {
                        if(styles[i].hasItem(pstyles[i].itemref))
                        {
                            //Do nothing, styleitem is already in the list
                        }
                        else
                        {
                            styles[i].additem(pstyles[i].itemname, pstyles[i].itemcode, pstyles[i].itemref, pstyles[i].thumb, pstyles[i].stock);
                        }
                    }
                    else
                    {
                        //alert("Error: Non-Matching Title Styles");
                    }
                }
                stylearray.push(pstyles[i].itemref);
            }
            productinfo.push(new pinfo(code, name, available, stylearray,orderable,stocknotify,price));
        },
        getSubmit: function() {
        	return submitSelector;
        },
        setSubmit: function(jqobject) {
        	submitSelector = jqobject;
        },
        setAlert: function(jqobject) {
	        alertSelector = jqobject;
        },
        setForm: function(jqobject) {
        	formSelector = jqobject;
        },
        setSizingElement: function(jqobject)
        {
        	sizingSelector = jqobject;
        },
        setStockNotifyElement: function(jqobject)
        {
        	notifySelector = jqobject;
        },
        selectStyleItem: function(styleitemref) {
			//printdebug('Selecting stylitemref: ' + styleitemref);
			for(var i=0; i<styles.length; i++)
			{
				var styleitemindex = styles[i].itemIndex(styleitemref);
				if(styleitemindex >= 0)
				{
					styles[i].selectionindex = styleitemindex;
					break;
				}
			}
		},
		deselectStyleItem: function(styleitemref) {
			for(var i=0; i<styles.length; i++)
			{
				var styleitemindex = styles[i].itemIndex(styleitemref);
				if(styleitemindex >= 0)
				{
					styles[i].selectionindex = -1;
					break;
				}
			}
		},
		preselectStyles: function(first) {
			//console.log("preselecting");
			first = typeof first !== "undefined" ? first : true;
			for(var i=0; i<styles.length; i++)
			{
				if(styles[i].styleitems.length == 1){
			//		console.log("1 styleitem");
					this.selectStyleItem(styles[i].styleitems[0].ref);
				}
			}
			
			
			//only pre-select first color on initial page load
			if(first){
				/*if(styles.length > 1)
				{*/
					//console.log("oh no");
					
					if(styles[0].styleitems[0].thumb)
					{
						this.selectStyleItem(styles[0].styleitems[0].ref);
					}
				/*}*/
			}
		},
		
		showColor: function(text,stock,selected) {
			colorNameSelector.html(text);
			if(selected){
				colorNameSelector.addClass("selected");
			} else {
				colorNameSelector.removeClass("selected");
			}
			
			if(stock)
			{
				colorStockSelector.html("Stock # " + stock);
			}
			else
			{
				colorStockSelector.html("");
			}
		},
		
		alertnoselection: function() {
			orderAlert(noselection_text,true);
		},
		

		generateStyleBoxes: function() {
			selectedColor = "";
			selectedColorCode = "";

			//To accomadate markup rewrite			
			var holdColor = "";

			orderingBoxSelector = $('<div class="style_ordering"><\/div>');
			
			var firstsize = true;
			
			for(var i=0; i<styles.length;i++)
			{
				style_label = $('<label class="ordering_label" tabindex="0">' + styles[i].stylename + ': <\/label>');
				
				/*orderingBoxSelector.append($('<label>' + styles[i].stylename + ': <\/label>'));*/
				if(styles[i].styleitems[0].thumb != null)
				{
					var list = $('<ul class="style_row cf"><\/ul>');
					orderingBoxSelector.append(style_label).append(list);
					var currentindex = styles[i].selectionindex;
					for(var j=0; j<styles[i].styleitems.length; j++)
					{
						var item = $('<li>' + styles[i].styleitems[j].name + '<\/li>');
						if(j%4 == 0)
						{
							item.addClass("first");
						}
						if((j+1)%4 == 0)
						{
							item.addClass("last");
						}
						item.data('ref', styles[i].styleitems[j].ref);
						if(i==0)
						{
							if(styles[i].styleitems[j].thumb != null)
							{
								if(colorNameSelector === null){
									colorNameSelector = $("<span class='colorname'> " + holdColor + "<\/span>");
									style_label.append(colorNameSelector);
								}

								
								if (colorStockSelector === null) {
									colorStockSelector = $("<span class='colorstocknum'><\/span>");
									style_label.append(colorStockSelector);
								}
								item.data('first_line',true); //is a color
								item.data('color_code',styles[i].styleitems[j].code); //save color code
								item.data('color_name',styles[i].styleitems[j].name); //save color name
								item.data('stocknum',styles[i].styleitems[j].stock_num); //save stocknum
								item.html('<button type="button" class="image_wrap"><img src="' + styles[i].styleitems[j].thumb + '" alt="' + styles[i].styleitems[j].name + ' product link" \/></button>');
								item.addClass("thumb_box");
							} else {
								item.data('first_line',false); //not a color
								
								
							}
						}
						else
						{
							item.data('first_line',false); //not a color
						}
						if(retrieveMatches(styles[i].styleitems[j].ref).length)
						{
							item.addClass("valid");
						}
						else
						{
							item.addClass("invalid");
						}
						if(currentindex == j)
						{
							item.addClass("selected");
							if(item.data("first_line")){
								var colorName = item.data('color_name');
								var colorCode = item.data('color_code');
								var colorStock = item.data('stocknum');
								colorNameSelector.html(colorName).addClass("selected");
								if(colorStock)
								{
									colorStockSelector.html("Stock # " + colorStock );
								}
								selectedColor = colorName;
								selectedColorStock = colorStock;
								if(colorCode != selectedColorCode){
									selectedColorCode = colorCode;
									if(colorCode != shownColorCode){
										if(imageviewer !== null)
										{
											imageviewer.setstyle(colorCode);
										}
									}
								}
							}
						}
						var tempstyleobject = this;
						item.click(function(){
							if($(this).hasClass('selected'))
							{
								tempstyleobject.deselectStyleItem($(this).data('ref'));
							}
							else
							{							
								tempstyleobject.selectStyleItem($(this).data('ref'));
							}
							tempstyleobject.preselectStyles(false);
							tempstyleobject.updateStyleBoxes();
							//orderingBoxSelector.replaceWith(tempstyleobject.generateStyleBoxes());
						});
						item.find("a").click(function(e){
							e.preventDefault();
							item.trigger(click);
						});
						item.hover(function(){
							if($(this).data('first_line')) //thumbnail information exists and this is a color
							{
								var colorName = $(this).data('color_name');
								var colorCode = $(this).data('color_code');
								var colorStock = $(this).data('stocknum');
								var selectedColor = tempstyleobject.getSelectedColor();
								if(colorName != tempstyleobject.getSelectedColor() || tempstyleobject.getSelectedColor() == ""){
									tempstyleobject.showColor(colorName,colorStock,false);
								}
								if((colorCode != tempstyleobject.getSelectedColorCode()) && (colorCode != tempstyleobject.getShownColorCode())){
									if(imageviewer !== null)
									{
										imageviewer.setstyle(colorCode);
									}
								}
							}
						},function(){
							if($(this).data('first_line')) //thumbnail information exists and this is a color
							{
								var colorName = $(this).data('color_name');
								var colorCode = $(this).data('color_code');
								var selectedColor = tempstyleobject.getSelectedColor();
								if(colorName != tempstyleobject.getSelectedColor() || tempstyleobject.getSelectedColor() == ""){
									tempstyleobject.showColor(tempstyleobject.getSelectedColor(),tempstyleobject.getSelectedColorStock(),true);
								}
								if((colorCode != tempstyleobject.getSelectedColorCode()) && (tempstyleobject.getSelectedColorCode() != "")){
									if(imageviewer !== null)
									{
										imageviewer.setstyle(tempstyleobject.getSelectedColorCode());
									}
								}
							}
						});
						list.append(item);
					}
				}
				else
				{
					
					
					if(styles[i].styleitems.length == 1)
					{
						styles[i].isstatic = true;
						styles[i].selectionindex = 0;
					}
					
					var currentindex = styles[i].selectionindex;
					
					var selected_value = "";
					if(currentindex >= 0)
					{
						selected_value = styles[i].styleitems[currentindex].name;
					}

					style_label.append('<span class="selected_value">'+ selected_value +'<\/span>');
					
					if(styles[i].isstatic)
					{
						orderingBoxSelector.append(style_label.addClass("static_value"));
					}
					else
					{
						if(ordering_style == "boxes")
						{
							var linkWrap = $('<div class="style_box_wrap cf"><\/div>');
							var row = $('<div class="style_row"><\/div>');
							
							orderingBoxSelector.append(style_label).append(linkWrap.append(row));
							
							if(sizingSelector != null)
							{
								linkWrap.append(sizingSelector);
								row.addClass("with_sizing");
							}
							
							for(var j=0; j<styles[i].styleitems.length; j++) {
								var item = $('<button type="button">' + styles[i].styleitems[j].name + '<\/button>');
								item.data('ref', styles[i].styleitems[j].ref);
								item.data('first_line',false); //not a color
								
								if(retrieveMatches(styles[i].styleitems[j].ref).length)
								{
									item.addClass("valid");
								}
								else
								{
									item.addClass("invalid");
								}
								if(currentindex == j)
								{
									item.addClass("selected");
								}
								
								var tempstyleobject = this;
								
								item.click(function(e) {
									var makeSelect = true;
									if($(this).hasClass('selected'))
									{
										makeSelect = false;
									}
									$(".style_row button").removeClass("selected");
									if($(this).hasClass('selected'))
									{
										tempstyleobject.deselectStyleItem($(this).data('ref'));
									}
									else if (makeSelect)
									{
										$(this).addClass('selected');	
										tempstyleobject.selectStyleItem($(this).data('ref'));
									}
									tempstyleobject.preselectStyles(false);
									tempstyleobject.updateStyleBoxes();
									//orderingBoxSelector.replaceWith(tempstyleobject.generateStyleBoxes());
								});
								
								row.append(item)
							}
						}
						else
						{
							var list = $('<select class=\'style_drop clearfix\'><\/select>');
							
							var select_row = $('<div class="select_row cf"><\/div>');
							
							orderingBoxSelector.append(select_row.append(style_label).append($('<div class="order_rowwrap"></div>').append(list)));
							
							if(firstsize)
							{
								if(sizingSelector != null)
								{
									select_row.append(sizingSelector);
								}
								if(notifySelector != null)
								{
									select_row.find('.selectwrap').append(notifySelector);
								}
								firstsize = false;
							}
							
							list.append('<option>' + makeselection_text + '<\/option>');
							var currentindex = styles[i].selectionindex;
							for(var j=0; j<styles[i].styleitems.length; j++)
							{
								var item = $('<option>' + styles[i].styleitems[j].name + '<\/option>');
								item.data('ref', styles[i].styleitems[j].ref);
								
								if(retrieveMatches(styles[i].styleitems[j].ref).length)
								{
									item.addClass("valid");
								}
								else
								{
									item.addClass("invalid");
								}
								if(currentindex == j)
								{
									item.addClass("selected");
									item.prop("selected",true);
								}
								var tempstyleobject = this;
								list.append(item);
							}
							
							list.change({styleindex: i}, function(e){
								if($(this).prop('selectedIndex') == 0)
								{
									
									tempstyleobject.clearStyle(e.data.styleindex);
//									tempstyleobject.deselectStyleItem($(this).data('ref'));
								}
								else
								{
									tempstyleobject.selectStyleItem($(this).find('option').eq($(this).prop('selectedIndex')).data('ref'));
//									tempstyleobject.selectStyleItem($(this).data('ref'));
								}
								tempstyleobject.preselectStyles(false);
								tempstyleobject.updateStyleBoxes();
							});
						}
					}
				}
			}
			
// 			price_section = $('<div class="price_placeholder"></div>');
			
// 			orderingBoxSelector.append(price_section);
	
			var currentmatches = retrieveMatches();
			
			if(allSelected())
			{
				if(currentmatches.length == 1)
				{
					var avail_text = $("<p>" + currentmatches[0].available + "<\/p>");
					var stocknotifylink = (currentmatches[0].stocknotify)? ' <a class="notify_stock" href="/notifystock.html?pcode=' + currentmatches[0].code + '">Notify Me</a>' : "";
					var rex = /^[\d]{1,2}\/[\d]{1,2}$/i;
					if ( rex.test(avail_text.html()) ) {
						avail_text.html(parseDate(avail_text));
					}
					orderAlert("<span class=\"stock " + currentmatches[0].stockstatus + "\">" /*+ stock_text + ": "*/ + avail_text.html() + "</span>" + stocknotifylink,false);
					orderingBoxSelector.append("<input type=\'hidden\' class=\'order_input\' name=\'pcode\' value=\'" + currentmatches[0].code + "\' \/> ");
// 					price_section.html('<label class="ordering_label" tabindex="0">Price: <span class="selected_price">' + generatePriceText() + '</span></label>');
					//<label class="ordering_label">Price: <span class="selected_price" "=""></span></label>
					enableSubmit();
				}
				else
				{
					orderAlert(unavailable_text,true);
					orderingBoxSelector.append("<input type=\'hidden\' class=\'order_input\' name=\'pcode\' value=\'\' \/> ");
// 					price_section.empty();
					disableSubmit();
				}
			}
			else
			{
				orderAlert("",false);
				orderingBoxSelector.append("<input type=\'hidden\' class=\'order_input\' name=\'pcode\' value=\'\' \/> ");
// 				price_section.html('<label class="ordering_label" tabindex="0">Price: <span class="selected_price">' + generatePriceText() + '</span></label>');
				disableSubmit();
			}
			
			var tempStyles = this;
			formSelector.on("submit",function(e){
				if(tempStyles.getSubmit().hasClass("disabled_cart"))
				{
					e.preventDefault();
					tempStyles.alertnoselection();
					return false;
				}
				else
				{
					if($(this).hasClass("ajax_enable") && (!$(this).is(".cart_disable form")))
					{
						e.preventDefault();
						//trigger 'addtocart' event, this must be used to bind the function which will actually add item(s) to the cart
						$(this).trigger("addtocart");
						//onAddCallback is an additional function which is executed when item(s) are added
						if(onAddCallback != null)
						{
							onAddCallback();
						}
						return false;
					}
				}
			});
			
			return orderingBoxSelector;
	
		},
		updateStyleBoxes: function() {
			
			var hasColorSelected = false;
			var statics = 0;
			for(var i=0; i<styles.length;i++)
			{
				if(!styles[i].isstatic)
				{
					var stylerow = orderingBoxSelector.find('.style_row, .style_drop').eq(i - statics);
					var currentindex = styles[i].selectionindex;
					
					
					
					if(stylerow.hasClass("style_row"))
					{
						var style_value = stylerow.prev('.ordering_label').find('.selected_value');
						
						if(!stylerow.find('li').eq(0).data("first_line"))
						{
							if(currentindex >= 0)
							{
								style_value.text(styles[i].styleitems[currentindex].name);
							}
							else
							{
								style_value.text("");
							}
						}
						
						for(var j=0; j<styles[i].styleitems.length; j++)
						{
							if(stylerow.hasClass('with_sizing'))
							{
								var item = stylerow.find('button').eq(j);
							}
							else
							{
								var item = stylerow.find('li').eq(j);
							}
							
							if(retrieveMatches(styles[i].styleitems[j].ref).length)
							{
								item.removeClass('invalid').addClass("valid");
							}
							else
							{
								item.removeClass('valid').addClass("invalid");
							}
							if(currentindex == j)
							{
								item.addClass("selected");
								if(item.data("first_line")){
									hasColorSelected = true;
									var colorName = item.data('color_name');
									var colorCode = item.data('color_code');
									var colorStock = item.data('stocknum');
									colorNameSelector.html(colorName).addClass("selected");
									if(colorStock)
									{
										colorStockSelector.html("Stock # " + colorStock);
									}
									selectedColor = colorName;
									selectedColorStock = colorStock;
									if(colorCode != selectedColorCode){
										selectedColorCode = colorCode;
										if(colorCode != shownColorCode){
											if(imageviewer !== null)
											{
												imageviewer.setstyle(colorCode);
											}
										}
									}
								}
							}
							else
							{
								item.removeClass("selected");
							}
						}
					}
					else
					{
						var customdrop = stylerow.sworderingselect("instance");
						var style_value = stylerow.closest('.select_row').find('.selected_value');
						if(currentindex >= 0)
						{
							style_value.text(styles[i].styleitems[currentindex].name);
						}
						else
						{
							style_value.text("");
						}
						
	
						for(var j=0; j<styles[i].styleitems.length; j++)
						{
							var item = stylerow.find('option').eq(j + 1);
							if(retrieveMatches(styles[i].styleitems[j].ref).length)
							{
								item.removeClass('invalid').addClass("valid");
							}
							else
							{
								item.removeClass('valid').addClass("invalid");
							}
							
							if(currentindex == j)
							{
								item.addClass("selected");
								item.prop("selected",true);
							}
							else
							{
								item.removeClass("selected");
								item.prop("selected",false);
							}
						}
						//console.log(customdrop);
						if(typeof (customdrop) != "undefined")
						{
							customdrop.refresh();
						}
					}
				}
				else
				{
					statics++;
				}
			}
			if(!hasColorSelected){
				selectedColor = "";
				selectedColorCode = "";
				selectedColorStock = "";
				if(colorNameSelector){
					colorNameSelector.text("");
				}
				if(colorStockSelector){
					colorStockSelector.text("");
				}
			}
	
			var currentmatches = retrieveMatches();
			
			if(allSelected())
			{
				if(currentmatches.length == 1)
				{
					var avail_text = $("<p>" + currentmatches[0].available + "<\/p>");
					var stocknotifylink = (currentmatches[0].stocknotify)? ' <a class="notify_stock" href="/notifystock.html?pcode=' + currentmatches[0].code + '">Notify Me</a>' : "";

					var rex = /^[\d]{1,2}\/[\d]{1,2}$/i;
					if ( rex.test(avail_text.html()) ) {
						avail_text.html(parseDate(avail_text));
					}

					orderAlert("<span class=\"stock " + currentmatches[0].stockstatus + "\">" + avail_text.html() + "</span>" + stocknotifylink,false);
					orderingBoxSelector.find('.order_input').eq(0).val(currentmatches[0].code);
// 					price_section.html('<label class="ordering_label" tabindex="0">Price: <span class="selected_price">' + generatePriceText() + '</span></label>');
					enableSubmit();
				}
				else
				{
					orderAlert(unavailable_text,true);
					orderingBoxSelector.find('.order_input').eq(0).val("");
// 					price_section.empty();
					disableSubmit();
				}
			}
			else
			{
				orderingBoxSelector.find('.order_input').eq(0).val("");
// 				price_section.html('<label class="ordering_label" tabindex="0">Price: <span class="selected_price">' + generatePriceText() + '</span></label>');
				orderAlert("",false);
				disableSubmit();
			}
		}
    };
})();

}



/*==============================================

		STYLE ORDERING SCRIPT END	
	
==============================================*/


	$.widget( "sw.listcarousel", {
	options: {
		per_page : 4,
		index : 0,
		slider: null,
		cellwidth: null,
		carousel: null,
		cell_count: null
    },
    
	_create: function() {
		var that = this;
		var options = this.options;
		var cellsperpage = parseInt(that.element.data("cells_per_page"));
		var threshold = parseInt(that.element.data("threshold"));
		var cells = that.element.children();
		options.cell_count = cells.length;


		if(!isNaN(cellsperpage))
		{
			options.per_page = cellsperpage; 
		}
		
		if(isNaN(threshold))
		{
			threshold = options.per_page; 
		}

		if((options.per_page < options.cell_count) && (threshold < options.cell_count))
		{
			options.carousel = that.element.wrap('<div class="sw-listcarousel"><div class="sw-listcarousel-inner-wrap"><div class="sw-listcarousel-inner clearfix"><\/div><\/div><\/div>').closest(".sw-listcarousel");
			options.cellwidth = cells.eq(0).outerWidth();
			options.slider = options.carousel.find(".sw-listcarousel-inner").width(options.cell_count*options.cellwidth);

			$("<span class='sw-listcarousel-arrow-box sw-listcarousel-left-arrow'><span class='sw-listcarousel-arrow-icon'><\/span><\/span>").appendTo(options.carousel).on("click",function(e){ that.prev(); });			
			$("<span class='sw-listcarousel-arrow-box sw-listcarousel-right-arrow'><span class='sw-listcarousel-arrow-icon'><\/span><\/span>").appendTo(options.carousel).on("click",function(e){ that.next(); });
		}
	},
	
	getwrapper: function() {
		return this.options.carousel;
	},
	
	index: function( index, callback ) {
		var that = this;
		var options = this.options;
		if (( index !== undefined ))
		{
			if(options.index !== index)
			{
				options.index = index;
				options.slider.stop();
				if(typeof(callback) === "function")
				{
					options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"},400,callback);
				}
				else
				{
					options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"},400);
				}
			}
			else
			{
				if(typeof(callback) === "function") { callback() };
			}
        }
        return options.index;
	},
    
	next: function() {
		var that = this;
		var options = this.options;
		if(!(options.slider.is(":animated"))){
			if((options.index+options.per_page)>=options.cell_count)
			{
				var difference = options.cell_count-options.index;
				options.index = options.cell_count;
				options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"},100*difference,function() {
					options.index = 0;
					options.slider.animate({"left":options.per_page*options.cellwidth + "px"},0,function(){
						options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"});
					});
				});
			}
			else 
			{
				options.index = options.index + options.per_page;
				options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"},400);
			}
		}
	},

	prev: function() {
		var that = this;
		var options = this.options;
		if(!(options.slider.is(":animated"))){
			if((options.index-options.per_page)<0)
			{
				var remainder = options.cell_count % options.per_page;
				if(remainder == 0)
				{
					remainder = options.per_page;
				}
				
				options.index = options.cell_count - remainder;
				
				options.slider.animate({"left":options.cellwidth*options.per_page + "px"},400,function(){
					options.slider.animate({"left":-1*options.cellwidth*options.cell_count + "px"},0,function(){
						options.slider.animate({"left":(-1*options.index*options.cellwidth) + "px"},100*remainder);
					});
				});
			} else {
				options.index = options.index - options.per_page;
				options.slider.animate({"left":options.index*options.cellwidth*-1 + "px"},400);
			}
		}
    },
    
	destroy: function() {
		$.Widget.prototype.destroy.call( this );
    }
});
	
	function isValidEmail(email)
	{
		var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
		return pattern.test(email);
	}
	
function quickviewPopup(e){
			e.preventDefault();
			
			_gaq.push(['_trackPageview', $(this).data("reporturl")]);
			
			var product_code = $(this).data("code");
			
			$.get("https://www.racquetballwarehouse.com/quickview.html?pcode=" + $(this).data("code"), function(data) {
				var jqdata = $(data);

				var quickview_pop = $('<div class="quickview_pop cf"></div>').append(jqdata).lightbox({width:900, height:400, focusTarget: $(this)});
				
				jqdata.find(".qty_section").each(utilities.enhance_qty);
				quickview_pop.each(utilities.initialize_descpagetop({type:"Quickview", onAdd: function(e,obj){
					CartHandler.order($(this).serialize());
					quickview_pop.lightbox("destroy");
					_gaq.push(["_trackEvent", "Added To Cart", "Quick Order", product_code]);
				}}));
				
				if(quickview_pop.outerHeight() > quickview_pop.closest('.sw-lightbox-wrap').height())
				{
					quickview_pop.lightbox("resize", { height: quickview_pop.outerHeight() });
				}
				
				
				
			});

		}

function sizingPopup(e)
{
	e.preventDefault();
	var url = $(this).attr("href");


	var hash = url.split("#");
	if(hash.length > 1)
	{
		hash = hash[1];
	}
	else
	{
		hash = null;
	}
	$('.closewindowlayer, .largeimagepop').detach();
	var popupbox = $('<div class="largeimagepop"><\/div>').hide();
	var scroll_area = $('<div class="scrollarea"><\/div>');
	var scroll_content = $('<div class="scrollcontent"><\/div>');
	scroll_area.append(scroll_content);

	var windowheight = $(window).height();
	var windowwidth = $(window).width();
	
	var popwidth = 760;
	var popheight = 240;

	var sizingchart_found = false;
	
	$.get(url, function(data) {
		var jqdata = $(data);
		var result = "";
		if(hash)
		{
			if(jqdata.find('#' + hash).length)
			{
				scroll_content.append(jqdata.find('#' + hash));
				sizingchart_found = true;
			}
		}
		
		if(jqdata.find('.sizing_chart.general').length)
		{
			scroll_content.append(jqdata.find('.sizing_chart.general'));
			sizingchart_found = true;
		}
		
		if(sizingchart_found)
		{
			scroll_area.lightbox({height:popheight, width:popwidth}).closest("sw-lightbox-wrap").addClass("sizingchart_pop");
			
			if(scroll_content.width() > popwidth)
			{
				if((scroll_content.width() + 20) > (windowwidth - 20))
				{
					popwidth = windowwidth - 20;
				}
				else
				{
					popwidth = scroll_content.width() + 20;
				}
			}
			if((scroll_content.height() + 20) > (windowheight - 20))
			{
				popheight = windowheight - 20;
			}
			else
			{
				popheight = scroll_content.height() + 20;
			}

			scroll_area.lightbox("resize",{ height:popheight, width:popwidth }).addClass("sizing_chart");
		}
		else
		{
			window.open(url,'_blank');
		}
	});
}

// Add commas to desc prices
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	
	$(function(){
		$(".commanum").each(function(){
			var commaPrice = numberWithCommas($(this).text());
			$(this).text(commaPrice);
		});
		
		if($('body').hasClass("descpage"))
		{
			$('.descpage_top').each(utilities.initialize_descpagetop());
		}
		
// 		$('.sizing_pop').on("click",sizingPopup);
		
		
/*====================================
BEGIN Menu Search Initialization
====================================*/

$('#menu_search').each(function(){
	if($(this).hasClass('onresultspage'))
	{
		AjaxProductSearch.settarget($('#searchresultsarea'));
		AjaxProductSearch.assigntextform($(this).find('form'));
		AjaxProductSearch.assigntextfield($('#searchtext'));		
		AjaxProductSearch.loadPrefs();
		if(window.location.hash.length)
		{
			var hash = window.location.hash.substring(window.location.hash.indexOf('#') + 1);
			AjaxProductSearch.runSearch(hash);
		}
		window.onhashchange = function(){
			AjaxProductSearch.runSearch(window.location.hash.substring(window.location.hash.indexOf('#') + 1));
		};
		$(this).find('form').bind("submit",function (e) {
			e.preventDefault();
			AjaxProductSearch.resetOptions();
			AjaxProductSearch.runTextSearch();
		});
	}
	else
	{
		$(this).find('form').bind("submit",function (e) {
			e.preventDefault();
			var actionquery = "";
			$(this).find('.keepinquery').each(function(i) {
				actionquery += ((i == 0)?"?":"&") + $(this).attr("name") + "=" + $(this).val();
			});
			var type = $(this).find(".textsearchtype");
			if(type.length)
			{
				type = "&type=" + type.val();
			}
			else
			{
				type = "";
			}
			AjaxProductSearch.trackTextSearch($(this).find('#searchtext').val());
			location.assign($(this).attr("action") + actionquery + '#search=products' + type +'&searchtext=' +  encodeURIComponent($(this).find('#searchtext').val()));
		});
	}
});
/*====================================
END Menu Search Initialization
====================================*/	



/*====================================
	BEGIN Menu Finder Initialization
====================================*/

$('.menu_finder, .aux_finder').each(function() {
	$(this).find('optgroup.subselection').each(function(){
	
	
		var parent_select = $(this).closest('select');
		var parent_row = $(this).closest('.finder_row');
		
		var new_row = $('<div class="finder_row"></div>');
		var new_select = $('<select></select>');
				
		var parent_value = $(this).data("associated_value");
		
		
		
		
		new_select.attr("name",$(this).data("selectname"));
		new_select.append('<option value="null">' + $(this).attr("label") + '</option>');
		new_select.append($(this).find('option'));
		
		parent_row.after(new_row.append(new_select));
		
		parent_select.change(function(){
			if($(this).val() == parent_value)
			{
				new_row.show();
			}
			else
			{
				if(new_select.prop("selectedIndex") != 0)
				{
					new_select.prop("selectedIndex",0).change();
				}
				new_row.hide();
			}
		});
		
		if(parent_select.val() != parent_value)
		{
			if(new_select.prop("selectedIndex") != 0)
			{
				new_select.prop("selectedIndex",0).change();
			}
			new_row.hide();
		}
		
		$(this).detach();
	});

	if($(this).hasClass('onresultspage'))
	{
		AjaxProductSearch.settarget($('#searchresultsarea'));
		AjaxProductSearch.assignfinder($(this).find('form'));
		AjaxProductSearch.loadPrefs();

		if($(this).hasClass('shoe_finder'))
		{
			AjaxProductSearch.setproducttype('shoe');
		}
		if($(this).hasClass('string_finder'))
		{
			AjaxProductSearch.setproducttype('string');
		}
		if($(this).hasClass('racquet_finder'))
		{
			AjaxProductSearch.setproducttype('racquet');
		}
		
		
		
		if(window.location.hash.length)
		{
			var hash = window.location.hash.substring(window.location.hash.indexOf('#') + 1);
			$(".slidermin, .slidermax").each( function() {
				var selectedval = hash.split($(this).attr("name") + '=')[1];
				if(selectedval)
				{
					if(selectedval.length)
					{
						if(selectedval[0][0] != '&')
						{
							selectedval = selectedval.split('&')[0];
							$(this).val(selectedval);
						}
					}
				}
			});
			AjaxProductSearch.runSearch(hash);
		}
		window.onhashchange = function(){
			AjaxProductSearch.runSearch(decodeURI(window.location.hash.substring(window.location.hash.indexOf('#') + 1)));
		};
		$(this).find('form').bind("submit",function (e) {
			e.preventDefault();
			AjaxProductSearch.resetOptions();
			AjaxProductSearch.runFinderSearch();
		});
	}
	else
	{
	
		AjaxProductSearch.assignfinder($(this).find('form'));
		AjaxProductSearch.loadPrefs();
	
		$(this).find('form').bind("submit",function (e) {
			e.preventDefault();
			var actionquery = "";
			$(this).find('.keepinquery').each(function(i) {
				actionquery += ((i == 0)?"?":"&") + $(this).attr("name") + "=" + $(this).val();
			});
			var allcatstext = "";			
			if(!($(this).find('input.cat_filter').length))
			{
				$(this).find('.default_all').each(function (){
					if($(this).val() == "")
					{
						$(this).find('option').each(function(){
							if($(this).val() != "")
							{
								allcatstext += "cat_all=" + $(this).val() + "&";
							}
						});
					}
				});
			}
			$(this).find('select.no_blank_value').each(function(){
				if($(this).val() == "")
				{
					$(this).attr("name","");
				}
			});
			location.assign($(this).attr("action") + actionquery + '#' + allcatstext + $(this).serialize() +  AjaxProductSearch.serializeOptions());
		});
	}
});
$('.menu_finder .priceslider').each(function() {

	var slider = $(this);
	var field_min = slider.find(".price_min").eq(0);
	var field_max = slider.find(".price_max").eq(0);

	var slidemin = 0;
	var slidemax = 100;
	var slidestep = 1;
	var initialmin = parseInt(field_min.val());
	var initialmax = parseInt(field_max.val());

	
	if(field_min.data("min") != undefined)
	{
		slidemin = parseInt(field_min.data("min"));
		if(isNaN(slidemin))
		{
			slidemin = 0;
		}
	}

	if(field_max.data("max") != undefined)
	{
		slidemax = parseInt(field_max.data("max"));
		if(isNaN(slidemax))
		{
			slidemax = 100;
		}
	}				

	if(slider.data("slidestep") != undefined)
	{
		slidestep = parseInt(slider.data("slidestep"));
		if(isNaN(slidestep))
		{
			slidestep = 1;
		}
	}
	
	if(slider.data("slidestep") != undefined)
	{
		slidestep = parseInt(slider.data("slidestep"));
		if(isNaN(slidestep))
		{
			slidestep = 1;
		}
	}
	
	if(isNaN(initialmin) || initialmin == null || initialmin < slidemin)
	{
		initialmin = slidemin;
	}

	if(isNaN(initialmax)|| initialmax == null || initialmax > slidemax )
	{
		initialmax = slidemax;
	}
	var pricewrap = $('<div class="pricewrap"><\/div>').html("$" + initialmin + " - $" + initialmax);
	slider.append(pricewrap);
	slider.find('.priceinputs').hide();
	
	slider.append($('<div class="price_range_slider"><\/div>').slider({
		range: true,
		min: slidemin,
		max: slidemax,
		step: slidestep,
		values: [ initialmin, initialmax ],
		slide: function( event, ui ) {
			field_min.val( ui.values[0]);
			field_max.val( ui.values[1]);
			pricewrap.html("($" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] + ")");
			
			var temp_handle1 = document.querySelector(".price_range_slider").querySelectorAll("span.ui-slider-handle")[0];
			var temp_handle2 = document.querySelector(".price_range_slider").querySelectorAll("span.ui-slider-handle")[1];
			temp_handle1.setAttribute('aria-valuenow', ui.values[0]);
			temp_handle2.setAttribute('aria-valuenow', ui.values[1]);
			temp_handle1.setAttribute('aria-valuemax', ui.values[1]);
			temp_handle2.setAttribute('aria-valuemin', ui.values[0]);
		},
		stop: function(event,ui) {
			if(!AjaxProductSearch.isPaused())
			{
				AjaxProductSearch.trackInteraction("Price: $" + ui.values[0] + " - $" + ui.values[1]);
				$(this).closest("form").submit();
			}
		}
	}));
	
		var handle1 = document.querySelector(".price_range_slider").querySelectorAll("span.ui-slider-handle")[0];
	var handle2 = document.querySelector(".price_range_slider").querySelectorAll("span.ui-slider-handle")[1];
			
	handle1.setAttribute('aria-valuenow', initialmin);
	handle1.setAttribute('aria-valuemin', slidemin);
	handle1.setAttribute('aria-valuemax', initialmax);
	
	handle2.setAttribute('aria-valuenow', initialmax);
	handle2.setAttribute('aria-valuemin', initialmin);
	handle2.setAttribute('aria-valuemax', slidemax);
});

$('.menu_finder select').each(utilities.create_coupled_select);
$('.menu_finder select').each(function(){
	
	var select_label = $(this).find('option').eq(0).html();
	
	$(this).on("change", function(){
		if(!AjaxProductSearch.isPaused())
		{
			if($(this).prop('selectedIndex') != 0)
			{
				AjaxProductSearch.trackInteraction(select_label + ": " + $(this).find('option').eq($(this).prop('selectedIndex')).html());
			}
			else
			{
				AjaxProductSearch.trackInteraction(select_label + ": Deselected");
			}
// 			$(this).closest('form').submit();
		}
	});
});

//COMMENTED OUT FOR MJG TEST pages

/* $('.menu_finder select').each(function(){
	select_enhance($(this));
	var select_label = $(this).find('option').eq(0).html();
	$(this).change(function(){
		if(!AjaxProductSearch.isPaused())
		{
			if($(this).prop('selectedIndex') != 0)
			{
				AjaxProductSearch.trackInteraction(select_label + ": " + $(this).find('option').eq($(this).prop('selectedIndex')).html());
			}
			else
			{
				AjaxProductSearch.trackInteraction(select_label + ": Deselected");
			}
			$(this).closest('form').submit();
		}
	});
}); */

$(".option_drop").each(function(){
	var thedrop = $(this);
	var theoptions = $(this).find('.options');
	var thelink = $(this).find('.title');
	var labeltext = thelink.find('.label').text();
	
	var isopen = false;

	if(thedrop.hasClass("open"))
	{
		isopen = true;		
	}
	else
	{
		if(theoptions.find(":checked").length){
			if(theoptions.parents('.onresultspage').length)
			{
				isopen = true;
			}
		}
	}
	if(isopen)
	{	
		thelink.attr("aria-pressed", "true").attr("aria-expanded", "true");
		thedrop.addClass("open");
		theoptions.show()
	}
	else
	{	
		thelink.attr("aria-pressed", "false").attr("aria-expanded", "false");
		thedrop.removeClass("open");
		theoptions.hide();
	}
	
	var selected = theoptions.find(":checked");
	
	if(selected.length)
	{
		if(selected.length > 1)
		{
			thelink.find(".value").html(selected.length + " selected");
		}
		else
		{
			thelink.find(".value").html(" " + selected.next("label").text());
		}
	}
	else
	{
		thelink.find(".value").html("");
	}
	
	
	$(this).find("input").change(function(){
		var selected = theoptions.find(":checked");
		if(selected.length)
		{
			if(selected.length > 1)
			{
				thelink.find(".value").html(selected.length + " selected");
			}
			else
			{
				thelink.find(".value").html(" " + selected.next("label").text());
			}
		}
		else
		{
			thelink.find(".value").html("");
		}
		if(!AjaxProductSearch.isPaused())
		{
			AjaxProductSearch.trackInteraction(labeltext + " " + $('label[for='+$(this).attr("id")+']').text() + ($(this).is(":checked")?" checked":" unchecked"));
//			$(this).closest("form").submit();
		}
	});
	
	thelink.on("click",function(e){
		if(thedrop.hasClass("open"))
		{
			$(this).attr("aria-pressed", "false").attr("aria-expanded", "false");
			thedrop.removeClass("open");
			theoptions.stop().slideUp();
		}
		else
		{
			$(this).attr("aria-pressed", "true").attr("aria-expanded", "true");
			thedrop.addClass("open");
			theoptions.stop().slideDown();
		}	
	});
	
			// spacebar handler... prevent scrolldown
	thelink.on("keydown", function(e) {
		if (e.keyCode == 32) {
			e.preventDefault();
		}
	});
	thelink.on("keyup", function(e) {
		if (e.keyCode == 32) { // space key
			e.preventDefault();
			if(thedrop.hasClass("open"))
			{
				$(this).attr("aria-pressed", "false").attr("aria-expanded", "false");
				thedrop.removeClass("open");
				theoptions.stop().slideUp();
			}
			else
			{
				$(this).attr("aria-pressed", "true").attr("aria-expanded", "true");
				thedrop.addClass("open");
				theoptions.stop().slideDown();
			}
		}
	});
	
	thelink.find(".infobuttonpopup").on("click",function(e){
		e.stopPropagation();
		e.preventDefault();
	}).find(".infobox a").on("click",function(e){
		e.stopPropagation();
	});
	
});

$(".menu_finder input[type=checkbox],.menu_finder input[type=radio]").not('.option_drop input').change(function(){
	if(!AjaxProductSearch.isPaused())
	{
		if($(this).prop("checked"))
		{
			AjaxProductSearch.trackInteraction($('label[for='+$(this).attr("id")+']').text() + ": Checked");
		}
		else
		{
			AjaxProductSearch.trackInteraction($('label[for='+$(this).attr("id")+']').text() + ": Unchecked");
		}
//		$(this).closest("form").submit();
	}
});

$(".menu_finder .finder_drop").each(function(){
	var thedrop = $(this);
	var theoptions = $(this).find('.collapser');
	var thelink = $(this).find('.collapse_link');
	
	var isopen = false;
	
	if(thedrop.hasClass("open"))
	{
		isopen = true;
	}
	else
	{
		if(theoptions.find("input:checked").length){
			isopen = true;
		}
		else
		{
			theoptions.find('select').each(function(){
				if($(this).prop('selectedIndex') != 0) { isopen = true; }
			});
			theoptions.find(".priceinputs input").each(function(){
				if($(this).val() != "") { isopen = true; }
			});
		}
	}
	if(!isopen)
	{
		thelink.find(".text").html("More Options")
		theoptions.hide();
	}
	thelink.on("click",function(e){
		if(thedrop.hasClass("open"))
		{
			thedrop.removeClass("open");
			thelink.find(".text").html("More Options")
			theoptions.stop().slideUp();
		}
		else
		{
			thedrop.addClass("open");
			thelink.find(".text").html("Hide Options")
			theoptions.stop().slideDown();
		}
	});
});

$(".menu_finder .reset_link").on("click",function(){
	
	AjaxProductSearch.pauseSearch();

	var form = $(this).closest("form");
	
	form.find('input[type="checkbox"]').each(function(){
		if($(this).prop("checked"))
		{
			$(this).prop("checked",false).change();
		}
	});
	
	form.find('select').each(function(){
		if($(this).prop("selectedIndex") != 0)
		{
			$(this).prop("selectedIndex",0).change();
		}
	});
	
	form.find(".priceinputs input").each(function(){
		$(this).val("");
	});
	
	form.find(".priceslider").each(function(){
		var pricewrap = $(this).find(".pricewrap");		
		$(this).find(".priceinputs input").each(function(){
			$(this).val("");
		});
		$(this).find(".ui-slider").each(function(){
			var options = $(this).slider("option");
			$(this).slider( 'values', [ options.min, options.max ] );
			pricewrap.html("$" + options.min + " - $" + options.max);
		});
	});
	
	AjaxProductSearch.unpauseSearch();
	AjaxProductSearch.trackInteraction("Finder Reset");
	$(this).closest("form").submit();
});
//$(".menu_finder .submit_button").hide();
$(".menu_finder.finder_collapse .form_wrap").hide();
$(".menu_finder.finder_collapse .finder_title").css("cursor","pointer");
$(".menu_finder.finder_collapse .finder_title").on("click",function(){
	$(this).parent().find(".form_wrap").slideToggle();
});

/*======================================
	END Menu Finder Initialization
=======================================*/
		
		
	
		$(".carousel_list").listcarousel();
		
		$(".threesixty").click(function(e){
			e.preventDefault();
			var popup = $("<iframe scrolling='no' framborder='0' width='508px' height='400px' frameborder='0' allowfullscreen='' src='" + $(this).attr("href") + "&view=inpage'><\/iframe>").lightbox({height:400, width:508, focusTarget: $(this)});
		});
		
		$(".threesixty_txt").click(function(e){
			e.preventDefault();
			var popup = $("<iframe scrolling='no' framborder='0' width='508px' height='400px' frameborder='0' allowfullscreen='' src='" + $(this).attr("href") + "&view=inpage'><\/iframe>").lightbox({height:400, width:508, focusTarget: $(this)});
		});
		
		$(".quick_view_link").click(quickviewPopup);
		
		$(".replace_avail").each(function(){
			$(this).text(parseDate($(this).text(), true));
		});
		
		$('.stocknotify_link').click(function(e){
			e.preventDefault();
			descpop_stocknotify($(this).attr("href"));
		});
		
		$('.video_popup').each(function(){
			$(this).click(function(e){
			
				e.preventDefault();
				var popup = $("<iframe scrolling='no' framborder='0' width='640px' height='360px' frameborder='0' allowfullscreen='' src='" + $(this).attr("href") + "&view=inpage'><\/iframe>").lightbox({height:360, width:640, focusTarget: $(this)});
			});
		});
		
		 $(".hybrid_poplink").click(function(e){
		 	e.preventDefault();
		 	var popup_height=250, popup_width=580;
			if($(this).data("popheight"))
			{ 
				popup_height = parseInt($(this).data("popheight")); 
			}
			if($(this).data("popwidth"))
			{ 
				popup_width = parseInt($(this).data("popwidth"));
			}
			$('<iframe scrolling="no" framborder="0" width="' + popup_width + 'px" height="' + popup_height + 'px" frameborder="0" allowfullscreen="" src="' + $(this).attr("href") + 
			'?view=inpage"><\/iframe>').lightbox({height:popup_height, width:popup_width, focusTarget: $(this)});
		 });
		
		$(".cat_follow_button, .pricenotifylink").click(function(e){
			e.preventDefault();
			
			var popup_height=180, popup_width=580;
			if($(this).data("popheight"))
			{ 
				popup_height = parseInt($(this).data("popheight")); 
			}
			if($(this).data("popwidth"))
			{ 
				popup_width = parseInt($(this).data("popwidth"));
			}
			
			$('<iframe scrolling="no" framborder="0" width="' + popup_width + 'px" height="' + popup_height + 'px" frameborder="0" allowfullscreen="" src="' + $(this).attr("href") + 
			'&view=inpage"><\/iframe>').lightbox({height:popup_height, width:popup_width, focusTarget: $(this)});
		});
		
		// Notify in stock popup
		$(".notify_stock").click(function(e){
			e.preventDefault();
			descpop_stocknotify($(this).attr("href"));
		});
		
		
		
		
		
		
		$('.mailinglist_popup_form').submit(function(e){
			var email = $(this).find('input[name="email"]').val();
			var pattern = new RegExp(/^[A-Za-z0-9._%\-+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}$/);
			if (!pattern.test(email)) {
				alert("Please enter a valid email address");
				return false;
			}
			//GA event tracking	
			var category = $(this).data("trackcategory");
			var action = $(this).data("trackaction");
			var label = $(this).data("tracklabel");
			if(category !== undefined && action !== undefined && label !== undefined){
				_gaq.push(["_trackEvent", category, action, label]);		
			}
			$(this).attr('target','phplist_overlay');
			$("<iframe name='phplist_overlay' scrolling='no' framborder='0' width='550px' height='194px' frameborder='0' allowfullscreen='' src='" + $(this).attr("action") + "&view=inpage'><\/iframe>").lightbox({height:194, width:550});

		});

		
		$(".notify_signup_form").submit(function(e){
			var email = $(this).find(".emailtext");
			if(!isValidEmail(email.val()))
			{
				$(this).find(".error_msg").text("Please Enter a Valid Email Address.");
				email.focus();
				return false;
			}
		});
		
		$('.ajax_string_ordering').submit(function(){
			CartHandler.order($(this).serialize());
			if($(this).is('.ajax_string_ordering'))
			{
				this.reset();
			}	
			return false;
		});

		
		
		
		
		
		
		$('.dropdownbox.linklist').each(function(){
			var dropdown = $(this).addClass('enhanced');
			var list = $(this).find('.optionslist');
			$(this).find('.current_selection').click(function(){

				var space = ($(window).scrollTop() + $(window).height()) - (dropdown.offset().top + dropdown.height());
				var space_top = ($(window).scrollTop() + $(window).height()) - (dropdown.offset().top);
				list.css("maxHeight","none");
				var needed = list.height();
				if(needed >= space)
				{
					if(space <= 200 && space_top > space)
					{
						list.css("maxHeight",(space_top - 10) + "px");
						dropdown.addClass('dropup');
					}
					else
					{
						list.css("maxHeight",(space - 10) + "px");
						dropdown.removeClass('dropup');
					}
				}
				else
				{
					list.css("maxHeight","none");
					dropdown.removeClass('dropup');
				}
				dropdown.toggleClass("active");
				$('.dropdownbox').not(dropdown).removeClass("active");
			});
		});
		
	$("#gc_ban").submit(function(){
		_gaq.push(["_trackEvent", "Gift Card Banner", "Added to Cart", "Desktop"]);			
	});

	$('.adapt_check').on("change",function(){
		var form = $(this).parents(".orderingform");
		form.find('.butt_sel').eq(0).prop("selectedIndex", 0).change();
    form.find('.length_sel').eq(0).prop("selectedIndex", 0).change(); 
		form.find('.string_sel').eq(0).prop("selectedIndex", 0).change(); 
		if($(this).is(":checked")){
													$( ".HeadPat" ).prop( "disabled", false );
									$( ".HeadButt" ).prop( "disabled", false );
									$( ".HeadLength" ).prop( "disabled", false );

				form.find('.adapt_order').show();
		}
		else if($(this).is(":not(:checked)")){
											$( ".HeadPat" ).prop( "disabled", true );
									$( ".HeadButt" ).prop( "disabled", true );
									$( ".HeadLength" ).prop( "disabled", true );

			form.find('.adapt_order').hide();
		}
	});
		
		
}());
	
	
	
	
/*RACQUET COMPARE FEATURE*/

/*
$(function() {
	if($('.compare_checkbox').length)
	{
		var placeholder = $('<div id="compare_placeholder" style="clear:both;"></div>');		
		var comparebox = $('<div id="comparebox"><\/div>').append(
			'<p class="instructions"><strong>Compare Racquets</strong><br>Select up to five racquets to compare by clicking the check boxes next to the racquet names; click the button to the right to view the comparison.</p>' + 
			'<input type="hidden" name="pcode" id="pcode" value="" /><input type="submit" value="Compare Now" class="comparebox_submit" />' + 
			'<ul><li></li><li></li><li></li><li></li><li></li></ul>'
		);
		var container = $('#main').append(placeholder).append($('<form method="get" action="https://www.racquetfinder.com/compare.php" id="compare" target="_blank"></form>').append(comparebox));
		
		toggleBox();
		$(window).on("scroll", function(e) {
			if((($(window).scrollTop() + $(window).height()) - (container.offset().top + container.height())) > 0)
			{
				comparebox.addClass("stick_to_bottom");
			}
			else
			{
				comparebox.removeClass("stick_to_bottom");
			}
		}).trigger("scroll");

		$('.compare_checkbox').each(function(i) {
			$(this).click(function(e) {
				toggleBox();
			});
		});
	}

	$('#compare').submit(function(i) {
		$('#compare #pcode').val(getpcodes());
	});
});
*/




function toggleBox() {
	var count = $('.compare_checkbox:checked').length, pcodes = new Array();
	
	$('.compare_checkbox:checked').each(function(i) {
		pcodes[i] = $(this).val();
	});

	/*$('.compare_checkbox:checked').closest('td').css('background-color', '#dfd');
	$('.compare_checkbox').not(':checked').closest('td').css('background-color', '#fff');*/

	if (count >= 5) {
		$('.compare_checkbox').not(':checked').each(function(i) {
			$(this).attr('disabled', 'disabled');
		});
	} else {
		$('.compare_checkbox').each(function(i) {
			$(this).removeAttr('disabled');
		});
	}
	
	if (count > 0) {
		
		$('#compare_placeholder').animate({
			height: '82px'
		}, 400);
		
		$('#comparebox').animate({
			opacity: 1,
			bottom: '0'
		}, 400);
		
		/*$('#wrapper').css('margin-bottom', '65px');*/
		
		$('#comparebox li').each(function(i) {
			$(this).html('');
			if (i < pcodes.length) {
				$(this).html('<img src="https://img.tennis-warehouse.com/watermark/rsrb.php?path=' + pcodes[i] + '-thumb.jpg&nw=20" alt="" height="48" />');
			}
		});
	} else {
		$('#compare_placeholder').animate({
			height: '0'
		}, 400);
		$('#comparebox').animate({
			opacity: 0,
			bottom: '-82px'
		}, 400);
		/*$('#wrapper').css('margin-bottom', '0');*/
	}
	
	$('.toggle-compare').each(function(i) {
		if (! $('.compare_checkbox.hidden').length) {
			$(this).text('Turn off Compare');
		} else {
			$(this).text('Turn on Compare');
		}
	});
}

function getpcodes() {
	var pcodes = new Array();
	$('.compare_checkbox:checked').each(function(i) {
		pcodes[i] = $(this).val();
	});
	return pcodes.join(';');
}

function popitup(url,width,height) {
	var dimensions = "height=" + height + ",width=" + width;
	var newwindow=window.open(url,'name', dimensions);
	return false;
}

/* Satisfaction Guarantee */
$(function(){
	$('#satisfaction').click(function(e){
	    var descpop = $('#satisfaction_descpop').clone();
	    e.preventDefault();
	    descpop.show().lightbox({height:155, width:400});
	});
});

/* TW Racquet Experts Pop */
$(function(){
	$('#rac_learn').click(function(e){
	    var descpop = $('#rac_learn_pop').clone();
	    e.preventDefault();
	    descpop.show().lightbox({height:385, width:400});
	});
});

/* Liquidation Viewall Image Form Submit */
$(function(){
	$(".liq_prodrow").click(function(){
		$(this).parent().next().children().first().submit();
	});
});


//Back to top link fader
	if($('#backtotop').length){
		$(window).scroll(function() {
			if(($(window).scrollTop() > 200)) 
			{
				$('#backtotop').fadeIn();
			}
			else
			{
				$('#backtotop').fadeOut();
			}
		});
		$("#backtotop").on("click",function(e){
			e.preventDefault();
			$("html, body").animate({scrollTop: 0}, 0);
		});
	}
	
// cat desc read more

$(".rm").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("more");
    $(this).prev(".catdescription").toggleClass("collapse" , 500);
    $(this).children(".cat_read").toggleClass("more");
    $(this).children(".cat_read").html() === "More" ? $(this).children(".cat_read").html("Less") : $(this).children(".cat_read").html("More");
});

$(".desc_rm").on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("more");
    $(".desc_cust_reviews").toggleClass("collapse" , 2000);
    $(this).children(".desc_read").toggleClass("more");
    $(this).children(".desc_read").html() === "More" ? $(this).children(".desc_read").html("Less") : $(this).children(".desc_read").html("More");
});

/* Left Nav */
$(".subcat_ctrl").each(function(){
    if($(this).hasClass("collapsed")){
        $(this).find(".lnav_subcat").hide();
    }
});
$(".subcat_ctrl_button").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent(".subcat_ctrl").find(".lnav_subcat").stop().slideToggle({complete:function(){$(this).css("height","auto")}});
    $(this).parent(".subcat_ctrl").toggleClass("collapsed");
});
$(".subcat_ctrl_lbl").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent(".subcat_ctrl").find(".lnav_subcat").stop().slideToggle({complete:function(){$(this).css("height","auto")}});
    $(this).parent(".subcat_ctrl").toggleClass("collapsed");
});

/* INT Page Tabs */
$("#cs_tabs").tabs();
$("#cs_tabs_second").tabs();

/* LC Tabs */
$("#lc_pf_tabs").tabs();
$("#str_tabs").tabs();


/* descpage video pop */
	
function vidPopup(url)
{
	$('<iframe width="790px" height="444px" frameborder="0" src="' + url +'" class="video_pop"><\/iframe>').lightbox({height:484, width:830});
}
$('.vod').each(function(){
	$(this).click(function(e){
		e.preventDefault();
	    vidPopup($(this).attr("href"));
	});
});

$('.vod_desc').each(function(){
	$(this).click(function(e){
		e.preventDefault();
		$('html, body').animate({
            scrollTop: $("#video").offset().top
        }, 500);
	});
});

 // Shipping Calculator
	if($(".shipping_calc_link").length){
		//store the shipping calculator once it's been loaded
		var shipcalc_obj = null;
		$(".shipping_calc_link").on("click",function(e){
			e.preventDefault();
			_gaq.push(['_trackPageview', "https://www.racquetballwarehouse.com/shippingcalculator.html"]);
			if(shipcalc_obj === null){
				//shipping calculator needs to be loaded
				$.get("https://www.racquetballwarehouse.com/ajax/shipping_calc.html",function(data){
					shipcalc_obj = $(data);
					var pop = shipcalc_obj.clone();
					pop.lightbox({ width:520 });
					var boxheight = pop.height();
					pop.lightbox("resize", { height:boxheight });
					pop.find(".fancy_select").each(function(){
						$(this).selectmenu({ position: { collision : "flipfit" }});
					});
					pop.find(".sc_form").eq(0).on("submit",function(e){
						e.preventDefault();
						shipcalc_retrieve($(this).serialize(),pop);
					});
				});
			} else {
				//shipping calculator is already loaded
				var pop = shipcalc_obj.clone();
				pop.lightbox({ width:520 });
				var boxheight = pop.height();
				pop.lightbox("resize", { height:boxheight });
				pop.find(".fancy_select").each(function(){
					$(this).selectmenu({ position: { collision : "flipfit" }});
				});
				pop.find(".sc_form").eq(0).on("submit",function(e){
					e.preventDefault();
					shipcalc_retrieve($(this).serialize(),pop);
				});
			}
			
		});
	}
	
	// Shipping Calculator - load results
function shipcalc_retrieve(serial, popup){
	_gaq.push(['_trackPageview', "https://www.racquetballwarehouse.com/shippingcalculator.html?"+serial]);
	var rates = popup.find(".ship_rates").eq(0);
	if(rates.length){
		rates.html("").addClass("loading");
	} else {
		rates = $("<div class='ship_rates loading'></div>");
		popup.find(".contents").eq(0).append(rates);
	}
	$.ajax({
		timeout: 8000,
		type: "GET",
		url: "https://www.racquetballwarehouse.com/ajax/shipping_calc_results.html?" + serial,
		dataType: "html",
		success: function(contents){
			rates.replaceWith(contents);
			var boxheight = popup.height();
			popup.lightbox("resize",{ height:boxheight });
		},
		error: function(){
			rates.removeClass("loading").html("<p>We're sorry. Your request could not be processed. Please try again in a few moments.</p>");
		}
	});
}

$('.custreview_form').submit(function(e){
    $(this).attr('target','phplist_overlay');
    var iframe = $('<iframe name="phplist_overlay" width="800px" height="700px" src="" scrolling="no" allowfullscreen><\/iframe>').load(function(){
        var	old_height = $(this).height();
        /* var frame_height = $(this.contentWindow.document).height();
        if(frame_height > old_height)
        {
            $(this).css("height",frame_height + "px").lightbox("resize", { height:frame_height });
        } */
    });
    iframe.lightbox({height:700, width:800,focusTarget:returnTo});
});
