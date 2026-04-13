# RENAVAM — Technical Specification

## What is RENAVAM

RENAVAM (Registro Nacional de Veículos Automotores) is the unique vehicle identification number assigned by Brazil's DENATRAN/SENATRAN. Every motor vehicle registered in Brazil receives an 11-digit RENAVAM. Older vehicles may have 9-digit REAVAMs, which are valid and handled by left-padding to 11 digits before validation.

## Format

```
XXXXXXXXXX-D
│         │ └─ check digit (1 digit)
│         └─── separator (optional, stripped before validation)
└───────────── base number (10 digits)
```

Total: 11 digits (without separator). Formatted display uses a single dash before the last digit.

## Algorithm

### Check digit calculation

Given a RENAVAM string:

1. **Strip** formatting characters (`.` and `-`)
2. **Left-pad** with zeros until the string is 11 digits (handles legacy 9-digit numbers)
3. **Apply weights** `[3, 2, 9, 8, 7, 6, 5, 4, 3, 2]` to positions 0–9 (the 10 base digits), computing the weighted sum
4. **Compute** `remainder = (sum × 10) % 11`
5. **Edge case:** if `remainder === 10`, the check digit is `0`; otherwise the check digit equals `remainder`
6. **Compare** the computed check digit against the digit at position 10

### Example — `72176426415`

| Position | Digit | Weight | Product |
|----------|-------|--------|---------|
| 0 | 7 | 3 | 21 |
| 1 | 2 | 2 | 4 |
| 2 | 1 | 9 | 9 |
| 3 | 7 | 8 | 56 |
| 4 | 6 | 7 | 42 |
| 5 | 4 | 6 | 24 |
| 6 | 2 | 5 | 10 |
| 7 | 6 | 4 | 24 |
| 8 | 4 | 3 | 12 |
| 9 | 1 | 2 | 2 |
| **Sum** | | | **204** |

`(204 × 10) % 11 = 2040 % 11 = 5` → check digit = **5** ✓

## Edge Cases

| Case | Description | Example |
|------|-------------|---------|
| Formatted input | Dash before check digit must be accepted | `'7217642641-5'` → valid |
| Legacy 9-digit | Left-padded to 11 before calculation | `'540883078'` treated as `'00540883078'` |
| Check digit = 0 | When `(sum × 10) % 11 === 10`, digit is 0 | `'12345678900'` → valid |

## API Reference

### `validateBr.renavam(value: string): boolean`

Returns `true` if the RENAVAM is valid. Accepts plain digits or formatted strings (with dash).

```typescript
import { validateBr } from 'js-brasil';

validateBr.renavam('72176426415')   // true
validateBr.renavam('7217642641-5')  // true  (formatted)
validateBr.renavam('72176426414')   // false (wrong check digit)
```

### `maskBr.renavam(value: string): string`

Applies the display mask. Short input (< 9 digits) uses `XXXXXXXX-X`; full input uses `XXXXXXXXXX-X`.

```typescript
import { maskBr } from 'js-brasil';

maskBr.renavam('72176426415')  // '7217642641-5'
```

### `create_renavam(renavam: string): number` *(internal)*

Computes and returns the expected check digit as a number (0–9). Left-pads the input to 11 digits automatically. Used internally by `validate_renavam`.

```typescript
import { create_renavam } from 'js-brasil/src/create';

create_renavam('7217642641')  // 5
create_renavam('1234567890')  // 0  (edge case: remainder 10 → 0)
```

## Valid / Invalid Examples

| RENAVAM | Valid | Notes |
|---------|-------|-------|
| `72176426415` | ✓ | Standard case |
| `7217642641-5` | ✓ | Formatted with dash |
| `77338872602` | ✓ | From community Go implementation tests |
| `65306981534` | ✓ | From community Go implementation tests |
| `12345678900` | ✓ | Check digit = 0 (edge case) |
| `72176426414` | ✗ | Wrong check digit (should be 5) |
| `12345678909` | ✗ | Wrong check digit (should be 0) |
| `05115024925` | ✗ | Wrong check digit (should be 2) |

## References

- [Gist: Validação de RENAVAM — cagartner](https://gist.github.com/cagartner/efe5e37c9c52063660cd)
- [js-brasil issue #77](https://github.com/mariohmol/js-brasil/issues/77)
- DENATRAN: Registro Nacional de Veículos Automotores
