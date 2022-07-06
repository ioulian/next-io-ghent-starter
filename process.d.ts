declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_API_DOMAIN: string;
    NEXT_PUBLIC_HEAD_TITLE: string;
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?: string;
    NEXT_PUBLIC_AUTH_COOKIE_MAX_AGE: number;
    NEXT_PUBLIC_AUTH_LOGIN_URL: string;
    NEXT_PUBLIC_AUTH_REFRESH_URL: string;
    NEXT_PUBLIC_AUTH_CLIENT_ID: string;
    NEXT_PUBLIC_AUTH_CLIENT_SECRET: string;
  }
}
