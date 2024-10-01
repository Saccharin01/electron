import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18에 맞게 변경
import MyComponent from './components/index-components';

// App 컴포넌트 정의
const App = () => {
    return (
      <MyComponent />
    );
};

// 'root' 요소에 ReactDOM을 사용하여 App 컴포넌트를 렌더링
const container = document.getElementById('root');
if (container) { // container가 null이 아닐 경우에만 실행
    const root = createRoot(container); // createRoot 사용
    root.render(<App />); // App 렌더링
} else {
    console.error("Root container not found");
}
