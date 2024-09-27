import { JSX } from 'solid-js/jsx-runtime';
import { CloseIcon } from '../icons';

type CloseButtonProps = {
  color?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton = (props: CloseButtonProps) => {
  return (
    <button
      type="submit"
      {...props}
      class={
        "py-2 pr-3 absolute top-0 right-[-8px] m-[6px] bg-transparent text-white rounded-full z-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75" +
        props.class
      }
      style={{ background: 'transparent', border: 'none' }}
    >
      <CloseIcon color={props.color} />
    </button>
  );
};
