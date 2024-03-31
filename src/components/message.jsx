export default function Message() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz9rlSr_b6nZHVzjGgateAMYqWx9HcbD-CYqeS11MjYnb1ON6gnOc6ol6B8Qmg4pWdP/exec",
        {
          method: "POST",
          body: formData,
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

      <form className=" p-6 w-full form" onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nama"
                />
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="border border-black mt-3 px-3 py-1">
          Kirim
        </button>
      </form>
    </div>
  );
}
