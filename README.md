This is a simple application that renders a list of users fetched from backend.

Since this is a very simple task, I tried adding extensibility without overengineering.

Backend - server/
Used NodeJS to serve our service
Used express as our REST middleware
Intentionally did not create any Unit or e2e test for simplicity. Will use jest, supertest just in case.
Intentionally did not use jwt, extensive validations.

Frontend - client/
Using Sass and CSS module out of the box
Intentionally did not create any Unit or e2e test for simplicity. Will use jest, puppetteer just in case.
May look like overengineering but I intentionally added router to allow adding of new pages easily.
Implemented basic responsiveness, but can easily add responsiveness(see variables.scss)

I usually use dev libraries to improve quality like eslint, flow, husky, prettier. But will not add for now.
