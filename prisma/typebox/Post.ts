import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";
import { User, UserPlain } from "./User";
export const PostPlain = Type.Object(
  {
    id: Type.Optional(Type.Integer()),
    createdAt: Type.Optional(Type.Date()),
    userId: Type.Integer(),
  },
  { description: "The post model" },
);
export type PostPlainType = Static<typeof PostPlain>;
export const PostReferences = Type.Object(
  { User: UserPlain },
  { description: "The post model" },
);
export type PostReferencesType = Static<typeof PostReferences>;
export const PostReferencesDeep = Type.Object(
  { User: User },
  { description: "The post model" },
);
export type PostReferencesDeepType = Static<typeof PostReferencesDeep>;
export const Post = Type.Composite([PostPlain, PostReferences]);
export type PostType = Static<typeof PostReferences>;
export const PostDeep = Type.Composite([PostPlain, PostReferencesDeep]);
export type PostDeepType = Static<typeof PostDeep>;
