import { createRoute,OpenAPIHono} from '@hono/zod-openapi'
import { paramsSchema } from './input'
import { userSchema } from './output'

const app = new OpenAPIHono()
const getroute = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: paramsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: userSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
app.openapi(getroute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

const postroute = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: paramsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: userSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
app.openapi(postroute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})