import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  await new Promise((r) => setTimeout(r, 2000));
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div>{snippet.title}</div>
    </>
  );
};

export default SnippetShowPage;
