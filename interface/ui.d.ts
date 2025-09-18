type AlertT = {
  id?: string;
  text: string;
  title?: string;
  type?: "danger" | "warning" | "success";
  delay?: number;
};
