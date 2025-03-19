import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    backgroundColor?: string;
}

export default function Button({
    label,
    size = 'medium',
    className,
    children,
    color,
    backgroundColor,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`button ${size} ${className || ''}`}
            style={{
                color: color,
                backgroundColor: backgroundColor,
            }}
            {...props}>
            {label || children}
        </button>
    );
}   