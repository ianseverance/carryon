// @flow

export const _isArr = (x: mixed): boolean %checks => Array.isArray(x)
export const _isBool = (x: mixed): boolean %checks => typeof x === 'boolean'
export const _isNeg = (x: number): boolean %checks => x < 0

/**
 * Using the `Number.isNaN()` method instead of the global `isNaN()` method
 * because the global method has conversion issues.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 *
 * @param {mixed} x
 * @return {boolean}
 * @internal
 */
export const _isNum = (x: mixed): boolean %checks =>
  typeof x === 'number' && !Number.isNaN(x)

export const _isNumOrStr = (x: mixed): boolean %checks => _isNum(x) || _isStr(x)
export const _isStr = (x: mixed): boolean %checks => typeof x === 'string' && x != null

/**
 * Check if the given values are valid.
 *
 * @param {array} ...args
 * @return {boolean}
 * @internal
 */
export const _isValid = (...args: Array<mixed>): boolean => {
  const argArr = [args]
  for (let value of argArr) {
    if (value == null || value !== value) {
      return false
    }
  }
  return true
}

/**
 * Filter `value` for only allowed CSS values (which inlcudes negative values)
 * and units.
 *
 * Note, this expression does not allow:
 * 1. Math operations
 * 2. Binary, octal or hexadecimal form numbers
 *
 * @param {mixed} value
 * @return {string|void}
 * @internal
 */
export const _isValidUnit = (value: mixed): ?string => {
  if (_isStr(value)) {
    const val: string = value
    const exp = /^((\-|\+)?(\.+([0-9]+))?(([0-9]+)+(\.([0-9])+)?))+(\%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)?$/g

    if (exp.test(val)) {
      return val
    } else {
      throw new Error(`The parameter you provided is not a valid CSS value/unit.`)
    }
  } else {
    throw new Error(`The parameters you provided are invalid.
      You provided:
      @param 'value' = ${typeof value} (must be string)`)
  }
}
