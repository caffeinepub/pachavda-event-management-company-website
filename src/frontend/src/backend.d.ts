import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    name: string;
    message: string;
    timestamp: Time;
    phone: string;
    location: string;
    eventDate: string;
    eventType: string;
}
export type Time = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getCallerUserRole(): Promise<UserRole>;
    getConfirmedInquiries(): Promise<Array<Inquiry>>;
    getDeletedInquiries(): Promise<Array<Inquiry>>;
    isCallerAdmin(): Promise<boolean>;
    markInquiryAsConfirmed(inquiryId: bigint): Promise<void>;
    markInquiryAsDeleted(inquiryId: bigint): Promise<void>;
    submitAndContinueOnWhatsApp(name: string, phone: string, eventType: string, eventDate: string, location: string, message: string): Promise<{
        id: bigint;
        timestamp: Time;
    }>;
    submitInquiry(name: string, phone: string, eventType: string, eventDate: string, location: string, message: string): Promise<{
        id: bigint;
        timestamp: Time;
    }>;
}
