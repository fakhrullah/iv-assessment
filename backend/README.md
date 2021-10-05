# A small “backend for frontend” NodeJS API for e.g. validation and error handling,

## How to run

### How to run locally

1. Clone the repository. `git clone git@github.com:fakhrullah/iv-assessment.git`
2. Move into backend directory. `cd iv-assessment/backend`
3. Then run the with PORT environment you like. `PORT=3000 npm start`

### How to run using docker


---

### Problem I am having.

**Problem :** Url https://qa-interview-test.splytech.dev/api/drivers is down.

**Solution suggested :**

**Problem :**

### If I have more time, what will I do?

1. Use linter.
2. Use typescript.
3. Use more fastify feature. For example, fastify has it own validation for JSONSchema.
4. Use own database. Fetch from external API store on our own. So, even if external API down, we can still use our cached data.
  This way, we also make external API service request count less when request to own system is a lot.
  But, there will be going more code to handle how long cached is good fallback. For example, if our data is late by 10 seconds, it is acceptable.
  But if our cached data is late by 1 hour, sending customer location of car 1 hour ago is bad.

