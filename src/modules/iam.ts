import { RestClient } from 'client';
import { CMConfig } from 'config';
import { RequestContext } from 'types';
import {
  AppleAuthenticationRequest,
  AppleAuthenticationResponse,
  Authenticate,
  AuthenticateResponse,
  BlockUserRequest,
  CreatePasswordResetRequest,
  CreatePasswordResetResponse,
  CreateUserDeactivationRequest,
  CredentialsAuthenticationRequest,
  CredentialsAuthenticationResponse,
  DeactivateUserRequest,
  DeleteUserRequest,
  GetProfileRequest,
  GetProfileResponse,
  GetUserRequest,
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
  InviteUserRequest,
  InviteUserV2Response,
  IReturnVoid,
  RegisterGuestUserRequest,
  RegisterGuestUserResponse,
  RegisterUserRequest,
  RegisterUserV2Response,
  ResetPasswordRequest,
  UnblockUserRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest,
  UpdateUserRequest,
  ValidateInvitationTokenRequest,
  ValidateInvitationTokenResponse,
  ValidatePasswordTokenRequest,
  ValidatePasswordTokenResponse,
  ValidateUserDeactivationTokenRequest,
  ValidateUserDeactivationTokenResponse,
  VerifyUserInvitationRequest,
  VerifyUserRequest,
} from 'types/codemash.dtos';

export async function registerUser(
  request: RegisterUserRequest,
): Promise<RegisterUserV2Response> {
  const response = RestClient.New().CallApi<RegisterUserV2Response>(request);
  return response;
}

export async function registerGuest(
  request: RegisterGuestUserRequest,
): Promise<RegisterGuestUserResponse> {
  const response = RestClient.New().CallApi<RegisterGuestUserResponse>(request);
  return response;
}

export async function inviteUser(
  request: InviteUserRequest,
): Promise<InviteUserV2Response> {
  const response = RestClient.New().CallApi<InviteUserV2Response>(request);
  return response;
}

export async function updateUser(
  request: UpdateUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function updateProfile(
  request: UpdateProfileRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function getUsers(
  request: GetUsersRequest,
): Promise<GetUsersResponse> {
  const response = RestClient.New().CallApi<GetUsersResponse>(request);
  return response;
}

export async function getUser(
  request: GetUserRequest,
): Promise<GetUserResponse> {
  const response = RestClient.New().CallApi<GetUserResponse>(request);
  return response;
}

export async function getProfile(
  request: GetProfileRequest,
): Promise<GetProfileResponse> {
  const response = RestClient.New().CallApi<GetProfileResponse>(request);
  return response;
}

export async function createPasswordReset(
  request: CreatePasswordResetRequest,
): Promise<CreatePasswordResetResponse> {
  const response = RestClient.New().CallApi<CreatePasswordResetResponse>(
    request,
  );
  return response;
}

export async function validatePasswordToken(
  request: ValidatePasswordTokenRequest,
): Promise<ValidatePasswordTokenResponse> {
  const response = RestClient.New().CallApi<ValidatePasswordTokenResponse>(
    request,
  );
  return response;
}

export async function validateInvitationToken(
  request: ValidateInvitationTokenRequest,
): Promise<ValidateInvitationTokenResponse> {
  const response = RestClient.New().CallApi<ValidateInvitationTokenResponse>(
    request,
  );
  return response;
}

export async function login(
  request: CredentialsAuthenticationRequest,
): Promise<CredentialsAuthenticationResponse> {
  const response = RestClient.New().CallApi<CredentialsAuthenticationResponse>(
    request,
  );
  return response;
}

export async function logout(): Promise<AuthenticateResponse> {
  const request = new Authenticate();
  request.provider = 'logout';

  const response = RestClient.New().CallApi<AuthenticateResponse>(request);
  return response;
}

export async function validateUserDeactivationToken(
  request: ValidateUserDeactivationTokenRequest,
): Promise<ValidateUserDeactivationTokenResponse> {
  const response = RestClient.New().CallApi<ValidateUserDeactivationTokenResponse>(
    request,
  );
  return response;
}

export async function deleteUser(
  request: DeleteUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function blockUser(
  request: BlockUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function unblockUser(
  request: UnblockUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function updatePassword(
  request: UpdatePasswordRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function resetPassword(
  request: ResetPasswordRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function verifyUserInvitation(
  request: VerifyUserInvitationRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function createUserDeactivation(
  request: CreateUserDeactivationRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function deactivateUser(
  request: DeactivateUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function verifyUser(
  request: VerifyUserRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function sighInWithApple(
  request: AppleAuthenticationRequest,
  requestContext?: RequestContext | undefined,
): Promise<AppleAuthenticationResponse> {
  const response = RestClient.New(
    requestContext,
  ).CallApi<AppleAuthenticationResponse>(request);
  return response;
}
