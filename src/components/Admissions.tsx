'use client';

import { useState } from 'react';

const Admissions = () => {
  const [selectedProgram, setSelectedProgram] = useState('');

  const admissionSteps = [
    {
      step: '01',
      title: 'Đăng ký online',
      description: 'Điền form đăng ký trực tuyến với thông tin cá nhân và nguyện vọng',
      icon: '📝'
    },
    {
      step: '02', 
      title: 'Nộp hồ sơ',
      description: 'Chuẩn bị và nộp hồ sơ theo yêu cầu của từng chương trình đào tạo',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Xét tuyển',
      description: 'Trường sẽ xem xét hồ sơ và thông báo kết quả trong vòng 7 ngày',
      icon: '🔍'
    },
    {
      step: '04',
      title: 'Nhập học',
      description: 'Hoàn tất thủ tục nhập học và bắt đầu hành trình học tập',
      icon: '🎓'
    }
  ];

  const requirements = [
    {
      title: 'Bằng tốt nghiệp THPT',
      description: 'Bản chính hoặc bản sao có công chứng',
      required: true
    },
    {
      title: 'Học bạ THPT',
      description: 'Bản sao có công chứng học bạ 3 năm THPT',
      required: true
    },
    {
      title: 'Chứng minh nhân dân/CCCD',
      description: 'Bản sao có công chứng',
      required: true
    },
    {
      title: 'Ảnh 3x4',
      description: '6 ảnh 3x4 chụp trong vòng 6 tháng',
      required: true
    },
    {
      title: 'Giấy khám sức khỏe',
      description: 'Giấy khám sức khỏe theo mẫu của Bộ Y tế',
      required: true
    },
    {
      title: 'Chứng chỉ ngoại ngữ',
      description: 'TOEIC, IELTS hoặc chứng chỉ tương đương (nếu có)',
      required: false
    }
  ];

  const tuitionFees = [
    {
      program: 'Công nghệ thông tin',
      fee: '18.000.000',
      duration: '3 năm',
      installments: '3 đợt/năm'
    },
    {
      program: 'Truyền thông đa phương tiện',
      fee: '16.000.000',
      duration: '3 năm', 
      installments: '3 đợt/năm'
    },
    {
      program: 'Thiết kế đồ họa',
      fee: '17.000.000',
      duration: '3 năm',
      installments: '3 đợt/năm'
    }
  ];

  const scholarships = [
    {
      name: 'Học bổng xuất sắc',
      amount: '100%',
      criteria: 'Điểm trung bình ≥ 9.0 và có thành tích đặc biệt',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Học bổng khuyến khích',
      amount: '50%',
      criteria: 'Điểm trung bình ≥ 8.0 hoặc hoàn cảnh khó khăn',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Học bổng tài năng',
      amount: '30%',
      criteria: 'Có năng khiếu đặc biệt trong lĩnh vực IT/Truyền thông',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thông Tin <span className="gradient-text">Tuyển Sinh</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tìm hiểu quy trình tuyển sinh, học phí và các chương trình học bổng 
            dành cho sinh viên xuất sắc.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Quy trình tuyển sinh
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover-glow transition-all duration-300 group"
              >
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and Tuition */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Requirements */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📄</span>
              Hồ sơ yêu cầu
            </h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-[var(--background-tertiary)] rounded-lg"
                >
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                    req.required ? 'bg-red-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {req.title}
                      {req.required && <span className="text-red-500 ml-1">*</span>}
                    </h4>
                    <p className="text-gray-300 text-sm">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <span className="text-red-500">*</span> Hồ sơ bắt buộc
            </p>
          </div>

          {/* Tuition Fees */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">💰</span>
              Học phí
            </h3>
            <div className="space-y-4">
              {tuitionFees.map((fee, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--background-tertiary)] rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">{fee.program}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Học phí/năm:</span>
                      <div className="text-[var(--accent)] font-bold">
                        {fee.fee} VNĐ
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Thời gian:</span>
                      <div className="text-white">{fee.duration}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">Thanh toán:</span>
                      <div className="text-white">{fee.installments}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Chương trình học bổng
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover-glow transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${scholarship.color} flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {scholarship.name}
                </h4>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold gradient-text">
                    {scholarship.amount}
                  </span>
                  <span className="text-gray-300 ml-2">học phí</span>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  {scholarship.criteria}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Đăng ký tư vấn tuyển sinh
          </h3>
          <form className="grid md:grid-cols-2 gap-6">
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
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                placeholder="Nhập số điện thoại"
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
            <div>
              <label className="block text-white font-semibold mb-2">
                Chương trình quan tâm
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="">Chọn chương trình</option>
                <option value="it">Công nghệ thông tin</option>
                <option value="media">Truyền thông đa phương tiện</option>
                <option value="design">Thiết kế đồ họa</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-semibold mb-2">
                Tin nhắn
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-[var(--background-tertiary)] border border-[var(--border)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)]"
                placeholder="Nhập câu hỏi hoặc thông tin bổ sung..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105"
              >
                Gửi đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
