import { $, useSignal, type QRL } from "@builder.io/qwik";

/**
 * useThrottle: simple throttle hook
 * @param fn   QRL-wrapped function to throttle
 * @param wait Time window in milliseconds
 * @returns    A QRL function that invokes `fn` at most once per `wait` ms
 */
export function useThrottle<T extends unknown[]>(
	fn: QRL<(...args: T) => void>,
	wait: number,
): QRL<(...args: T) => void> {
	// Track timestamp of last invocation
	const lastTime = useSignal<number>(0);

	return $((...args: T) => {
		const now = Date.now();
		if (now - lastTime.value >= wait) {
			lastTime.value = now;
			fn(...args);
		}
	});
}
