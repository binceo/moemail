export const EMAIL_CONFIG = {
  MAX_ACTIVE_EMAILS: 50, // Maximum number of active emails
  POLL_INTERVAL: 10_000, // Polling interval in milliseconds
  DOMAIN: 'hongchen.eu.org', // Email domain
} as const

export const WEBHOOK_CONFIG = {
  MAX_RETRIES: 3, // Maximum retry count
  TIMEOUT: 10_000, // Timeout time (milliseconds)
  RETRY_DELAY: 1000, // Retry delay (milliseconds)
  EVENTS: {
    NEW_MESSAGE: 'new_message',
  }
} as const
