/**
 * TEMP STUB: disables vendor redirects so the UI can deploy.
 * Replace with real SDK wiring when backend is ready.
 */
export const base44 = {
  auth: {
    async me() {
      // Pretend a user session exists
      return { id: "dev-user", email: "dev@myblipp.com", name: "Dev User" };
    },
    async login() { /* no-op */ },
    async logout() { /* no-op */ },
  },
  entities: {
    Business:    {},
    Client:      {},
    ReviewRequest: {},
    ReviewTracking: {},
    ReviewReply:   {},
    SocialPost:    {},
    Sequence:      {},
    Competitor:    {},
    TeamMember:    {},
    AuditLog:      {},
  },
  functions: {
    hello:         async () => ({ ok: true }),
    stripeWebhook: async () => ({ ok: true }),
    sendSMS:       async () => ({ ok: true }),
    sendRequest:   async () => ({ ok: true }),
  },
  integrations: {
    Core: {
      InvokeLLM: async () => ({ text: "stubbed" }),
      SendEmail: async () => ({ ok: true }),
      UploadFile: async () => ({ ok: true }),
      GenerateImage: async () => ({ url: "#" }),
      ExtractDataFromUploadedFile: async () => ({ rows: [] }),
    },
  },
};
