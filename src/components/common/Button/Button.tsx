import './Button.css'

type ButtonProps = {
    onClick: () => void;
    label: string;
    size: 'small' | 'medium' | 'large';
}

export default function Button({ label, onClick, size }: ButtonProps) {
    return (
        <button
            className={`${size}`}
            onClick={onClick}>
            {label}
        </button>
    )
}   