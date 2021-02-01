# Angular Core
- defines:
  - class infrastructure for components
  - view hierarchies
  - change detection
  - rendering
  - event handling

## Template Querying
- Grab local template elements with: ViewChild, ViewChildren
- Grap template elements from content projection with: ContentChild, ContentChildren
- ng-template
  - defines a chunk of html which will be added to the dom based on condition
  - can carry structural directives
- ng-container
  - defines a chunk of html which will be added to the dom by default
  - can carry structural directives
- ng-content
  - content projection
- can create context for ng-template with: template variables, let-variableName, ngtemplateOutlet + context object
Ng-content, ng-template, ng-container => but its not type safe

## Directives
### Attribute directives 
### Structural directives
Directives: attribute, structural
attribute modifing current element, structural: modifing layout
custom attribute directive @Hostbinding => mouse leave, mouse enter with event emitter, adding additional api by exporting by hl
custom structural dir createEmbeddedView, clear
"ng-deep, :host, :host-context selector
https://angular.io/guide/built-in-directives
https://angular.io/guide/structural-directives#microsyntax
https://angular.io/api/common/NgForOf
angular hierarchical di, treeshakable providers
https://angular.io/guide/singleton-services
how to reduce bundle size
Ngonchanges
forroot forchanges
angular router, rout guards, router reducer, resolver
how to avoid circular dependency in modules

## Building blocks of angular

### Components 
A component controls one or more views. Each view is some specific section of the screen. Every Angular application has at least one component, known as the root component. It is bootstrapped inside the main module, known as the root module. A component contains application logic defined inside a class. This class is responsible for interacting with the view via an API of properties and methods.

### Data Binding
The mechanism by which parts of a template coordinates with parts of a component is known as data binding. In order to let Angular know how to connect both sides (template and its component), the binding markup is added to the template HTML.

### Dependency Injection (DI)
Angular makes use of DI to provide required dependencies to new components. Typically, dependencies required by a component are services. A component’s constructor parameters tell Angular about the services that a component requires. So, a dependency injection offers a way to supply fully-formed dependencies required by a new instance of a class.

### Directives
The templates used by Angular are dynamic in nature. Directives are responsible for instructing Angular about how to transform the DOM when rendering a template. Actually, components are directives with a template. Other types of directives are attribute and structural directives.

### Metadata 
In order to let Angular know how to process a class, metadata is attached to the class. For doing so decorators are used.

### Modules
Also known as NgModules, a module is an organized block of code with a specific set of capabilities. It has a specific application domain or a workflow. Like components, any Angular application has at least one module. This is known as the root module. Typically, an Angular application has several modules.

### Routing 
An Angular router is responsible for interpreting a browser URL as an instruction to navigate to a client-generated view. The router is bound to links on a page to tell Angular to navigate the application view when a user clicks on it.

### Services
A very broad category, a service can be anything ranging from a value and function to a feature that is required by an Angular app. Technically, a service is a class with a well-defined purpose.

### Template
Each component’s view is associated with its companion template. A template in Angular is a form of HTML tags that lets Angular know that how it is meant to render the component.


## Notes
for of variables
ContentChildren
ViewChildren, read: elementref or component
template variables, let-variableName, ngtemplateOutlet + context object
Ng-content, ng-template, ng-container
Directives: attribute, structural, components => direcives with a template
  attribute: ngstyle, [class] Ngmodel, attr
attribute modifing current element, structural: modifing layout
custom attribute directive @Hostbinding => mouse leave, mouse enter with event emitter, adding additional api by exporting by hl
custom structural dir createEmbeddedView, clear
"ng-deep, :host, :host-context selector
https://angular.io/guide/built-in-directives
https://angular.io/guide/structural-directives#microsyntax
https://angular.io/api/common/NgForOf
angular hierarchical di, treeshakable providers
https://angular.io/guide/singleton-services
how to reduce bundle size
Ngonchanges
forroot forchanges
angular router, rout guards, router reducer, resolver
how to avoid circular dependency in modules
Forwarders