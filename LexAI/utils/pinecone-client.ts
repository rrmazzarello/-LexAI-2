import { Pinecone } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error('Pinecone environment or api key vars missing');
}

async function initPinecone() {
  try {
    const pinecone = new Pinecone({
      environment: process.env.PINECONE_ENVIRONMENT ?? 'gcp-starter', //this is in the dashboard
      apiKey: process.env.PINECONE_API_KEY ?? '5f929de0-c862-42ad-b41f-73946bec3209',
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

export const pinecone = await initPinecone();
