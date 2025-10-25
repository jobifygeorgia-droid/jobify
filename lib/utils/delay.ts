/**
 * Waits for approximately 5 seconds before settling the returned promise.
 *
 * After the delay, the promise either resolves (with no value) or rejects based on the provided flag.
 *
 * @param triggerError - If true, the promise rejects after the delay; otherwise it resolves.
 * @returns A promise that settles after about 5 seconds. Resolves with no value when `triggerError` is falsy.
 * @throws Rejects with the string `"triggered error"` when `triggerError` is true.
 */
export default async function delay(triggerError?: boolean) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (triggerError) reject("triggered error");
      else resolve("success");
    }, 5000)
  );
}
