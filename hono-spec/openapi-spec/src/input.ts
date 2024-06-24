import {z} from "@hono/zod-openapi"

export const paramsSchema = z.object({
    id: z.string().min(1).max(20).openapi({
      param:{
        name: "id",
        in: "path"
      },
      example: "123"
    })
  })