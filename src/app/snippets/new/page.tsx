import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        description,
        code,
      },
    });

    redirect("/");
  };

  return (
    <Card className="w-full h-[550px] rounded-xl">
      <CardHeader>
        <CardTitle>Create Snippet</CardTitle>
        <CardDescription>Create snippet code.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 h-[400px]" action={createSnippet}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label className="w-12" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="w-12" htmlFor="description">
                Description
              </label>
              <input
                id="description"
                name="description"
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="w-12" htmlFor="code">
                Code
              </label>
              <textarea
                id="code"
                rows={9}
                cols={100}
                name="code"
                className="border rounded p-2 w-full resize-none"
              />
            </div>
            <Button
              type="submit"
              className="rounded p-2 bg-blue-500 text-white hover:bg-gray-200 hover:text-blue-500"
            >
              Create
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SnippetCreatePage;
