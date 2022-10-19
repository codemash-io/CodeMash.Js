# CodeMash types

Generate types

```bash
x typescript http://localhost:5002 ./src/types/codemash.dtos.ts
x typescript http://localhost:5001 ./tests/types/codemash.hub.dtos.ts
```

To update types

```bash
x typescript ./src/types/codemash.dtos.ts
x typescript ./tests/types/codemash.hub.dtos.ts
```

Ensure of what was changed

```bash
git diff ./src/types/codemash.dtos.ts
git diff ./tests/types/codemash.hub.dtos.ts
```

Run formatter

```bash

```

To generate types you need to have 'x' tool and dotnet SDK installed. https://docs.servicestack.net/web-new

```bash
dotnet tool install --global x
dotnet tool update -g x
```
