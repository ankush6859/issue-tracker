export interface ActionType {
  type: string;
  data: {
    name: string;
    value: string;
    hasError: boolean;
    error: string;
    touched: false;
    isFormValid: boolean;
  };
}
export interface ActionItem {
  value: string;
  hasError: boolean;
  error: string;
  touched: false;
}
export interface LoginResponse {
  message: string;
  userId: string;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
