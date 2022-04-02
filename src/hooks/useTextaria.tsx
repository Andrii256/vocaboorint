import React, { useState, ChangeEvent } from "react";

export const useTextaria = (
  className: string,
  defaultValue: string,
  additionalProps?: React.HTMLProps<HTMLTextAreaElement>,
) => {
  const [value, setValue] = useState<string>(defaultValue);

  const textaria = (
    <textarea
      value={value}
      onInput={(event: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(event.target.value)
      }
      {...additionalProps}
      className={className}
    ></textarea>
  );

  return {
    textaria,
    value,
  };
};
