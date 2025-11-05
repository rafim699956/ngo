import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="py-12 lg:py-24 bg-primary">
      <div className="container space-y-4">
        <h1>Page Not Found</h1>
        <Link
          to="/"
          className="underline text-secondary font-roboto font-medium text-base leading-6"
        >
          back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
