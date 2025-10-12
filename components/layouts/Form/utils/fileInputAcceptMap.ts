import { FileInputAcceptMapT } from "@/interface/ui/forms-ui";

export const fileInputAcceptMap: FileInputAcceptMapT = {
  pdf: { "application/pdf": [".pdf"] },
  image: {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "image/gif": [".gif"],
  },
  video: {
    "video/mp4": [".mp4"],
    "video/quicktime": [".mov"],
    "video/webm": [".webm"],
  },
};
