import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <h2 className="font-bold text-5xl mt-5 tracking-tight text-center">
          Assignment questions
        </h2>

        <div className="grid max-w-xl mx-auto mt-8">
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>When should you use context API?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                One should use Context API in React when it is needed to pass
                data through multiple levels of the component tree without the
                need for prop drilling.Context API can also be useful when you
                have a large number of components that need to access shared
                data, such as a theme or user authentication state.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>What is a custom hook?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                A custom hook is a JavaScript function that uses one or more
                built-in React hooks to encapsulate reusable logic that can be
                shared across multiple components. Custom hooks help to abstract
                away complex logic and improve code reusability and organization
                in React applications.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is useRef</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                useRef is a React hook that provides a way to store mutable
                values that persist across renders. It returns a mutable ref
                object, which can be used to access and modify the current value
                without triggering a re-render. It's often used to reference DOM
                nodes or to store state without triggering a re-render.
              </p>
            </details>
          </div>
          <div className="py-5 border-b-2 border-cyan-100">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is useMemo</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                useMemo is a React hook that memoizes a function's output based
                on its dependencies, avoiding expensive re-execution of the
                function when its dependencies haven't changed.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
