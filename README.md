### Development

- `npm install`
- `cp .env.example .env`
- change ENV values if needed
- `npm run dev`

Development API URL: `http://localhost:<APP_PORT`>

### Production
- `docker build -t clippy:latest .`
- `cp .env.example .env`
- change ENV values if needed
- `docker run -p 3000:3000 --name clippy --env-file .env -d clippy:latest`
- change `3000:3000` to the port you want to expose

Production API URL: `http://localhost:<EXPOSED PORT`>