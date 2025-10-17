import logger from "./logger";
import { ReadDataResponseT } from "@/interface/db/common.types";

export default async function actionWrapper<T>(
  action: () => Promise<T>
): Promise<ReadDataResponseT<T>> {
  try {
    const response = await action();

    return { data: response, error: null };
  } catch (error: any) {
    const { status } = logger(error);

    let candidateMessage = "";

    if (status === 401)
      candidateMessage =
        "თქვენ არ ხართ ავტორიზებული. გთხოვთ, გაიარეთ ავტორიზაცია.";
    else if (status === 403)
      candidateMessage =
        "თქვენ არ გაქვთ შესაბამისი უფლებები ამ ოპერაციის შესასრულებლად.";
    else if (status === 404) candidateMessage = "მონაცემი ვერ მოიძებნა.";
    else candidateMessage = "მოხდა შეცდომა. გთხოვთ, სცადეთ თავიდან.";

    return {
      data: null,
      error: { message: candidateMessage, status: status ?? 500 },
    };
  }
}
