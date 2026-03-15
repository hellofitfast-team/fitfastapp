"use client";

import * as React from "react";
import { cn } from "./cn";
import { Check, Minus } from "lucide-react";

export type CheckedState = boolean | "indeterminate";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked"
> {
  checked?: CheckedState;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, checked, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const isIndeterminate = checked === "indeterminate";
    const isChecked = checked === true;

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
      props.onChange?.(e);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "border-input bg-card h-5 w-5 rounded-md border transition-all",
            "peer-checked:border-primary peer-checked:bg-primary",
            isIndeterminate && "border-primary bg-primary",
            "peer-focus-visible:ring-ring peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "flex cursor-pointer items-center justify-center",
            className,
          )}
        >
          {isChecked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
          {isIndeterminate && <Minus className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
        </div>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
