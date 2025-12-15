# Learn TypeScript

This repository is a comprehensive collection of learning materials and code examples for TypeScript. It's designed to help developers understand and master various aspects of TypeScript, from fundamental concepts to advanced generic types and design patterns.

## Table of Contents

* [starter topic](#starter-topic)
* [JavaScript Built-in Types](#javascript-built-in-types)
  * [Checking Prototype Types](#checking-prototype-types)
  * [Classes](#classes)
    * [Inherirance](#inherirance)
    * [Static Methods](#static-methods)
    * [Iterators and Generators](#iterators-and-generators)
      * [Defining Iterable Objects](#defining-iterable-objects)
  * [Collections](#collections)
  * [Defining Static Properties and Methods](#defining-static-properties-and-methods)
  * [Inheritance](#inheritance)
    * [Chaining Constructor Functions](#chaining-constructor-functions)
  * [Modules](#modules)
* [Using TypeScript Compiler](#using-typescript-compiler)
  * [Compiling TS with TSC](#compiling-ts-with-tsc)
  * [Targeting EcmaScript](#targeting-ecmascript)
  * [Using Modules](#using-modules)
  * [Useful compiler options](#useful-compiler-options)
* [Built-in](#built-in)
  * [Structural and Nominal Types](#structural-and-nominal-types)
    * [Static Types](#static-types)
  * [Variables and Values](#variables-and-values)
  * [Type Casting](#type-casting)
  * [Objects](#objects)
  * [Arrays](#arrays)
  * [Tuples](#tuples)
  * [Functions and Returning Types](#functions-and-returning-types)
* [Using Type System](#using-type-system)
  * [Using the any Type](#using-the-any-type)
  * [Using Type Union](#using-type-union)
  * [Using Type Assertion](#using-type-assertion)
  * [Using type guard](#using-type-guard)
  * [Using the Never Type](#using-the-never-type)
  * [Using the unknow type](#using-the-unknow-type)
  * [Using Nullable Types](#using-nullable-types)
  * [Using the definite assignment assertion](#using-the-definite-assignment-assertion)
* [Testing and Debugging TypeScript](#testing-and-debugging-typescript)
  * [Using Linter](#using-linter)
  * [Unit Tests](#unit-tests)
* [Using Functions](#using-functions)
* [Using Arrays](#using-arrays)
  * [Working with Tuples](#working-with-tuples)
  * [Working with Enums](#working-with-enums)
* [Using literal types](#using-literal-types)
* [Using Literal Value Types in Functions](#using-literal-value-types-in-functions)
* [Using Overrides with Literal Value Types](#using-overrides-with-literal-value-types)
* [Type Aliases](#type-aliases)
* [Working with Objects](#working-with-objects)
* [Working with Classes and Interfaces](#working-with-classes-and-interfaces)
  * [Understanding Type Inference for Subclasses](#understanding-type-inference-for-subclasses)
  * [Using an Abstract Class](#using-an-abstract-class)
    * [Type Guarding an Abstract Class](#type-guarding-an-abstract-class)
  * [Interfaces](#interfaces)
    * [Implementing Multiple Interfaces](#implementing-multiple-interfaces)
    * [Extending Interfaces](#extending-interfaces)
    * [Interfaces and Shape Types](#interfaces-and-shape-types)
    * [Defining Optional Interface Properties and Methods](#defining-optional-interface-properties-and-methods)
    * [Defining an Abstract Interface Implementation](#defining-an-abstract-interface-implementation)
    * [Type Guarding an Interface](#type-guarding-an-interface)
  * [Dynamically Creating Properties](#dynamically-creating-properties)
* [Using Generic Types](#using-generic-types)
  * [Add supporting to another type](#add-supporting-to-another-type)
  * [Generic Class](#generic-class)
  * [Using Different Type Arguments](#using-different-type-arguments)
  * **Constraining Generic Types**
    * [Constraining Generic Type Values](#constraining-generic-type-values)
    * [Constraining Generic Types Using a Shape](#constraining-generic-types-using-a-shape)
  * [Defining Multiple Type Parameters](#defining-multiple-type-parameters)
  * [Applying a Type Parameter to a Method](#applying-a-type-parameter-to-a-method)
  * [Allowing the Compiler to infer type arguments](#allowing-the-compiler-to-infer-type-arguments)
  * **Classes**
    * [Extending Generic Classes](#extending-generic-classes)
    * [Fixing the Generic Type Parameter](#fixing-the-generic-type-parameter)
    * [Restricting the Generic Type Parameter](#restricting-the-generic-type-parameter)
    * [Type Guarding Generic Types](#type-guarding-generic-types)
    * [Defining a Static Method on a Generic Class](#defining-a-static-method-on-a-generic-class)
  * **Interfaces**
    * [Defining Generic Interfaces](#defining-generic-interfaces)
    * [Extending Generic Interfaces](#extending-generic-interfaces)
    * [Implementing a Generic Interface](#implementing-a-generic-interface)
      * [Passing on the Generic Type Parameter](#passing-on-the-generic-type-parameter)
    * [Restricting or Fixing the Generic Type Parameter](#restricting-or-fixing-the-generic-type-parameter)
    * [Creating an Abstract Interface Implementation](#creating-an-abstract-interface-implementation)
* [Advanced Generic Types](#advanced-generic-types)
  * [Using Generic Iterators](#using-generic-iterators)
    * [Combining an Iterable and an Iterator](#combining-an-iterable-and-an-iterator)
    * [Creating an Iterable Class](#creating-an-iterable-class)
  * [Using Index Types](#using-index-types)
    * [Explicitly Providing Generic Type Parameters for Index Types](#explicitly-providing-generic-type-parameters-for-index-types)
    * [Using the Index Type Query](#using-the-index-type-query)
    * [Using the Indexed Access Operator](#using-the-indexed-access-operator)
      * [Using an Index Type for the Collection T Class](#using-an-index-type-for-the-collection-t-class)
  * [Using Type Mapping](#using-type-mapping)
    * [Combining Transformations in a Single Mapping](#combining-transformations-in-a-single-mapping)
    * [Creating Types with a Type Mapping](#creating-types-with-a-type-mapping)
    * [Using a Generic Type Parameter with a Mapped Type](#using-a-generic-type-parameter-with-a-mapped-type)
      * [Changing Property Optionality and Mutability](#changing-property-optionality-and-mutability)
      * [Mapping Specific Properties](#mapping-specific-properties)
  * [Using Conditional Types](#using-conditional-types)
    * [The Danger of Conditional Types](#the-danger-of-conditional-types)
    * [Nesting Conditional Types](#nesting-conditional-types)
    * [Using Conditional Types in Generic Classes](#using-conditional-types-in-generic-classes)

## Introduction

TypeScript is a superset of JavaScript that adds static typing to the language. This repository provides hands-on examples and exercises to solidify your understanding of TypeScript's features, helping you write more robust and maintainable code.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (LTS recommended)
- npm or Yarn (npm comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mrpunkdasilva/learn-typescript.git
   cd learn-typescript
   ```
2. Navigate into each sub-project directory (e.g., `advanced-generic-types`, `arrays`) and install their respective dependencies:
   ```bash
   cd advanced-generic-types
   npm install # or yarn install
   ```
   Repeat this for any module you wish to explore.

## Folder Structure

The repository is organized into several modules, each focusing on a specific area of TypeScript.

```
.
├── advanced-generic-types/
├── arrays/
├── chapter/             # General chapter examples
├── chapter-1/           # JavaScript primer examples
├── classes-and-interfaces/
├── essential-typescript/  # Content from an "Essential TypeScript" course
├── functions/
├── generic-types/
├── objects/
├── tools/               # Tools and configurations
├── types/               # Type-specific examples
└── ...
```

## Modules Covered

* [starter topic](Writerside/topics/starter-topic.md)
* [JavaScript Built-in Types](Writerside/topics/JavaScript-Built-in-Types.md)
  * [Checking Prototype Types](Writerside/topics/Checking-Prototype-Types.md)
  * [Classes](Writerside/topics/Classes.md)
    * [Inherirance](Writerside/topics/Inherirance.md)
    * [Static Methods](Writerside/topics/Static-Methods.md)
    * [Iterators and Generators](Writerside/topics/Iterators-and-Generators.md)
      * [Defining Iterable Objects](Writerside/topics/Defining-Iterable-Objects.md)
  * [Collections](Writerside/topics/Collections.md)
  * [Defining Static Properties and Methods](Writerside/topics/Defining-Static-Properties-and-Methods.md)
  * [Inheritance](Writerside/topics/Inheritance.md)
    * [Chaining Constructor Functions](Writerside/topics/Chaining-Constructor-Functions.md)
  * [Modules](Writerside/topics/Modules.md)
* [Using TypeScript Compiler](Writerside/topics/Using-TypeScript-Compiler.md)
  * [Compiling TS with TSC](Writerside/topics/Compiling-TS-with-TSC.md)
  * [Targeting EcmaScript](Writerside/topics/Targeting-EcmaScript.md)
  * [Using Modules](Writerside/topics/Using-Modules.md)
  * [Useful compiler options](Writerside/topics/Useful-compiler-options.md)
### Built-in

  * [Structural and Nominal Types](Writerside/topics/Structural-and-Nominal-Types.md)
    * [Static Types](Writerside/topics/Static-Types.md)
  * [Variables and Values](Writerside/topics/Variables-and-Values.md)
  * [Type Casting](Writerside/topics/Type-Casting.md)
  * [Objects](Writerside/topics/Objects.md)
  * [Arrays](Writerside/topics/Arrays.md)
  * [Tuples](Writerside/topics/Tuples.md)
  * [Functions and Returning Types](Writerside/topics/Functions-and-Returning-Types.md)
### Using Type System

  * [Using the any Type](Writerside/topics/Using-the-any-Type.md)
  * [Using Type Union](Writerside/topics/Using-Type-Union.md)
  * [Using Type Assertion](Writerside/topics/Using-Type-Assertion.md)
  * [Using type guard](Writerside/topics/Using-type-guard.md)
  * [Using the Never Type](Writerside/topics/Using-the-Never-Type.md)
  * [Using the unknow type](Writerside/topics/Using-the-unknow-type.md)
  * [Using Nullable Types](Writerside/topics/Using-Nullable-Types.md)
  * [Using the definite assignment assertion](Writerside/topics/Using-the-definite-assignment-assertion.md)
* [Testing and Debugging TypeScript](Writerside/topics/Testing-and-Debugging-TypeScript.md)
  * [Using Linter](Writerside/topics/Using-Linter.md)
  * [Unit Tests](Writerside/topics/Unit-Tests.md)
* [Using Functions](Writerside/topics/Using-Functions.md)
* [Using Arrays](Writerside/topics/Using-Arrays.md)
  * [Working with Tuples](Writerside/topics/Working-with-Tuples.md)
  * [Working with Enums](Writerside/topics/Working-with-Enums.md)
* [Using literal types](Writerside/topics/Using-literal-types.md)
* [Using Literal Value Types in Functions](Writerside/topics/Using-Literal-Value-Types-in-Functions.md)
* [Using Overrides with Literal Value Types](Writerside/topics/Using-Overrides-with-Literal-Value-Types.md)
* [Type Aliases](Writerside/topics/Type-Aliases.md)
* [Working with Objects](Writerside/topics/Working-with-Objects.md)
* [Working with Classes and Interfaces](Writerside/topics/Working-with-Classes-and-Interfaces.md)
  * [Understanding Type Inference for Subclasses](Writerside/topics/Understanding-Type-Inference-for-Subclasses.md)
  * [Using an Abstract Class](Writerside/topics/Using-an-Abstract-Class.md)
    * [Type Guarding an Abstract Class](Writerside/topics/Type-Guarding-an-Abstract-Class.md)
  * [Interfaces](Writerside/topics/Interfaces.md)
    * [Implementing Multiple Interfaces](Writerside/topics/Implementing-Multiple-Interfaces.md)
    * [Extending Interfaces](Writerside/topics/Extending-Interfaces.md)
    * [Interfaces and Shape Types](Writerside/topics/Interfaces-and-Shape-Types.md)
    * [Defining Optional Interface Properties and Methods](Writerside/topics/Defining-Optional-Interface-Properties-and-Methods.md)
    * [Defining an Abstract Interface Implementation](Writerside/topics/Defining-an-Abstract-Interface-Implementation.md)
    * [Type Guarding an Interface](Writerside/topics/Type-Guarding-an-Interface.md)
  * [Dynamically Creating Properties](Writerside/topics/Dynamically-Creating-Properties.md)
* [Using Generic Types](Writerside/topics/Using-Generic-Types.md)
  * [Add supporting to another type](Writerside/topics/Add-supporting-to-another-type.md)
  * [Generic Class](Writerside/topics/Generic-Class.md)
  * [Using Different Type Arguments](Writerside/topics/Using-Different-Type-Arguments.md)
  * **Constraining Generic Types**
    * [Constraining Generic Type Values](Writerside/topics/Constraining-Generic-Type-Values.md)
    * [Constraining Generic Types Using a Shape](Writerside/topics/Constraining-Generic-Types-Using-a-Shape.md)
  * [Defining Multiple Type Parameters](Writerside/topics/Defining-Multiple-Type-Parameters.md)
  * [Applying a Type Parameter to a Method](Writerside/topics/Applying-a-Type-Parameter-to-a-Method.md)
  * [Allowing the Compiler to infer type arguments](Writerside/topics/Allowing-the-Compiler-to-infer-type-arguments.md)
  * **Classes**
    * [Extending Generic Classes](Writerside/topics/Extending-Generic-Classes.md)
    * [Fixing the Generic Type Parameter](Writerside/topics/Fixing-the-Generic-Type-Parameter.md)
    * [Restricting the Generic Type Parameter](Writerside/topics/Restricting-the-Generic-Type-Parameter.md)
    * [Type Guarding Generic Types](Writerside/topics/Type-Guarding-Generic-Types.md)
    * [Defining a Static Method on a Generic Class](Writerside/topics/Defining-a-Static-Method-on-a-Generic-Class.md)
  * **Interfaces**
    * [Defining Generic Interfaces](Writerside/topics/Defining-Generic-Interfaces.md)
    * [Extending Generic Interfaces](Writerside/topics/Extending-Generic-Interfaces.md)
    * [Implementing a Generic Interface](Writerside/topics/Implementing-a-Generic-Interface.md)
      * [Passing on the Generic Type Parameter](Writerside/topics/Passing-on-the-Generic-Type-Parameter.md)
    * [Restricting or Fixing the Generic Type Parameter](Writerside/topics/Restricting-or-Fixing-the-Generic-Type-Parameter.md)
    * [Creating an Abstract Interface Implementation](Writerside/topics/Creating-an-Abstract-Interface-Implementation.md)
* [Advanced Generic Types](Writerside/topics/Advanced-Generic-Types.md)
  * [Using Generic Iterators](Writerside/topics/Using-Generic-Iterators.md)
    * [Combining an Iterable and an Iterator](Writerside/topics/Combining-an-Iterable-and-an-Iterator.md)
    * [Creating an Iterable Class](Writerside/topics/Creating-an-Iterable-Class.md)
  * [Using Index Types](Writerside/topics/Using-Index-Types.md)
    * [Explicitly Providing Generic Type Parameters for Index Types](Writerside/topics/Explicitly-Providing-Generic-Type-Parameters-for-Index-Types.md)
    * [Using the Index Type Query](Writerside/topics/Using-the-Index-Type-Query.md)
    * [Using the Indexed Access Operator](Writerside/topics/Using-the-Indexed-Access-Operator.md)
      * [Using an Index Type for the Collection T Class](Writerside/topics/Using-an-Index-Type-for-the-Collection-T-Class.md)
  * [Using Type Mapping](Writerside/topics/Using-Type-Mapping.md)
    * [Combining Transformations in a Single Mapping](Writerside/topics/Combining-Transformations-in-a-Single-Mapping.md)
    * [Creating Types with a Type Mapping](Writerside/topics/Creating-Types-with-a-Type-Mapping.md)
    * [Using a Generic Type Parameter with a Mapped Type](Writerside/topics/Using-a-Generic-Type-Parameter-with-a-Mapped-Type.md)
      * [Changing Property Optionality and Mutability](Writerside/topics/Changing-Property-Optionality-and-Mutability.md)
      * [Mapping Specific Properties](Writerside/topics/Mapping-Specific-Properties.md)
  * [Using Conditional Types](Writerside/topics/Using-Conditional-Types.md)
    * [The Danger of Conditional Types](Writerside/topics/THE-DANGER-OF-CONDITIONAL-TYPES.md)
    * [Nesting Conditional Types](Writerside/topics/Nesting-Conditional-Types.md)
    * [Using Conditional Types in Generic Classes](Writerside/topics/Using-Conditional-Types-in-Generic-Classes.md)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
