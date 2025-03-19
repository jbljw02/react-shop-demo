import './Input.css';

type InputProps = {
    type: 'number' | 'text';
    value: number | string;
    onChange: () => void;
    placeholder?: string;
}

export default function Input({ type, value, onChange, placeholder }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder && placeholder} />
    )
}   