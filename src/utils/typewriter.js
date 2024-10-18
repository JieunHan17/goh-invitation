export default function typewriter(node, { speed = 1, completed = false }) {
    const valid =
        node.childNodes.length === 1 &&
        node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
        throw new Error(
            `This transition only works on elements with a single text node child`
        );
    }

    const text = node.textContent;
    const duration = completed ? 0 : text.length / (speed * 0.02);

    return {
        duration,
        tick: (t) => {
            if (completed) {
                node.textContent = text;
            } else {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        },
    };
}