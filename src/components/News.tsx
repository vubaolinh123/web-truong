'use client';

import { useState } from 'react';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📰' },
    { id: 'academic', name: 'Học tập', icon: '🎓' },
    { id: 'events', name: 'Sự kiện', icon: '🎉' },
    { id: 'achievements', name: 'Thành tích', icon: '🏆' },
    { id: 'technology', name: 'Công nghệ', icon: '💻' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'achievements',
      title: 'Sinh viên CIC đạt giải Nhất cuộc thi Lập trình toàn quốc',
      excerpt: 'Đội tuyển lập trình của trường đã xuất sắc giành giải Nhất trong cuộc thi ACM-ICPC khu vực miền Nam.',
      date: '2024-06-20',
      image: '/api/placeholder/400/250',
      featured: true,
      readTime: '3 phút đọc'
    },
    {
      id: 2,
      category: 'academic',
      title: 'Khai giảng khóa học AI và Machine Learning',
      excerpt: 'Chương trình đào tạo mới về Trí tuệ nhân tạo và Học máy chính thức được triển khai từ học kỳ mới.',
      date: '2024-06-18',
      image: '/api/placeholder/400/250',
      featured: false,
      readTime: '5 phút đọc'
    },
    {
      id: 3,
      category: 'events',
      title: 'Hội thảo "Xu hướng công nghệ 2024"',
      excerpt: 'Sự kiện quy tụ các chuyên gia hàng đầu trong ngành công nghệ thông tin và truyền thông.',
      date: '2024-06-15',
      image: '/api/placeholder/400/250',
      featured: false,
      readTime: '4 phút đọc'
    },
    {
      id: 4,
      category: 'technology',
      title: 'Ra mắt phòng lab thực hành Cloud Computing',
      excerpt: 'Phòng thí nghiệm mới được trang bị hạ tầng hiện đại để sinh viên thực hành các công nghệ đám mây.',
      date: '2024-06-12',
      image: '/api/placeholder/400/250',
      featured: false,
      readTime: '3 phút đọc'
    },
    {
      id: 5,
      category: 'events',
      title: 'Ngày hội việc làm IT 2024',
      excerpt: 'Kết nối sinh viên với hơn 100 doanh nghiệp công nghệ hàng đầu tại Việt Nam.',
      date: '2024-06-10',
      image: '/api/placeholder/400/250',
      featured: false,
      readTime: '6 phút đọc'
    },
    {
      id: 6,
      category: 'academic',
      title: 'Chương trình trao đổi sinh viên quốc tế',
      excerpt: 'Cơ hội học tập tại các trường đại học danh tiếng ở Singapore và Malaysia.',
      date: '2024-06-08',
      image: '/api/placeholder/400/250',
      featured: false,
      readTime: '4 phút đọc'
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tin Tức & <span className="gradient-text">Sự Kiện</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cập nhật những thông tin mới nhất về hoạt động học tập, nghiên cứu và 
            các sự kiện quan trọng tại trường.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured News */}
        {featuredNews && activeCategory === 'all' && (
          <div className="mb-16">
            <div className="glass-effect rounded-2xl overflow-hidden hover-glow transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20"></div>
                  <div className="absolute top-4 left-4 bg-[var(--accent)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nổi bật
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center text-[var(--accent)] text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {new Date(featuredNews.date).toLocaleDateString('vi-VN')}
                    <span className="mx-2">•</span>
                    {featuredNews.readTime}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                    Đọc thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'all' ? regularNews : filteredNews).map((item) => (
            <article
              key={item.id}
              className="glass-effect rounded-2xl overflow-hidden hover-glow transition-all duration-300 group"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary)]/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-[var(--accent)] text-sm font-medium mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(item.date).toLocaleDateString('vi-VN')}
                  <span className="mx-2">•</span>
                  {item.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <button className="text-[var(--accent)] font-semibold hover:text-[var(--accent-light)] transition-colors flex items-center">
                  Đọc thêm
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300 transform hover:scale-105">
            Xem thêm tin tức
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
