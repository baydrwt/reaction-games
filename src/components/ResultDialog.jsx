import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const resultModal = forwardRef(function ResultDialog({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();
  const isLost = remainingTime <= 0;
  const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{isLost ? "You Lost" : `Your Score: ${score}`}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default resultModal;
