'use client';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Địa chỉ',
      details: [
        '123 Đường ABC, Quận XYZ',
        'Thành phố Hồ Chí Minh, Việt Nam'
      ]
    },
    {
      icon: '📞',
      title: 'Điện thoại',
      details: [
        'Hotline: (028) 1234 5678',
        'Phòng đào tạo: (028) 1234 5679'
      ]
    },
    {
      icon: '✉️',
      title: 'Email',
      details: [
        'info@cic.edu.vn',
        'tuyensinh@cic.edu.vn'
      ]
    },
    {
      icon: '🕒',
      title: 'Giờ làm việc',
      details: [
        'Thứ 2 - Thứ 6: 8:00 - 17:00',
        'Thứ 7: 8:00 - 12:00'
      ]
    }
  ];

  const departments = [
    {
      name: 'Phòng Đào tạo',
      phone: '(028) 1234 5679',
      email: 'daotao@cic.edu.vn',
      description: 'Thông tin về chương trình học, lịch thi, kết quả học tập'
    },
    {
      name: 'Phòng Tuyển sinh',
      phone: '(028) 1234 5680',
      email: 'tuyensinh@cic.edu.vn',
      description: 'Tư vấn tuyển sinh, hồ sơ nhập học, học bổng'
    },
    {
      name: 'Phòng Công tác sinh viên',
      phone: '(028) 1234 5681',
      email: 'ctsv@cic.edu.vn',
      description: 'Hỗ trợ sinh viên, hoạt động ngoại khóa, việc làm'
    },
    {
      name: 'Phòng Tài chính',
      phone: '(028) 1234 5682',
      email: 'taichinh@cic.edu.vn',
      description: 'Học phí, học bổng, các khoản thu chi'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--background-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Liên Hệ <span className="gradient-text">Với Chúng Tôi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn. 
            Hãy liên hệ với chúng tôi qua các kênh dưới đây.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover-glow transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">💬</span>
              Gửi tin nhắn cho chúng tôi
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                    placeholder="Nhập email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Chủ đề
                </label>
                <select className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white focus:outline-none focus:border-[var(--accent)]">
                  <option value="">Chọn chủ đề</option>
                  <option value="admissions">Tuyển sinh</option>
                  <option value="programs">Chương trình đào tạo</option>
                  <option value="tuition">Học phí</option>
                  <option value="scholarships">Học bổng</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Tin nhắn <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white py-4 rounded-lg font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Departments & Map */}
          <div className="space-y-8">
            {/* Departments */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🏢</span>
                Các phòng ban
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[var(--background-tertiary)] rounded-lg hover:bg-[var(--background)] transition-colors duration-300"
                  >
                    <h4 className="text-white font-semibold mb-2">{dept.name}</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-300">
                        <span className="text-[var(--accent)]">📞</span> {dept.phone}
                      </p>
                      <p className="text-gray-300">
                        <span className="text-[var(--accent)]">✉️</span> {dept.email}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">{dept.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🗺️</span>
                Bản đồ
              </h3>
              <div className="bg-[var(--background-tertiary)] rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-gray-300 mb-2">Trường Cao Đẳng Thông Tin và Truyền Thông</p>
                  <p className="text-gray-400 text-sm">123 Đường ABC, Quận XYZ, TP.HCM</p>
                  <button className="mt-4 bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--accent-dark)] transition-colors">
                    Xem trên Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Cần hỗ trợ nhanh?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <button className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">📱</span>
                Chat Zalo
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">💬</span>
                Chat Facebook
              </button>
              <button className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">📞</span>
                Gọi ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
