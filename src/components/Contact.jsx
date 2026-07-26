import { useState } from "react";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// GOOGLE FORMS INTEGRATION
// 1. Create a Google Form with fields matching the ones below.
// 2. Open the live form, right-click each field → "Inspect", and find its
//    `name="entry.XXXXXXXXXX"` attribute.
// 3. Paste those entry IDs into ENTRY_IDS below.
// 4. Paste your form's ID into GOOGLE_FORM_ACTION (the long ID in the form URL,
//    right before "/formResponse").
// ---------------------------------------------------------------------------
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNMkIdN3jExzhSEE9u4n1xWRh8gbDKiT5aodmAHxZikIsYLg/formResponse";

const ENTRY_IDS = {
  name: "entry.223103688",
  businessName: "entry.1140870781",
  email: "entry.386097671",
  phone: "entry.1499116579",
  websiteType: "entry.1387445933",
  budget: "entry.1440032242",
  requirements: "entry.799986892",
};

const initialState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  websiteType: "Business Website",
  budget: "Under ₹5,000",
  requirements: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const data = new FormData();
    data.append(ENTRY_IDS.name, form.name);
    data.append(ENTRY_IDS.businessName, form.businessName);
    data.append(ENTRY_IDS.email, form.email);
    data.append(ENTRY_IDS.phone, form.phone);
    data.append(ENTRY_IDS.websiteType, form.websiteType);
    data.append(ENTRY_IDS.budget, form.budget);
    data.append(ENTRY_IDS.requirements, form.requirements);

    try {
      // no-cors: Google Forms doesn't return a readable response, but the
      // submission still goes through and lands in the linked Sheet.
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setStatus(
        "Thanks! We've received your requirement and will reach out within 24 hours.",
      );
      setForm(initialState);
    } catch (err) {
      setStatus(
        "Something went wrong — please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-borderMain py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent bg-accentSoft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
              /contact
            </div>
            <h2 className="font-sora font-bold text-[32px] mb-4">
              Tell us about your project
            </h2>
            <p className="text-textMid text-[15.5px] mb-6">
              Fill in the requirement form and we'll get back to you within 24
              hours with a clear quote and timeline — no obligation.
            </p>
            <div className="flex gap-3 items-center mb-4 text-[14.5px] text-textMid">
              <span className="text-accent">✉</span>{" "}
              shivamkumarsingh63724@gmail.com
            </div>
            <div className="flex gap-3 items-center mb-4 text-[14.5px] text-textMid">
              <span className="text-accent">📞</span> +91 9304581078
            </div>
            <div className="flex gap-3 items-center mb-4 text-[14.5px] text-textMid">
              <span className="text-accent">📍</span> Remote-first, serving
              clients across India
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-bgSurface border border-borderMain rounded-xl2 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Your business (optional)"
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Website type
                  </label>
                  <select
                    name="websiteType"
                    value={form.websiteType}
                    onChange={handleChange}
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  >
                    <option>Business Website</option>
                    <option>Portfolio</option>
                    <option>E-Commerce</option>
                    <option>Custom Application</option>
                    <option>Landing Page</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] text-textMid mb-1.5">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors"
                  >
                    <option>Under ₹5,000</option>
                    <option>₹5,000 – ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-3.5">
                <label className="block text-[13px] text-textMid mb-1.5">
                  Additional requirements
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about features you need, your timeline, and anything else."
                  className="w-full bg-bgSurface2 border border-borderMain rounded-lg px-3 py-2.5 text-sm text-textHi outline-none focus:border-accent transition-colors min-h-[80px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-1.5 justify-center inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-[15px] font-semibold bg-accent text-white hover:bg-[#5457e0] transition-all disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send requirement"}
              </button>
              {status && (
                <p className="text-[13px] text-textMid mt-3 text-center">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
