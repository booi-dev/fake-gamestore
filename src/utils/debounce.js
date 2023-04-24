function debounce(func, delay = 350) {
    let timeoutId;

    return function (...args) {
        const context = this;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

export default debounce;