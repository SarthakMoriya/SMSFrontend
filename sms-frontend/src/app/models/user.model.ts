export interface UserDetailsState {
  name: string;
  email: string;
  passcode: string;
  id: string;
  verified: string;
  admin_approved: string;
  updated_at: string;
  created_at: string;
}

export interface UserState {
  token: string;
  name: string;
  email: string;
  passcode: string;
  id: string;
  verified: string;
  admin_approved: string;
  updated_at: string;
  created_at: string;
  role:'USER'|'ADMIN' | string;
}
