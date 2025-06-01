# Conventional Commit & Branch Naming Rules

You are working on a Next.js TypeScript project that follows strict conventional commit and branch naming conventions. Always adhere to these rules when suggesting commits, branches, or code changes.

## Commit Message Format

```
<type>(<scope>): <description>
```

### Commit Types (Required)

- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code refactoring (no functional changes)
- `style` - Code style/formatting changes
- `perf` - Performance improvements
- `test` - Adding/updating tests
- `docs` - Documentation changes
- `chore` - Maintenance tasks (deps, config, etc.)
- `ci` - CI/CD changes
- `build` - Build system changes

### Branch Naming Convention

```
<type>/<short-description>
```

**Branch Types:**

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `chore/` - Maintenance tasks
- `docs/` - Documentation
- `test/` - Testing
- `perf/` - Performance improvements
- `style/` - Code styling
- `ci/` - CI/CD related
- `hotfix/` - Critical fixes

## Rules & Guidelines

### Length Constraints

- **Commit messages**: Max 50 characters total
- **Branch names**: Max 30 characters total
- **Description part**: Max 20 characters for branches, 40 for commits

### Formatting Rules

- Use **imperative mood**: "add" not "added"
- Use **kebab-case** for branches: `user-auth` not `userAuth`
- **No periods** at end of commit messages
- **Lowercase** descriptions

### Scope (Optional)

Common scopes for this project:

- `auth` - Authentication
- `ui` - User Interface
- `api` - API related
- `types` - Type definitions
- `utils` - Utilities
- `config` - Configuration

## Examples

### ✅ Good Commits

```
feat: add user dashboard
fix: resolve payment timeout
refactor: simplify auth logic
perf: optimize image loading
chore: update dependencies
test: add utils coverage
docs: update README
style: format components
feat(auth): add login validation
fix(ui): resolve button alignment
```

### ✅ Good Branches

```
feature/user-dashboard
fix/payment-timeout
refactor/auth-logic
perf/image-optimization
chore/deps-update
test/utils-coverage
docs/readme-update
style/component-format
hotfix/security-patch
```

### ❌ Avoid These

```
# Too vague
fix: bug fix
feat: new stuff
update: changes

# Too long
feat: implement comprehensive user authentication system
fix: resolve payment gateway timeout issue when processing

# No type
add login page
user-dashboard
payment-fix

# Wrong format
added new feature
fixing bugs
updating styles
```

## When Suggesting Changes

1. **Always propose appropriate commit messages** following this format
2. **Suggest branch names** when creating new features/fixes
3. **Keep descriptions concise** but meaningful
4. **Use appropriate types** based on the nature of changes
5. **Consider scopes** for larger changes affecting specific areas

## Integration with Development Workflow

- Use these rules when suggesting git commands
- Apply them when organizing code changes
- Reference them when reviewing pull requests
- Maintain consistency across all project contributions
