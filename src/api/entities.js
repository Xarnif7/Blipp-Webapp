import { base44 } from "./base44Client";

export const Business      = base44.entities.Business;
export const Client        = base44.entities.Client;
export const ReviewRequest = base44.entities.ReviewRequest;
export const ReviewTracking= base44.entities.ReviewTracking;
export const ReviewReply   = base44.entities.ReviewReply;
export const SocialPost    = base44.entities.SocialPost;
export const Sequence      = base44.entities.Sequence;
export const Competitor    = base44.entities.Competitor;
export const TeamMember    = base44.entities.TeamMember;
export const AuditLog      = base44.entities.AuditLog;

// Keep same name used across app
export const User = {
  me:     () => base44.auth.me(),
  login:  () => Promise.resolve(),   // no redirect
  logout: () => Promise.resolve(),
};
