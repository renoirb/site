---
title: Using read-only array of strings as source for type
locale: en-CA
createdAt: 2021-01-27
updatedAt: 2021-01-27
status: publish
revising: false
tags:
  - ECMAScript
  - JavaScript
---

Instead of doing

```typescript
export interface IPerson {
  gender: 'm' | 'f' | 'nb' // Hard-coded strings
}
```

We can do

```typescript
const GENDERS = ['m', 'f', 'nb'] as const
export interface IPerson {
  gender: typeof GENDERS[number]
}
```

## Using Enum and user-defined discriminator

On the same idea as above, one can use Enum and utility functions expanded from
Enums

[TypeScript type Discriminator factory](https://gist.github.com/renoirb/d30e7edbe32d9c6b9c2006b13db7a016)

## Create a type based on the property of another

We can create a type from picking a property from an existing nested one.

Say we want `gender` from IPerson, because tat type doesn't exist

```typescript
const GENDERS = ['m', 'f', 'nb'] as const
export interface IPerson {
  likesChocolate: boolean
  gender: typeof GENDERS[number]
}
```

In another file we can want the same property Without re-creating it, say we're
OK that `IEmployee` has completely separate properties ... but we want the type
from the `gender` property

```typescript
import type { IPerson } from '../elsewhere'
export type IPersonGender = IPerson['gender'] // Boom!
export const IEmployee {
  gender: IPersonGender;
}
```

We're basically piggy-backing on [TypeScript's _Indexable
Type_][typescript-handbook-indexable-type], it's [also described in an older
issue about _"bracket notation"_][gh-typescript-issue-bracket-notation]

We can also reuse GENDERS for a validator too

```typescript
const GENDERS = ['m', 'f', 'nb'] as const
export type IPersonGender = typeof GENDERS[number]

// But that function isn't telling what it does
export const isGender = (g) => new Set([...GENDERS]).has(g)
```

If we want to make this more useful, so we can use it in if blocks or get type
hints.

Those are This is an "User-Defined" assertions.

### User-defined type assertion functions

> A type guard is some expression that performs a runtime check that guarantees
> the type in some scope

**Source**
[User-defined type guards](https://exploringjs.com/tackling-ts/downloads/complete-toc.html)
and [TypeScript handbook about user-defined type
guards][typescript-handbook-user-defined-type-guards]

```typescript
const GENDERS = ['m', 'f', 'nb'] as const
export type IPersonGender = typeof GENDERS[number]

export type IGenderIsser = (gender: string) => gender is IPersonGender

// See https://2ality.com/2015/01/es6-set-operations.html
const gendersSet = new Set([...GENDERS])

export const isGender: IGenderIsser = (gender) => {
  let out = gendersSet.has(gender)
  // Because it is a "x is Foo", we have to return a boolean
  // MUST return boolean
  return out
}

// Or, if we're inlining the type
export const isGender2 = (gender: string): gender is IPersonGender => {
  // TYPING =>           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // FUNCTION DEFINITION => ^^^^^^^^^^^^                           ^
  // The Typing is OVERLAPING of the function definition.
  let out = gendersSet.has(gender)
  // Because it is a "x is Foo", we have to return a boolean
  // MUST return boolean
  return out
}
```

Alternatively, you can use [**TypeScript 3.7’s** Assertion
Functions][typescript-handbook-user-defined-assertion-function]

```typescript
export type IGenderAsserter = (
  gender: unknown,
) => asserts gender is IPersonGender

export const assertsIsGender: IGenderAsserter = (input) => {
  const out = isGender(input)
  if (!out) {
    throw new TypeError(`Unexpected value "${input}"`)
  }
  // MUST return undefined
}

// Or, if we're inlining the type
export const assertsIsGender2: (
  gender: unknown,
) => asserts gender is IPersonGender = (input) => {
  // TYPING =>               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // FUNCTION DEFINITION =>                                                           ^
  // The Typing is NOT OVERLAPING of the function definition.
  // https://github.com/microsoft/TypeScript/issues/34523#issuecomment-700491122
  const out = isGender(input)
  if (!out) {
    throw new TypeError(`Unexpected value "${input}"`)
  }
  // MUST return undefined
}
```

Because the mechanics is a bit different from returning a boolean (it returns
void), we can make it clear in the code that we're aren't sure it's there (hence
`unknown`) and then add the assertion function.

[typescript-handbook-indexable-type]:
  https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
  'TypeScript handbook about Indexable Type'
[gh-typescript-issue-bracket-notation]:
  https://github.com/microsoft/TypeScript/issues/28081#issuecomment-432710576
  'also described in an older issue about bracket notation'
[typescript-handbook-user-defined-type-guards]:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  'TypeScript Handbook: A type guard is some expression that performs a runtime check that guarantees the type in some scope'
[typescript-handbook-user-defined-assertion-function]:
  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
  'TypeScript 3.7 Assertion Functions'
