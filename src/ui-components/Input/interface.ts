export interface InputProps {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    error?: string;
    positive?: boolean;
    inputStyle?: React.CSSProperties;
    inputContainerStyle?: React.CSSProperties;
    label: string;
}