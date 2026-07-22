# YSP Techwiser — AGENTS.md

## Project Summary
YSP Techwiser is a premium tech media website focused on smartphones, laptops, accessories, AI, reviews, guides, news, comparisons, videos, and creator collaborations.

## Current Stage
Phase 2 — Admin CMS refinement

## Already Done
- Next.js app is set up
- MongoDB Atlas connection works
- `.env.local` is configured
- Auth scaffold exists
- Admin routes exist
- Sign-in page exists
- Logout system exists
- Admin route protection works
- Comments API invalid `articleId` bug is fixed
- Core route/API structure exists

## Main Goals
- Refine the admin CMS
- Improve editor workflows
- Polish media management
- Tighten moderation tools
- Clean up temporary and backup files safely
- Prepare the repo for production and deployment

## Repo Areas
- `app/`
- `components/`
- `lib/`
- `models/`
- `middleware.ts`
- `public/`
- `docs/`
- `scripts/`

## Working Rules
- Inspect first, then change.
- Make the smallest safe change.
- Do not touch working auth, route protection, or MongoDB code unless required.
- Do not delete files before checking whether they are safe to remove.
- Keep changes narrow and reversible.
- Verify after every meaningful change.
- Use bash-friendly commands only.
- Assume work may happen from Termux on Android, so keep commands simple.
- Keep secrets out of source control and out of logs.

## Git Rules
- Do not create new branches unless explicitly asked.
- If you modify files, keep the worktree clean.
- Commit only when requested.
- Do not amend or rewrite existing commits unless explicitly asked.
- Check `git status` before finishing any task.

## Verification Commands
Use the relevant ones after changes:
- `npm run build`
- `npx tsc --noEmit`
- `git status --short`
- route/API checks with `curl -I` or `curl -i`

## Preferred Workflow
1. Inspect the relevant files.
2. Explain the exact issue.
3. Apply the smallest safe fix.
4. Verify with commands.
5. Summarize the change.
6. Move to the next small task only after verification passes.

## Safety
- Never remove `.env.local`
- Never commit secrets
- Never break route protection
- Never replace a working system without a reason
