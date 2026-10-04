---
title: "Code preview"
date: 2026-10-04
draft: true
---

Inline code looks like `hugo server -D`, `git status` or `SELECT * FROM races`.

## Python

```python
from dataclasses import dataclass


@dataclass
class Race:
    name: str
    distance_m: int

    def pace(self, seconds: float) -> float:
        return seconds / (self.distance_m / 500)


print(f"{Race('K1 500', 500).pace(105.3):.2f} s/500m")
```

## Go

```go
package main

import "fmt"

func main() {
	results := map[string]float64{"K1": 105.3, "C1": 118.7}
	for boat, t := range results {
		fmt.Printf("%s: %.1fs\n", boat, t)
	}
}
```

## C

```c
#include <stdio.h>

int main(void) {
    int m[2][2] = {{1, 2}, {3, 4}};
    printf("det = %d\n", m[0][0] * m[1][1] - m[0][1] * m[1][0]);
    return 0;
}
```

## SQL

```sql
SELECT a.name, COUNT(*) AS races
FROM athletes a
JOIN results r ON r.athlete_id = a.id
WHERE r.year >= 2015
GROUP BY a.name
ORDER BY races DESC
LIMIT 10;
```

## TypeScript

```typescript
type Result = { athlete: string; time: number };

const fastest = (rs: Result[]): Result | undefined =>
  rs.reduce<Result | undefined>((best, r) => (!best || r.time < best.time ? r : best), undefined);
```

## Shell

```bash
hugo server -D
hugo --minify --gc
```

## No language

```
plain text block without a language
  indentation is preserved
```

## Long line

```python
very_long_line = "this line is intentionally long to show how the code block scrolls horizontally instead of wrapping the text"
```
