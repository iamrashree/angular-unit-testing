# Angular Unit Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 3 types of testing
- Unit Testing : Testing a component in isolation without external resources (without template)
- Integration Testing : Testing a component with external resources (along with template)
- End-to-End Testing : Test the entire application as a whole (more confidence, very slow, very fragile)

# Unit Testing
- Testing a component in isolation without external resources (eg: file system, API etc)
- Testign a component without template
- Creating a fake service it it's using service

## Unit tests are 
- Easier to write
- Super fast
- Don't give us much confidence 

- Unit test are first class citizens

## Clean coding practices
- Small function/methods (10 lines of code or lesser)
- Proper naming
- Single responsibility

- Unit testing in angular uses Karma runtime and jasmine framework

Unit testing can be done for
- Pattern
- State changes
- Forms
- Events (Output properties)
- Services

Unit Testing Limitation
- Routers => Not easy to test can be done in integartion testing
- Template binding => Need template, we need to load component

## Code Coverage
- run `ng test --code-coverage` whch creates folder int the project
- It should be good to have 70% of code coverge, again it depends on time and budget of the project.

To disable a test add 'x' before function


