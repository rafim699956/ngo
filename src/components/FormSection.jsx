import React from "react";

const FormSection = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container">
        <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="fName">First Name</label>
            <input
              value="John"
              id="fName"
              type="text"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lName">Last Name</label>
            <input
              value="Doe"
              id="lName"
              type="text"
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Id</label>
            <input
              value="johndoe@gmail.com"
              id="email"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Enter Your Subject" />
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Type your Message" name="message" id="massage"></textarea>
          </div>
          <div className="col-span-full flex items-center justify-center">
            <button className="btn btn-primary text-black hover:text-white" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
