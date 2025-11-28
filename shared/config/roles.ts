export const ROLES = {
  ADMIN: 'admin',
  OWNER: 'owner',
  GUEST: 'guest'
} as const;

export const ALL_ROLES: RoleValues[] = Object.values(ROLES);

export type RoleValues = typeof ROLES[keyof typeof ROLES];