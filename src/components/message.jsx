export default function Message() {
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

      <form className=" p-6 w-full">
        <h2 className="text-lg font-gabarito text-slate-600 text-left">
          Kirim pesan untuk Romeo & Juliet
        </h2>
        <input type="text" className="w-full p-1"></input>
        <button type="submit" className="border border-black mt-3 px-3 py-1">
          Kirim
        </button>
      </form>
    </div>
  );
}
