import { useEffect } from "react";
import pp from "../assets/pp.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CV = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out-cubic',
            once: true,
        });

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-600 min-h-screen p-6 sm:p-10 bg-animated">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-6 sm:p-10 hover:shadow-3xl transition duration-300">
              
                <div className="flex flex-col sm:flex-row items-center border-b-2 border-gray-200 pb-6 mb-10" data-aos="fade-up">
                    <img
                        src={pp}
                        alt="Profile"
                        className="h-32 w-32 rounded-full border-4 border-purple-500 shadow-lg transform transition duration-500 hover:scale-110 profile-picture"
                    />
                    <div className="sm:ml-8 mt-4 sm:mt-0 flex-1">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-600">Ira Revaliawanti</h1>
                        <p className="text-lg sm:text-xl text-gray-600 mt-2">Web Developer | Designer </p>
                        <p className="mt-4 text-gray-700">Saya adalah seorang pengembang web yang berdedikasi dengan pengalaman dalam membangun aplikasi web yang interaktif dan desain antarmuka yang estetis. Berfokus pada kualitas, efisiensi, dan inovasi dalam setiap proyek yang saya kerjakan.</p>
                    </div>
                    <div className="sm:ml-8 mt-6 sm:mt-0 bold">
                        <h2 className="text-xl font-semibold text-teal-700 mb-3">Contact</h2>
                        <div className="text-gray-700 space-y-2">
                            <p className="icon">
                                <i className="fa-solid fa-phone text-green-500"></i> +62 95-6096-80608
                            </p>
                            <p className="icon">
                                <i className="fa-solid fa-envelope text-red-500"></i> irevaliawanti@gmail.com
                            </p>
                            <p className="icon">
                                <i className="fa-brands fa-github text-black"></i>{" "}
                                <a
                                    href="https://github.com/iraa-ui"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                    rel="noreferrer"
                                >
                                    github.com/iraa-ui
                                </a>
                            </p>
                            <p className="icon">
                                <i className="fa-brands fa-instagram text-pink-500"></i>{" "}
                                <a
                                    href="https://www.instagram.com/ir4rv"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                    rel="noreferrer"
                                >
                                    ir4rv
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                
               
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Education</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>
                            <strong>Vocational SMK PRAKARYA INTERNASIONAL High School</strong> (2023 - 2026)
                            <p className="mt-2 text-gray-600">Lulus dengan jurusan Perangkat Lunak dan pengembangan game. Mendapatkan pengetahuan mendalam tentang pengembangan perangkat lunak, desain web, dan database.</p>
                        </li>
                    </ul>
                </div>

               
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Experience</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>
                            <strong>Library Application Developer</strong>
                            <p className="mt-2 text-gray-600">Mengembangkan aplikasi perpustakaan berbasis web menggunakan PHP, HTML, CSS, dan JavaScript. Mengintegrasikan MySQL untuk pengelolaan data buku dan anggota secara real-time.</p>
                        </li>
                        <li>
                            <strong>Student Registration System Developer</strong>
                            <p className="mt-2 text-gray-600">Membangun sistem pendaftaran siswa untuk sekolah menggunakan PHP dan MySQL melibatkan fitur autentikasi dan manajemen data siswa yang aman.</p>
                        </li>
                        <li>
                            <strong>Digital Catalog Project</strong>
                            <p className="mt-2 text-gray-600">Merancang dan mengembangkan katalog digital untuk sejarah dengan fitur pencarian, filter, dan tampilan yang responsif. Menggunakan React.js dan Tailwind CSS untuk meningkatkan UX/UI.</p>
                        </li>
                        <li>
                            <strong>Todo List Application</strong>
                            <p className="mt-2 text-gray-600">Membuat aplikasi manajemen tugas sederhana dengan fokus pada pengalaman pengguna yang intuitif, melibatkan fitur CRUD dan penyimpanan lokal.</p>
                        </li>
                        <li>
                            <strong>Freelance UI/UX Designer</strong> (2020 - Present)
                            <p className="mt-2 text-gray-600">Mendesain antarmuka pengguna yang estetis dan fungsional menggunakan Figma dan Canva untuk memvisualisasikan ide-ide desain dengan baik.</p>
                        </li>
                    </ul>
                </div>

                
                <div className="flex flex-col sm:flex-row mb-8 space-y-6 sm:space-y-0 sm:space-x-12">
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Hard Skills</h2>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>HTML, CSS, JavaScript</li>
                            <li>PHP & Laravel</li>
                            <li>React.js</li>
                            <li>Bootstrap & Tailwind CSS</li>
                            <li>UI/UX Design (Figma, Canva)</li>
                        </ul>
                    </div>
                    <div className="flex-1" data-aos="fade-right">
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Soft Skills</h2>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Strong Communication</li>
                            <li>Problem Solving</li>
                            <li>Teamwork & Leadership</li>
                            <li>Adaptability</li>
                            <li>Attention to Detail</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t-2 border-dark-300 bg-gradient-to-r from-teal-500 to-indigo-600" />

             
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Hobbies & Interests</h2>
                    <p className="text-gray-700">Saya memiliki ketertarikan pada teknologi baru, desain grafis, dan seni digital. Di waktu luang, saya menikmati membaca buku pengembangan diri, mendengarkan musik, dan bersepeda.</p>
                </div>
            </div>
        </div>
    );
};

export default CV;
