'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Trường Cao Đẳng Thông Tin và Truyền Thông",
      subtitle: "Đào tạo nhân lực chất lượng cao trong lĩnh vực CNTT",
      description: "Với đội ngũ giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại, chúng tôi cam kết mang đến chương trình đào tạo chất lượng quốc tế.",
      cta: "Khám phá ngay",
      ctaLink: "#programs"
    },
    {
      title: "Chương Trình Đào Tạo Hiện Đại",
      subtitle: "Cập nhật xu hướng công nghệ mới nhất",
      description: "Các chương trình được thiết kế theo chuẩn quốc tế, kết hợp lý thuyết và thực hành, giúp sinh viên sẵn sàng cho thị trường lao động.",
      cta: "Xem chương trình",
      ctaLink: "#programs"
    },
    {
      title: "Cơ Hội Nghề Nghiệp Rộng Mở",
      subtitle: "Kết nối với doanh nghiệp hàng đầu",
      description: "Tỷ lệ sinh viên có việc làm sau tốt nghiệp đạt 95%, với mức lương khởi điểm cao trong ngành công nghệ thông tin.",
      cta: "Tìm hiểu thêm",
      ctaLink: "#about"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with banner image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="College Banner"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--accent)]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-[var(--accent)]/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slide content */}
          <div className="transition-all duration-1000 ease-in-out">
            <h1 className="hero-title text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index >= 3 ? 'gradient-text' : ''}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-[var(--accent)] font-semibold mb-6 animate-fade-in-up">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link
                href={slides[currentSlide].ctaLink}
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105"
              >
                {slides[currentSlide].cta}
              </Link>
              <Link
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[var(--background)] transition-all duration-300"
              >
                Giới thiệu
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[var(--accent)] scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
