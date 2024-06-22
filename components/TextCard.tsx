export default function TextCard({children, className}: {children?: React.ReactNode, className?: string}) {
    let combinedClass = "w-[80%] p-4 flex flex-wrap rounded-md bg-gray-200 shadow-lg max-h-full overflow-y-auto" + (className ? " " + className : "");
  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
}
