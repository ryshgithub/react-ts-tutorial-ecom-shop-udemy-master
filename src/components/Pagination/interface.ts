export interface PaginationProps {
    numberOfPages: number;
    onChange(selectedPage: number): void;
    overrideSelectedPage?: number;
}

export interface PaginationState {
    selectedPage: number;
}