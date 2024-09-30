# Zustand-like React State Management

A lightweight state management library for React, inspired by Zustand, built with TypeScript. This library is designed to manage global state with minimal boilerplate and optimal performance.

## Demo

You can check out the live demo here: [Zustand-like React Demo](https://zustand-like-react.vercel.app/)


## Features

- Minimal API for state management.
- Easy integration with React components.
- TypeScript support with fully typed state.
- Subscribes components to specific pieces of state, avoiding unnecessary re-renders.
- Built with Vite for fast development and optimized build times.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating a Store](#creating-a-store)
  - [Using the Store in Components](#using-the-store-in-components)
- [Development](#development)
  - [Running the Project](#running-the-project)
  - [Building for Production](#building-for-production)
- [License](#license)



## Installation

First, clone the repository or create a new Vite project using the following command:

```bash
npm create vite@latest

First, clone the repository or create a new Vite project using the following command:
```

## Usage

### Creating a Store

To create a store, you need to define the initial state and use the `createStore` function to create a custom hook for that state.

```typescript
import { createStore } from './store';

interface CounterState {
  count: number;
}

// Create a store for the counter state
const useCounterStore = createStore<CounterState>({ count: 0 });
```

