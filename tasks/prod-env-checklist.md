# Production Environment Variables Checklist

## Domains

- Marketing: `fitfast.app`
- Client PWA: `client.fitfast.app`
- Admin panel: `admin.fitfast.app`

## Convex Prod Env Vars

| Variable                       | Dev Value                                   | Prod Value                      | Notes                                         |
| ------------------------------ | ------------------------------------------- | ------------------------------- | --------------------------------------------- |
| `CLIENT_APP_URL`               | `http://localhost:3000`                     | `https://client.fitfast.app`    | Used in invite emails, notification links     |
| `SITE_URL`                     | `http://localhost:3001`                     | `https://admin.fitfast.app`     | Admin app URL                                 |
| `AUTH_SECRET`                  | (dev secret)                                | **Generate new**                | `openssl rand -hex 32`                        |
| `JWT_PRIVATE_KEY`              | (dev key)                                   | **Generate new**                | RSA key pair for auth tokens                  |
| `JWKS`                         | (dev JWKS)                                  | **Generate new**                | Matching public key for JWT_PRIVATE_KEY       |
| `RESEND_API_KEY`               | (dev key)                                   | Same or new prod key            | Domain `fitfast.app` verified on Resend       |
| `RESEND_FROM_EMAIL`            | Not set (defaults to `noreply@fitfast.app`) | `FitFast <noreply@fitfast.app>` | Optional — default in code is fine            |
| `OPENROUTER_API_KEY`           | (dev key)                                   | Same or new prod key            | Used for AI plan generation + FAQ translation |
| `GOOGLE_GENERATIVE_AI_API_KEY` | (dev key)                                   | Same or new prod key            | Used for OCR                                  |
| `VAPID_PUBLIC_KEY`             | (dev key)                                   | **Generate new**                | `npx web-push generate-vapid-keys`            |
| `VAPID_PRIVATE_KEY`            | (dev key)                                   | **Generate new**                | Matching private key                          |
| `LANGFUSE_PUBLIC_KEY`          | (dev key)                                   | New prod project key            | Optional for prod observability               |
| `LANGFUSE_SECRET_KEY`          | (dev key)                                   | New prod project key            | Optional for prod observability               |
| `DEMO_MODE`                    | `false`                                     | `false`                         | Keep off in prod                              |
| `SEED_ENABLED`                 | `true`                                      | `false`                         | **Must be false in prod**                     |
| `SEED_USER_PASSWORD`           | `test12345`                                 | **Remove**                      | Not needed in prod                            |

## Steps to Set Up Prod

1. Go to Convex Dashboard → Project → Create production deployment (US Virginia — default, EU has 30% surcharge not worth it)
2. Set all env vars above on the prod deployment
3. Deploy: `npx convex deploy --prod`
4. Seed initial data (exercises, foods, system config, coach knowledge) via migration scripts
5. Create the coach account manually
6. Verify email delivery by testing invite flow
