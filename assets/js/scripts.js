
$(document).ready( function () {   
	
    $('.next').on('click', function(){
        var currentImage = $('.about-item.current'),
         	currentImageIndex = $('.about-item.current').index(),
		 	nextImageIndex = currentImageIndex + 1,
		 	nextImage = $('.about-item').eq(nextImageIndex);
        currentImage.fadeOut(0);
        currentImage.removeClass('current');

        if(nextImageIndex == ($('.about-item:last').index()+1)){
            $('.about-item').eq(0).fadeIn(1000);
            $('.about-item').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
        }
    });

    $('.prev').on('click', function(){
        var currentImage = $('.about-item.current'),
            currentImageIndex = $('.about-item.current').index(),
            prevImageIndex = currentImageIndex - 1,
            prevImage = $('.about-item').eq(prevImageIndex);
        
        currentImage.fadeOut(0);
        currentImage.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
    })
    var buyNow = $('.buy-now'),
   		cardHeading = $('.card-heading'),
   		card = $('.card');
    
	buyNow.mouseover( function (){
	  $(this).closest(card).find(cardHeading).css('background-color', 'red');
	  $(this).closest(card).find(cardHeading).css('border', '1px solid red');
	});
	
	buyNow.mouseleave( function (){
	  $(this).closest(card).find(cardHeading).css('background-color', 'rgb(83, 99, 219)');
	  $(this).closest(card).find(cardHeading).css('border', '1px solid rgb(83, 99, 219)');
	});

	(function($) {
	  jQuery.fn.quoteTabs = function(options) {
	
	    var createTabs = function() {
	      tabs = this;
	      i = 0;
	
	      showPage = function(i) {
	        $(tabs).children('div').children('div').hide();
	        $(tabs).children('div').children('div').eq(i).show();
	        $(tabs).children('ul').children('li').removeClass('active');
	        $(tabs).children('ul').children('li').eq(i).addClass('active');
	      }
	
	      showPage(0);
	
	      $(tabs).children('ul').children('li').each(function(index, element) {
	        $(element).attr("data-page", i);
	        i++;
	      });
	
	      $(tabs).children('ul').children('li').on('click', function() {
	        showPage(parseInt($(this).attr('data-page')));
	      });
	    };
	    return this.each(createTabs);
	  };
	})(jQuery);
	
	$('.quotes').quoteTabs();
	
	
	$('.qoute-trash-button.next').on('click', function() {
	  var $quote = $(this).closest(".quote");
	  var currentAuthor = $quote.find('.quote-author.current'),
	    currentAuthorIndex = $quote.find('.quote-author.current').index(),
	    nextAuthorIndex = currentAuthorIndex + 1,
	    nextAuthor = $quote.find('.quote-author').eq(nextAuthorIndex);
	  currentAuthor.fadeOut(0);
	  currentAuthor.removeClass('current');
	
	  if (nextAuthorIndex == ($quote.find('.quote-author:last').index() + 1)) {
	    $quote.find('.quote-author').eq(0).fadeIn(1000);
	    $quote.find('.quote-author').eq(0).addClass('current');
	  } else {
	    nextAuthor.fadeIn(1000);
	    nextAuthor.addClass('current');
	  }
	});
	
	$('.qoute-trash-button.prev').on('click', function() {
	  var $quote = $(this).closest(".quote");
	  var currentAuthor = $quote.find('.quote-author.current'),
	    currentAuthorIndex = $quote.find('.quote-author.current').index(),
	    prevAuthorIndex = currentAuthorIndex - 1,
	    prevAuthor = $quote.find('.quote-author').eq(prevAuthorIndex);
	
	  currentAuthor.fadeOut(0);
	  currentAuthor.removeClass('current');
	  prevAuthor.fadeIn(1000);
	  prevAuthor.addClass('current');
	})
});

