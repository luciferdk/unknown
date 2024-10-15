import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



// Create the main Hono app


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();


// app.post('/api/user/signup', (c) => {
// 	return c.text('signup route')
// })

// app.post('/api/user/signin', (c) => {
// 	return c.text('signin route')
// })

// app.post('/api/user/blog', (c) => {
// 	return c.text('signin route')
// })

// app.put('/api/user/blog', (c) => {
// 	return c.text('signin route')
// })

// app.get('/api/user/blog/:id', (c) => {
// 	const id = c.req.param('id')
// 	console.log(id);
// 	return c.text('get blog route')
// })


app.get('/api/user/bulk', (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL, // Access DATABASE_URL from env
	}).$extends(withAccelerate())

	return c.text('Blog is already written')
})

export default app;