import { JSX } from 'solid-js/jsx-runtime';
import { ExpandIcon, MinimizeIcon } from '../icons';

type ResizeButtonProps = {
  color?: string;
  mode: 'expand' | 'minimize';
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const ResizeButton = (props: ResizeButtonProps) => {
  return (
    <button
      type="submit"
      {...props}
      class={
        'py-2 px-4 justify-center font-semibold focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ' +
        props.class
      }
      style={{ background: 'transparent', border: 'none' }}
    >
      {props.mode === 'expand' ? <ExpandIcon color={props.color} /> : <MinimizeIcon color={props.color} />}
    </button>
  );
};
