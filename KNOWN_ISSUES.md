# YSP Techwiser — Known Issues

## Critical Issues
- No active critical blocker is currently known from the last stable state.

## Already Fixed
- MongoDB connection failures
- Atlas URI formatting issues
- Comment API CastError from invalid `articleId`
- Admin route protection issues
- Sign-in redirect loop issues
- Missing logout button rendering

## Remaining Cleanup
- Remove leftover backup files (`*.bak`, `*.phase2.bak`)
- Remove temporary audit files if they are no longer needed
- Clean `.next` cache when necessary
- Keep repo root tidy before final deployment

## Remaining Refinement
- Admin CMS polish
- Editor workflow refinement
- Media page refinement
- Content publishing flow
- Moderation flow
- Final SEO pass
- Deployment hardening

## Notes
- Admin auth is working
- MongoDB Atlas is connected
- Protected routes are working
- Comments API now handles invalid `articleId` safely
- The site is ready for refinement, not blocked on core infrastructure
