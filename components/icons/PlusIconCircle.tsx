export default function PlusIconCircle({
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      )
      :
      (<svg className="size-4" fill={fill} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path clipRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" fillRule="evenodd" />
      </svg>)
  );
}
