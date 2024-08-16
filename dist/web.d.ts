declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        observersConfig?: import("./components/Bot").observersConfigType | undefined;
    } & {
        id?: string | undefined;
    }, style?: HTMLStyleElement | undefined) => Element;
    init: (props: {
        chatflowid: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        observersConfig?: import("./components/Bot").observersConfigType | undefined;
    }, style?: HTMLStyleElement | undefined) => HTMLElement;
    destroy: () => void;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map