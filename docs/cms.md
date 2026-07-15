# CMS Workflow

## Purpose
This document describes how external content sync should work for YSP Techwiser.

## CMS rules
- `CMS_WEBHOOK_SECRET` must be set before the sync route is exposed.
- Incoming CMS requests must include the correct secret header.
- Invalid payloads must be rejected.
- Content updates should upsert articles by slug.

## Webhook flow
1. CMS sends article data to `/api/cms/webhook`.
2. The request includes `x-cms-webhook-secret`.
3. The server verifies the secret.
4. The article payload is validated.
5. The article is saved or updated in MongoDB.

## Content states
- `draft`
- `pending_review`
- `published`
- `scheduled`
- `archived`

## Safety
- Do not trust anonymous sync requests.
- Keep uploads disabled until storage keys are configured.
- Review all synced content before publishing externally.
