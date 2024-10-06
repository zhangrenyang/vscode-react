# VS Code React Extension

This Visual Studio Code extension is designed for React developers. It provides quick access to React-related resources, supports multiple languages, and allows viewing content simultaneously in both VS Code and the system browser.

## Features

1. Quick access to React-related resources
2. Multi-language support (currently English and Chinese)
3. Simultaneous viewing in VS Code and system browser
4. Useful React code snippets

## Installation

Search for "vscode-react" in the VS Code Extension Marketplace and click install.

## Usage

1. Click the React icon in the VS Code activity bar to open the React view.
2. Browse various React-related resources in the React view.
3. Click on a resource item to open the related webpage in VS Code and the system default browser.
4. Use the command palette (Ctrl+Shift+P or Cmd+Shift+P) and type "React: Switch Language" to switch languages.

## Code Snippets

This extension provides many useful React code snippets for both JavaScript and TypeScript. Here's a detailed breakdown of the main snippets:

### JavaScript React (javascriptreact, javascript)

- `imrs`: Import useState Hook
  ```javascript
  import { useState } from 'react';
  ```

- `imrse`: Import useState and useEffect Hooks
  ```javascript
  import { useState, useEffect } from 'react';
  ```

- `imrd`: Import ReactDOM
  ```javascript
  import ReactDOM from 'react-dom';
  ```

- `impt`: Import PropTypes
  ```javascript
  import PropTypes from 'prop-types';
  ```

- `fc`: Create a Function Component
  ```javascript
  const ComponentName = (props) => {
    return (
      <div>
        {/* Component content */}
      </div>
    );
  };
  export default ComponentName;
  ```

- `fcu`: Create a Function Component with useState
  ```javascript
  import { useState } from 'react';

  const ComponentName = (props) => {
    const [state, setState] = useState(initialValue);
    
    return (
      <div>
        {/* Component content using state */}
      </div>
    );
  };
  export default ComponentName;
  ```

- `uef`: Use useEffect Hook
  ```javascript
  useEffect(() => {
    // Effect code
    return () => {
      // Cleanup code
    };
  }, [dependencies]);
  ```

- `ucb`: Use useCallback Hook
  ```javascript
  const memoizedCallback = useCallback(
    () => {
      // Callback function
    },
    [dependencies],
  );
  ```

- `urf`: Use useRef Hook
  ```javascript
  const refContainer = useRef(initialValue);
  ```

- `uct`: Use useContext Hook
  ```javascript
  const value = useContext(MyContext);
  ```

- `urd`: Use useReducer Hook
  ```javascript
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  ```

- `ume`: Use useMemo Hook
  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- `usf`: Declare a new state variable using useState
  ```javascript
  const [state, setState] = useState(initialState);
  ```

- `fce`: Create an Inline Exported Function Component
  ```javascript
  export const ComponentName = (props) => {
    return (
      <div>
        {/* Component content */}
      </div>
    );
  };
  ```

- `uefc`: useEffect with cleanup
  ```javascript
  useEffect(() => {
    // Effect code
    return () => {
      // Cleanup code
    };
  }, [dependencies]);
  ```

- `ule`: Use useLayoutEffect Hook
  ```javascript
  useLayoutEffect(() => {
    // Effect code
    return () => {
      // Cleanup code
    };
  }, [dependencies]);
  ```

- `hook`: Create a Custom Hook
  ```javascript
  const useCustomHook = (initialValue) => {
    // Hook logic
    return [value, setValue];
  };
  export default useCustomHook;
  ```

- `cp`: Create a Context Provider with useState
  ```javascript
  import React, { createContext, useState } from 'react';

  export const MyContext = createContext();

  const MyProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyProvider;
  ```

### TypeScript React (typescriptreact, typescript)

- `imh`: Import React Hooks
  ```typescript
  import { useState, useEffect, useContext } from 'react';
  ```

- `imrd`: Import ReactDOM
  ```typescript
  import ReactDOM from 'react-dom';
  ```

- `fc`: Create a Function Component with TypeScript
  ```typescript
  interface ComponentProps {
    // Define prop types here
  }

  const Component: React.FC<ComponentProps> = (props) => {
    return (
      <div>
        {/* Component content */}
      </div>
    );
  };
  export default Component;
  ```

- `fcu`: Create a Function Component with useState and TypeScript
  ```typescript
  import React, { useState } from 'react';

  interface MyComponentProps {
    title: string;
  }

  const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  };

  export default MyComponent;
  ```

- `uef`: Use useEffect Hook
  ```typescript
  useEffect(() => {
    // Effect code
    return () => {
      // Cleanup code
    };
  }, [dependencies]);
  ```

- `ucb`: Use useCallback Hook
  ```typescript
  const memoizedCallback = useCallback(
    (param: Type) => {
      // Callback function
    },
    [dependencies],
  );
  ```

- `usf`: Declare a new state variable with type using useState
  ```typescript
  const [state, setState] = useState<StateType>(initialState);
  ```

- `urf`: Declare a new ref variable with type using useRef
  ```typescript
  const refContainer = useRef<HTMLDivElement>(null);
  ```

- `hook`: Create a Custom Hook
  ```typescript
  const useCustomHook = <T>(initialValue: T): [T, (newValue: T) => void] => {
    // Hook logic
    return [value, setValue];
  };
  export default useCustomHook;
  ```

- `cp`: Create a Context Provider with TypeScript and useState
  ```typescript
  import React, { createContext, useState, ReactNode } from 'react';

  interface ContextState {
    // Define state shape
  }

  interface ContextValue extends ContextState {
    setState: React.Dispatch<React.SetStateAction<ContextState>>;
  }

  export const MyContext = createContext<ContextValue | undefined>(undefined);

  interface ProviderProps {
    children: ReactNode;
  }

  export const MyProvider: React.FC<ProviderProps> = ({ children }) => {
    const [state, setState] = useState<ContextState>(initialState);
    return (
      <MyContext.Provider value={{ ...state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  ```

- `fcm`: Create a Function Component wrapped with React.memo
  ```typescript
  import React from 'react';

  interface ComponentProps {
    // Define prop types here
  }

  const Component: React.FC<ComponentProps> = (props) => {
    return (
      <div>
        {/* Component content */}
      </div>
    );
  };

  export default React.memo(Component);
  ```

- `urd`: Use useReducer Hook
  ```typescript
  interface State {
    // Define state shape
  }

  type Action = 
    | { type: 'ACTION_TYPE_1'; payload: any }
    | { type: 'ACTION_TYPE_2'; payload: any };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ACTION_TYPE_1':
        return { ...state, /* update state */ };
      case 'ACTION_TYPE_2':
        return { ...state, /* update state */ };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- `uct`: Use useContext Hook
  ```typescript
  const context = useContext(MyContext);
  ```

- `ume`: Use useMemo Hook
  ```typescript
  const memoizedValue = useMemo<ReturnType>(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  ```

- `ule`: Use useLayoutEffect Hook
  ```typescript
  useLayoutEffect(() => {
    // Effect code
    return () => {
      // Cleanup code
    };
  }, [dependencies]);
  ```

These snippets provide a quick way to create common React patterns and hooks, saving time and reducing boilerplate code in your React projects.

## Contributing

If you have any suggestions or find a bug, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This extension is released under the MIT License. See the LICENSE file for details.


# VS Code React 扩展

这个 Visual Studio Code 扩展是为 React 开发者设计的。它提供了快速访问 React 相关资源的功能，支持多种语言，并允许在 VS Code 和系统浏览器中同时查看内容。

## 功能

1. **快速访问 React 相关资源**
2. **多语言支持**（目前为英语和中文）
3. **在 VS Code 和系统浏览器中同时查看**
4. **实用的 React 代码片段**

## 安装

在 VS Code 扩展市场中搜索“**vscode-react**”，然后点击安装。

## 使用方法

1. 点击 VS Code 活动栏中的 **React 图标**以打开 React 视图。
2. 在 React 视图中浏览各种 React 相关资源。
3. 点击资源项，在 **VS Code 和系统默认浏览器**中打开相关网页。
4. 使用命令面板（**Ctrl+Shift+P** 或 **Cmd+Shift+P**），输入“**React: Switch Language**”来切换语言。

## 代码片段

该扩展为 **JavaScript** 和 **TypeScript** 提供了许多有用的 React 代码片段。以下是主要代码片段的详细介绍：

### JavaScript React（`javascriptreact`，`javascript`）

- **`imrs`：导入 useState Hook**
  ```javascript
  import { useState } from 'react';
  ```

- **`imrse`：导入 useState 和 useEffect Hooks**
  ```javascript
  import { useState, useEffect } from 'react';
  ```

- **`imrd`：导入 ReactDOM**
  ```javascript
  import ReactDOM from 'react-dom';
  ```

- **`impt`：导入 PropTypes**
  ```javascript
  import PropTypes from 'prop-types';
  ```

- **`fc`：创建函数组件**
  ```javascript
  const ComponentName = (props) => {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  };
  export default ComponentName;
  ```

- **`fcu`：创建带有 useState 的函数组件**
  ```javascript
  import { useState } from 'react';

  const ComponentName = (props) => {
    const [state, setState] = useState(initialValue);
    
    return (
      <div>
        {/* 使用 state 的组件内容 */}
      </div>
    );
  };
  export default ComponentName;
  ```

- **`uef`：使用 useEffect Hook**
  ```javascript
  useEffect(() => {
    // Effect 代码
    return () => {
      // 清理代码
    };
  }, [dependencies]);
  ```

- **`ucb`：使用 useCallback Hook**
  ```javascript
  const memoizedCallback = useCallback(
    () => {
      // 回调函数
    },
    [dependencies],
  );
  ```

- **`urf`：使用 useRef Hook**
  ```javascript
  const refContainer = useRef(initialValue);
  ```

- **`uct`：使用 useContext Hook**
  ```javascript
  const value = useContext(MyContext);
  ```

- **`urd`：使用 useReducer Hook**
  ```javascript
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  ```

- **`ume`：使用 useMemo Hook**
  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- **`usf`：使用 useState 声明新状态变量**
  ```javascript
  const [state, setState] = useState(initialState);
  ```

- **`fce`：创建内联导出的函数组件**
  ```javascript
  export const ComponentName = (props) => {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  };
  ```

- **`uefc`：带清理函数的 useEffect**
  ```javascript
  useEffect(() => {
    // Effect 代码
    return () => {
      // 清理代码
    };
  }, [dependencies]);
  ```

- **`ule`：使用 useLayoutEffect Hook**
  ```javascript
  useLayoutEffect(() => {
    // Effect 代码
    return () => {
      // 清理代码
    };
  }, [dependencies]);
  ```

- **`hook`：创建自定义 Hook**
  ```javascript
  const useCustomHook = (initialValue) => {
    // Hook 逻辑
    return [value, setValue];
  };
  export default useCustomHook;
  ```

- **`cp`：使用 useState 创建 Context Provider**
  ```javascript
  import React, { createContext, useState } from 'react';

  export const MyContext = createContext();

  const MyProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyProvider;
  ```

### TypeScript React（`typescriptreact`，`typescript`）

- **`imh`：导入 React Hooks**
  ```typescript
  import { useState, useEffect, useContext } from 'react';
  ```

- **`imrd`：导入 ReactDOM**
  ```typescript
  import ReactDOM from 'react-dom';
  ```

- **`fc`：使用 TypeScript 创建函数组件**
  ```typescript
  interface ComponentProps {
    // 定义 props 类型
  }

  const Component: React.FC<ComponentProps> = (props) => {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  };
  export default Component;
  ```

- **`fcu`：使用 useState 和 TypeScript 创建函数组件**
  ```typescript
  import React, { useState } from 'react';

  interface MyComponentProps {
    title: string;
  }

  const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  };

  export default MyComponent;
  ```

- **`uef`：使用 useEffect Hook**
  ```typescript
  useEffect(() => {
    // Effect 代码
    return () => {
      // 清理代码
    };
  }, [dependencies]);
  ```

- **`ucb`：使用 useCallback Hook**
  ```typescript
  const memoizedCallback = useCallback(
    (param: Type) => {
      // 回调函数
    },
    [dependencies],
  );
  ```

- **`usf`：使用 useState 声明具有类型的新状态变量**
  ```typescript
  const [state, setState] = useState<StateType>(initialState);
  ```

- **`urf`：使用 useRef 声明具有类型的新 ref 变量**
  ```typescript
  const refContainer = useRef<HTMLDivElement>(null);
  ```

- **`hook`：创建自定义 Hook**
  ```typescript
  const useCustomHook = <T>(initialValue: T): [T, (newValue: T) => void] => {
    // Hook 逻辑
    return [value, setValue];
  };
  export default useCustomHook;
  ```

- **`cp`：使用 TypeScript 和 useState 创建 Context Provider**
  ```typescript
  import React, { createContext, useState, ReactNode } from 'react';

  interface ContextState {
    // 定义 state 结构
  }

  interface ContextValue extends ContextState {
    setState: React.Dispatch<React.SetStateAction<ContextState>>;
  }

  export const MyContext = createContext<ContextValue | undefined>(undefined);

  interface ProviderProps {
    children: ReactNode;
  }

  export const MyProvider: React.FC<ProviderProps> = ({ children }) => {
    const [state, setState] = useState<ContextState>(initialState);
    return (
      <MyContext.Provider value={{ ...state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  ```

- **`fcm`：创建使用 React.memo 包裹的函数组件**
  ```typescript
  import React from 'react';

  interface ComponentProps {
    // 定义 props 类型
  }

  const Component: React.FC<ComponentProps> = (props) => {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  };

  export default React.memo(Component);
  ```

- **`urd`：使用 useReducer Hook**
  ```typescript
  interface State {
    // 定义 state 结构
  }

  type Action = 
    | { type: 'ACTION_TYPE_1'; payload: any }
    | { type: 'ACTION_TYPE_2'; payload: any };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ACTION_TYPE_1':
        return { ...state, /* 更新 state */ };
      case 'ACTION_TYPE_2':
        return { ...state, /* 更新 state */ };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- **`uct`：使用 useContext Hook**
  ```typescript
  const context = useContext(MyContext);
  ```

- **`ume`：使用 useMemo Hook**
  ```typescript
  const memoizedValue = useMemo<ReturnType>(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  ```

- **`ule`：使用 useLayoutEffect Hook**
  ```typescript
  useLayoutEffect(() => {
    // Effect 代码
    return () => {
      // 清理代码
    };
  }, [dependencies]);
  ```

这些代码片段为您提供了一种快速创建常见 React 模式和 Hooks 的方法，节省时间并减少 React 项目中的样板代码。

## 贡献

如果您有任何建议或发现了 Bug，欢迎在 GitHub 仓库中提出 Issue 或提交 Pull Request。

## 许可证

此扩展程序根据 MIT 许可证发布。有关详细信息，请参阅 **LICENSE** 文件。