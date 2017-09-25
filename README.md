# eslint-config: *gik*
*GIK's approach to EcmaScript*

These are the common rules that all of our projects must comply.

Checkout our specialized configs that depend on this.

- __[@gik/cycle](http://github.com/gikmx/eslint-config-cycle)__ for CycleJS apps.
- __[@gik/node](http://github.com/gikmx/eslint-config-node)__ for generic NodeJS apps.

### Installation

```bash
npm i -D @gik/eslint-config
```

After installing, make sure to have installed these peer-dependencies on your project.

*Look for the correct version for the peer-dependencies*
``` bash
npm ls --depth=0
```

*Install the corresponding versions according to output*
``` bash
npm i -D eslint@^x.y.z babel-eslint@^x.y.z eslint-plugin-import@^x.y.z
```

### Usage

In the corresponding `.eslintrc` file (or equivalent) add the `extends` property.
``` json
{
  "extends": "@gik"
}
```
