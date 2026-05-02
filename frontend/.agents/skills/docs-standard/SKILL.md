---
name: docs-standard
description: Standards for TSDoc/JSDoc function annotation in TSX/TS files.
---

# Skill: TSX Function Annotation (TSDoc/JSDoc)

## Purpose

Write standard TSDoc/JSDoc comments for functions, components, hooks, and types in `.tsx` / `.ts` files.

---

## Annotation Rules

### 1. Basic Structure

```ts
/**
 * @brief Short, single-line description of what the function does.
 *
 * Optional extended description if more context is needed.
 *
 * @template T  - Generic type parameter (if applicable)
 * @param  name - Name and meaning of the parameter
 * @returns     - Description of the return value
 *
 */
```

### 2. React Component

```tsx
/**
 * @brief Renders a user card with avatar and display name.
 *
 * @param props.userId   - The ID of the user to display
 * @param props.onClick  - Callback fired when the card is clicked
 * @returns JSX element representing the user card
 */
export const UserCard = ({ userId, onClick }: UserCardProps): JSX.Element => { ... };
```

### 3. Custom Hook

```tsx
/**
 * @brief Hook that manages the fetch state for an API request.
 *
 * @template T         - The expected shape of the returned data
 * @param url          - The endpoint URL to call
 * @param options      - Optional fetch config (headers, method, ...)
 * @returns `{ data, loading, error }` — the current request state
 *
 */
export function useFetch<T>(url: string, options?: RequestInit) { ... }
```

### 4. Template / Generic Converter

```ts
/**
 * @brief Converts a response object to a custom type T.
 *
 * This template requires specialisation for each concrete type.
 * Users must implement their own overload for the desired type.
 *
 * @template T     - The target type to convert into
 * @param response - The raw response object to convert
 * @returns        - An instance of type T
 *
 */
function convertResponse<T>(response: ResponseObject): T { ... }
```

---

## Key Tags

| Tag           | When to use                                             |
| ------------- | ------------------------------------------------------- |
| `@brief`      | One-line summary (required)                             |
| `@param`      | Describes each input parameter                          |
| `@returns`    | Describes the return value                              |
| `@template`   | Describes a generic type parameter                      |
| `@example`    | Provides a real-world usage example                     |
| `@throws`     | Documents exceptions that may be thrown                 |
| `@deprecated` | Marks a function as obsolete; include the replacement   |
| `@see`        | References a related function or document               |
| `@internal`   | Marks something as internal-only; not for public export |

---

## Writing Guidelines

- `@brief` must always be the **first line** — keep it concise, no trailing full stop
- `@param` format: `@param paramName - Description`
- For React props, use `@param props.fieldName` instead of `@param props`
- Do not repeat type information in comments — TypeScript types already cover that
- Always include `@example` for any public or exported function

---

## Full Real-World Example

```tsx
/**
 * @brief Converts a response object to a custom type.
 *
 * Users must specialise this template for each concrete type.
 *
 * @template T     - The target type to convert into
 * @param response - The raw object returned from the API
 * @returns An instance of T
 * @throws {TypeError} If the response is invalid
 */
export function toCustomType<T>(response: ResponseObject): T {
  // implementation
}
```
