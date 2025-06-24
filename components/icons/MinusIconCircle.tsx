export default function MinusIconCircle({
  fill = "currentColor",
  isOutline = false,
  ...props
}: {
  fill?: string;
  isOutline?: boolean;
}) {
  return isOutline ? (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      className="size-4"
      fill={fill}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm4-7a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5A.75.75 0 0 0 12 8Z"
        fillRule="evenodd"
      />
    </svg>
  );
}
