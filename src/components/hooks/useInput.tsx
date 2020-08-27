import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        console.log("event.target.value: ", event.target.value);
        setValue(event.target.value);
      },
    },
  };
};
