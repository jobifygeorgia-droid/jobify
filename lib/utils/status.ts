import { APIErrorMessages } from "@/interface/global.types";

/**
 * @see
 * - {@link APIErrorMessages}
 *
 * Utility for producing consistent status snapshots for async operations (e.g., API calls).
 *
 * Provides factory methods to represent the four common states of an async request:
 * - idle(): not started, no error, no message
 * - pending(): in progress
 * - success(message?): completed successfully with an optional message
 * - failed(error): completed with an error and optional structured API error messages
 *
 * Error handling:
 * - The primary message is derived from a string error, `error.response.data.detail` (Axios-style),
 *   or `error.message`.
 * - Structured API errors are extracted by `parseAPIErrorMessages`, which attempts to parse
 *   `error.message` as JSON into an `APIErrorMessages` shape; if parsing fails, it falls back
 *   to `{ message: string }`.
 *
 * Returned snapshot shape:
 * - loading: boolean — whether an operation is in progress
 * - error: boolean — whether an operation failed
 * - message: string — human-readable summary
 * - messages: APIErrorMessages | null — structured API error details when available
 *
 * @remarks
 * This class is useful for reducers, stores, or UI state machines to keep status handling
 * uniform across an application.
 */
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
