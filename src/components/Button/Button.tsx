import { forwardRef, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'transparent';
type ButtonSize = 'small' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    label?: ReactNode;
    icon?: ReactNode;
}

const getButtonClass = (variant: ButtonVariant = 'primary', size: ButtonSize = 'small') => {
    const base =
        'inline-flex items-center justify-center rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

    const variants: Record<ButtonVariant, string> = {
        primary:
            'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600',
        secondary:
            'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700',
        ghost:
            'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600',
        transparent:
            'bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
    };

    const sizes: Record<ButtonSize, string> = {
        small: 'text-sm px-3 py-1.5',
        large: 'text-base px-5 py-3',
    };

    return `${base} ${variants[variant]} ${sizes[size]}`;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'small', label, icon, className = '', ...props }, ref) => {
        return (
            <button ref={ref} className={`${getButtonClass(variant, size)} ${className}`} {...props}>
                {icon && <span className="mr-2">{icon}</span>}
                {label}
            </button>
        );
    }
);

Button.displayName = 'Button';
