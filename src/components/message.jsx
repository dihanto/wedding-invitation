import { useState } from "react";

export default function Message() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, message };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwBkSRYcGRAxXdXiIrXlF_0TnEm-suqr9V65TR9uSeE9MCZzD8yoheFQYZnOIgceST6/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Data insert successfully");
      } else {
        console.error("Failed to insert data");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="w-full pt-6 bg-red-50">
      <h1 className="text-3xl text-pink-400 font-bold font-great">
        Dari Sahabat
      </h1>

      <h3 className="text-lg text-slate-600 font-semibold font-gabarito">
        Tomy Brody
      </h3>
      <p className="font-gabarito text-slate-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sint
        obcaecati. Nisi inventore architecto possimus vel doloremque temporibus
        ab ullam adipisci consequuntur minus totam rerum molestiae officia enim
        eius minima est, praesentium consequatur, blanditiis iste quas. Dicta
        voluptatem laboriosam provident.
      </p>

      <form className=" p-6 w-full" onSubmit={handleSubmit}>
        <h2 className="text-lg font-gabarito text-slate-600 text-left">
          Kirim pesan untuk Romeo & Juliet
        </h2>
        <input
          type="text"
          placeholder="name"
          className="w-full p-1 mb-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          className="w-full p-1"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button type="submit" className="border border-black mt-3 px-3 py-1">
          Kirim
        </button>
      </form>
    </div>
  );
}
