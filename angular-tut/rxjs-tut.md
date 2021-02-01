# Reactive Extensions for Javascript
- an observable becomes a stream if we subscribe for it

## Important Terminology
- Observable: represents the idea of an invokable collection of future values or events. Observables are lazy Push collections of multiple values.
- Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
- Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

## Push And Pull System

## Observables [https://rxjs-dev.firebaseapp.com/guide/observable]
- observables need to be subscribed to get activated
- Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.
- Observables are like functions with zero arguments, but generalize those to allow multiple values.
- observable.subscribe() means "give me any amount of values, either synchronously or asynchronously"
- A subscribe call is simply a way to start an "Observable execution" and deliver values or events to an Observer of that execution.
- There are three types of values an Observable Execution can deliver:
  - "Next" notification: sends a value such as a Number, a String, an Object, etc.
  - "Error" notification: sends a JavaScript Error or exception.
  - "Complete" notification: does not send a value.
- In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
- observable contract: http://reactivex.io/documentation/contract.html

## Observer
- Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete.
```js
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```

## Operators
### Pipable Operators
- Pipeable Operators are the kind that can be piped to Observables using the syntax observableInstance.pipe(operator()).
- A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
- filter, mergeMap, switchMap, map, debounceTime, distinctUntilChanged

### Creation Operators
 - Creation Operators are the other kind of operator, which can be called as standalone functions to create a new Observable.
 - of, from