import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <>
      <div ref={ref} className="container mx-auto space-y-10 divide-y mt-20">
        <div>
          <p className="text-xl font-medium">
            The differences between uncontrolled and controlled components.
          </p>
          <p className="text-gray-500">
            We can differentiate controlled and uncontrolled components
            depending on how it's handling user input and data. In controlled
            components state is managed by the react. So components doesn't
            store any data internally but depends on props to receive and update
            data. <br /> In uncontrolled components state is managed by the DOM.
            That means components stores data internally and update the DOM
            directly.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">
            How to validate React props using PropTypes?
          </p>
          <p className="text-gray-500">
            React provides a library called PropTypes that can be used to
            validate the props of a component. PopsTypes checks the type of the
            props being passed into the component and can generate a warning if
            the type is incorrect. The PropTypes library provides a number of
            different validators that can be used to check the type of each
            prop.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">
            The difference between nodejs and express js.
          </p>
          <p className="text-gray-500">
            Node.js is a server-side JavaScript runtime environment, while
            Express.js is a web application framework that runs on top of
            Node.js.Node.js is more of a platform than a framework. It provides
            a number of built-in modules for handling low-level tasks such as
            file I/O, network communication, and process management.Express.js
            is a framework specifically designed for building web applications.
            It provides a number of features that simplify common web
            development tasks, such as routing, handling requests and responses,
            and integrating with databases.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">
            What is a custom hook, and why will you create a custom hook?
          </p>
          <p className="text-gray-500">
            Custom hook is special javascript function which is reusable. When
            we have component logic that needs to be used by multiple components
            then we can make a custom hook using that logic. Hooks are start
            with 'use' like: useContext(). DRY (Don't Repeat Yourself) is an
            important principle in software development. Custom hooks help's us
            to keep our code DRY by preventing us from repeating the same code
            in multiple components. Custom hooks allows us to share logic
            between components without having to pass down props or use other
            more complex patterns.
          </p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="document.pdf">
        {({ toPdf }) => <div className="text-center mt-10"><button className="btn btn-info" onClick={toPdf}>Generate Pdf</button></div>}
      </Pdf>
    </>
  );
};

export default Blog;
