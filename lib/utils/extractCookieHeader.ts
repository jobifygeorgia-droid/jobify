export default async function extractCookieHeader(headers: any, key: string) {
  let headerValue: string[] | string = "";

  if (typeof headers.get === "function")
    headerValue = headers.get("set-cookie") || "";
  else if (headers["set-cookie"]) headerValue = headers["set-cookie"];

  const values = Array.isArray(headerValue) ? headerValue : [headerValue];

  let candidateValue: string | undefined = undefined;

  for (const value of values) {
    if (value.startsWith(`${key}=`))
      candidateValue = value.split(";")[0].split("=")[1];
  }

  return candidateValue;
}
