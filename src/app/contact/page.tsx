import Form from "@/components/Form";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <main className="my-10 grid gap-10">
      <div className="flex justify-center w-min mx-auto p-6 rounded-lg  my-[2rem] gap-6 shadow-lg border-2">
        <div className="bg-black text-white py-8 px-14 rounded-lg">
          <h2 className="text-[clamp(1.4rem,1.9vw,3rem)] text-nowrap">
            Contact Information
          </h2>
          <span>Say something to start a live chat</span>

          <div className="grid mt-16 gap-6">
            <div className="flex gap-2 ">
              <LocalPhoneIcon />
              <span>978976557</span>
            </div>
            <div className="flex gap-2">
              <EmailIcon />
              <span>
                <a href="mailto:ajithdah@gail.com">socialwing@gmail.com</a>
              </span>
            </div>
            <div className="flex gap-2">
              <LocationOnIcon />
              <p className="grid uppercase">
                <span>Social wing</span>
                <span className="text-nowrap ">
                  kandanvila main road, kandanvilai
                </span>
                <span>Tamil nadu 629810</span>
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.9650356511984!2d77.32381017449183!3d8.206270601325548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869ab92b58c6869b%3A0x293596e343aef689!2sSocial%20Wing!5e0!3m2!1sen!2sin!4v1734607376803!5m2!1sen!2sin"
          style={{ border: "0" }}
          loading="lazy"
          className="mx-auto w-[min(80%,90vw)] h-[500px] rounded-lg"
        ></iframe>
      </div>
    </main>
  );
}
