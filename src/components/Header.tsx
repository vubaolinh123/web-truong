'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Trang chủ', labelEn: 'Home' },
    { href: '#programs', label: 'Chương trình đào tạo', labelEn: 'Programs' },
    { href: '#news', label: 'Tin tức', labelEn: 'News' },
    { href: '#admissions', label: 'Tuyển sinh', labelEn: 'Admissions' },
    { href: '#about', label: 'Giới thiệu', labelEn: 'About' },
    { href: '#contact', label: 'Liên hệ', labelEn: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect anime-shadow' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 hover-glow">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-mono">CIC</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-white leading-tight">
                Trường Cao Đẳng<br />
                <span className="gradient-text">Thông Tin & Truyền Thông</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#admissions"
              className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-6 py-2 rounded-full font-semibold hover-glow transition-all duration-300"
            >
              Đăng ký ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
            >
              Đăng ký ngay
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
