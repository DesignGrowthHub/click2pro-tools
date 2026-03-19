import type { ReactNode } from "react";
import type { IconName } from "@/data/tools-home";

type IconProps = {
  className?: string;
};

function Svg({
  children,
  className,
  viewBox = "0 0 24 24",
}: IconProps & {
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16L21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 17L17 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M9 7H17V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 3L18 5.4V10.6C18 14.5 15.5 17.9 12 19.5C8.5 17.9 6 14.5 6 10.6V5.4L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M9.5 11.8L11.2 13.5L14.8 9.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6.5" y="10" width="11" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 10V8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5V10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14.5" r="1" fill="currentColor" />
    </Svg>
  );
}

export function SignalIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 17H6.8V11.5H4V17Z" fill="currentColor" />
      <path d="M8.6 17H11.4V8.5H8.6V17Z" fill="currentColor" />
      <path d="M13.2 17H16V5.5H13.2V17Z" fill="currentColor" />
      <path d="M17.8 17H20.6V12.5H17.8V17Z" fill="currentColor" />
    </Svg>
  );
}

export function PatternIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.2 9.2L14.8 14.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M14.8 9.2L9.2 14.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function TrendIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 15L9 11L12 13.5L18.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M15 7H18.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function TimeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8V12L14.8 14.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function StructureIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="5" width="6.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="5" width="6.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8.75" y="13.5" width="6.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10.5V13.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5H13.5" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  );
}

export function InsightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 4.5C8.41 4.5 5.5 7.41 5.5 11C5.5 13.144 6.538 15.046 8.141 16.23C8.588 16.56 8.875 17.055 8.875 17.61V18.25C8.875 18.94 9.435 19.5 10.125 19.5H13.875C14.565 19.5 15.125 18.94 15.125 18.25V17.61C15.125 17.055 15.412 16.56 15.859 16.23C17.462 15.046 18.5 13.144 18.5 11C18.5 7.41 15.59 4.5 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 21H14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function PrivacyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4L18 6.2V11.2C18 14.7 15.8 17.8 12 19.5C8.2 17.8 6 14.7 6 11.2V6.2L12 4Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 11.5C9.5 10.12 10.62 9 12 9C13.38 9 14.5 10.12 14.5 11.5V14.2H9.5V11.5Z" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  );
}

export function GraphIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 18.5H19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M7 16V12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 16V8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M17 16V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </Svg>
  );
}

export function renderIcon(name: IconName, className?: string) {
  const icons: Record<IconName, ReactNode> = {
    shield: <ShieldIcon className={className} />,
    lock: <LockIcon className={className} />,
    signal: <SignalIcon className={className} />,
    pattern: <PatternIcon className={className} />,
    trend: <TrendIcon className={className} />,
    time: <TimeIcon className={className} />,
    structure: <StructureIcon className={className} />,
    insight: <InsightIcon className={className} />,
    privacy: <PrivacyIcon className={className} />,
    graph: <GraphIcon className={className} />,
  };

  return icons[name];
}
