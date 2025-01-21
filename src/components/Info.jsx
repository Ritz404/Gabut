import { FaWhatsapp } from "react-icons/fa";

const Info = () => {
    return (
        <div className="p-2">
            <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold">Information</span>
            </div>
            <div className="flex flex-col px-2 pt-6">
                <span className="">
                    Selamat datang di ZeroNime. Website baca komik online yang berisi berbagai koleksi manhua, manhwa, dan manga dengan terjemahan Bahasa Indonesia berkualitas. Nikmati pengalaman membaca komik favorit kamu dengan fitur yang mudah digunakan dan tampilan yang nyaman di semua perangkat.
                </span>
                <span className="text-lg font-semibold pt-4">Ikuti Media Sosial Kami Di Whatsapp</span>
                <a className="flex items-center gap-1" href="https://whatsapp.com/channel/0029VaX3jOgAe5VguykGye3k" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="" />
                    <span>Saluran WhatsApp</span>
                </a>
                <a className="flex items-center gap-1" href="https://chat.whatsapp.com/B8pXE5442MWKJmYibDtr0F" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="" />
                    <span>Grup WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default Info;
