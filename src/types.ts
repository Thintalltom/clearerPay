import type { JSX } from "react";

export interface CustomSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export   interface transactionProps {
    type?: string;
    icon: JSX.Element;
    color: string;
    recipient: string;
    time: string;
    amount: string;
    amountColor: string;
    amount2?: string;
    amount2Color?: string;
  }

export  interface dataProps {
    day: number;
    moneyIn: number;
    moneyOut: number;
}