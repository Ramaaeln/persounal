import Background from '../assets/background.jpg';
export default function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="relative z-10 w-1/3 ml-26 content-center mt-12 ">
        <h1 className="font-bold text-5xl">Personal Soul Fragrance</h1>
        <p className="text-justify mt-5">
          Dengan memahami bahwa Gen Z memiliki kebutuhan kuat untuk menjadi
          autentik dan mengekspresikan identitasnya, PerSoulnal hadir sebagai
          media eksplorasi diri yang modern namun tetap berakar pada budaya
          lokal. Aroma dari rempah, bunga, dan bahan alami khas Indonesia
          dipilih secara khusus untuk mencerminkan tiap tipe MBTI, menjadikan
          setiap aroma tidak hanya wangi, tapi juga bermakna
        </p>
        <div className="gap-10 flex mt-5 content-center">
          <a
            href=""
            className="bg-black hover:bg-white hover:text-black transition duration-300 delay-20 text-white px-5 py-2 rounded-xl"
          >
            <span className="ri-shopping-cart-line"></span> Shop Now
          </a>
          <a
            href="https://www.16personalities.com/id/tes-kepribadian"
            target="_blank"
            className="bg-black text-white px-5 py-2 hover:bg-white hover:text-black rounded-xl transition duration-300 delay-20 "
          >
            <i className="ri-search-line "></i> Check Your MBTI
          </a>
        </div>
      </div>
    </div>
  );
}
