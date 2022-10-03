import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  AttachPaymentMethodRequest,
  AttachPaymentMethodResponse,
  CancelSubscriptionRequest,
  CancelSubscriptionResponse,
  ChangeSubscriptionRequest,
  ChangeSubscriptionResponse,
  CreateCustomerRequest,
  CreateCustomerResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  CreatePayseraTransactionRequest,
  CreatePayseraTransactionResponse,
  CreateStripeTransactionRequest,
  CreateStripeTransactionResponse,
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  DeleteCustomerRequest,
  GetApplicableCouponsRequest,
  GetApplicableCouponsResponse,
  GetApplicableDiscountsRequest,
  GetApplicableDiscountsResponse,
  GetCustomerRequest,
  GetCustomerResponse,
  GetCustomersRequest,
  GetCustomersResponse,
  GetOrderRequest,
  GetOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetPaymentMethodSetupRequest,
  GetPaymentMethodSetupResponse,
  IReturnVoid,
  UpdateCustomerRequest,
  UpdatePaymentMethodRequest,
  UpdateSubscriptionRequest,
  VerifyAppleAppStoreSubscriptionRequest,
  VerifyAppleAppStoreSubscriptionResponse,
  VerifyGooglePlayStoreSubscriptionRequest,
  VerifyGooglePlayStoreSubscriptionResponse,
} from 'types/codemash.dtos';

export async function getOrder(
  request: GetOrderRequest,
): Promise<GetOrderResponse> {
  const response = RestClient.New().CallApi<GetOrderResponse>(request);
  return response;
}

export async function getOrders(
  request: GetOrdersRequest,
): Promise<GetOrdersResponse> {
  const response = RestClient.New().CallApi<GetOrdersResponse>(request);
  return response;
}

export async function createOrder(
  request: CreateOrderRequest,
): Promise<CreateOrderResponse> {
  const response = RestClient.New().CallApi<CreateOrderResponse>(request);
  return response;
}

export async function createPayseraTransaction(
  request: CreatePayseraTransactionRequest,
): Promise<CreatePayseraTransactionResponse> {
  const response = RestClient.New().CallApi<CreatePayseraTransactionResponse>(
    request,
  );
  return response;
}

export async function createStripeTransaction(
  request: CreateStripeTransactionRequest,
): Promise<CreateStripeTransactionResponse> {
  const response = RestClient.New().CallApi<CreateStripeTransactionResponse>(
    request,
  );
  return response;
}

export async function createCustomer(
  request: CreateCustomerRequest,
): Promise<CreateCustomerResponse> {
  const response = RestClient.New().CallApi<CreateCustomerResponse>(request);
  return response;
}

export async function updateCustomer(
  request: UpdateCustomerRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function getCustomers(
  request: GetCustomersRequest,
): Promise<GetCustomersResponse> {
  const response = RestClient.New().CallApi<GetCustomersResponse>(request);
  return response;
}

export async function getCustomer(
  request: GetCustomerRequest,
): Promise<GetCustomerResponse> {
  const response = RestClient.New().CallApi<GetCustomerResponse>(request);
  return response;
}

export async function deleteCustomer(
  request: DeleteCustomerRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function getPaymentMethodSetup(
  request: GetPaymentMethodSetupRequest,
): Promise<GetPaymentMethodSetupResponse> {
  const response = RestClient.New().CallApi<GetPaymentMethodSetupResponse>(
    request,
  );
  return response;
}

export async function attachPaymentMethod(
  request: AttachPaymentMethodRequest,
): Promise<AttachPaymentMethodResponse> {
  const response = RestClient.New().CallApi<AttachPaymentMethodResponse>(
    request,
  );
  return response;
}

export async function updatePaymentMethod(
  request: UpdatePaymentMethodRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function createSubscription(
  request: CreateSubscriptionRequest,
): Promise<CreateSubscriptionResponse> {
  const response = RestClient.New().CallApi<CreateSubscriptionResponse>(
    request,
  );
  return response;
}

export async function verifyAppStoreSubscription(
  request: VerifyAppleAppStoreSubscriptionRequest,
): Promise<VerifyAppleAppStoreSubscriptionResponse> {
  const response = RestClient.New().CallApi<VerifyAppleAppStoreSubscriptionResponse>(
    request,
  );
  return response;
}

export async function verifyPlayStoreSubscription(
  request: VerifyGooglePlayStoreSubscriptionRequest,
): Promise<VerifyGooglePlayStoreSubscriptionResponse> {
  const response = RestClient.New().CallApi<VerifyGooglePlayStoreSubscriptionResponse>(
    request,
  );
  return response;
}

export async function updateSubscription(
  request: UpdateSubscriptionRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function changeSubscription(
  request: ChangeSubscriptionRequest,
): Promise<ChangeSubscriptionResponse> {
  const response = RestClient.New().CallApi<ChangeSubscriptionResponse>(
    request,
  );
  return response;
}

export async function cancelSubscription(
  request: CancelSubscriptionRequest,
): Promise<CancelSubscriptionResponse> {
  const response = RestClient.New().CallApi<CancelSubscriptionResponse>(
    request,
  );
  return response;
}

export async function getApplicableCoupons(
  request: GetApplicableCouponsRequest,
): Promise<GetApplicableCouponsResponse> {
  const response = RestClient.New().CallApi<GetApplicableCouponsResponse>(
    request,
  );
  return response;
}

export async function getApplicableDiscounts(
  request: GetApplicableDiscountsRequest,
): Promise<GetApplicableDiscountsResponse> {
  const response = RestClient.New().CallApi<GetApplicableDiscountsResponse>(
    request,
  );
  return response;
}
