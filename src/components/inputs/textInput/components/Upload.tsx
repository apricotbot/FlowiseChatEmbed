export const ProgressCircle = () => {
  document.addEventListener('click', doSomething, false);

  function doSomething(e: any) {
    const chatbot = document.querySelector('flowise-chatbot');
    if (!!chatbot && !!chatbot.shadowRoot) {
      const percentage = Math.floor(Math.random() * 100);
      const chatBotDocument = chatbot.shadowRoot;
      const progressCircle = chatBotDocument.getElementById('progress-circle');

      if (progressCircle != null) {
        const dasharray = progressCircle.getAttribute('stroke-dasharray');
        const circleLength: number = parseFloat(dasharray || '0');
        const offset: number = circleLength * (1 - percentage / 100);
        progressCircle.setAttribute('stroke-dashoffset', '' + offset);
      }
    }
    e.stopPropagation();
  }

  return (
    <svg
      id="progressBarContainer"
      width="40"
      viewBox="-14.125 -14.125 141.25 141.25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-90deg)' }}
    >
      <circle
        r="46.5"
        cx="56.5"
        cy="56.5"
        fill="transparent"
        stroke="#e0e0e0"
        stroke-width="13"
        stroke-dasharray="292.02000000000004px"
        stroke-dashoffset="0"
      />
      <circle
        id="progress-circle"
        r="46.5"
        cx="56.5"
        cy="56.5"
        stroke="#76e5b1"
        stroke-width="9"
        stroke-linecap="round"
        stroke-dashoffset="219px"
        fill="transparent"
        stroke-dasharray="292.02000000000004px"
      />
    </svg>
  );
};
