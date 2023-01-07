import React, { useState } from "react";
import { ContentWrapper } from "../wrappers/ContentWrapper";
import { send } from "emailjs-com";
import { PERSONAL_INFO } from "../constants/personalInfo";
import { EMAILJS_INFO } from "../constants/emailJS";

const initialState = {
  to_name: PERSONAL_INFO.gmail,
  from_name: "",
  message: "",
};

export function Contact() {
  const pageDescription = "Here's how you can get in touch with me.";
  const [toSend, setToSend] = useState(initialState);

  const isMessageBtnDisabled =
    !toSend.from_name.trim() || !toSend.message.trim();

  function handleSubmit(e) {
    e.preventDefault();
    send(
      EMAILJS_INFO.service_id,
      EMAILJS_INFO.template_id,
      toSend,
      EMAILJS_INFO.public_key
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  function handleChange(e) {
    setToSend({ ...toSend, [e.target.id]: e.target.value });
  }
  return (
    <ContentWrapper heading={"Contact"} description={pageDescription}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <div className="mb-1">
                <label htmlFor="from_name">Name: </label>
              </div>

              <input
                type="text"
                id="from_name"
                onChange={handleChange}
                value={toSend.from_name}
                placeholder={"Name or email"}
                className="dark:bg-zinc-800 bg-slate-200 w-full h-10 px-2 outline-none rounded-md"
              />
            </div>
            <div>
              <div className="mb-1">
                <label htmlFor="message">Message: </label>
              </div>

              <textarea
                id="message"
                onChange={handleChange}
                value={toSend.message}
                cols="30"
                rows="10"
                className="dark:bg-zinc-800 bg-slate-200 resize-none outline-none rounded-md p-2"
                placeholder="Say hi!"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" disabled:opacity-50 w-full bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-700 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 text-white px-10 py-3 rounded-lg text-base font-bold tracking-wider mb-5"
                disabled={isMessageBtnDisabled}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
}
