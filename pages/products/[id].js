import { useRouter } from "next/router";

export default function Page({ article }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className="bg-black">
      <section className="mt-40 text-white">
        <h1>Product</h1>
        <p>{article.body}</p>
      </section>
    </main>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const article = await result.json();
  return { props: { article } };
};