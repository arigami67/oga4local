<footer>
	<a href="index.php?page=disclamer">{$LNG.menu_disclamer}</a><br><a href="http://oga.4local.ru" title="oga.4local.ru" target="copy">oga.4local.ru</a> 2009-2013
</footer>
</div>
<div id="dialog" style="display:none;"></div>
<script>
var LoginConfig = {
	'isMultiUniverse': {$isMultiUniverse|json},
	'referralEnable' : {$referralEnable|json},
	'basePath' : {$basepath|json}
};
</script>
{if $analyticsEnable}
<script type="text/javascript" src="http://www.google-analytics.com/ga.js"></script>
<script type="text/javascript">
try{
var pageTracker = _gat._getTracker("{$analyticsUID}");
pageTracker._trackPageview();
} catch(err) {}</script>
{/if}
<script type="text/javascript" src="/yandex.js"></script>
<noscript><div><img src="//mc.yandex.ru/watch/20303896" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
</body>
</html>