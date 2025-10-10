export default async function delay(triggerError?: boolean) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (triggerError) reject("triggered error");
      else resolve("success");
    }, 5000)
  );
}
