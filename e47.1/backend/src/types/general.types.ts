export type ErrorObject = {
    message: string;
    code?: string | number;
    details?: Record<string, any>;
};