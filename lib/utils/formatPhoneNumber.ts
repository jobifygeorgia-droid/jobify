export default function formatPhoneNumber(phone: string) {
  let num = phone.replace(/\s+/g, ""); // Remove spaces

  if (!num.startsWith("+995")) num = "+995" + num.replace(/^0/, "");

  // Extract parts
  const part1 = num.slice(0, 4);
  const part2 = num.slice(4, 7);
  const part3 = num.slice(7, 10);
  const part4 = num.slice(10, 13);

  const phoneNumber = [part1, part2, part3, part4].filter(Boolean).join(" ");

  return phoneNumber;
}
