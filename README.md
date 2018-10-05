This is a simple application that renders a list of users fetched from backend.

Since this is a very simple task, I tried adding extensibility without overengineering.

Backend - server/
Used NodeJS to serve our service
Used express as our REST middleware
Intentionally did not create any Unit or e2e test for simplicity. Will use jest, supertest just in case.
Intentionally did not use cors, jwt, extensive validations.

Frontend - client/
Intentionally did not create any Unit or e2e test for simplicity. Will use jest, puppetteer just in case.
Intentionally did not use any css frameworks to showcase my CSS understanding and responsive design skills
May look like overengineering but I intentionally added router to allow adding of new pages easily.

I usually use dev libraries to improve quality like eslint, flow, husky, prettier. But will not add for now.
