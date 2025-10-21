import { useState, useEffect } from "react";
import { useTimer as useReactTimer } from "react-timer-hook";

import { LS } from "@/lib/utils";

type UseTimerParams = {
  uniqueKey: string;
  timeInMinutes: number;
};

/**
 * @see
 * - {@link LS}
 *
 * Creates a persistent countdown timer that survives reloads by storing its expiry timestamp
 * under a provided unique key. The timer restores any previously stored expiry; otherwise it
 * schedules a new one based on the requested duration. It starts counting down immediately
 * after initialization and marks the timer as expired when it reaches zero.
 *
 * @param params - Configuration options for the timer.
 * @param params.timeInMinutes - Countdown duration in minutes. Used only when no stored expiry exists for the given `uniqueKey`.
 * @param params.uniqueKey - A stable identifier used to persist and restore the expiry timestamp. Changing this key creates an independent timer.
 *
 * @returns An object with:
 * - `isExpired`: A boolean that becomes `true` when the countdown finishes.
 * - `timer`: An object with `hours`, `minutes`, and `seconds` remaining until expiry.
 *
 * @remarks
 * - On mount, the hook attempts to restore an expiry timestamp using `uniqueKey`. If none is found, it creates one at `Date.now() + timeInMinutes`.
 * - The timer is paused automatically on unmount.
 * - If a stored expiry is already in the past at initialization time, the timer expires immediately and `isExpired` becomes `true`.
 * - Updating `uniqueKey` will switch to (or create) a different persisted timer. Updating `timeInMinutes` affects only cases where no stored expiry exists for the current `uniqueKey`.
 */
export default function usePersistedTimer(params: UseTimerParams) {
  const { timeInMinutes, uniqueKey } = params;

  const DURATION = timeInMinutes * 60 * 1000;

  const [isExpired, setIsExpired] = useState(false);

  const { seconds, minutes, hours, restart, pause } = useReactTimer({
    autoStart: false,
    expiryTimestamp: new Date(),
    onExpire: () => setIsExpired(true),
  });

  useEffect(() => {
    const storedDate = LS.getValue(uniqueKey);

    if (storedDate) restart(new Date(Number(storedDate)), true);
    else {
      const newExpiry = new Date(Date.now() + DURATION);
      LS.setValue(uniqueKey, newExpiry.getTime().toString());
      restart(newExpiry, true);
    }

    return () => {
      pause();
    };
  }, [restart, DURATION, pause, uniqueKey]);

  return { isExpired, timer: { seconds, minutes, hours } };
}
