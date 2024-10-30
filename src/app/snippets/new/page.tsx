"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SnippetCreatePage = () => {
  return (
    <Card className="w-full h-[500px] rounded-xl">
      <CardHeader>
        <CardTitle>Create Snippet</CardTitle>
        <CardDescription>Create snippet code.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 h-[400px]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label className="w-12" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex gap-4">
              <label className="w-12" htmlFor="code">
                Code
              </label>
              <textarea
                id="code"
                rows={10}
                cols={100}
                name="code"
                className="border rounded p-2 w-full resize-none"
              />
            </div>
            <button type="submit" className="rounded p-2 bg-gray-200">
              Create
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SnippetCreatePage;
