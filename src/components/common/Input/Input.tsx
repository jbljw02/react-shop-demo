import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ type, value, onChange, placeholder, ...props }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder && placeholder}
            {...props} />
    )
}   