# JavaScript Practice

## Topics Covered

### ES6 Concepts
- let and const
- Arrow Functions
- Template Literals
- Destructuring
- Spread and Rest Operators

### Functions
- Function Declaration
- Function Expression
- Arrow Functions
- Callback Functions

### Array Methods
- map()
- filter()
- reduce()
- find()
- forEach()

### Mini Project
Student Management System using:
- ES6 Features
- Array Methods
- Template Literals
- Destructuring
- Spread/Rest Operators

## Author
Sneh Bhatt

## Goal
Practice modern JavaScript concepts and improve problem-solving skills.

# JavaScript Asynchronous Practice Reference

Documentation of standard Asynchronous JavaScript architectures implemented during this module.

---

## 1. Callbacks
A **callback function** is a function passed inside another function as an argument, which is then invoked inside the outer function to complete a routine action.

* **Synchronous:** Actions execute sequentially line-by-line, blocking execution of downstream code until completed.
* **Asynchronous:** Enables non-blocking operations, deferring completion notifications to a later execution cycle while letting the rest of the engine run.

---

## 2. Promises
A **Promise** is a proxy pattern wrapper object for a value not necessarily known when the promise is created. It handles asynchronous operations cleanly without compounding structural indentation (Callback Hell).

### States:
* **Pending:** Initial state; operation is executing and has not completed or failed yet.
* **Fulfilled (Resolved):** The asynchronous operation completed successfully, returning data via a `.then()` handler block.
* **Rejected:** The asynchronous operation failed, throwing an exception handled by a `.catch()` block.

---

## 3. Async / Await
Built on top of native promises, `async` and `await` act as clean syntax sugar to control asynchronous control flows without losing readability. 
* Declaring a function as `async` ensures it automatically returns a standard Promise.
* Placing `await` inside an asynchronous block pauses procedural evaluation until the wrapped promise settles, mimicking traditional synchronous reading logic.
* Error trapping relies cleanly on a default procedural `try {} catch(e) {}` execution layout.

---

## 4. Fetch API & Error Handling
The global `fetch()` utility exposed to the Web window returns a native Promise resolving into a `Response` interface stream object.

### Best Practices Realized:
1. **Network Detection:** Low-level connectivity failure automatically causes an outright runtime exception handled via downstream `catch` code blocks.
2. **HTTP State Validations:** Check the boolean value of `response.ok` manually to identify operational errors (such as 404 or 500 server conditions) that still return valid protocol headers.
3. **Friendly UX Fallbacks:** Handle system failures safely behind actionable, non-cryptic error messaging components built dynamically into user-facing web layouts.