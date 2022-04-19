# IVD Lib V2

# Installing

```bash
npm install @yek-plus/ivd
yarn add @yek-plus/ivd
```

# Basic Usage

```js
const Ivd = require("@yek-plus/ivd");
const ivd = new Ivd()
ivd.methods.Org({
    ilCode: Tax State Code,
    vdCode: Tax Province Code,
    tckNo:Turkish Identification Number,
    vNo: Tax Number,
  })
  .then(console.log);
```

# Setup

## constructor

### Inputs

| property | type  | required | default                       | description    |
| -------- | ----- | -------- | ----------------------------- | -------------- |
| fetch    | Fetch | false    | Fetch from node-fetch package | fetch function |

## update

### Inputs

| property      | type   | required | default                       | description              |
| ------------- | ------ | -------- | ----------------------------- | ------------------------ |
| options       | object | true     | null                          | contractor fields object |
| options.fetch | Fetch  | false    | Fetch from node-fetch package | fetch function           |

# Methods

## Org

### Inputs

| property | type     | required | default | description                   |
| -------- | -------- | -------- | ------- | ----------------------------- |
| ilCode   | `string` | true     | null    | State Code                    |
| vdCode   | `string` | true     | null    | Tax region code               |
| tckn     | `string` | true     | null    | Turkish Identification Number |
| vNo      | `string` | true     | null    | Tax Number                    |

### Response

| property         | type      | description                                         |
| ---------------- | --------- | --------------------------------------------------- |
| status           | `boolean` | Shows method is return without error                |
| data             | `object`  | If method return with error, it will be null        |
| data.status      | `string`  | Status of organization                              |
| data.status_text | `string`  | Status text of organization                         |
| data.tckNo       | `string`  | If check with tckNo org, it will returns tckNo back |
| data.vkNo        | `string`  | If check with vkNo org, it will returns vkNo back   |
| data.vdCode      | `string`  | Returns vdCode back                                 |
| data.title       | `string`  | Title of organization                               |
| data.valid       | `boolean` | Organization is active status                       |

### Usage

```js
const Ivd = require("@yek-plus/ivd");
const ivd = new Ivd()
ivd.methods.Org({
    ilCode: Tax State Code,
    vdCode: Tax Province Code,
    tckNo:Turkish Identification Number,
    vNo: Tax Number,
  })
  .then(console.log);
```

## IlList

### Inputs

| property | type | required | default | description |
| -------- | ---- | -------- | ------- | ----------- |

### Response

| property    | type      | description                                  |
| ----------- | --------- | -------------------------------------------- |
| status      | `boolean` | Shows method is return without error         |
| data        | `array`   | If method return with error, it will be null |
| data[]      | `object`  | State item                                   |
| data[].code | `string`  | Code of state                                |
| data[].name | `string`  | Name of state                                |

### Usage

```js
const Ivd = require('@yek-plus/ivd')
const ivd = new Ivd()
ivd.methods.IlList().then(console.log)
```

## DaireList

### Inputs

| property | type     | required | default | description   |
| -------- | -------- | -------- | ------- | ------------- |
| ilCode   | `string` | true     | null    | Code of state |

### Response

| property         | type      | description                                  |
| ---------------- | --------- | -------------------------------------------- |
| status           | `boolean` | Shows method is return without error         |
| data             | `array`   | If method return with error, it will be null |
| data[]           | `object`  | tax region item                              |
| data[].code      | `string`  | Code of state                                |
| data[].name      | `string`  | Name of state                                |
| data[].orgOid    | `string`  | OrgOid of state                              |
| data[].code-name | `string`  | Code-name combination of state               |
| data[].name-code | `string`  | Name-code combination of state               |
| data[].ilcode    | `string`  | Returns ilCode                               |

### Usage

```js
const Ivd = require('@yek-plus/ivd')
const ivd = new Ivd()
ivd.methods
  .DaireList({
    ilCode: '035',
  })
  .then(console.log)
```
