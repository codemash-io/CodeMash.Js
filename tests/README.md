# Tests

## Run

1. Install dependencies

```bash
yarn
```

2. Ensure that all environment variables are in ./tests/data/config/.env file See [example](./data/config/.env.template)

3. Run tests

All tests

```bash
npm test
```

Specific tests

```bash
npm test -- --grep "db.find"
```
