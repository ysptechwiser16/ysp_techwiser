# Deployment Guide

## Goal
Deploy YSP Techwiser safely after the app is built, data is seeded, and environment variables are set.

## Recommended flow
1. Keep the working copy in Termux.
2. Push clean commits to GitHub.
3. Connect the repo to your deployment platform.
4. Add environment variables before first deploy.
5. Run a production build check before launch.

## Required environment variables
- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `CMS_WEBHOOK_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `CLOUDINARY_UPLOAD_PRESET`

## Safe deployment checklist
- MongoDB is reachable.
- Seed data has been added.
- Uploaded media is disabled until storage keys exist.
- Webhook secret is set before external sync.
- `npm run build` passes without errors.
- All major routes return valid pages.

## Notes
- Keep GitHub as the source of truth.
- Keep a phone-storage backup as a recovery copy.
- Do not enable upload routes before storage config is ready.
