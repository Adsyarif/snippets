import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";

const Home = async () => {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet: any) => {
    return (
      <div
        key={snippet.id}
        className="border rounded-xl p-4 w-auto h-40 flex flex-col  "
      >
        <h2 className="text-xl">{snippet.title}</h2>
        <p className="text-gray-400 text-sm min-h-[40px] mt-1">
          {snippet.description}
        </p>
        <div className="flex justify-end items-end mt-2">
          <Link href={`/snippets/${snippet.id}`} key={snippet.id}>
            <Button className="bg-blue-400 text-white rounded-2xl hover:bg-gray-300 hover:text-blue-400 ">
              View
            </Button>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-2xl mb-8">All Snippet</h1>
      <div className="grid grid-cols-3 gap-4">{renderSnippets}</div>
    </>
  );
};

export default Home;
