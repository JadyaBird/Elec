sliderImages = []
sliderOptions = []
sliderOptionsDeafults = {
	mode: 'standard', //peopleRegistry, thumbnails
	listID: null, 
	galleryListID: null
}
sliderConfig = {}
sliderConfigDeafults = {
	speed: 6000, 
	animatonDuration: 1250,
	delayNextSlider: 3000
}
general={
	animationTime: 250
}


$(document).ready(function(){
	
	/*** @author Alexander Farkas v. 1.22 */
	(function($) { if(!document.defaultView || !document.defaultView.getComputedStyle){ var oldCurCSS = $.curCSS; $.curCSS = function(elem, name, force){ if(name === 'background-position'){ name = 'backgroundPosition'; } if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){ return oldCurCSS.apply(this, arguments); } var style = elem.style; if ( !force && style && style[ name ] ){ return style[ name ]; } return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force); }; } var oldAnim = $.fn.animate; $.fn.animate = function(prop){ if('background-position' in prop){ prop.backgroundPosition = prop['background-position']; delete prop['background-position']; } if('backgroundPosition' in prop){ prop.backgroundPosition = '('+ prop.backgroundPosition; } return oldAnim.apply(this, arguments); }; function toArray(strg){ strg = strg.replace(/left|top/g,'0px'); strg = strg.replace(/right|bottom/g,'100%'); strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2"); var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/); return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]]; } $.fx.step. backgroundPosition = function(fx) { if (!fx.bgPosReady) { var start = $.curCSS(fx.elem,'backgroundPosition'); if(!start){ start = '0px 0px'; } start = toArray(start); fx.start = [start[0],start[2]]; var end = toArray(fx.end); fx.end = [end[0],end[2]]; fx.unit = [end[1],end[3]]; fx.bgPosReady = true; } var nowPosX = []; nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0]; nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1]; fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1]; }; })(jQuery);
	/* end background animation plugin */
	
	tr = function(s) {
		try { console.log(s) } catch (e) { alert(s) }
	}
	
	trimMe = function(a, b){
		if(b==1) return a.replace(/^\s+/,'').replace(/\s+$/,'')
		else return encodeURI(a.replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s/g, '-').toLowerCase())
	}
	
	hashURL = function(hash){
		if(hash!=null){
			window.location.href = window.location.href.replace(/#.*$/, '')+'#'+hash
			return true
		}
		else{
			hash = window.location.href.match(/\#(.*)$/)
			return hash==null ? null : hash[1]
		}
	}
	
$('.stavanger a.velg').click(function(){
    $('.stavanger').fadeOut("100", function(){$('.oslo').fadeIn("100", function(){
        if($('#google-maps2').not('.initialized2').length){
            var map2 = new google.maps.Map(document.getElementById("google-maps2"), myOptions2)
            marker2.setMap(map2)
            $('#google-maps2').addClass('initialized2')
        }
    });});    
});


$('.oslo a.velg').click(function(){
    $('.oslo').fadeOut("100", function(){$('.stavanger').fadeIn("100", function(){
        if($('#google-maps').not('.initialized').length){
            var map = new google.maps.Map(document.getElementById("google-maps"), myOptions)
            marker.setMap(map)
            $('#google-maps').addClass('initialized')
        }
    });});    
});


	$('#header')
		.css('position', 'relative')
		.append(
			$('<div>').attr('id', 'main-menu-indicator')
		 )
	menuHover = function(which){
		
		$('ul#main-menu .active a').add($(which)).each(function(){
			$(this).css('background', 'url("img/menu-active.png") no-repeat -'+
				($(this).offset().left-$('ul#main-menu').offset().left-6)
				+'px 0')
		})
		if(which==null) which = $('ul#main-menu .active')
		$('#main-menu-indicator')
			.stop(true, false)
			.animate({
				left: ($(which).offset().left - $('#header').offset().left + $(which).width()/2 + parseInt($(which).css('paddingLeft')) - $('#main-menu-indicator').width()/2 )
			}, 500)
	}
	if($.browser.msie && $.browser.version<8){
		$('ul#main-menu li a').css({
			display: 'block',
			lineHeight: '0px'
		})
		$('ul#main-menu li').css({
			display: 'inline'
		})
		$('ul#main-menu').css({
			display: 'block'
		})
		$('#main-slider .photo-descr span.next').css({position: 'relative', top:'-12px'})
		$('#main-slider .photo-descr span.current').css({position: 'relative', left:'-32px'})
		$('#people-list li, #project-filter-categories ul li, #project-filter-categories ul li a, #project-list li')
			.css({float: 'left'})
		$('#project-filter ul').css({position: 'relative'})
		$('#project-filter ul').each(function(){
			$(this).find('li:gt(1)').prepend(', ')
		})
	}
	iefix = function(str){
		if(!$.browser.msie || parseInt($.browser.version)>8) return str
		wonkyA = String.fromCharCode(197)
		wonkya = String.fromCharCode(229)
		return str.replace(wonkyA, '<em style="font-family: Arial, sans-serif; font-style: normal;">'+wonkyA+'</em>').replace(wonkya, '<em style="font-family: Arial, sans-serif; font-style: normal;">'+wonkya+'</em>')
	}
	if($.browser.msie && parseInt($.browser.version)<9){
		wonkyA = String.fromCharCode(197)
		$('.name, .project-name, .title, dd, .marker-label, #people-filter ul li a, #project-filter-categories ul li a, #text-content .title, #text-content h3, #main-slider .photo-descr .photo-label')
			.each(function(){
				$(this).html( iefix( $(this).html() ) )
			})
		/*.not('.uc')
		.css('textTransform', 'none')*/
	}
	
	menuHover(null)
	
	$('ul#main-menu a')
		.hover(
			function(){
				menuHover(this)
			}, 
			function(){
				menuHover(null)
			}
		 )
	
	if($('#people-list').length){
		$('#people-list li').each(function(){
			if($.browser.msie && parseInt($.browser.version)<8) {
				if($('#people-list li').index(this)%11==0) $(this).before($('<li/>').css({float: 'left', clear: 'left', width: $(this).width()/2}) )
			}
			else if($('#people-list li').index(this)%11==10 || $('#people-list li').index(this)%11==4) $(this).after('<br/>')
		})
	}
	
	if($('#people-filter').length){
		if($.browser.msie && parseInt($.browser.version)<8) {
			$('#people-filter ul li').css({float: 'left'})
		}
		var filterPeople = function(what){
			if(what==null){
				$('#people-list li').removeClass('dimmed')
				$('#people-filter a').removeClass('active')
				return 0
			}
			$('#people-filter a').not('#'+what).removeClass('active')
			$('#people-filter a#'+what).addClass('active')
			$('#people-list li').not('.'+what).addClass('dimmed')
			$('#people-list li.'+what).removeClass('dimmed')
		}
		$('#people-filter a').click(function(e){
			e.preventDefault()
			if($(this).hasClass('active')){
				hashURL('-')
				filterPeople(null)
				return 0
			}
			hashURL($(this).attr('id').replace(/^.*-/, ''))
			filterPeople($(this).attr('id'))
		})
		if(hashURL()!=null && hashURL().length>1) filterPeople('filter-'+hashURL())
	}
	
	$('#page').append('<div style="clear: both;"></div>')
	
	$('#main-menu .contact').add('#short-story .contact').click(function(e){
		e.preventDefault()
		$('#overlay').fadeTo(0, 0)
		$('#overlay #contact').css('marginTop', $('body').scrollTop()+Math.max(0, $(window).height()-$('#contact').height()-parseInt($('#contact').css('paddingTop'))*2)/2)
		$('#overlay').fadeTo(general.animationTime*3, 1, function(){
			if($('#google-maps').not('.initialized').length){
				var map = new google.maps.Map(document.getElementById("google-maps"), myOptions)
				marker.setMap(map)
				var map2 = new google.maps.Map(document.getElementById("google-maps2"), myOptions2)
				marker2.setMap(map2)
				$('#google-maps').addClass('initialized')
				$('#google-maps2').addClass('initialized')
			}
					
		})
	})
	
	$('#overlay .close').click(function(e){
		e.preventDefault()
		$('#overlay').fadeOut(general.animationTime*3)
	})
	
	if($('#project-filter').length){
		$('#project-list').isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows',
			getSortData : {
				date : function ( $elem ) {
					return $elem.find('.date').text()
				}
			}
		})
		$('#project-list a .project-info').each(function(){
			img = $(this).siblings('img')
			$(this).css({
				width: img.width()+parseInt(img.css('borderLeftWidth'))*2,
				height: img.height()+parseInt(img.css('borderTopWidth'))*2,
				margin: 0,
				padding: 0,
			   left: img.offset().left-img.parent().parent().offset().left
			})
		})
		$('#project-filter-categories a').not('#filter-chronology').append('<div class="page-indicator top"></div><div class="page-indicator bottom"></div>')
		$('#project-filter-categories a').not('#filter-chronology').click(function(e){
			e.preventDefault()
			hashURL($(this).attr('id').replace(/^filter-/, ''))
			$('#project-list').isotope({filter: 'li', sortBy : 'original-order', sortAscending: true})
			$('#project-filter a').removeClass('active')
			$('#project-filter-categories a').not(this).removeClass('active')
			$(this).addClass('active')
			$('#project-filter-categories').addClass('open')
			$('#project-filter ul').not('.'+$(this).attr('id')).removeClass('open', general.animationTime)
			$('#project-filter ul.'+$(this).attr('id')).addClass('open', general.animationTime)
		})
		$('#project-filter-categories a#filter-chronology').click(function(e){
			e.preventDefault()
			hashURL($(this).attr('id').replace(/^filter-/, ''))
			$('#project-list').isotope({filter: 'li', sortBy: 'date', sortAscending: false})
			$('#project-filter a').removeClass('active')
			$('#project-filter-categories a').not(this).removeClass('active')
			$(this).addClass('active')
			$('#project-filter-categories').removeClass('open')
			$('#project-filter ul').removeClass('open', general.animationTime)
			
		})
		$('#project-filter a').not('.close').click(function(e){
			e.preventDefault()
			hashURL($(this).attr('id').replace(/^filter-/, ''))
			$('#project-list').isotope({filter: '.'+$(this).attr('id')})
			$('#project-filter a').not(this).removeClass('active')
			$(this).addClass('active')
		})
		$('#project-filter a.close').click(function(e){
			e.preventDefault()
			hashURL('-')
			$('#project-list').isotope({filter: 'li'})
			$('#project-filter ul').removeClass('open', general.animationTime)
			$('#project-filter a').removeClass('active')
			$('#project-filter-categories').removeClass('open')
			$('#project-filter-categories a').removeClass('active')
		})
		if(hashURL()!=null && hashURL().length>1){
			h = hashURL()
			if(/.+-.+/.test(h)) setTimeout(function(){
				$('#filter-'+h.replace(/-.+$/, '')).click()
				$('#filter-'+h).click()
			}, 250)
		}
	}
	
	if($('.sliderwrapper').length){
		for(var k in sliderConfigDeafults){
			if(sliderConfig[k] == undefined) sliderConfig[k] = sliderConfigDeafults[k]
		}
	
		makeImagesList = function(theS){
			sliderImages[theS] = []
			S = $('#'+theS)
			list = $('#'+sliderOptions[theS].listID)
			if(sliderOptions[theS].mode='peopleRegistry'){
				list.find('li').each(function(){
					ind = list.find('li').index(this)
					$(this).attr('id', 'list'+ind)
					sliderImages[theS][ind] = {
						image: $(this).find('a.image').attr('href'),
						link: $(this).find('a.link').attr('href'),
						thumb: $(this).find('a.image img') ? $(this).find('a.image img').attr('src') : null,
						name: $(this).find('.name') ? $(this).find('.name').html() : null,
						captionStyle: $(this).find('.name') && $(this).find('.name').attr('style') ? $(this).find('.name').attr('style') : null,
						email: $(this).find('a.name') ? $(this).find('a.name').attr('href') : null,
						info: $(this).find('.info') ? $(this).find('.info').html() : null
					}
				})
			}
			else{
				list.find('li').each(function(){
					ind = list.find('li').index(this)
					$(this).attr('id', 'list'+ind)
					sliderImages[theS][ind] = {
						image: $(this).find('a.image').attr('href'),
						thumb: $(this).find('a.image img').length ? $(this).find('a.image img').attr('src') : null,
						title: $(this).find('.title').length ? $(this).find('title').html() : null,
						author: $(this).find('.author').length ? $(this).find('author').html() : null
					}
				})
			}
		}
		
		function numSlide(theS, num){
			S = $('#'+theS)
			last = parseInt(sliderImages[S.attr('id')].length-1)
			if(num>last) return num-last-1
			else if(num<0) return 1+last+num
			else return parseInt(num)
		}
		
		photoLoaded = function(t){
			$(t).find('img').addClass('loaded')
		}
		
		function addSlide(theS, num, cls){
			S = $('#'+theS)
			num = numSlide(theS, num)
			if(S.find('#img'+num).length==0){
				S.prepend(
					'<div class="main-image'+(cls!=undefined ? ' '+cls : '')+'" id="img'+num+'">'
						+(sliderImages[theS][num].link ? '<a href="'+sliderImages[theS][num].link+'">' : '')
						+'<img alt="'+sliderImages[theS][num].title+'" onload="photoLoaded(\'#img'+num+'\');"/>'
						+(sliderImages[theS][num].link ? '</a>' : '')
						+(0 && (sliderOptions[theS].mode=='standard' || sliderOptions[theS].mode=='thumbnails') ? ''
							+'<div class="photo-descr">'
								+(sliderOptions[theS].mode=='thumbnails' ? '<span class="counter">'+(num+1)+'/'+sliderImages[theS].length+'</span>' : '')
								+'<span class="title">'+sliderImages[theS][num].title+'</span>'
								+'<span class="author">'+sliderImages[theS][num].author+'</span>'
							+'</div>' : ''
						)
						+(sliderOptions[theS].mode=='peopleRegistry' && sliderImages[theS][num].captionStyle ? ''
							+'<div class="photo-caption" style="'+sliderImages[theS][num].captionStyle+'">'
								+(sliderImages[theS][num].email ? '<a href="'+sliderImages[theS][num].email+'">' : '')
								+(sliderImages[theS][num].name ? '<span class="name">'+sliderImages[theS][num].name+'</span>' : '')
								+(sliderImages[theS][num].email ? '</a>' : '')
								+(sliderImages[theS][num].info ? '<div class="info">'+sliderImages[theS][num].info+'</div>' : '')
							+'</div>' : ''
						)
					+'</div>'
				)
				if(sliderOptions[theS].animation=='vertical'){
					S.find('.photo-descr > div').append('<div class="photo-label'+(typeof(Scls)!='undefined' ? ' '+cls : '')+'" id="label-'+num+'">'+sliderImages[theS][num].title+'</div>')
				}
				S.find('#img'+num+' img').load(function(e){
					$(this).addClass('loaded')
				}).attr('src', sliderImages[theS][num].image)
			}
		}
		
		checkQueue = function(theS){
			//trace('checkQueue: '+theS+', animated='+sliderOptions[theS].animated)
			S = $('#'+theS)
			if(sliderOptions[theS].animated==0 && sliderOptions[theS].queue && sliderOptions[theS].queue.length>0){
			//if(S.children('.main-image:animated').length==0 && sliderOptions[theS].queue && sliderOptions[theS].queue.length>0){
				changeSlide(theS, sliderOptions[theS].queue.shift())
			}
		}
		
		changeSlide = function(theS, dir, why){
			//trace('changeSlide: '+theS)
			S = $('#'+theS)
			if(sliderOptions[theS].animated>0 && why!='timer'){
			//if(S.children('.main-image:animated').length && why!='timer'){
				if(sliderOptions[theS].queue && sliderOptions[theS].mode!='peopleRegistry') sliderOptions[theS].queue.push(dir)
				else sliderOptions[theS].queue = [dir]
				return false
			}
			else if(sliderOptions[theS].animated>0 || !S.is(':visible')) return false
			theWidth = S.width()
			theHeight = S.height()
			current = parseInt(S.children('.current').attr('id').substring(3))
			last = sliderImages[theS].length-1
			direction = '-'
			if(dir=='next') nextSlide = numSlide(theS, current+1)
			else if(dir=='prev'){
				nextSlide = numSlide(theS, current-1)
				if(current==nextSlide) return false
				$('#img'+nextSlide).css('left', -theWidth)
				direction = '+'
			}
			else if(parseInt(dir)<current){
				nextSlide = numSlide(theS, dir)
				if(current==nextSlide) return false
				$('#img'+nextSlide).css('left', -theWidth)
				direction = '+'
			}
			else nextSlide = numSlide(theS, dir)
			if(current==nextSlide) return false
			//trace(dir)
			addSlide(theS, nextSlide)
			if(sliderOptions[theS].mode=='peopleRegistry' && $('#img'+nextSlide).find('img.loaded').length==0 ){
				sliderOptions[theS].queue = []
				clearInterval(sliderOptions[theS].preload)
				sliderOptions[theS].preload = setTimeout("changeSlide('"+theS+"', '"+dir+"', 'preloader')", 50)
				return false
			}
			else clearInterval(sliderOptions[theS].preload)
			
			sliderOptions[theS].animated +=2
			addSlide(theS, nextSlide+1)
			addSlide(theS, nextSlide-1)
			//trace('changeSlide animate from: '+S.children('.current').attr('id')+'@'+S.children('.current').css('left')+', '+S.children('#img'+nextSlide).attr('id')+'@'+S.children('#img'+nextSlide).css('left'))
			if(sliderOptions[theS].animation!='vertical'){
				S.children('#img'+nextSlide).css('left', (direction=='-' ? '' : '-')+theWidth+'px').css('width', '100%')
				S.children('.current, #img'+nextSlide).animate({left: direction+'='+theWidth}, sliderConfig.animatonDuration, 'swing', function(){
					theS = $(this).parents('.sliderwrapper').attr('id')
					if($(this).hasClass('current')){
						//trace('callback: '+theS+' called by: '+$(this).attr('id'))
						sliderOptions[theS].animated -=1
						$(this).removeClass('current').css('left', '')
						checkQueue(theS)
						//setTimeout("checkQueue('"+theS+"')", 1)
					}
					else{
						//trace('callback: '+theS+' called by: '+$(this).attr('id'))
						sliderOptions[theS].animated -=1
						$(this).addClass('current').css('left', '')
						checkQueue(theS)
						//setTimeout("checkQueue('"+theS+"')", 1)
					}
				})
				newNaviWidth = Math.max(0, S.width()-S.find('#img'+nextSlide+' img').width())/2+150
				//S.find('#slider-navi a.prev').css('backgroundPosition', '150px 50%')
				S.find('#slider-navi a.next').animate({
					width: newNaviWidth,
					backgroundPosition: Math.min((150-34/2), (newNaviWidth-34))+'px 50%'
				} , sliderConfig.animatonDuration, 'swing')
				S.find('#slider-navi a.prev').animate({
					width: newNaviWidth,
					backgroundPosition: Math.max((newNaviWidth-150-34/2), 0)+'px 50%'
				} , sliderConfig.animatonDuration, 'swing')
			}
			else{
				//S.children('.current').css('zIndex', 10)
				S.children('#img'+nextSlide).css('left', 0).css('zIndex', 5).animate({top: 0}, sliderConfig.animatonDuration, 'swing', function(){
					theS = $(this).parents('.sliderwrapper').attr('id')
					//trace('callback: '+theS+' called by: '+$(this).attr('id'))
					sliderOptions[theS].animated -=1
					$(this).addClass('current').css('top', '').css('zIndex', '')
					checkQueue(theS)
					//setTimeout("checkQueue('"+theS+"')", 1)
				})
				S.children('.current').animate({top: direction+'='+theHeight}, sliderConfig.animatonDuration, 'swing', function(){
					theS = $(this).parents('.sliderwrapper').attr('id')
					//trace('callback: '+theS+' called by: '+$(this).attr('id'))
					sliderOptions[theS].animated -=1
					$(this).removeClass('current').css('top', '').css('zIndex', '')
					checkQueue(theS)
					//setTimeout("checkQueue('"+theS+"')", 1)
				})
				if(direction == '-'){
					lz = S.find('#label-'+numSlide(theS, nextSlide-2))
					la = S.find('#label-'+numSlide(theS, nextSlide-1))
					lb = S.find('#label-'+nextSlide)
					lc = S.find('#label-'+numSlide(theS, nextSlide+1))
					/*if(!parseInt(lb.attr('rel'))>0) lb.attr('rel', lb.width())
					lz.animate({left: -lz.width()}, 500, function(){$(this).css('left', 940)})
					la.animate({left: 80, fontSize: 12 }, 500)
					lb.animate({left: 940/2-lb.width()/3, fontSize: 17 }, 350, 'linear', function(){
						$(this).animate({left: 940/2-$(this).width()/2 }, 150, 'linear')
					})
					lc.animate({left: 940}, 1)
					lc.animate({left: 940-80-lc.width() }, 500)*/
					lz.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css('left', 940)
					})
					la.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({left: 80, fontSize: 12 }).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
					lb.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({fontSize: 17 }).css({left: 940/2-$(this).width()/2 }).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
					lc.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({left: 940-80-$(this).width() }).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
				}
				else{
					la = S.find('#label-'+numSlide(theS, nextSlide-1))
					lb = S.find('#label-'+nextSlide)
					lc = S.find('#label-'+numSlide(theS, nextSlide+1))
					ld = S.find('#label-'+numSlide(theS, nextSlide+2))
					/*if(!parseInt(lb.attr('rel'))>0) lb.attr('rel', lb.width())
					la.animate({left: -la.width()}, 1)
					la.animate({left: 80 }, 500).addClass('prev')
					lb.animate({left: 940/2-lb.width(), fontSize: 17 }, 350, 'linear', function(){
						$(this).animate({left: 940/2-$(this).width()/2 }, 150, 'linear')
					})
					lc.animate({left: 940-80-parseInt(lc.attr('rel')), fontSize: 12 }, 500)
					ld.animate({left: 940}, 500)*/
					la.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({left: 80 }).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
					lb.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({fontSize: 17 }).css({left: 940/2-$(this).width()/2}).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
					lc.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css({fontSize: 12 }).css({left: 940-80-$(this).width()}).fadeTo(sliderConfig.animatonDuration*2/3, 1)
					})
					ld.fadeTo(sliderConfig.animatonDuration/3, 0, function(){
						$(this).css('left', 940)
					})
				}
			}
			
			if(sliderOptions[theS].mode=='standard'){
				S.find('#slider-pager > .current').removeClass('current')
				S.find('#slider-pager > a:nth('+nextSlide+')').addClass('current')
			}
			else if(sliderOptions[theS].mode=='thumbnails'){
				$('#thumb-carousel .current').removeClass('current')
				$('#thumb-carousel a:nth('+nextSlide+')').addClass('current')
				$('#img'+nextSlide+' .photo-descr .counter').text((nextSlide+1)+'/'+(last+1))
			}
			
			if (sliderOptions[theS].listID != null){
				$('#'+sliderOptions[theS].listID+' .current').removeClass('current')
				$('#'+sliderOptions[theS].listID+' li#list'+nextSlide).addClass('current')
			}
			
		}
		
		restartSlider = function(theS){
			$('#'+theS).children('.main-image').stop(true, false).remove()
			$('#thumb-carousel').add('#slider-navi').add('#carousel-navi').remove()
			clearInterval(sliderOptions[theS].timer)
			sliderOptions[theS].queue = []
			sliderImages[theS] = sliderImages[$(this).parent().attr('id')]
			startSlider(theS, true)
		}
		
		startCarousel = function(){
			$('#thumb-carousel').addClass('paginated').wrapInner('<div id="thumb-carousel-wrapper"></div>').after('<div id="carousel-navi"><a href="#" class="prev"></a><a href="#" class="next"></a></div>')
			$('#carousel-navi a.prev').hide()
			$('#carousel-navi a').click(function(e){
				e.preventDefault()
				if($('#thumb-carousel-wrapper:animated').length) return false;
				if($(this).hasClass('next')) sign = '-'
				else sign = '+'
				$('#thumb-carousel-wrapper').animate({marginLeft: sign+'='+$('#thumb-carousel').width()}, sliderConfig.animatonDuration, 'swing', function(){
						$('#carousel-navi a').show()
						if($('#thumb-carousel-wrapper').offset().left+$('#thumb-carousel-wrapper').width()<$('#thumb-carousel').offset().left+$('#thumb-carousel').width())
							$('#carousel-navi a.next').hide()
						else if($('#thumb-carousel-wrapper').offset().left>=$('#thumb-carousel').offset().left)
							$('#carousel-navi a.prev').hide()
				})
			})
		}
		
		sliderTimer = []
		startSlider = function(theS, restarted){
			if(restarted==null) restarted==false
			S = $('#'+theS)
			if(sliderOptions[theS] == undefined) sliderOptions[theS] = {}
			for(var k in sliderOptionsDeafults){
				if(sliderOptions[theS][k] == undefined) sliderOptions[theS][k] = sliderOptionsDeafults[k]
			}
			sliderOptions[theS].animated = 0
			if(hashURL()!=null && sliderImages[hashURL().substring(8)] !=undefined ){
				newS = hashURL().substring(8)
				sliderImages[theS] = sliderImages[newS]
				$('#'+sliderOptions[theS].galleryListID+' #'+newS).addClass('current')
				if($('#page-title .default').length==0) $('#page-title').append('<span class="default hidden">'+$('#page-title h1').text()+'</span>')
				$('#page-title h1').text($('#page-title .default').text()+' - '+trimMe($('#'+sliderOptions[theS].galleryListID+' #'+newS).text(), 1))
			}
			else if(sliderOptions[theS].galleryListID != null && sliderImages[theS] == undefined){
				sliderImages[theS] = sliderImages[$('#'+sliderOptions[theS].galleryListID+' .gallery:nth(0)').attr('id')]
				$('#'+sliderOptions[theS].galleryListID+' .gallery:nth(0)').addClass('current')
				if($('#page-title .default').length==0) $('#page-title').append('<span class="default hidden">'+$('#page-title h1').text()+'</span>')
				$('#page-title h1').text($('#page-title .default').text()+' - '+trimMe($('#'+sliderOptions[theS].galleryListID+' .gallery:nth(0)').text(), 1))
			}
			if(sliderOptions[theS].listID != null){
				makeImagesList(theS)
				$('#'+sliderOptions[theS].listID+' li#list0').addClass('current')
				$('#'+sliderOptions[theS].listID+' li').click(function(e){
					e.preventDefault()
					S = $(this).parents('.sliderlist').siblings('.sliderwrapper')
					theS = S.attr('id')
					ind = $(this).attr('id').substring(4)
					clearInterval(sliderOptions[theS].timer)
					sliderOptions[theS].timer = setInterval("changeSlide('"+theS+"', 'next', 'timer')", sliderConfig.speed)
					changeSlide(theS, ind)
				})
				if(sliderOptions[theS].mode=='peopleRegistry'){
					$('body').append($('<img id="peopleRegistryThumb" class="hidden" src="'+sliderImages[theS][0].thumb+'" style="position: absolute; z-index: 100; display: none;" />'))
					$('#'+sliderOptions[theS].listID+' li').hover(
						function(){
							theS = $(this).parents('.sliderlist').siblings('.sliderwrapper').attr('id')
							ind = $(this).attr('id').substring(4)
							if(sliderImages[theS][ind].thumb){
								$('#peopleRegistryThumb').attr('src', sliderImages[theS][ind].thumb).show()
							}
						},
						function(){
							$('#peopleRegistryThumb').hide()
						}
					)
					$('#'+sliderOptions[theS].listID+' li').mousemove(function(e){
						if($('#peopleRegistryThumb').is(':visible')) $('#peopleRegistryThumb').css({'left': e.pageX+20,'top': e.pageY+20})
					})
				}
			}
			ind = $('.sliderwrapper').index(S)
			last = sliderImages[theS].length-1
			if(sliderOptions[theS].mode=='peopleRegistry'){
				S.append($('<div id="slider-navi"><a href="#" class="prev"></a><a href="#" class="next"></a></div>') )
				S.find('#slider-navi .prev').click(function(e){e.preventDefault(); changeSlide($(this).parents('.sliderwrapper').attr('id'), 'prev')})
				S.find('#slider-navi .next').click(function(e){e.preventDefault(); changeSlide($(this).parents('.sliderwrapper').attr('id'), 'next')})
			}
			else if(sliderOptions[theS].mode=='standard'){
				S.append($('<div id="slider-navi"><a href="#" class="prev"></a><a href="#" class="next"></a></div>') )
				S.find('#slider-navi .prev').click(function(e){e.preventDefault(); changeSlide($(this).parents('.sliderwrapper').attr('id'), 'prev')})
				S.find('#slider-navi .next').click(function(e){e.preventDefault(); changeSlide($(this).parents('.sliderwrapper').attr('id'), 'next')})
				S.append($('<div id="slider-pager"></div>') )
				for(var i=0; i<sliderImages[theS].length; i++){
					S.find('#slider-pager').append($('<a href="#"></a>'))
				}
				S.find('#slider-pager a:first-child').addClass('current')
				S.find('#slider-pager a').click(function(e){e.preventDefault(); changeSlide($(this).parents('.sliderwrapper').attr('id'), $('#slider-pager a').index(this))})
			}
			else if(sliderOptions[theS].mode=='thumbnails'){
				if(!restarted){
					$('#'+sliderOptions[theS].galleryListID+' .gallery a').click(function(e){
						e.preventDefault()
						theS = $(this).parents('.gallerylistwrapper').siblings('.sliderwrapper').attr('id')
						$(this).parents('.gallerylistwrapper').find('.current').removeClass('current')
						$(this).parent().addClass('current')
						hashURL('gallery-'+$(this).parent().attr('id'))
						restartSlider(theS)
					})
				}
				S.append($('<a href="#" id="fullscreen"></a>'))
				S.after($('<div id="slider-navi"><a href="#" class="prev"></a><a href="#" class="next"></a></div>') )
				$('#slider-navi .prev').click(function(e){e.preventDefault(); changeSlide($(this).parent().siblings('.sliderwrapper').attr('id'), 'prev')})
				$('#slider-navi .next').click(function(e){e.preventDefault(); changeSlide($(this).parent().siblings('.sliderwrapper').attr('id'), 'next')})
				S.after($('<div id="thumb-carousel"></div>') )
				for(var i=0; i<sliderImages[theS].length; i++){
					$('#thumb-carousel').append($('<a href="#"><img src="'+sliderImages[theS][i].thumb+'" /></a>'))
				}
				$('#thumb-carousel a:first-child').addClass('current')
				$('#thumb-carousel a').click(function(e){
					e.preventDefault(); 
					theS = $(this).parents('#thumb-carousel').siblings('.sliderwrapper').attr('id')
					clearInterval(sliderOptions[theS].timer)
					sliderOptions[theS].timer = setInterval("changeSlide('"+theS+"', 'next', 'timer')", sliderConfig.speed)
					changeSlide(theS, $('#thumb-carousel a').index(this))
				})
				$('#thumb-carousel a').hover(
					function(){
						theS = $(this).parents('#thumb-carousel').siblings('.sliderwrapper').attr('id')
						clearInterval(sliderOptions[theS].timer)
					}, 
					function(){
						theS = $(this).parents('#thumb-carousel').siblings('.sliderwrapper').attr('id')
						clearInterval(sliderOptions[theS].timer)
						sliderOptions[theS].timer = setInterval("changeSlide('"+theS+"', 'next', 'timer')", sliderConfig.speed)
					}
				)
				if(sliderImages[theS].length>12) startCarousel()
			}
			if(S.children('.current').length>0) S.children('.current').attr('id', 'img0')
			else addSlide(theS, 0, 'current')
			addSlide(theS, 1)
			addSlide(theS, last)
			if(sliderOptions[theS].animation!='vertical'){
				S.css({minWidth: 940})
				S.children('.info').insertAfter(S).addClass('container').addClass('slider-info')
				S.find('#img0 img').load(function(){
					newNaviWidth = (S.width()-S.find('.current img').width())/2+150
					//tr(S.find('#slider-navi a').length+' '+newNaviWidth)
					S.find('#slider-navi a.next').css({
						width: newNaviWidth,
						backgroundPosition: Math.min((150-34/2), (newNaviWidth-34))+'px 50%'
					})
					S.find('#slider-navi a.prev').css({
						width: newNaviWidth,
						backgroundPosition: Math.max((newNaviWidth-150-34/2), 0)+'px 50%'
					})
					$(window).resize(function(){
						S = $($('.sliderwrapper')[0])
						if(sliderOptions[S.attr('id')].animated==0)
							nextSlide = parseInt(S.children('.current').attr('id').substring(3))
						else 
							nextSlide = parseInt(S.children('.main-image:animated').not('.current').attr('id').substring(3))
						tr(nextSlide)
						newNaviWidth = Math.max(0, S.width()-S.find('#img'+nextSlide+' img').width())/2+150
						//tr(S.find('#slider-navi a').length+' '+newNaviWidth)
						S.find('#slider-navi a.next').stop(true, false).animate({
							width: newNaviWidth,
							backgroundPosition: Math.min((150-34/2), (newNaviWidth-34))+'px 50%'
						} , 100, 'swing')
						S.find('#slider-navi a.prev').stop(true, false).animate({
							width: newNaviWidth,
							backgroundPosition: Math.max((newNaviWidth-150-34/2), 0)+'px 50%'
						} , 100, 'swing')
						})
				})
			}
			else{
				$('#slider-navi').addClass('hidden').appendTo('#'+theS+' .photo-descr > div')
				la = S.find('#label-'+last)
				lb = S.find('#label-'+0)
				lc = S.find('#label-'+1)
				if(!parseInt(lb.attr('rel'))>0) lb.attr('rel', lb.width())
				la.css({left: 80})
				lb.css({fontSize: 17 }).css({left: 940/2-lb.width()/2})
				lc.css({left: 940-80-lc.width() })
			}
			
			if(ind==0) sliderOptions[theS].timer = setInterval("changeSlide('"+theS+"', 'next', 'timer')", sliderConfig.speed)
			else sliderOptions[theS].timerInitial = setTimeout("changeSlide('"+theS+"', 'next', 'timer'); sliderOptions['"+theS+"'].timer = setInterval(\"changeSlide('"+theS+"', 'next', 'timer')\", sliderConfig.speed)", sliderConfig.delayNextSlider*ind)
		
			S.hover(
				function(){
					clearTimeout(sliderOptions[$(this).attr('id')].timerInitial)
					clearInterval(sliderOptions[$(this).attr('id')].timer)
				}, 
				function(){
					clearInterval(sliderOptions[$(this).attr('id')].timer)
					sliderOptions[$(this).attr('id')].timer = setInterval("changeSlide('"+$(this).attr('id')+"', 'next', 'timer')", sliderConfig.speed)
				})
			if(sliderOptions[theS].animation!='vertical'){
				$('#slider-navi').hover(function(){
					$(this).removeClass('hidden')
				}, 
				function(){
					$('#slider-navi').addClass('hidden')
				})
				$(document).keyup(function(e){
					if(e.keyCode==37 || e.keyCode==39){
						e.preventDefault;
						$('#slider-navi a.'+(e.keyCode==37 ? 'prev' : 'next')).click()
					}
				})
			}
		}
		
		$('.sliderwrapper').each(function(){
			startSlider($(this).attr('id'))
		})
		
	}
	
	$('.carousel').each(function(){
		$(this).append('<div class="carousel-navi"><a href="#" class="prev"></a><a href="#" class="next"></a></div>')
		$(this).find('.carousel-navi a').click(function(e){
			CP = $(this).parents('.carousel')
			C = CP.find('.carouselwrapper')
			e.preventDefault()
			if($(this).hasClass('next')) dir='-'
			else dir='+';
			C.children('ul')
				.animate({left: dir+'='+(C.width()+12)}, 750, 'swing', function(){
					CP = $(this).parents('.carousel')
					C = CP.find('.carouselwrapper')
					CN = CP.find('.carousel-navi')
					if(C.find('ul li:first-child').offset().left>C.offset().left) CN.find('a.prev').fadeOut(250)
					else CN.find('a.prev').fadeIn(250)
					if(C.find('ul li:last-child').offset().left<C.offset().left+C.width()) CN.find('a.next').fadeOut(250)
					else CN.find('a.next').fadeIn(250)
				})
		})
	})
	
	$('ul.bars').each(function(){
		if($(this).hasClass('start-odd')) $(this).find('li:even').addClass('odd')
		else $(this).find('li:odd').addClass('odd')
	})
	$('.people-registry .group').each(function(){
		if(($(this).parent().find('.group').index(this)+1) % 5 == 0) $(this).after('<div class="float-clear"></div>')
		else if($(this).is(':last-child')) $(this).after('<div class="float-clear"></div>')
	})
	
	if(('#project').length){
		$('#project .more-info .stats').click(function(e){e.preventDefault(); $('#project-stats').addClass('show')})
		$('#project-stats').click(function(e){e.preventDefault(); $('#project-stats').removeClass('show')})
		addMarker = function(a, b, c){
			if(b==null) b=0
			if(c==null) c=''
			if(typeof(a.link)!='undefined'){
				$('#project-map').append(
					'<a href="'+a.link+'" class="marker '+c+'" style="left: '+(a.x-b)+'px; top: '+(a.y-b)+'px">'
						+'<div class="marker-label">'
							+'<strong>'+iefix(a.title)+'</strong>'
							+'<span>'+iefix(a.location)+'</span>'
						+'</div>'
					+'</a>'
				)
			}
			else{
				$('#project-map').append(
					'<div class="marker '+c+'" style="left: '+(a.x-b)+'px; top: '+(a.y-b)+'px">'
						+'<div class="marker-label">'
							+'<strong>'+iefix(a.title)+'</strong>'
							+'<span>'+iefix(a.location)+'</span>'
						+'</div>'
					+'</div>'
				)
			}
		}
		if(typeof(mainMapMarker)!='undefined') addMarker(mainMapMarker, 22, 'marker-main')
		if(typeof(mapMarkers)!='undefined'){
			for(var i=0; i<mapMarkers.length; i++){
				if(mainMapMarker.length==0 || mapMarkers[i].x!=mainMapMarker.x || mapMarkers[i].y!=mainMapMarker.y){
					addMarker(mapMarkers[i], 9)
				}
			}
		}
		$('.marker').not('.marker-main').hover(function(){
			$('#project-map').addClass('label-shown')
			label = $(this).find('.marker-label')
			if((label.offset().left+label.width()) > ($('#project-map').offset().left+$('#project-map').width())) 
				label.css('left', label.css('right')).css('right', 'auto')
			if((label.offset().top+label.height()+2*parseInt(label.css('paddingTop'))) > ($('#project-map').offset().top+$('#project-map').height())) 
				label.css('bottom', label.css('top')).css('top', 'auto')
		}, 
		function(){
			$('#project-map').removeClass('label-shown')
		})
		$('#project-map a.close').click(function(e){
			e.preventDefault(); 
			$('#project-map').fadeOut(250, function(){$('#project-slider').fadeIn(250)})
		})
		$('#project .more-info .map').click(function(e){
			e.preventDefault(); 
			$('#project-slider').fadeOut(250, function(){$('#project-map').fadeIn(250)})
		})
	}
	
	if($('#news').length){
		$('#short-story a:last-child').css('marginRight', 0)
		twitterDate = function(d){
			d = $.browser.msie ? d.replace(/(\+\S+) (.*)/, '$2 $1') : d
			d = Date.parse(Date()) - Date.parse(d)
			min = 1000*60
			hr = min*60
			day = hr*24
			     if(d/day>1) return Math.floor(d/day) + (d/day>2 ? ' days'   : ' day')
			else if(d/hr >1) return Math.floor(d/hr ) + (d/hr >2 ? ' hours'  : ' hour')
			else if(d/min>1) return Math.floor(d/min) + (d/min>2 ? ' minutes': ' minute')
			else return ' less then 1 minute'
		}
		twitterLinks = function(t){
			return t.replace(/(http\:\/\/\S+)/g, "<a href='$1'>$1</a>")
		}
		var news = {}
		addNews = function(len){
			ap = $('<div>')
			for(var i=0; i<len; i++){
				n = news.list.shift()
				if(typeof(n)=='undefined') break
				if(n.type=='a'){
					S = $(news.articles[n.num])
					ap.append('<li class="article basic">'
							+'<div class="thumb"><img src="'+S.children('thumb').text()+'" alt="#"/>'+(0&&$.browser.msie ? '' : '<div class="after"></div>')+'</div>'
							+'<div class="title">'+S.children('title').text()+'</div>'
							+'<div class="date">'+S.children('date').text()+'</div>'
							+'<div class="intro">'+S.children('intro').text()+'</div>'
							+'<div class="image"><img src="'+S.children('image').text()+'" alt="#"/>'+(0&&$.browser.msie ? '' : '<div class="after"></div>')+'</div>'
							+'<div class="image-descr">'+S.children('imagedescr').text()+'</div>'
							+'<div class="fulltext">'+S.children('fulltext').text()+'</div>'
							+'<div class="tags">'+S.children('tags').text()+'</div>'
						+'</li>')
				}
				else{
					S = news.tweets[n.num]
					ap.append('<li class="tweet" style="filter:none;">'
							+'<div class="text">'+twitterLinks(S.text)+'</div>'
							+'<div class="date">'+twitterDate(S.created_at)+' ago via Twitter</div>'
							+'<a href="http://twitter.com/'+S.user.screen_name+'" class="link"></a>'
						+'</li>')
				}
			}
			ap.find('img')
				.load(function(){$('#news').isotope('reLayout') })
			ap.find('li.basic').click(function(e){
				e.preventDefault()
				if($(this).hasClass('full')){
					$('#news li.full').removeClass('full').addClass('basic')
					$('#news').isotope('reLayout')
				}
				else{
					$('#news li.full').not(this).removeClass('full').addClass('basic')
					$(this).addClass('full').removeClass('basic')
					$('#news').isotope('reLayout')
				}
			})
			$('#news').isotope( 'insert', ap.children())
		}
		addInitialNews = function(){
			if(typeof(news.tweets)!='undefined' && typeof(news.articles)!='undefined'){
				art = news.articles
				tw = news.tweets
				artind = 0
				twind = 0
				news.list = []
				while(art.length+tw.length>artind+twind){
					if(twind<tw.length && ($.browser.msie ? Date.parse(tw[twind].created_at.replace(/(\+\S+) (.*)/, '$2 $1')) : Date.parse(tw[twind].created_at)) > Date.parse($(art[artind]).children('date').text().replace(/-/g, '/')))
						news.list.push({type: 't', num: twind++})
					else
						news.list.push({type: 'a', num: artind++})
				}
				//tr(news.list)
				$('#news').isotope({
					itemSelector : 'li',
					layoutMode : 'masonry'
				})
				addNews(6)
			}
		}
		/*toJson = function(xmlset){
			r = []
			for(var i=0; i<$(xmlset).length; i++){
				$(xmlset[i]).children().each(function(){
					r[i] = {this.nodeName: $(this).text()}
				})
			}
			return r
		}*/
		parseNews = function(xml){
			news.articles = $(xml).find('article')
			addInitialNews()
			//addNews(news.articles, 6)
		}
		$('#latest-news a.more-news').click(function(e){
			e.preventDefault()
			addNews(6)
		})
		$.ajax({
			type: "GET",
			url: newsOptions.url,
			dataType: "xml",
			success: parseNews
		})
		addInitialNews()
		$.jTwitter(newsOptions.twitterLogin, (newsOptions.numberOfTweets>0 ? newsOptions.numberOfTweets : 20), function(posts){
			news.tweets = posts
			addInitialNews()
		})
		$('a.back-to-top').click(function(e){
			e.preventDefault()
			$('html').add('body').animate({scrollTop: 0}, 500)
		})
	}
	
	$('.section-title').each(function(){
		//$(this).css({background: '#f8f8f8', border: '6px solid #ededed;'})
		t = $(this).html()
		$(this)
			.css({background: 'none', position: 'relative'})
			.empty()
			.append(
				$('<div class="section-title-bg"></div>')
					.css({
						position: 'absolute', 
						top: parseInt($(this).css('paddingTop'))+20, 
						border: '6px solid #ededed', 
						borderBottom: 'none',
						width: (940-12),
						height: 17
					})
					.append(
						$('<div class="section-title-arrow"></div>')
							.css({
								position: 'absolute', 
								left: '50%', 
								marginLeft: -10,
								bottom: -8,
								width: 20,
								height: 9,
								background: '#f8f8f8 url("'+unescape(window.location.href.substring(0,(window.location.href.lastIndexOf("/")) + 1))+'img/icon-page-indicator.png") no-repeat bottom'
							})
					)
			)
			.append(
				$('<div class="section-title-bg"></div>')
					.html(t)
					.css({
						position: 'relative', 
						border: '6px solid #ededed', 
						display: 'inline-block',
						padding: '0 15px',
						minWidth: '185px',
						lineHeight: '33px',
						background: '#f8f8f8'
					})
			)
	})

	function validate(event, formData, jqForm, options) { 
		formerror = false;
	    $('input[type=text]').removeClass('error');
	    $('input[type=text]').each(function(){
		    if (!$(this).val().length) {
			    //$(this).addClass('error');
			    //formerror = true;
		    }
	    })
	    if (!formerror) {
	        $('#load').fadeOut(300);
			$('form.book').fadeOut(300,function(){
				$('div.formdiv').html('<p>Thank you! We will be in touch shortly</p>');	
			})	
		} else {
		    $('#load').fadeOut(300);
		    event.stopPropagation();
	    }
	}

	if($('form.book').length){
		$('form.book').live('submit',function(e){
		    e.preventDefault();
		    $('#load').fadeIn(300);
		    $('form.book').ajaxSubmit({
		    	beforeSubmit: validate
		    });
		});
	}	
})


