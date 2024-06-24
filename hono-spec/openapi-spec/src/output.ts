import {z} from "@hono/zod-openapi"

export const userSchema = z.object({
    name: z.string().min(1).max(10).openapi({
      example: "jhon doe"
    }),
    age: z.number().int().openapi({
      example: 12
    }),
    id: z.string().min(1).max(10).openapi({
      example: "25"
    })
  })
  