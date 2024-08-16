import { enableExternalSource } from 'solid-js';
import { observersConfigType } from './components/Bot';

/* eslint-disable solid/reactivity */
type BotProps = {
  chatflowid: string;
  apiHost?: string;
  chatflowConfig?: Record<string, unknown>;
  observersConfig?: observersConfigType;
};

let elementUsed: Element | undefined;

export const initFull = (props: BotProps & { id?: string }, style?: HTMLStyleElement) => {
  destroy();
  const fullElement = props.id ? document.getElementById(props.id) : document.querySelector('flowise-fullchatbot');
  if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.');
  Object.assign(fullElement, props);
  if (style) fullElement.shadowRoot?.appendChild(style);
  elementUsed = fullElement;
  return fullElement;
};

export const init = (props: BotProps, style?: HTMLStyleElement) => {
  destroy();
  const element = document.createElement('flowise-chatbot');
  Object.assign(element, props);
  document.body.appendChild(element);
  if (style) element.shadowRoot?.appendChild(style);
  elementUsed = element;
  return element;
};

export const destroy = () => {
  elementUsed?.remove();
};

type Chatbot = {
  initFull: typeof initFull;
  init: typeof init;
  destroy: typeof destroy;
};

declare const window:
  | {
      Chatbot: Chatbot | undefined;
    }
  | undefined;

export const parseChatbot = () => ({
  initFull,
  init,
  destroy,
});

export const injectChatbotInWindow = (bot: Chatbot) => {
  if (typeof window === 'undefined') return;
  window.Chatbot = { ...bot };
};
