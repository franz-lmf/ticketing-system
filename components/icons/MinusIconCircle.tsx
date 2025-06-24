export default function MinusIconCircle({
  fill = "currentColor",
  isOutline = false,
  ...props
}: {
  fill?: string;
  isOutline?: boolean;
}) {
  return (
    isOutline
      ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
      : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={fill} className="size-4" {...props}>
          <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm4-7a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5A.75.75 0 0 0 12 8Z" clipRule="evenodd" />
        </svg>
      )
  );
}
