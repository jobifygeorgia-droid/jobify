# API Documentation

## Table of Contents

- [Authorization](#authorization)
- [Profiles](#profiles)
- [Vacancies](#vacancies)
- [Services](#services)
- [Applications](#applications)
- [Services and Invoices](#services-and-invoices)
- [Calendar and Interviews](#calendar-and-interviews)
- [Filter](#filter)
- [Tests](#tests)
- [Categories](#categories)

<details>
<summary>Authorization</summary>

| URL                              | Method | Authorization | Body                                                            | Notes                                  |
| -------------------------------- | ------ | ------------- | --------------------------------------------------------------- | -------------------------------------- |
| /api/login/                      | POST   | არა           | `{"email": "test@example.com", "password": "123456"}`           |                                        |
| /api/logout/                     | POST   |               |                                                                 |                                        |
| /api/token/refresh/              | POST   | არა           |                                                                 |                                        |
| /api/register/                   | POST   |               | See JSON examples                                               | Registration for jobseeker or employer |
| /api/auth/change-password/       | POST   | Bearer Token  | See JSON example                                                | Change password                        |
| /api/request-password-reset-pin/ | POST   |               | `{"email": "aleksandregoguadze2@gmail.com"}`                    |                                        |
| /api/verify-password-reset-pin/  | POST   |               | `{"pin": "678309"}`                                             |                                        |
| /api/reset-password-confirm-pin/ | POST   |               | `{"new_password": "sandro123!", "new_password2": "sandro123!"}` | Confirm password reset                 |
| /api/verify-email/?token=...     | GET    | არა           |                                                                 |                                        |

</details>

<details>
<summary>Profiles</summary>

| URL                                     | Method       | Authorization           | Body             | Notes                            |
| --------------------------------------- | ------------ | ----------------------- | ---------------- | -------------------------------- |
| /api/profile/                           | GET/PATCH    | Bearer Token            | PATCH example    | Change public profile            |
| /api/me/profile/                        | GET          | Bearer Token(jobseeker) |                  | Personal profile                 |
| /api/job-seeker-profiles/               | GET          | Bearer Token            |                  | All jobseekers                   |
| /api/job-seeker-profiles/{id}/          | GET          | Bearer Token            |                  | Specific user                    |
| /api/employer-profiles/                 | GET          | Bearer Token            |                  | All employers                    |
| /api/employer-profiles/{id}/            | GET          | Bearer Token            |                  | Specific employer                |
| /api/job-seeker-profiles/my-applicants/ | GET          | Bearer Token(empoyer)   |                  | Applicants for employer vacancy  |
| /api/me/profile/update/                 | PATCH        | Bearer Token(seeker)    | See JSON example | Update profile with files & data |
| /api/me/profile/work-experiences/       | POST         | Bearer Token(jobseeker) | See JSON example | Create single work experience    |
| /api/me/profile/work-experiences/<id>/  | PATCH/DELETE | Bearer Token(jobseeker) |                  | Edit/delete work experience      |
| /api/me/profile/work-experiences/bulk/  | PATCH        | Bearer Token(jobseeker) | See JSON example | Update multiple work experiences |
| /api/me/profile/educations/             | GET/POST     | Bearer Token            | See JSON example | List/add education               |
| /api/me/profile/educations/{id}/        | DELETE/PATCH | Bearer Token            | See JSON example | Edit/delete specific education   |
| /api/me/profile/educations/bulk/        | POST         | Bearer Token            | See JSON example | Add multiple educations          |
| /api/me/profile/languages/              | POST         | Bearer Token            | See JSON example | Add language                     |
| /api/me/profile/languages/{id}/         | PATCH/DELETE | Bearer Token            | See JSON example | Edit/delete language             |
| /api/me/profile/skills/                 | POST         | Bearer Token            | See JSON example | Add skill                        |
| /api/me/profile/skills/bulk/            | POST         | Bearer Token            | See JSON example | Add multiple skills              |
| /api/me/profile/skills/{id}/            | PATCH/DELETE | Bearer Token            | See JSON example | Edit/delete skill                |

</details>

<details>
<summary>Vacancies</summary>

| URL                        | Method           | Authorization           | Body                                            | Notes                                           |
| -------------------------- | ---------------- | ----------------------- | ----------------------------------------------- | ----------------------------------------------- |
| /api/vacancies/            | GET              | Bearer Token            |                                                 |                                                 |
| /api/vacancies/preferred/  | GET              | Bearer Token(jobseeker) |                                                 | Preferred vacancies by category                 |
| /api/vacancies/{id}/       | GET              | არა                     |                                                 |                                                 |
| /api/vacancies/create/     | POST             | Bearer Token            | See JSON example                                | Optional: is_approved, is_published, is_premium |
| /api/vacancies/my-premium/ | GET              | Bearer Token(empoyer)   |                                                 |                                                 |
| /api/vacancies/premium/    | GET              | Bearer Token            |                                                 |                                                 |
| /api/vacancies/{id}/       | PUT/PATCH/DELETE | Bearer Token(empoyer)   | Optional: is_approved, is_published, is_premium | Requires admin permission to approve            |
| /api/vacancies/my/         | GET              | Bearer Token            |                                                 |                                                 |
| /api/vacancies/drafts/     | GET              | Bearer Token            |                                                 | Drafts visible to employer/admin                |
| /api/vacancies/expired/    | GET              | Bearer Token            |                                                 | Expired vacancies visible to employer/admin     |

</details>

<details>
<summary>Services</summary>

| URL              | Method | Authorization         | Body | Notes                              |
| ---------------- | ------ | --------------------- | ---- | ---------------------------------- |
| /api/my-package/ | GET    | Bearer Token(empoyer) |      | View remaining paid service limits |

</details>

<details>
<summary>Applications</summary>

| URL                                   | Method | Authorization           | Body             | Notes                                  |
| ------------------------------------- | ------ | ----------------------- | ---------------- | -------------------------------------- |
| /api/applications/create/             | POST   | Bearer Token(jobseeker) | See JSON example |                                        |
| /api/applications/                    | GET    | Bearer Token            |                  | Show all applications (admin sees all) |
| /api/applications/my/                 | GET    | Bearer Token(jobseeker) |                  |                                        |
| /api/applications/{id}/update_status/ | PATCH  | Bearer Token(empoyer)   |                  | Update application status              |

</details>

<details>
<summary>Services and Invoices</summary>

| URL                                            | Method | Authorization                 | Body | Notes                    |
| ---------------------------------------------- | ------ | ----------------------------- | ---- | ------------------------ |
| /api/services/                                 | GET    |                               |      | List paid services       |
| /api/services/{id}/                            | GET    |                               |      | Specific service details |
| /api/services/<int:service_id>/create-invoice/ | POST   | Bearer Token (Employer/Admin) |      | Create invoice           |
| /api/invoices/                                 | GET    | Bearer Token (Employer/Admin) |      | User invoices            |
| /api/invoices/{id}/generate/                   | GET    | Bearer Token                  |      |                          |

</details>

<details>
<summary>Calendar and Interviews</summary>

| URL                                              | Method | Authorization | Body             | Notes                             |
| ------------------------------------------------ | ------ | ------------- | ---------------- | --------------------------------- |
| /api/google-calendar/init/                       | GET    | Bearer Token  |                  | Redirect to URL in Postman        |
| /api/auth/google/login-url/                      | GET    | Bearer Token  |                  | Get Google code from browser link |
| /api/auth/google/callback-json/                  | POST   |               |                  |                                   |
| /api/google-calendar/redirect/                   | GET    | Bearer Token  |                  |                                   |
| /api/google-calendar/status/                     | GET    | Bearer Token  |                  |                                   |
| /api/interviews/{application_id}/create-meeting/ | POST   | Bearer Token  | See JSON example |                                   |
| /api/interviews/{application_id}/status/         | GET    | Bearer Token  |                  |                                   |

</details>

<details>
<summary>Filter</summary>

| URL                                                                                           | Method | Authorization | Body | Notes                            |
| --------------------------------------------------------------------------------------------- | ------ | ------------- | ---- | -------------------------------- |
| /api/vacancies/?salary_max=1500                                                               | GET    | არა           |      |                                  |
| /api/vacancies/?salary_min=1500                                                               | GET    | არა           |      |                                  |
| /api/vacancies/?location=Tbilisi                                                              | GET    | არა           |      |                                  |
| /api/vacancies/?category_slug=it                                                              | GET    | არა           |      |                                  |
| /api/vacancies/?vacancy_type=part-time                                                        | GET    | არა           |      |                                  |
| /api/vacancies/?vacancy_type=full-time                                                        | GET    | არა           |      |                                  |
| /api/vacancies/?vacancy_type=remote                                                           | GET    | არა           |      |                                  |
| /api/vacancies/?search=django                                                                 | GET    | არა           |      |                                  |
| /api/vacancies/?location=Tbilisi&vacancy_type=full-time&salary_min=1000&category_slug=it      | GET    | არა           |      |                                  |
| /api/vacancies/?employer={Employer Id}                                                        | GET    | არა           |      | Specific employer vacancies      |
| /api/vacancies/?employer=3&published_range_after=2025-09-26&published_range_before=2025-09-27 | GET    | არა           |      | Search by employer & date range  |
| /api/vacancies/?published_after=2025-09-01                                                    | GET    | არა           |      | Search by published date         |
| /api/vacancies/?published_range_after=2025-09-26&published_range_before=2025-09-27            | GET    | არა           |      | Search by date range             |
| /api/vacancies/?employer={Eployer Id}&published_after=2025-09-01                              | GET    | არა           |      | Employer vacancies by date       |
| /api/vacancies/?company_name={კომპანიის სახელი}                                               | GET    | არა           |      | Search vacancies by company name |
| /api/job-seeker-profiles/?search={მომხმარბლის სახელი}                                         | GET    | Bearer Token  |      | Search jobseeker                 |

</details>

<details>
<summary>Tests</summary>

| URL                              | Method | Authorization | Body             | Notes                                                                                |
| -------------------------------- | ------ | ------------- | ---------------- | ------------------------------------------------------------------------------------ |
| /api/tests/create/{vacancy id}/  | POST   | Bearer Token  | See JSON example | Receive form link; use `replace: true` & `drop_old_results: true` to update existing |
| /api/tests/{vacancy id}/results/ | GET    | Bearer Token  |                  |                                                                                      |

</details>

<details>
<summary>Categories</summary>

| URL              | Method | Authorization | Body | Notes                             |
| ---------------- | ------ | ------------- | ---- | --------------------------------- |
| /api/categories/ | GET    |               |      | List existing categories with IDs |

</details>
