<script>
	export let aboutClickHandler
	export let travelClickHandler
</script>

<nav>
	<ul>
		<li on:click={aboutClickHandler}>/about</li>
		<li on:click={travelClickHandler}>/travel</li>
		<li>
			<a href="https://github.com/bmehder" target="_blank">/github</a>
		</li>
		<li>
			<a href="https://www.npmjs.com/~bmehder" target="_blank">/npm</a>
		</li>
	</ul>
</nav>
