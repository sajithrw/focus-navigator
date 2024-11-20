export function focusNavigator(container: HTMLElement): void {
    if (!container) {
        throw new Error("Container is required");
    }

    const focusableSelectors: string[] = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([type="hidden"]):not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
    ];

    const getFocusableElements = (): HTMLElement[] =>
        Array.from(
            container.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
        );

    container.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
            const focusableElements = getFocusableElements();
            const index = focusableElements.indexOf(document.activeElement as HTMLElement);
            let nextIndex = event.shiftKey ? index - 1 : index + 1;

            if (nextIndex < 0) nextIndex = focusableElements.length - 1;
            if (nextIndex >= focusableElements.length) nextIndex = 0;

            focusableElements[nextIndex]?.focus();
            event.preventDefault();
        }
    });
}