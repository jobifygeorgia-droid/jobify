const regex = {
  is_valid_password: /^([a-zA-Z0-9-_.]{8,})*$/,
  is_latin_letters: /^[A-Za-z\s]*$/,
  is_georgian_letters: /^[ა-ჰ\s]*$/,
  is_base_64_str:
    /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i,
  is_numeric: /^[0-9]*$/,
  is_valid_date:
    /^[A-Za-z]{3} [A-Za-z]{3} \d{1,2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([\w\s]+\)$/,
  is_valid_time: /^(?:[01]\d|2[0-3]):[0-5]\d$/,
  is_valid_georgia_phone_number: /^\+995(32|5\d{2})\d{6}$/,
  is_valid_url: /^(ftp|http|https):\/\/[^ "]+$/,
};

export const isValidPassword = {
  validator: (password: string) => regex.is_valid_password.test(password),
  message:
    "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს. გამოიყენეთ ქართული ასოები და სიმბოლოები ( . - _ )",
};

export const confirmPasswordValidation = {
  validator: (password: string, candidatePassword: string) =>
    password === candidatePassword,
  message: "გაიმეორე პაროლი_ის ველი უნდა ემთხვეოდეს პაროლი_ს ველს",
};

export const isOnlyGeorgianLetters = {
  validator: (value: string) => regex.is_georgian_letters.test(value),
  message: "გთხოვთ ინფორმაცია შეიყვანოთ მხოლოდ ქართული ასოებით",
};

export const isOnlyLatinLetters = {
  validator: (value: string) => regex.is_latin_letters.test(value),
  message: "გთხოვთ ინფორმაცია შეიყვანოთ მხოლოდ ლათინური ასოებით",
};

export const isValidDate = {
  validator: (value: string) => regex.is_valid_date.test(value),
  message: "გთხოვთ მიუთითოთ თარიღი სწორად",
};

export const isValidGeorgianPhoneNumber = {
  validator: (value: string) => regex.is_valid_georgia_phone_number.test(value),
  message: "მობ. ნომერი არ ემთხვევა ქართული მობ. ნომრის ფორმატს",
};

export const isBase64 = {
  validator: (value: string) => {
    const base64str = value.replace(/^data:image\/[a-z]+;base64,/, "");
    return base64str === Buffer.from(base64str, "base64").toString("base64");
  },
  message: "გთხოვთ მიუთითოთ ფოტო",
};

export const isNumeric = {
  validator: (value: string) => regex.is_numeric.test(value),
  message: "გთხოვთ შეიყვანოთ მხოლოდ ციფრები",
};

export const gte = {
  validator: (min: number, value: string | number) => +value >= min,
  message: (params: { message?: string; min?: number }) =>
    params.message || `მნიშვნელობა უნდა იყოს მეტი ან ტოლი ${params.min}_ზე`,
};

export const lte = {
  validator: (max: number, value: string | number) => +value <= max,
  message: (params: { message?: string; max?: number }) =>
    params.message || `მნიშვნელობა უნდა იყოს ნაკლები ან ტოლი ${params.max}_ზე`,
};

export const textEditorValueIsNotEmpty = {
  validator: (value: string) => value.replace(/<[^>]+>/g, "").trim().length > 0,
  message: (message?: string) => message || "გთხოვთ შეავსოთ ველი",
};

///// > Optionals

export const isValidOptionalDate = {
  validator: (value: string) =>
    Boolean(value) ? regex.is_valid_date.test(value) : true,
  message: "გთხოვთ მიუთითოთ თარიღი სწორად",
};
export const isValidOptionalTime = {
  validator: (value: string) =>
    Boolean(value) ? regex.is_valid_time.test(value) : true,
  message: "გთხოვთ მიუთითოთ დრო სწორად",
};
export const isValidUrlOptional = {
  validator: (url: string) =>
    Boolean(url) ? regex.is_valid_url.test(url) : true,
  message: (message?: string) => message || "გთხოვთ მიუთითოთ ვალიდური ბმული",
};
