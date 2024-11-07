"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as action from "@/action";
import { Button } from "../ui/button";

interface SnippetEditFormPros {
  snippet: Snippet;
}

interface Code {
  currentCode: string;
  newCode: string;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormPros) => {
  const initialValue = {
    currentCode: snippet.code,
    newCode: "",
  };

  const [code, setCode] = useState<Code>(initialValue);

  const EditSnippetAction = action.editSnippet.bind(
    null,
    snippet.id,
    code.newCode
  );

  const handleEditorChange = (value: string = "") => {
    setCode((prev) => ({
      ...prev,
      newCode: value,
    }));
  };

  return (
    <>
      <div>Client component has snippet with title {snippet.title}.</div>
      <div>
        <Editor
          height={"40vh"}
          theme={"vs-dark"}
          language={"javascript"}
          defaultValue={snippet.code}
          options={{ minimap: { enable: false } }}
          onChange={handleEditorChange}
        />
      </div>
      <form action={EditSnippetAction}>
        <Button
          type="submit"
          className="mt-2 rounded-xl bg-blue-500 text-white hover:text-blue-500 hover:bg-gray-200"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default SnippetEditForm;
