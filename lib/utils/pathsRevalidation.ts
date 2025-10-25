"use server";

import { revalidatePath } from "next/cache";

export default async function pathsRevalidation(paths: string[]) {
  paths.forEach((path) => revalidatePath(path));
}
