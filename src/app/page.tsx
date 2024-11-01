import { db } from "@/db";
import Link from "next/link";

const Home = async () => {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet: any) => {
    return (
      <Link href={`/snippets/${snippet.id}`} key={snippet.id}>
        <div key={snippet.id}>{snippet.title}</div>
      </Link>
    );
  });
  return (
    <>
      <div>{renderSnippets}</div>
    </>
  );
};

export default Home;
