// eslint-disable-next-line react/prop-types
export default function Welcome({ onClickDetail }) {
  return (
    <div className="bg-welcome-background h-screen flex items-center justify-center">
      <div className="bg-orange-700 bg-opacity-30 h-full w-full">
        <h3 className="text-3xl font-semibold mt-16 font-alex">
          The Wedding of
        </h3>
        <h1 className="text-5xl font-bold m-6 font-dancing">Romeo & Juliet</h1>
        <h2 className="text-xl  font-gabarito">
          You Are Invited to Our Wedding
        </h2>
        <div className="my-6">
          <h4 className="text-base  font-gabarito">Kepada Yth.</h4>
          <h4 className="text-base  font-gabarito">Bpk/Ibu/Saudara/i</h4>
        </div>
        <h2 className="text-3xl  font-oswald">Sebastian</h2>
        <h4 className="text-lg  mb-16 font-gabarito">di Tempat</h4>
        <a href="#detail">
          <button
            className="p-4 text-lg border text-white rounded-xl hover:border-orange-600 font-semibold shadow-xl"
            onClick={onClickDetail}
          >
            BUKA UNDANGAN
          </button>
        </a>
      </div>
    </div>
  );
}
