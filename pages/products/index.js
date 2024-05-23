import Link from "next/link";

export default function Page() {
	return (
		<>

			<h1 className="text-gray-900 text-5xl font-semibold">Products</h1>

			<ul>
				<li>
					<Link
						href={{
							pathname: '/products/[name]',
							query: { name: 'one' }
						}}
					>
						Product 1
					</Link>
				</li>
				<li>
					<Link
						href={{
							pathname: '/products/[name]',
							query: { name: 'two' }
						}}
					>
						Product 2
					</Link>
				</li>
			</ul>

		</>
	)
}