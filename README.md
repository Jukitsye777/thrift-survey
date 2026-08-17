# Second Story thrift survey

## Run locally

To run the frontend locally:

```bash
npm run dev
```

Create a `.env.local` file from `.env.example` and add the public URL of your deployed Express API:

```bash
VITE_API_BASE_URL=https://your-backend.vercel.app
```

The frontend submits completed surveys to `POST /surveys` as:

```json
{ "answers": { "age": "18–22", "profile": "Student" } }
```

## Deploying the API

Set `VITE_API_BASE_URL` when building the frontend to your deployed API origin, for example:

```bash
VITE_API_BASE_URL=https://your-backend.vercel.app npm run build
```

Set `CORS_ORIGIN` in the backend Vercel project to your site origin to restrict browser access:

```bash
CORS_ORIGIN=https://secondstory.example
```
