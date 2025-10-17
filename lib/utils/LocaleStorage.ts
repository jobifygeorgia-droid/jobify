class LocaleStorage {
  PASSWORD_UPDATE_EMAIL_KEY: string;
  PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY: string;
  EXP_KEY: string;
  EMAIL_VERIFICATION_STATUS_KEY: string;
  CURRENT_ROUTE_KEY: string;
  PREVIOUS_ROUTE_KEY: string;
  BURGER_MENU_KEY: string;

  constructor() {
    this.EXP_KEY = "exp";
    this.PASSWORD_UPDATE_EMAIL_KEY = "update_password_email";
    this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY = "pin_timer_end_time";
    this.EMAIL_VERIFICATION_STATUS_KEY = "is_verified";
    this.CURRENT_ROUTE_KEY = "current-route";
    this.PREVIOUS_ROUTE_KEY = "previous-route";
    this.BURGER_MENU_KEY = "burger-menu-state";
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

  // Burger Menu State
  getBurgerMenuState() {
    return this.getValue(this.BURGER_MENU_KEY) === "true";
  }

  setBurgerMenuState(isOpen: boolean) {
    this.setValue(this.BURGER_MENU_KEY, isOpen ? "true" : "false");
  }

  removeBurgerMenuState() {
    this.removeValue(this.BURGER_MENU_KEY);
  }

  // Route Tracking
  setRouteTrack(currentRoute: string) {
    const lastStoredUrl = this.getValue(this.CURRENT_ROUTE_KEY);

    this.setValue(this.PREVIOUS_ROUTE_KEY, lastStoredUrl);
    this.setValue(this.CURRENT_ROUTE_KEY, currentRoute);
  }

  getRouteTrack() {
    const currentRoute = this.getValue(this.CURRENT_ROUTE_KEY) as string;
    const previousRoute = this.getValue(this.PREVIOUS_ROUTE_KEY) as string;

    return { currentRoute, previousRoute };
  }

  removeRouteTrack() {
    this.removeValue(this.CURRENT_ROUTE_KEY);
    this.removeValue(this.PREVIOUS_ROUTE_KEY);
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

  // Email Verification
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
