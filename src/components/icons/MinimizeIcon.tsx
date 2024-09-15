import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const MinimizeIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement> & { isCurrentColor?: boolean }) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke={props.color ?? defaultButtonColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <line id="primary" x1="19" y1="12" x2="5" y2="12"></line>
    </svg>
);

