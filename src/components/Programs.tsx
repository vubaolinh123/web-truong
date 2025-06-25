'use client';

import { useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Programs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useScrollAnimation();
  const gridRef = useStaggeredAnimation(150);

  const programCategories = [
    {
      title: "Công Nghệ Thông Tin",
      icon: "💻",
      programs: [
        {
          name: "Lập trình phần mềm",
          duration: "3 năm",
          description: "Đào tạo kỹ năng lập trình, phát triển ứng dụng web, mobile và desktop",
          skills: ["Java", "Python", "React", "Node.js", "Database"],
          career: "Lập trình viên, Phát triển phần mềm, Full-stack Developer"
        },
        {
          name: "Quản trị mạng",
          duration: "3 năm", 
          description: "Quản lý hệ thống mạng, bảo mật thông tin và hạ tầng IT",
          skills: ["Network Security", "Linux", "Windows Server", "Cisco", "Cloud Computing"],
          career: "Quản trị viên mạng, Chuyên gia bảo mật, System Administrator"
        },
        {
          name: "Thiết kế đồ họa",
          duration: "3 năm",
          description: "Sáng tạo nội dung thị giác, thiết kế UI/UX và multimedia",
          skills: ["Photoshop", "Illustrator", "After Effects", "UI/UX Design", "3D Modeling"],
          career: "Graphic Designer, UI/UX Designer, Motion Graphics Artist"
        }
      ]
    },
    {
      title: "Truyền Thông",
      icon: "📺",
      programs: [
        {
          name: "Báo chí truyền thông",
          duration: "3 năm",
          description: "Kỹ năng viết báo, sản xuất nội dung và quản lý truyền thông",
          skills: ["Content Writing", "Video Production", "Social Media", "PR", "Digital Marketing"],
          career: "Nhà báo, Content Creator, PR Specialist, Social Media Manager"
        },
        {
          name: "Sản xuất phim truyền hình",
          duration: "3 năm",
          description: "Kỹ thuật quay phim, dựng phim và sản xuất chương trình truyền hình",
          skills: ["Camera Operation", "Video Editing", "Sound Design", "Lighting", "Directing"],
          career: "Đạo diễn, Quay phim, Biên tập viên, Producer"
        },
        {
          name: "Marketing số",
          duration: "3 năm",
          description: "Chiến lược marketing online, phân tích dữ liệu và quảng cáo số",
          skills: ["Google Ads", "Facebook Ads", "SEO/SEM", "Analytics", "E-commerce"],
          career: "Digital Marketer, SEO Specialist, Data Analyst, E-commerce Manager"
        }
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--background-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chương Trình <span className="gradient-text">Đào Tạo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Các chương trình được thiết kế theo chuẩn quốc tế, kết hợp lý thuyết và thực hành, 
            đáp ứng nhu cầu nhân lực của thị trường lao động hiện đại.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-2">
            {programCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div ref={gridRef} className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {programCategories[activeTab].programs.map((program, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-glow transition-all duration-300 group animate-on-scroll"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {program.name}
                </h3>
                <div className="flex items-center text-[var(--accent)] font-semibold mb-4">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {program.duration}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Kỹ năng chính:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[var(--primary)]/30 text-[var(--accent)] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Cơ hội nghề nghiệp:</h4>
                <p className="text-gray-300 text-sm">
                  {program.career}
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white py-3 rounded-lg font-semibold hover-glow transition-all duration-300 transform hover:scale-105">
                Tìm hiểu thêm
              </button>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "95%", label: "Tỷ lệ có việc làm" },
            { number: "500+", label: "Doanh nghiệp đối tác" },
            { number: "15+", label: "Năm kinh nghiệm" },
            { number: "5000+", label: "Sinh viên tốt nghiệp" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
