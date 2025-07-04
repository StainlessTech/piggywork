import React from "react";

const Header = () => {
  return (
    <div className=" flex px-28 justify-between items-center">
      <section className=" flex">
        <img src="" alt="logo" />
        <div>Save</div>
        <div>invest</div>
        <div>stories</div>
        <div>FAQs</div>
        <div>Resource</div>
      </section>
      <section>
        <button>Sign in</button>
        <button>Create Free Account</button>
      </section>
    </div>
  );
};

export default Header;
