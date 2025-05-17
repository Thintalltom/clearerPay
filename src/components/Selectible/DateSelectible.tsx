import { useEffect, useRef, useState, type FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import type { CustomSelectProps } from "../../types";
const DateSelectible: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedOptionLabel =
    Array.isArray(options) && options.find((opt) => opt.value === value)?.label;
  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };
  return (
    <div className={`relative  w-fit`} ref={dropdownRef}>
      <div
        className={`py-2 px-[8px]   bg-zinc-100 rounded  text-black  
            cursor-pointer flex justify-between items-center gap-[20px]
            focus:outline-none border-transparent  focus:ring-1 `}
        onClick={() => setIsOpen(true)}
      >
        <span className="text-[14px] w-full truncate whitespace-nowrap">
          {selectedOptionLabel || placeholder}
        </span>
        <IoIosArrowDown
          className={`text-3xl text-gray-600 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 mt-2 w-full bg-white border rounded-[6px] min-w-full  shadow-lg max-h-60 overflow-auto">
          {Array.isArray(options) &&
            options.length > 0 &&
            options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2  hover:bg-gray-100 cursor-pointer text-[12px] text-gray-700"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DateSelectible;
