export async function GET() {
	try {
		const response = await fetch(
			'https://zh.postal.wiki/api.php?action=query&meta=siteinfo&siprop=statistics&format=json'
		);
		const data = await response.json();

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
