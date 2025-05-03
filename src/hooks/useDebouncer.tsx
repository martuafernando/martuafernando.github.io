import { $, useSignal, type QRL } from "@builder.io/qwik";

/**
 * useDebouncer: debounce hook from Qwik
 * @param fn   QRL-wrapped function to debounce
 * @param delay Time window in milliseconds
 * @returns    A QRL function that invokes `fn` at most once per `wait` ms
 */
export const useDebouncer = <A extends (...args: unknown[]) => void>(
	fn: QRL<A>,
	delay: number,
): QRL<(...args: Parameters<A>) => void> => {
	const timeoutId = useSignal<number>();

	return $((...args: Parameters<A>): void => {
		window.clearTimeout(timeoutId.value);
		timeoutId.value = window.setTimeout((): void => {
			void fn(...args);
		}, delay);
	});
};
