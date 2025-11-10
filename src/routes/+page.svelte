<script>
	import Footer from '$components/Footer.svelte';
	const Langs = [
		{ name: '简体中文', url: 'https://zh.postal.wiki' },
		{ name: 'English', url: 'https://en.postal.wiki' }
	];
</script>

<!-- Main Container -->
<div class="mx-auto max-w-6xl bg-white pt-16 lg:pt-32">
	<h1 class="text-center text-4xl font-bold">Postal Wiki</h1>
	<h2 class="pt-2 text-center text-2xl">A WIKI FOR POSTS</h2>
	<!-- HyperLink to Different Language -->
	<h3 class="mt-12 text-center text-xl">Available Languages</h3>
	<div class="mx-auto grid w-1/2 grid-cols-2 gap-4 py-6 text-center">
		{#each Langs as lang (lang.url)}
			<a href={lang.url} class="text-xl text-gray-800 hover:text-gray-600 hover:underline"
				>{lang.name}</a
			>
		{/each}
	</div>

	<!-- Statistic -->
	<!-- [TODO] Statistics Fetch & Display -->
	<!--
	<h3 class="mt-12 text-center text-xl">Statistics</h3>
	<dl
		class="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
	>
		{#each stats as stat (stat.name)}
			<div class="flex flex-col">
				<dt class="text-sm/6">{stat.name}</dt>
				<dd class="order-first text-xl tracking-tight">
					{stat.value}
				</dd>
			</div>
		{/each}
	</dl>
	-->
	<Footer />
</div>
