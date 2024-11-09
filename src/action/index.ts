"use server";

import { db } from "@/db";
import { error } from "console";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
};

export const createSnippet = async (
  fromState: { message: string; title: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const description = formData.get("description");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        title: "Error",
        message: "Title must be longer.",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        title: "Error",
        message: "Code must be longer.",
      };
    }

    if (typeof description !== "string" || description.length < 10) {
      return {
        title: "Error",
        message: "Description must be longer.",
      };
    }

    await db.snippet.create({
      data: {
        title,
        description,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        title: "Error",
        message: err.message,
      };
    } else {
      return {
        title: "Error",
        message: "Something went wrong.",
      };
    }
  }

  redirect("/");
};
