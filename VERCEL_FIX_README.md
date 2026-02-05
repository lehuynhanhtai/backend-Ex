# Vercel Deployment Fix

The "No exports found" error has been fixed by creating a dedicated entry point for Vercel.

## Changes

1.  **`src/vercel.ts`**: This file adapts the NestJS app for serverless execution.
2.  **`vercel.json`**: Configures Vercel to use `src/vercel.ts`.

## Deployment

You can now deploy to Vercel.

## Note

If you see file lock errors during local build (like `EPERM` on `query_engine-windows.dll.node`), it's because your local server is running. Stop the server (`Ctrl+C`) before building locally.
