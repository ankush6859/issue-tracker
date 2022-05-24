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
