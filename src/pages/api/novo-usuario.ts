import type { APIRoute } from "astro"

const POST: APIRoute = async ({ request }) => {
    const body = await request.json()

    if (body) {
        return new Response(JSON.stringify(body), {
            status: 200
        })
    }

    return new Response(JSON.stringify({}), {
        status: 200
    })
}