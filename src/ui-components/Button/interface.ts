export type ButtonType = 'primary' | 'default';

export interface ButtonProps {
    className?: string;
    selected?: boolean;
    type?: ButtonType;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    style?: React.CSSProperties;
    disabled?: boolean;
}