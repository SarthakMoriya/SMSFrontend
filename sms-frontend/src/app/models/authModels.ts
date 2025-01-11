export interface Signup {
  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  passcode: string | null | undefined;
}

export interface SuccessInterface {
  message: string;
  code: number;
  status: string;
  body: [any];
}
export interface ErrorInterface {
  message: string;
  code: number;
  status: string;
}
