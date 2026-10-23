# Python Foundations

## 1. What Is Python?

Python is a programming language used to give instructions to a computer.

Common uses include:
- General-purpose programming
- Backend development and APIs
- Automation and scripting
- Data analysis
- Artificial intelligence and machine learning

## 2. First Python Program

```python
print("Hello, World!")
```

**Explanation:**
- `print()` is a built-in Python function used to display information.
- Parentheses `()` contain the value or values passed to the function.
- `"Hello, World!"` is a string (text enclosed in quotation marks).

Output:

```text
Hello, World!
```

## 3. Python vs JavaScript: Displaying Output

Python:

```python
print("Hello, World!")
```

JavaScript:

```javascript
console.log("Hello, World!");
```

Both display information, but they use different functions.

- Python uses `print()`.
- JavaScript commonly uses `console.log()`.

## 4. Python Executes Statements Sequentially

Python normally executes statements from top to bottom.

Example:

```python
print("Python started")
print(2 + 3)
print("Program finished")
```

Output:

```text
Python started
5
Program finished
```

The expression `2 + 3` is evaluated first. Its result, `5`, is then passed to `print()`.

## 5. Strings vs Integers

A string represents text. An integer represents a whole number.

```python
print("5")
print(5)
print("5" + "5")
print(5 + 5)
```

Output:

```text
5
5
55
10
```

Important distinction:

- `"5"` is a string.
- `5` is an integer.
- `"5" + "5"` joins two strings, producing `"55"`.
- `5 + 5` adds two integers, producing `10`.

Even when two values look similar when displayed, their data types can be different.

## 6. Key Vocabulary

| Term | Meaning |
|---|---|
| Function | A reusable block of code that performs an operation |
| Built-in function | A function provided by Python |
| String | Text data, usually written inside quotation marks |
| Integer | A whole-number data type |
| Expression | Code that evaluates to a value, such as `2 + 3` |
| Statement | An instruction executed by the program |
| Output | Information produced by a program |

## 7. What I Have Learned

- Python is a programming language.
- `print()` displays information.
- Python normally executes statements from top to bottom.
- Expressions are evaluated before their results are displayed.
- Strings and integers are different data types.
- The `+` operator can join strings or add numbers, depending on the operand types.

## 8. Next Topics

1. Setting up and running Python programs
2. Variables
3. Data types
4. Input and output
5. Operators
6. Conditional statements
7. Loops
8. Functions

## Type Conversion

**Type conversion** means converting a value from one data type to another.

Common built-in conversion functions:

| Function | Purpose | Example |
|---|---|---|
| `int()` | Converts a compatible value to an integer | `int("25")` → `25` |
| `str()` | Converts a value to a string | `str(25)` → `"25"` |
| `float()` | Converts a compatible value to a floating-point number | `float(25)` → `25.0` |

### Operations involving different types

```python
print("25" + "5")  # 255
print(25 + 5)      # 30
print("25" + 5)    # TypeError
```

- Adding two strings joins their contents.
- Adding two integers performs arithmetic addition.
- Adding a string and an integer with `+` raises a `TypeError`.

Python does not automatically convert an integer to a string for this operation.

### Conversion example

```python
age = "25"

print(int(age) + 5)  # 30
print(age)           # 25
```

`int(age)` returns an integer, but it does not change the original value referred to by `age`. The original variable remains a string unless the converted value is assigned back to it.

**Important:** Conversion can fail. For example, `int("hello")` raises a `ValueError` because the string does not represent a valid integer.

### Key takeaway

The data type of a value affects which operations are valid. When working with input, calculations, or data from external sources, check whether conversion is needed before performing an operation.

