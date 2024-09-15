import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const ExpandIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement> & { isCurrentColor?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 4 L10 10" />
    <path d="M4 10 V4 H10" />
    <path d="M20 4 L14 10" />
    <path d="M20 10 V4 H14" />
    <path d="M4 20 L10 14" />
    <path d="M4 14 V20 H10" />
    <path d="M20 20 L14 14" />
    <path d="M20 14 V20 H14" />
  </svg>
);
