export interface ResponseUserData {
  name: string;
  _id: string;
  login: string;
}

export interface SignInResponse {
  token: string;
  name: string;
  login: string;
  userId: string;
}

export interface SignUpResponse {
  _id: string;
  name: string;
  login: string;
}
