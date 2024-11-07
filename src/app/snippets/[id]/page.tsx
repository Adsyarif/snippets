import { notFound } from "next/navigation";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import * as action from "@/action";

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

  const deleteSnippetAction = action.deleteSnippet.bind(null, parseInt(id));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`}>
            <Button className="bg-blue-400 text-white rounded-2xl hover:bg-gray-300 hover:text-blue-400 ">
              <Pencil /> Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button className="bg-red-500 text-white rounded-2xl hover:bg-gray-300 hover:text-red-500">
              <Trash2 /> Delete
            </Button>
          </form>
        </div>
      </div>
      <p className="text-md">{snippet.description}</p>
      <pre className="mt-2 border w-full border-gray-200 bg-gray-200 rounded-[10px] h-[600px]">
        <code className="p-4">{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
