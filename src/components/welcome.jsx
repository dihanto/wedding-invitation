// eslint-disable-next-line react/prop-types
export default function Welcome({ onClickDetail }) {
  return (
    <div className="bg-welcome-background h-[650px] flex items-center justify-center">
      <div className="bg-orange-700 bg-opacity-30 h-full w-full text-center">
        <h3 className="text-3xl font-semibold mt-16">The Wedding of</h3>
        <h1 className="text-4xl font-bold m-6">Romeo & Juliet</h1>
        <h2 className="text-xl font-semibold">
          You Are Invited to Our Wedding
        </h2>
        <div className="my-4">
          <h4 className="text-lg font-semibold">Kepada Yth.</h4>
          <h4 className="text-lg font-semibold">Bpk/Ibu/Saudara/i</h4>
        </div>
        <h2 className="text-3xl font-semibold">Romeo & Juliet</h2>
        <h4 className="text-lg font-semibold mb-16">di Tempat</h4>
        <button
          className="p-4 text-lg border text-white rounded-xl hover:border-blue-300"
          onClick={onClickDetail}
        >
          BUKA UNDANGAN
        </button>
      </div>
    </div>
  );
}
