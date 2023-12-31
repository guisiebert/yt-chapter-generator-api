import { fastify } from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'

const app = fastify()

app.register(getAllPromptsRoute)




app.get('/', () => {
    return 'Hello world'
})

app.listen({
    port: 3333
}).then(() => console.log('http server running on http://localhost:3333'))