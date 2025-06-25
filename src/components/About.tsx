'use client';

import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Giới thiệu chung',
      icon: '🏫',
      content: {
        title: 'Trường Cao Đẳng Thông Tin và Truyền Thông',
        description: 'Được thành lập với sứ mệnh đào tạo nhân lực chất lượng cao trong lĩnh vực công nghệ thông tin và truyền thông.',
        highlights: [
          'Hơn 15 năm kinh nghiệm đào tạo',
          'Đội ngũ giảng viên giàu kinh nghiệm',
          'Cơ sở vật chất hiện đại',
          'Chương trình đào tạo chuẩn quốc tế'
        ]
      }
    },
    {
      title: 'Tầm nhìn & Sứ mệnh',
      icon: '🎯',
      content: {
        title: 'Tầm nhìn 2030',
        description: 'Trở thành trường cao đẳng hàng đầu trong lĩnh vực công nghệ thông tin và truyền thông tại Việt Nam.',
        highlights: [
          'Đào tạo nguồn nhân lực chất lượng cao',
          'Nghiên cứu và ứng dụng công nghệ tiên tiến',
          'Hợp tác quốc tế trong giáo dục',
          'Phục vụ cộng đồng và xã hội'
        ]
      }
    },
    {
      title: 'Cơ sở vật chất',
      icon: '🏢',
      content: {
        title: 'Trang thiết bị hiện đại',
        description: 'Đầu tư mạnh mẽ vào cơ sở hạ tầng và trang thiết bị để đảm bảo chất lượng đào tạo.',
        highlights: [
          '20+ phòng lab chuyên ngành',
          'Thư viện số với hàng nghìn tài liệu',
          'Studio sản xuất phim chuyên nghiệp',
          'Hệ thống mạng tốc độ cao'
        ]
      }
    },
    {
      title: 'Đối tác',
      icon: '🤝',
      content: {
        title: 'Mạng lưới đối tác rộng lớn',
        description: 'Hợp tác với các doanh nghiệp hàng đầu để tạo cơ hội việc làm cho sinh viên.',
        highlights: [
          '500+ doanh nghiệp đối tác',
          'Chương trình thực tập có lương',
          'Cơ hội việc làm sau tốt nghiệp',
          'Mạng lưới cựu sinh viên mạnh'
        ]
      }
    }
  ];

  const stats = [
    { number: '15+', label: 'Năm kinh nghiệm', icon: '📅' },
    { number: '5000+', label: 'Sinh viên tốt nghiệp', icon: '🎓' },
    { number: '95%', label: 'Tỷ lệ có việc làm', icon: '💼' },
    { number: '500+', label: 'Doanh nghiệp đối tác', icon: '🏢' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Về <span className="gradient-text">Chúng Tôi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá hành trình phát triển và những thành tựu của Trường Cao Đẳng 
            Thông Tin và Truyền Thông trong suốt hơn 15 năm qua.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-effect rounded-2xl p-6 hover-glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="glass-effect rounded-2xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex flex-wrap border-b border-[var(--border)]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-0 px-4 py-6 text-center font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white'
                    : 'text-gray-300 hover:text-white hover:bg-[var(--background-tertiary)]'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">{tab.icon}</span>
                  <span className="text-sm md:text-base">{tab.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {tabs[activeTab].content.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {tabs[activeTab].content.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-[var(--background-tertiary)] rounded-lg"
                  >
                    <div className="w-3 h-3 bg-[var(--accent)] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sẵn sàng bắt đầu hành trình học tập?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Tham gia cùng chúng tôi để khám phá tiềm năng và xây dựng tương lai trong lĩnh vực công nghệ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105">
                Đăng ký tư vấn
              </button>
              <button className="border-2 border-[var(--accent)] text-[var(--accent)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--accent)] hover:text-white transition-all duration-300">
                Tải brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
