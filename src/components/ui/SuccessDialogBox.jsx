import { React, useState, forwardRef, useImperativeHandle } from "react";
import Button from "./button";

const SuccessDialogBox = forwardRef(({ modalText, modalHeader }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
  }));
  return (
    isOpen && (
      <div className="w-full h-full bg-white absolute z-10">
        <div className="w-12/12 h-12 bg-red-300">
          {modalHeader}
          {modalText}
        </div>

        <Button
          className="w-full 
                rounded-full
                bg-yellow-500 
                h-12 
                text-center 
                justify-center
                text-teal-900 
                text-base 
                uppercase
                font-bold
                no-underline
                flex
                items-center"
          type="text"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </div>
    )
  );
});

export default SuccessDialogBox;
