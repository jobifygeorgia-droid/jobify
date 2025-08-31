import { APIErrorMessages } from "@/interface/global.types";

class Status {
  loading: boolean;
  message: string;
  error: boolean;
  messages: APIErrorMessages | null;

  constructor() {
    this.loading = false;
    this.error = false;
    this.message = "";
    this.messages = null;
  }

  public idle() {
    return {
      loading: false,
      message: "",
      error: false,
      messages: null,
    };
  }

  public pending() {
    return {
      loading: true,
      message: "",
      error: false,
      messages: null,
    };
  }

  public success(message = "") {
    return {
      message,
      error: false,
      loading: false,
      messages: null,
    };
  }

  public failed(error: unknown, message?: string) {
    const defaultMessage = "დაფიქსირდა შეცდომა ოპერაციის დროს";

    const candidateMessage = message
      ? message
      : typeof error === "string"
      ? error
      : error && typeof error === "object" && "message" in error
      ? (error as { message: string }).message
      : defaultMessage;

    const messages = this.parseAPIErrorMessages(error);

    return {
      error: true,
      loading: false,
      messages: messages,
      message: candidateMessage,
    };
  }

  parseAPIErrorMessages(error: any): APIErrorMessages {
    const messages: APIErrorMessages = JSON.parse(error?.message as string);
    return messages;
  }
}

export const getStatus = new Status();

export type StatusT = {
  loading: boolean;
  message: string;
  error: boolean;
  messages: APIErrorMessages | null;
};
