import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();

	return (
		<>
			<Link href='/products'>{"<"} Back</Link>
			<p>Product with name: <strong>{router.query.name}</strong></p>
		</>
	)
}