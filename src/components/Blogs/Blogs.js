import React from 'react';

const Blogs = () => {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <p className="font-semibold title-font mx-auto my-auto text-gray-700">
                  How will you improve the performance of a React Application?
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Optimizing performance in a React application
                </h2>
                <div className="leading-relaxed">
                  There are given some technique's to Optimize performance in a
                  React Application
                  <ul>
                    <li>Keeping component state local where necessary.</li>
                    <li>
                      Memoizing React components to prevent unnecessary
                      re-renders.
                    </li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <p className="font-semibold title-font mx-auto my-auto text-gray-700">
                  What is a unit test? <br /> Why should write unit tests?
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Unit Test
                </h2>
                <p className="leading-relaxed">
                  Unit tests are typically automated tests written and run by
                  software developers to ensure that a section of an application
                  (known as the "unit") meets its design and behaves as
                  intended. In procedural programming, a unit could be an entire
                  module, but it is more commonly an individual function or
                  procedure.
                </p>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Benefits of Unit testing.
                </h2>
                <p className="leading-relaxed">
                  Unit testing ensures that all code meets quality standards
                  before it's deployed. This ensures a reliable engineering
                  environment where quality is paramount. Over the course of the
                  product development life cycle, unit testing saves time and
                  money, and helps developers write better code, more
                  efficiently.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <p className="font-semibold title-font mx-auto my-auto text-gray-700">
                  What are the different ways to manage a state in a React
                  application?
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  There are four main types of state you need to properly manage
                  in your React apps:
                </h2>
                <div className="leading-relaxed">
                  <ul>
                    <li>
                      <span className="font-bold">Local (UI) state- </span>Local
                      state is data we manage in one or another component.
                    </li>
                    <li>
                      <span className="font-bold">Global (UI) state– </span>
                      Global state is data we manage across multiple components.
                    </li>
                    <li>
                      <span className="font-bold">Server state – </span>Data
                      that comes from an external server that must be integrated
                      with our UI state.
                    </li>
                    <li>
                      <span className="font-bold">URL state – </span>Data that
                      exists on our URLs, including the pathname and query
                      parameters.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <p className="font-semibold title-font mx-auto my-auto text-gray-700">
                  How does prototypical inheritance work?
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Prototypical inheritance works
                </h2>
                <p className="leading-relaxed p-2 text-justify">
                  Simply put, prototypical inheritance refers to the ability to
                  access object properties from another object. We use a
                  JavaScript prototype to add new properties and methods to an
                  existing object constructor. We can then essentially tell our
                  JS code to inherit properties from a prototype. Prototypical
                  inheritance allows us to reuse the properties or methods from
                  one JavaScript object to another through a reference pointer
                  function.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <p className="font-semibold title-font mx-auto my-auto text-left text-gray-700">
                  Why you do not set the state directly in React. <br />
                  For example, if you have const [products, setProducts] =
                  useState([]). Why you do not set products = [...] instead, you
                  use the setProducts
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  Reason for not set state directly.
                </h2>
                <p className="leading-relaxed">
                  One should never update the state directly because of the
                  following reasons: If we update it directly, calling the
                  setState() afterward may just replace the update we made. When
                  we directly update the state, like products = [...] it does not allow to change the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blogs;