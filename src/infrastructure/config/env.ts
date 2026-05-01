const REQUIRED_CLIENT_ENV_VARS = ['NEXT_PUBLIC_API_BASE_URL'] as const;
const REQUIRED_SERVER_ENV_VARS: readonly string[] = [];

function validateEnv(): void {
  const missing = [...REQUIRED_CLIENT_ENV_VARS, ...REQUIRED_SERVER_ENV_VARS].filter(
    (key) => !process.env[key],
  );
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

validateEnv();

export const clientEnv = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string,
};

export const serverEnv = {};
