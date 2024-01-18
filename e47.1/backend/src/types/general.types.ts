import { Request, Response } from "express";

export type ErrorObject = {
    message: string;
    code?: string | number;
    details?: Record<string, any>;
};

export interface GetAuthUser {
    (req?: Request, res?: Response): Promise<any>;
}