$(document).ready(function(){$(".next").on("click",function(){var e=$(".about-item.current"),t=$(".about-item.current").index()+1,r=$(".about-item").eq(t);e.fadeOut(0),e.removeClass("current"),t==$(".about-item:last").index()+1?($(".about-item").eq(0).fadeIn(1e3),$(".about-item").eq(0).addClass("current")):(r.fadeIn(1e3),r.addClass("current"))}),$(".prev").on("click",function(){var e=$(".about-item.current"),t=$(".about-item.current").index()-1,r=$(".about-item").eq(t);e.fadeOut(0),e.removeClass("current"),r.fadeIn(1e3),r.addClass("current")});var e=$(".buy-now"),t=$(".card-heading"),r=$(".card");e.mouseover(function(){$(this).closest(r).find(t).css("background-color","red"),$(this).closest(r).find(t).css("border","1px solid red")}),e.mouseleave(function(){$(this).closest(r).find(t).css("background-color","rgb(83, 99, 219)"),$(this).closest(r).find(t).css("border","1px solid rgb(83, 99, 219)")}),function(e){jQuery.fn.quoteTabs=function(t){return this.each(function(){tabs=this,i=0,showPage=function(t){e(tabs).children("div").children("div").hide(),e(tabs).children("div").children("div").eq(t).show(),e(tabs).children("ul").children("li").removeClass("active"),e(tabs).children("ul").children("li").eq(t).addClass("active")},showPage(0),e(tabs).children("ul").children("li").each(function(t,r){e(r).attr("data-page",i),i++}),e(tabs).children("ul").children("li").on("click",function(){showPage(parseInt(e(this).attr("data-page")))})})}}(jQuery),$(".quotes").quoteTabs(),$(".qoute-trash-button.next").on("click",function(){var e=$(".quote-author.current"),t=$(".quote-author.current").index()+1,r=$(".quote-author").eq(t);e.fadeOut(0),e.removeClass("current"),t==$(".quote-author:last").index()+1?($(".quote-author").eq(0).fadeIn(1e3),$(".quote-author").eq(0).addClass("current")):(r.fadeIn(1e3),r.addClass("current"))}),$(".qoute-trash-button.prev").on("click",function(){var e=$(".quote-author.current"),t=$(".quote-author.current").index()-1,r=$(".quote-author").eq(t);e.fadeOut(0),e.removeClass("current"),r.fadeIn(1e3),r.addClass("current")})});