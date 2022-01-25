import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  AppleAuthenticationRequest,
  Authenticate,
  BlockUserRequest,
  CreatePasswordResetRequest,
  CreateUserDeactivationRequest,
  DeactivateUserRequest,
  DeleteUserRequest,
  GetProfileRequest,
  GetUserRequest,
  GetUsersRequest,
  InviteUserRequest,
  RegisterGuestUserRequest,
  RegisterUserRequest,
  ResetPasswordRequest,
  UnblockUserRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest,
  UpdateUserRequest,
  ValidateInvitationTokenRequest,
  ValidatePasswordTokenRequest,
  ValidateUserDeactivationTokenRequest,
  VerifyUserInvitationRequest,
  VerifyUserRequest,
} from 'types/codemash.dtos';

export async function registerUser(request: RegisterUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function registerGuest(request: RegisterGuestUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function inviteUser(request: InviteUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateUser(request: UpdateUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateProfile(request: UpdateProfileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getUsers(request: GetUsersRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getUser(request: GetUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function getProfile(request: GetProfileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function createPasswordReset(request: CreatePasswordResetRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function validatePasswordToken(
  request: ValidatePasswordTokenRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function validateInvitationToken(
  request: ValidateInvitationTokenRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function authenticate(request: Authenticate) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function checkUserDeactivationToken(
  request: ValidateUserDeactivationTokenRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteUser(request: DeleteUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function blockUser(request: BlockUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function unblockUser(request: UnblockUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function updatePassword(request: UpdatePasswordRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function resetPassword(request: ResetPasswordRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function verifyUserInvitation(
  request: VerifyUserInvitationRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function createUserDeactivation(
  request: CreateUserDeactivationRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function deactivateUser(request: DeactivateUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
export async function appleAuthentication(request: AppleAuthenticationRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

// export async function verifyRegistration(request: VerifyUserRequest) {}
// export async function checkAuthentication(request: CredentialsAuthenticationRequest) {}
// export async function logout(request: ?) {}
