import girl from "../assets/girl.jpg";
import man from "../assets/man.jpg";
export default function Hello() {
  return (
    <div className="bg-orange-50 px-3 py-5">
      <h2 className="text-2xl ">Assalamualaikum Wr. Wb</h2>
      <h2 className="text-xl"> Sabtu, 03 Oktober 2024</h2>
      <p>
        Dengan memohon Rahmat dan Ridho Illahi, teririn niat menjalankan Sunnah
        Rasulullah untuk membentuk rumah tangga yang Sakinah, Mawaddah wa
        Rahmah, kami mohon do`a agar senantiasa diberikan kelancaran dan
        keberkahan.
      </p>
      <div className="flex justify-end mt-3">
        <div className="text-right mr-6">
          <h2 className="text-lg">Juliet</h2>
          <p className="text-base "> Putri Bapak Tatang </p>
          <p className="text-base leading-3"> & Ibu Setyo Listiani</p>
        </div>
        <div>
          <img src={girl} className="rounded-full w-24 h-24" />
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <div>
          <img src={man} className="rounded-full w-24 h-24" />
        </div>
        <div className="text-left ml-3">
          <h2 className="text-lg">Romeo</h2>
          <p className="text-base"> Putra Bapak Bunari</p>
          <p className="text-base leading-3"> & Ibu Suratun</p>
        </div>
      </div>
    </div>
  );
}
