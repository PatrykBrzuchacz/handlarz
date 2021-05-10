/* tslint:disable */
/* eslint-disable */

export interface ProductCriteria extends SearchRequestDto {
    username?: string;
}

export interface ProductDto {
    amount?: number;
    ean?: string;
    id?: number;
    manufacturer?: string;
    name?: string;
    price?: number;
    sku?: string;
    username?: string;
    vat?: number;
}

export interface RegisterUserDto {
}

export interface SearchRequestDto extends Serializable {
    pageNumber?: number;
    pageSize?: number;
    sorting?: SortDto[];
}

export interface Serializable {
}

export interface SortDto extends Serializable {
    direction?: Direction;
    property?: string;
}

export interface SubscriptionDto {
    fromOrders?: number;
    id?: number;
    name?: string;
    price?: number;
    toOrders?: number;
}

export interface UserCredentialsDto {
    nip?: string;
    password?: string;
    username?: string;
}

export interface UserCriteria extends SearchRequestDto {
}

export interface UserDto {
    active?: boolean;
    city?: string;
    email?: string;
    firstName?: string;
    houseNumber?: string;
    id?: number;
    lastName?: string;
    nip?: string;
    phoneNumber?: string;
    requestStatus?: RequestStatus;
    street?: string;
    streetNumber?: string;
    username?: string;
}

export interface UserStatusChangeDto {
    active?: boolean;
    id?: number;
    status?: RequestStatus;
}

export enum Direction {
    ASC = "ASC",
    DESC = "DESC",
}

export enum RequestStatus {
    SENDED = "SENDED",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED",
}
