import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [featuredPrograms, setFeaturedPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentStory, setCurrentStory] = useState(0);

  // Data testimoni
  const successStories = [
    {
      id: 1,
      name: "Andi Salman AL-Farisi",
      position: "Kaigo",
      content: "Bergabung dengan FITALENTA adalah keputusan terbaik dalam hidup saya. Saya mendapatkan pelatihan bahasa Jepang yang intensif, pemahaman budaya kerja, serta bimbingan disiplin yang benar-benar mempersiapkan saya menghadapi dunia kerja di Jepang. Berkat dukungan penuh dari para mentor, saya kini bisa bekerja dengan percaya diri di perusahaan Jepang."
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      position: "IT Engineer",
      content: "Program FITALENTA memberikan saya kesempatan emas untuk mengembangkan karir di bidang IT di Jepang. Pelatihan teknis dan bahasa yang diberikan sangat membantu adaptasi saya di lingkungan kerja baru."
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Manufacturing Specialist",
      content: "Saya sangat berterima kasih kepada FITALENTA yang telah membimbing saya dari nol hingga mampu bekerja di perusahaan manufaktur Jepang. Proses pelatihannya sistematis dan mentor sangat berpengalaman."
    }
  ];

  useEffect(() => {
    fetchFeaturedPrograms();
  }, []);

  useEffect(() => {
    if (successStories.length > 1) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [successStories.length]);

  const fetchFeaturedPrograms = async () => {
    try {
      setError("");
      const response = await axios.get("/api/programs");
      if (response.data.success) {
        setFeaturedPrograms(response.data.data.slice(0, 3));
      } else {
        setError("Failed to load programs");
      }
    } catch (error) {
      console.error("Error fetching featured programs:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to load programs. Please try again later.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const waNumber = "6281110119273";
  const waMessage =
    "Halo Fitalenta, saya tertarik dengan program magang. Mohon info pendaftaran dan langkah selanjutnya. Terima kasih!";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <div>
      <section
        className="hero-section position-relative d-flex align-items-center"
        style={{
          minHeight: "92vh",
          backgroundImage: "url('images/hero_home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Build your dream career hero"
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.59)" }}
          aria-hidden="true"
        ></div>

        <div className="container position-relative text-center text-light">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(1.6rem, 6vw, 3.4rem)",
                  lineHeight: 1.05,
                }}
              >
                Build your dream career
              </h1>
              <p
                className="lead mb-4"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
              >
                Bergabung dengan program magang kami - dapatkan pengalaman
                nyata, mentorship profesional, dan mulai perjalanan karir yang
                Anda impikan.
              </p>

              <div className="d-flex gap-3 flex-column flex-sm-row justify-content-center">
                <Link
                  to="/register"
                  className="btn btn-lg btn-primary px-4 fw-semibold"
                  role="button"
                  aria-label="Register Now"
                >
                  Register Now
                </Link>

                <Link
                  to="/programs"
                  className="btn btn-lg btn-outline-light px-4"
                  role="button"
                  aria-label="Explore Program"
                >
                  Explore Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        {error && (
          <div className="alert alert-danger alert-dismissible fade show">
            <strong>Error:</strong> {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError("")}
            ></button>
          </div>
        )}

        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-uppercase">About Us</h2>
            </div>

            <p className="text-justify">
              FITALENTA adalah lembaga pelatihan dan penyaluran kerja yang
              berfokus pada persiapan serta pendampingan individu untuk
              berkarier di Jepang. Kami menyediakan program pelatihan yang
              komprehensif mencakup bahasa, budaya, serta pengembangan
              keterampilan, sehingga setiap peserta siap menghadapi tantangan
              dunia kerja internasional.
            </p>

            <p className="text-justify">
              Dengan komitmen tinggi terhadap kualitas pendidikan dan integritas
              profesional, FITALENTA tidak hanya menjembatani tenaga kerja
              dengan peluang, tetapi juga mendorong pertumbuhan pribadi serta
              pemahaman lintas budaya. Misi kami adalah menjadi penghubung
              antara Indonesia dan Jepang melalui tenaga kerja yang terampil,
              disiplin, dan bersemangat untuk meraih kesuksesan.
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <h2 className="text-uppercase">Program</h2>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-md p-3">
              <img
                src="images/home_regular.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Program Regular</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-md p-3">
              <img
                src="images/home_hybrid.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Program Hybrid</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-md p-3">
              <img
                src="images/home_fast_track.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Program Fast Track</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <h2 className="text-uppercase">Why Choose Us</h2>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-md p-3">
              <div className="card-body text-center">
                <h5 className="card-title">Pelatihan Komprehensif</h5>
                <p className="card-text">
                  Program bahasa, budaya, dan keterampilan yang dirancang khusus
                  untuk bekerja di Jepang.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-md p-3">
              <div className="card-body text-center">
                <h5 className="card-title">Pendampingan Profesional</h5>
                <p className="card-text">
                  Mentor berpengalaman yang mendukung peserta di setiap tahap
                  proses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-md p-3">
              <div className="card-body text-center">
                <h5 className="card-title">Jaringan Terpercaya</h5>
                <p className="card-text">
                  Kerja sama yang kuat dengan lembaga dan perusahaan di Jepang.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-md p-3">
              <div className="card-body text-center">
                <h5 className="card-title">Komitmen Pada Kesuksesan</h5>
                <p className="card-text">
                  Membekali peserta agar disiplin, terampil, dan percaya diri
                  dalam berkarier.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-primary text-white p-4 p-md-5 rounded text-center">
              <h3 className="mb-3 text-uppercase">Success Stories</h3>

              <div className="position-relative overflow-hidden" style={{ minHeight: "200px" }}>
                <div
                  className="d-flex transition-all"
                  style={{
                    transform: `translateX(-${currentStory * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  {successStories.map((story, index) => (
                    <div
                      key={story.id}
                      className="w-100 flex-shrink-0 px-2"
                      style={{ minWidth: "100%" }}
                    >
                      <p className="lead mb-4">
                        {story.content}
                      </p>

                      <div className="d-flex align-items-center justify-content-center gap-3">
                        <div className="text-center text-white small">
                          <strong>{story.name}</strong>
                          <br />
                          <span>{story.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div
              className="p-4 p-md-5 rounded text-center"
              style={{ background: "#f8f9fa" }}
            >
              <h2 className="mb-3">Unlock Your Future Career Potential!</h2>
              <p className="mb-4">
                Siap memulai langkah pertama menuju karir impian Anda? Hubungi
                kami untuk informasi pendaftaran, jadwal, dan persyaratan.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-success btn-lg d-inline-flex align-items-center gap-2"
                aria-label="Chat via WhatsApp"
              >
                <i className="bi bi-whatsapp fs-4" aria-hidden="true"></i>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;