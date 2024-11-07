"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createSnippet } from "@/action";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";

const SnippetCreatePage = () => {
  const [formState, action] = useActionState(createSnippet, {
    title: "",
    message: "",
  });

  const { toast } = useToast();

  return (
    <Card className="w-full h-[680px] rounded-xl">
      <CardHeader>
        <CardTitle>Create Snippet</CardTitle>
        <CardDescription>Create snippet code.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 h-[400px]" action={action}>
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
              className="rounded-lg p-2 bg-blue-500 text-white hover:bg-gray-200 hover:text-blue-500"
              onClick={() => {
                if (formState.title === "Error") {
                  toast({
                    title: formState.title,
                    description: formState.message,
                  });
                } else {
                  toast({
                    title: "Success",
                    description: "Snippet has been created.",
                  });
                }
              }}
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
