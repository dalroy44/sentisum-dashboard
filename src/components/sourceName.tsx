import { DatabaseIcon } from "lucide-react";

export const SourceNameLabel = ({
    sourceName,
    className,
}: { sourceName: string; className?: string }) => {
    return (
        <div
            className={`ml-2.5 flex w-fit items-center gap-1.5 rounded-b-xl border-[0.1] border-grey-300 bg-white px-3 !text-xs text-gray-850 py-1.5
                dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 ${className ?? ""}`}
        >
            <DatabaseIcon className="h-3 w-3 dark:text-gray-300" />
            <span className="capitalize">
                {sourceName?.length > 20 ? `${sourceName?.slice(0, 20)}...` : sourceName}
            </span>
        </div>
    );
};