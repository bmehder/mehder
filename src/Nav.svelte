<script>
	export let aboutClickHandler
	export let travelClickHandler
</script>

<nav>
	<ul>
		<li on:click={aboutClickHandler}>/about</li>
		<li on:click={travelClickHandler}>/travel</li>
		<li>
			<a href="https://github.com/bmehder" target="_blank">/code</a>
		</li>
	</ul>
</nav>
