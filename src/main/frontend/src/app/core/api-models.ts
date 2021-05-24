/* tslint:disable */

/* eslint-disable */

export interface ExternalShipmentCriteria extends SearchRequestDto {
  username?: string;
  documentNumber?: string;
  product?: ProductDto;
}

export interface ExternalShipmentDto {
  admissionDate?: string;
  amount?: number;
  documentNr?: string;
  id?: number;
  issueDate?: string;
  price?: number;
  product?: ProductDto;
  username?: string;
}

export interface InvoiceCriteria extends SearchRequestDto {
  documentNumber?: string;
  type?: InvoiceType;
  username?: string;
  client?: RegularClientDto,
  user?: UserDto;
}

export interface InvoiceDto {
  createdDate?: string;
  id?: number;
  invoiceNumber?: string;
  order?: OrderDto;
  price?: number;
  type?: InvoiceType;
  user?: UserDto;
}

export interface OrderChangeStatusDto {
  orderId?: number;
  orderStatus?: OrderStatus;
}

export interface OrderCriteria extends SearchRequestDto {
  documentNumber?: string;
  orderStatus?: OrderStatus;
  client?: RegularClientDto;
  username?: string;
}

export interface OrderDto {
  client?: RegularClientDto;
  createdDate?: string;
  id?: number;
  orderNumber?: string;
  price?: number;
  products?: ProductOrderDto[];
  status?: OrderStatus;
  userDto?: UserDto;
  username?: string;
  wzCreatedDate?: string;
  wzNumber?: string;
}

export interface ProductCriteria extends SearchRequestDto {
  name?: string;
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

export interface ProductOrderDto {
  amount?: number;
  product?: ProductDto;
}

export interface RegisterUserDto {
}

export interface RegularClientCriteria extends SearchRequestDto {
  username?: string;
}

export interface RegularClientDto {
  city?: string;
  companyName?: string;
  email?: string;
  firstName?: string;
  houseNumber?: string;
  id?: number;
  lastName?: string;
  nip?: string;
  phoneNumber?: string;
  street?: string;
  streetNumber?: string;
  username?: string;
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
  firstName?: string;
  lastName?: string;
  nip?: string;
  requestStatus?: RequestStatus;
  subscription?: SubscriptionDto;
  username?: string;
}

export interface UserDto {
  active?: boolean;
  city?: string;
  companyName?: string;
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
  subscriptionDto?: SubscriptionDto;
  username?: string;
}

export interface UserStatusChangeDto {
  active?: boolean;
  id?: number;
  status?: RequestStatus;
}

export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum InvoiceType {
  ORDER = 'ORDER',
  ADMIN = 'ADMIN',
}

export enum OrderStatus {
  ACCEPTED = 'ACCEPTED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
}

export enum RequestStatus {
  SENDED = 'SENDED',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
}
