import { db } from "@/db";
import { notFound } from "next/navigation";
import { SnippetEditForm } from "@/components";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

const Edit = async (props: SnippetEditPageProps) => {
  const { id } = await props.params;

  const snippetId = parseInt(id);
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div>Test {snippet.title}</div>
      <SnippetEditForm snippet={snippet} />
    </>
  );
};

export default Edit;
