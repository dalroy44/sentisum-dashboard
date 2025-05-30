import { createElement } from 'react';
import { SourceNameLabel } from './sourceName';
import { ArrowDown, ArrowUp } from 'lucide-react';

type MetricCardProps = {
    metricId: string;
    metricName: string;
    sourceDisplayName: string;
    currentValueText: string;
    isPercentSymbolNeeded: boolean;
    percentChangeValue: number;
    percentChangeText: string;
    color: string;
    isDragOverlay?: boolean;
};

export const MetricCard = ({
    metricId,
    metricName,
    sourceDisplayName,
    currentValueText,
    isPercentSymbolNeeded,
    percentChangeValue,
    percentChangeText,
    color,
}: MetricCardProps) => {

    return (
        <div
            className='group relative min-h-36 rounded-xl bg-[#EDF8FD] dark:bg-[#1A232A]'
            role="button"
            key={metricId}
        >
            <SourceNameLabel sourceName={sourceDisplayName} />
            <div className="px-5 py-2.5 text-sm">
                <div className="text-gray-900 dark:text-gray-100">
                    {metricName.length > 24 ? `${metricName.slice(0, 24)}...` : metricName}
                </div>
                <div className="mt-3 flex items-end gap-2">
                    <p className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
                        {currentValueText} {isPercentSymbolNeeded && <span className="pl-1 text-2xl font-normal">%</span>}
                    </p>
                    <div className="mb-1 flex gap-1.5" style={{ color }}>
                        <span className="flex items-center justify-center">
                            {createElement(
                                percentChangeValue < 0 ? ArrowDown : ArrowUp,
                                { stroke: color, fill: color }
                            )}
                        </span>
                        {percentChangeText}
                    </div>
                </div>
            </div>
        </div>
    );
};
