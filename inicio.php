<script>
	var filename = window.location.pathname.split( '/' ).pop();
	filename = filename.replace('.php','');
	if(typeof jQuery == 'undefined'){
		window.location = "index.php?p=" + filename;
	}else{
		$(document).ready(function() {
			$('.flexslider').flexslider({
				animation: "slide"
			});
		});
	}
	

</script>
<section id="principal">
				<section id="galeria-inicio">
					<div class="flexslider">
					  <ul class="slides">
					    <li>
					      <img src="images/slide1.png" />
					    </li>
					    <li>
					      <img src="images/slide2.png" />
					    </li>
					    <li>
					      <img src="images/slide3.png" />
					    </li>
					    <li>
					      <img src="images/slide4.png" />
					    </li>
					  </ul>
					</div>
			</section>
			<aside >
				<!-- Twitter -->
				<a href="http://twitter.com/codicemmx" class="twitter-follow-button" data-count="vertical"></a>
				<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
				<!-- Facebook -->
				<div id="fb-root"></div>
				<script>(function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "http://connect.facebook.net/es_LA/all.js#xfbml=1";
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));</script>
				<div class="fb-like" data-href="http://www.facebook.com/codicem/like" data-width="450" data-layout="button_count" data-show-faces="false" data-send="false"></div>
				<!-- Google+ -->
				<!-- Place this tag where you want the +1 button to render. -->
				<div class="g-plusone" data-href="https://plus.google.com/b/111700598516396254577/"></div>

				<!-- Place this tag after the last +1 button tag. -->
				<script type="text/javascript">
				  window.___gcfg = {lang: 'es-419'};

				  (function() {
				    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				    po.src = 'https://apis.google.com/js/plusone.js';
				    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				  })();
				</script>
			</aside>