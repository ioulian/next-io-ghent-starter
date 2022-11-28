export interface ApiError {
  error_code: string;
  message: string;
  title: string;
  type: string;
  violations?: { code: string; message: string; propertyPath: string }[];
}

export interface AuthError {
  error: string;
  error_description: string;
  message: string;
}
