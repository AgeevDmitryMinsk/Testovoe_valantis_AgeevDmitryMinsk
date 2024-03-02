export interface ProductsPaginationSchema {
    limit: number;
    page: number;
    totalPages: number;
    isLoading: boolean;
    error?: string;
}
