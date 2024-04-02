import girl from "../assets/girl.jpg";
import man from "../assets/man.jpg";
export default function Hello() {
  return (
    <div className="bg-slate-50 px-3 py-8" id="home">
      <h2 className="text-3xl font-great text-pink-400 pb-4">
        Assalamualaikum Wr. Wb
      </h2>
      <h2 className="pb-3 text-xl font-medium text-slate-600">
        {" "}
        Sabtu, 03 Oktober 2024
      </h2>
      <p className="text-slate-500 font-gabarito">
        Dengan memohon Rahmat dan Ridho Illahi, teririn niat menjalankan Sunnah
        Rasulullah untuk membentuk rumah tangga yang Sakinah, Mawaddah wa
        Rahmah, kami mohon do`a agar senantiasa diberikan kelancaran dan
        keberkahan.
      </p>
      <div className="mt-5">
        <div className="text-right mr-6 w-full">
          <img src={girl} className="rounded-full w-32 h-32 mx-auto" />
          <h2 className="text-2xl font-dancing text-pink-400 text-center mt-4">
            Juliet
          </h2>
          <p className="text-sm font-gabarito text-slate-500 text-center mt-1">
            {" "}
            Putri Bapak Tatang{" "}
          </p>
          <p className="text-sm text-center font-gabarito leading-3 text-slate-500 mt-1">
            {" "}
            & Ibu Setyo Listiani
          </p>
        </div>
      </div>
      <div className="text-5xl font-bold text-center my-5 text-pink-400">&</div>
      <img src={man} className="rounded-full mt-4 w-32 h-32 mx-auto" />
      <div className="text-center">
        <h2 className="text-2xl font-dancing text-pink-400 mt-4">Romeo</h2>
        <p className="text-sm font-gabarito text-slate-500 mt-1">
          {" "}
          Putra Bapak Bunari
        </p>
        <p className="text-sm font-gabarito text-slate-500 leading-3 mt-1">
          {" "}
          & Ibu Suratun
        </p>
      </div>
    </div>
  );
}
