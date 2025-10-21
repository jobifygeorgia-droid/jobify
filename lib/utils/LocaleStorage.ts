/**
 * Utility for persisting UI and navigation state in the browser via localStorage with JSON serialization.
 *
 * Responsibilities:
 * - Generic JSON-based get/set/remove helpers.
 * - Burger menu visibility persistence.
 * - Route tracking (current and previous route).
 * - Password reset flow data (user email and countdown timer).
 *
 * Storage keys (for reference):
 * - "exp" (EXP_KEY)
 * - "update_password_email" (PASSWORD_UPDATE_EMAIL_KEY)
 * - "pin_timer_end_time" (PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY)
 * - "current-route" (CURRENT_ROUTE_KEY)
 * - "previous-route" (PREVIOUS_ROUTE_KEY)
 * - "burger-menu-state" (BURGER_MENU_KEY)
 *
 * Serialization contract:
 * - Values are written using JSON.stringify and read with JSON.parse.
 * - Missing entries resolve to an empty string ("").
 * - Burger menu state is stored as the literal strings "true" | "false" and exposed as a boolean helper.
 * - Ensure only values written by this utility are read; malformed JSON in localStorage will cause JSON.parse to throw.
 *
 * Environment:
 * - Browser-only; depends on window.localStorage.
 */
class LocaleStorage {
  PASSWORD_UPDATE_EMAIL_KEY: string;
  PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY: string;
  EXP_KEY: string;
  CURRENT_ROUTE_KEY: string;
  PREVIOUS_ROUTE_KEY: string;
  BURGER_MENU_KEY: string;

  constructor() {
    this.EXP_KEY = "exp";
    this.PASSWORD_UPDATE_EMAIL_KEY = "update_password_email";
    this.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY = "pin_timer_end_time";
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
}

const LS = new LocaleStorage();
export default LS;
