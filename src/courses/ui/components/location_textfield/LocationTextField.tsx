interface LocationTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  onClearError?: () => void;
}

function MapPinHeartIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5084 12.1482L8.51139 9.15119C8.05939 9.53599 7.53959 9.83386 6.95199 10.0448C6.36439 10.2557 5.77392 10.3612 5.1806 10.3612C3.7354 10.3612 2.51063 9.8591 1.50629 8.85491C0.502097 7.85056 0 6.62579 0 5.1806C0 3.7354 0.502097 2.51063 1.50629 1.50629C2.51063 0.502096 3.7354 0 5.1806 0C6.62579 0 7.85056 0.502096 8.85491 1.50629C9.8591 2.51063 10.3612 3.7354 10.3612 5.1806C10.3612 5.80873 10.2499 6.41659 10.0274 7.00419C9.80486 7.59179 9.51279 8.09419 9.15119 8.51139L11.9814 11.3417L12.1482 11.5086L11.5084 12.1482ZM5.1806 9.4572C6.38006 9.4572 7.39269 9.04429 8.21849 8.21849C9.04429 7.39284 9.4572 6.38021 9.4572 5.1806C9.4572 3.98099 9.04429 2.96836 8.21849 2.14271C7.39269 1.3169 6.38006 0.904 5.1806 0.904C3.98099 0.904 2.96836 1.3169 2.14271 2.14271C1.3169 2.96836 0.904 3.98099 0.904 5.1806C0.904 6.38021 1.3169 7.39284 2.14271 8.21849C2.96836 9.04429 3.98099 9.4572 5.1806 9.4572Z"
        fill="#222222"
      />
    </svg>
  );
}

export default function LocationTextField({
  id,
  value,
  onChange,
  error,
  onClearError,
}: LocationTextFieldProps) {
  return (
    <div
      className={`w-full flex h-12 md:h-[46px] items-center rounded-[6px] px-3.5 gap-[13px] shadow-[0px_0px_1.81px_1.81px_rgba(191,219,254,0.1)] transition-colors ${
        value ? "bg-[#ffffff]" : "bg-[#ffffff]/40"
      }`}
    >
      <MapPinHeartIcon />
      <input
        id={id}
        type="text"
        placeholder="어디로 갈까요? (ex. 성수동 홍대역)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onClearError}
        className="flex-1 bg-transparent text-[11px] md:text-xs text-[#222222] placeholder-[#222222]/40 outline-none min-w-0"
      />
    </div>
  );
}
