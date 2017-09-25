# eslint-config: *gik*
*GIK's approach to EcmaScript*

These are the common rules that all of our projects must comply.

Checkout our specialized configs that depend on this.

- __[@gik/cycle](http://github.com/gikmx/eslint-config-cycle)__ for CycleJS apps.
- __[@gik/node](http://github.com/gikmx/eslint-config-node)__ for generic NodeJS apps.

### Installation

```bash
npm i -D eslint @gik/eslint-config
```

### Usage

In the corresponding `.eslintrc` file (or equivalent) add the `extends` property.
``` json
{
  "extends": "@gik"
}
```
