# NGRX Notes

## Install:
- `ng add @ngrx/store && ng add @ngrx/store-devtools`
- may need to install redux chrome extension

## Adding store to new module
- ng generate store path/Name --module module-name.module.ts

## Terminolgy

### Reducer
- A function which gets the current state and the arguments of its corresponding action, to create a new state => naming is from the reduce method.

## ngrx structural overview

### Store - State
- it has a state/store which can be modified by the reducer functions
- state should be stored in local storage 

### Reducer
- the reducer mapps reducer functions to actions, So it registers that on the occurrence of a certain action how the state/store should be modified
- the reducer has reference to a corresponding part of the state so it passes to the reducer functions that they can modify it

### Actions
-  actions are events which are triggering an effect or a reducer function in the store
-  they take parameters by them the store can be modified in the reducer functions

### Selectors
- selectors are memoized functions which are selecting a part of the state on a more efficient way than as we did with rxjs operators
- they use createSelector and createfetureSelector to get created. In a component file they additionally use the 'select' function from ngrx. 

### Effects
- effects are mapping side effects to actions.
- a side effect is some process which happens in repsonse to a certain action.
createAction
createReducer
createSelector
  - memoized function => keeps in memory if selected part has been changed or not
  - projector function => the cb function which select the needed part from the state
  - createfetureSelector => it makes possible to createSelector to pass correct part of the state to the projector function

### Meta Reducer

## Debugger tools

### time travel debugger

## [Ngrx runtime checks](https://ngrx.io/guide/store/configuration/runtime-checks)
- Default On:
  - strictStateImmutability: verifies that the state isn't mutated.
  - strictActionImmutability: verifies that actions aren't mutated
- Default Off:
  - strictStateSerializability: verifies if the state is serializable
  - strictActionSerializability: verifies if the actions are serializable
  - strictActionWithinNgZone: verifies if actions are dispatched within NgZone
  - strictActionTypeUniqueness: verifies if registered action types are unique

