# `@migpalg/currweek`

**⚠️ THIS PACKAGE IS STILL IN DEVELOPMENT**

Returns the current week number

## 🚀 Getting started

Install the package with your favorite package manager:

```bash
pnpm add @migpalg/currweek
# with yarn: yarn add @migpalg/currweek
# with npm: npm install @migpalg/currweek
```

## 💡 Usage

The simplest way to use this package is importing it and using it directly:

```js
import { getWeekNumber } from '@migpalg/currweek';

const currentWeekNumber = getWeekNumber(); // Returns current week number
```

### Get week number from a specific date

Pass the target date as parameter:

```js
import { getWeekNumber } from '@migpalg/currweek';

const targetWeekNumber = getWeekNumber(new Date('2021-11-09T00:00:00.000Z'));
```
