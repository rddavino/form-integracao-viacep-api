import { React, useState, forwardRef, useImperativeHandle } from "react";
import Button from "./button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const SuccessDialogBox = forwardRef(({ dialogBoxText, dialogBoxHeader }, ref) => {
  const [open, setOpen] = useState(false)


  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
      console.log("chamou");
    },
  }));
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white p-10 lg:px-20">
              <div className="mb-5">
                <div className="mt-3 flex flex-col align-middle">
                <div className="h-12 w-12 mb-5">
                  <img src="src/assets/images/check-mark.png" alt="" />
                </div>
                  <DialogTitle
                    as="h3"
                    className="text-lg text-center font-semibold leading-6 text-gray-900"
                  >
                    {dialogBoxHeader}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-center text-gray-500">{dialogBoxText}</p>
                  </div>
                </div>
              </div>
              <Button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="w-full 
                        rounded-full
                        bg-teal-900
                        h-12 
                        text-center 
                        justify-center
                        text-white 
                        text-base 
                        uppercase
                        font-bold
                        no-underline
                        flex
                        items-center"
              >
                Entendi!
              </Button>
            </div>
            
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
});

export default SuccessDialogBox;
