import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  AttachPaymentMethodRequest,
  CancelSubscriptionRequest,
  ChangeSubscriptionRequest,
  CreateCustomerRequest,
  CreateOrderRequest,
  CreatePayseraTransactionRequest,
  CreateStripeTransactionRequest,
  CreateSubscriptionRequest,
  DeleteCustomerRequest,
  GetApplicableCouponsRequest,
  GetApplicableDiscountsRequest,
  GetCustomerRequest,
  GetCustomersRequest,
  GetOrderRequest,
  GetOrdersRequest,
  GetPaymentMethodSetupRequest,
  UpdateCustomerRequest,
  UpdatePaymentMethodRequest,
  UpdateSubscriptionRequest,
  VerifyAppleAppStoreSubscriptionRequest,
  VerifyGooglePlayStoreSubscriptionRequest,
} from 'types/codemash.dtos';

export async function getOrder(request: GetOrderRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getOrders(request: GetOrdersRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function createOrder(request: CreateOrderRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function createPayseraTransaction(
  request: CreatePayseraTransactionRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function createStripeTransaction(
  request: CreateStripeTransactionRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function createCustomer(request: CreateCustomerRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateCustomer(request: UpdateCustomerRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getCustomers(request: GetCustomersRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getCustomer(request: GetCustomerRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteCustomer(request: DeleteCustomerRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getPaymentMethodSetup(
  request: GetPaymentMethodSetupRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function attachPaymentMethod(request: AttachPaymentMethodRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updatePaymentMethod(request: UpdatePaymentMethodRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function createSubscription(request: CreateSubscriptionRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function verifyAppStoreSubscription(
  request: VerifyAppleAppStoreSubscriptionRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function verifyPlayStoreSubscription(
  request: VerifyGooglePlayStoreSubscriptionRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateSubscription(request: UpdateSubscriptionRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function changeSubscription(request: ChangeSubscriptionRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function cancelSubscription(request: CancelSubscriptionRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getApplicableCoupons(
  request: GetApplicableCouponsRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getApplicableDiscounts(
  request: GetApplicableDiscountsRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
