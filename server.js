import { createServer } from 'node:http';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.PORT || 3001);
const responsesFile = join(dirname(fileURLToPath(import.meta.url)), 'data', 'survey-responses.json');

const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  response.end(JSON.stringify(body));
};

async function readResponses() {
  try { return JSON.parse(await readFile(responsesFile, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
}

async function saveResponse(submission) {
  await mkdir(dirname(responsesFile), { recursive: true });
  const responses = await readResponses();
  responses.push(submission);
  const temporaryFile = `${responsesFile}.tmp`;
  await writeFile(temporaryFile, JSON.stringify(responses, null, 2));
  await rename(temporaryFile, responsesFile);
}

createServer(async (request, response) => {
  if (request.method === 'OPTIONS') return sendJson(response, 204, {});
  if (request.method !== 'POST' || request.url !== '/api/survey-responses') return sendJson(response, 404, { error: 'Not found' });

  let body = '';
  request.on('data', chunk => {
    body += chunk;
    if (body.length > 100_000) request.destroy();
  });
  request.on('end', async () => {
    try {
      const payload = JSON.parse(body);
      if (!payload.answers || typeof payload.answers !== 'object' || Array.isArray(payload.answers)) {
        return sendJson(response, 400, { error: 'A survey answers object is required.' });
      }
      const submission = { id: crypto.randomUUID(), submittedAt: new Date().toISOString(), answers: payload.answers };
      await saveResponse(submission);
      return sendJson(response, 201, { id: submission.id, message: 'Response saved.' });
    } catch (error) {
      console.error('Unable to save survey response:', error);
      return sendJson(response, 400, { error: 'Unable to save this response.' });
    }
  });
}).listen(port, () => console.log(`Survey API listening at http://localhost:${port}`));
