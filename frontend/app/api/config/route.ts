/**
 * Runtime configuration endpoint
 * Returns environment variables from the running container
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    API_DOMAIN: process.env.API_DOMAIN || 'http://localhost:8010',
    WS_DOMAIN: process.env.WS_DOMAIN || 'ws://localhost:8010',
  });
}

// Force dynamic rendering to pick up runtime environment variables
export const dynamic = 'force-dynamic';
