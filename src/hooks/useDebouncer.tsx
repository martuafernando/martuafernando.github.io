import { $, useSignal, type QRL } from "@builder.io/qwik";

/**
 * useDebouncer: debounce hook from Qwik
 * @param fn   QRL-wrapped function to debounce
 * @param delay Time window in milliseconds
 * @returns    A QRL function that invokes `fn` at most once per `wait` ms
 */
export const useDebouncer = <A extends readonly unknown[], R>(
	fn: QRL<(...args: A) => R>,
	delay: number,
): QRL<(...args: A) => void> => {
	const timeoutId = useSignal<number>();

	return $((...args: A): void => {
		window.clearTimeout(timeoutId.value);
		timeoutId.value = window.setTimeout((): void => {
			void fn(...args);
		}, delay);
	});
};
