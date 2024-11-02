"use client";

import type { Snippet } from "@prisma/client";

interface SnippetEditFormPros {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormPros) => {
  return (
    <>
      <div>Client component has snippet with title {snippet.title}.</div>
    </>
  );
};

export default SnippetEditForm;
