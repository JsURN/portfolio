export type IconName =
  | "arrow-up-right"
  | "briefcase"
  | "code"
  | "external-link"
  | "github"
  | "mail"
  | "menu"
  | "play"
  | "sparkles"
  | "terminal"
  | "arrow-down"
  | "chevron-left"
  | "chevron-right";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className = "", size = 20 }: IconProps) {
  const common = {
    className: `shrink-0 ${className}`,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...common}>
          <path d="m14 6-6 6 6 6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m10 6 6 6-6 6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
        </svg>
      );
    case "external-link":
      return (
        <svg {...common}>
          <path d="M14 5h5v5M19 5l-8 8" />
          <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M15 22v-3.9c.04-1-.32-1.75-.9-2.3 2.95-.33 6.05-1.45 6.05-6.55 0-1.45-.5-2.64-1.3-3.57.14-.34.57-1.7-.13-3.54 0 0-1.06-.35-3.48 1.36a12 12 0 0 0-6.34 0C6.48 1.79 5.42 2.14 5.42 2.14c-.7 1.84-.27 3.2-.13 3.54C4.49 6.26 4 7.45 4 8.9c0 5.1 3.1 6.22 6.06 6.55-.58.55-.95 1.3-.9 2.3V22" />
          <path d="M9 18c-3 .9-3-1.5-4.2-1.8" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="m9 6 8 6-8 6V6Z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3Z" />
          <path d="m19 14-.6 2.4L16 17l2.4.6L19 20l.6-2.4L22 17l-2.4-.6L19 14ZM5 15l-.5 2L3 17.5l1.5.5L5 20l.5-2 1.5-.5-1.5-.5L5 15Z" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m7 9 3 3-3 3M13 15h4" />
        </svg>
      );
    default:
      return null;
  }
}
