class LocaleStorage {
  PASSWORD_UPDATE_EMAIL_KEY: string;
  PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY: string;
  EXP_KEY: string;
  EMAIL_VERIFICATION_STATUS_KEY: string;

  constructor() {
    this.EXP_KEY = "exp";
    this.PASSWORD_UPDATE_EMAIL_KEY = "update_password_email";
    this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY = "pin_timer_end_time";
    this.EMAIL_VERIFICATION_STATUS_KEY = "is_verified";
  }

  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string | Array<string> {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  // Password Update
  setPasswordUpdateEmail(email: string) {
    this.setValue(this.PASSWORD_UPDATE_EMAIL_KEY, email);
  }

  getPasswordUpdateEmail() {
    return this.getValue(this.PASSWORD_UPDATE_EMAIL_KEY) as string;
  }

  removePasswordUpdateEmail() {
    this.removeValue(this.PASSWORD_UPDATE_EMAIL_KEY);
  }

  setPasswordUpdateTimer(time: number | string) {
    this.setValue(this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY, time);
  }

  getPasswordUpdateTimer() {
    return this.getValue(this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY) as string;
  }

  removePasswordUpdateTimer() {
    this.removeValue(this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY);
  }

  setEmailVerificationStatus(isVerified: boolean) {
    this.setValue(this.EMAIL_VERIFICATION_STATUS_KEY, isVerified ? "1" : "0");
  }

  getEmailVerificationStatus() {
    return this.getValue(this.EMAIL_VERIFICATION_STATUS_KEY);
  }

  removeEmailVerificationStatus() {
    this.removeValue(this.EMAIL_VERIFICATION_STATUS_KEY);
  }
}

const LS = new LocaleStorage();
export default LS;
