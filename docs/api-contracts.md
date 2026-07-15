# API Contracts

## `/api/search`
**Method:** `GET`

**Query params:**
- `q`

**Returns:**
- `results`: array of articles and videos

---

## `/api/bookmarks`
**Methods:** `GET`, `POST`

### GET
**Query params:**
- `email`

**Returns:**
- `results`: bookmarks for the email address

### POST
**Body:**
- `userEmail`
- `articleId`

**Returns:**
- created bookmark or duplicate marker

---

## `/api/analytics`
**Method:** `GET`

**Returns:**
- summary counts
- top articles
- top videos

---

## `/api/comments`
**Methods:** `GET`, `POST`

### GET
**Query params:**
- `articleId`

**Returns:**
- approved comments for the article

### POST
**Body:**
- `articleId`
- `userName`
- `userEmail`
- `message`

**Returns:**
- created comment with `pending_review`

---

## `/api/submissions`
**Methods:** `GET`, `POST`

### GET
**Returns:**
- latest submissions

### POST
**Body:**
- `fullName`
- `email`
- `title`
- `submissionType`
- `details`

**Returns:**
- created submission with `pending_review`

---

## `/api/cms/webhook`
**Method:** `POST`

**Header:**
- `x-cms-webhook-secret`

**Returns:**
- `ok: true` after secure upsert

---

## `/api/upload/signature`
**Method:** `POST`

**Returns:**
- upload signature data only when storage keys exist
