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

  public failed(error: any) {
    const responseMessage =
      typeof error === "string"
        ? error
        : error?.response?.data?.detail ?? error?.message;

    const messages = this.parseAPIErrorMessages(error);

    return {
      error: true,
      loading: false,
      messages: messages,
      message: responseMessage,
    };
  }

  parseAPIErrorMessages(error: any): APIErrorMessages {
    const message = error?.message || "";

    try {
      const messages: APIErrorMessages = JSON.parse(message);
      return messages;
    } catch {
      return { message };
    }
  }
}

const getStatus = new Status();

export default getStatus;

export type StatusT = {
  loading: boolean;
  message: string;
  error: boolean;
  messages: APIErrorMessages | null;
};
