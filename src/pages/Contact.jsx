import { useState } from 'react';
import { HiMail, HiPhone, HiUser, HiLocationMarker } from 'react-icons/hi';

const teamMembers = [
  {
    name: 'David Hald',
    title: 'AI Specialist',
    expertise: 'AI',
    email: 'david@esecsec.dk',
    phone: '+45 40 91 42 53'
  },
  {
    name: 'Jakob Østergaard',
    title: 'IT-security Specialist',
    expertise: 'Sikkerhedsanalyse, Compliance, IT-sikkerhed',
    email: 'jakob@esecsec.dk',
    phone: '?'
  },
  {
    name: 'Jan Kaastrup',
    title: 'Branddirektør',
    expertise: 'IT-brandmand',
    email: 'jan@esecsec.dk',
    phone: '?'
  },
  {
    name: 'Morten Felding',
    title: 'Sælger',
    expertise: 'Salg',
    email: 'morten@esecsec.dk',
    phone: '?'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kontakt Os</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Vi er her for at hjælpe. Kontakt os med dine spørgsmål om AI og IT-sikkerhedsløsninger.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Send os en besked</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Emne
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Besked
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Send Besked
            </button>
          </form>
        </section>

        {/* Location and Contact Info */}
        <section className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Find os her</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <HiLocationMarker className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Hovedkontor</h3>
                  <p className="text-gray-600">
                    Esecsec<br />
                    Hørsholm, Danmark
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <HiPhone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <a href="tel:+4540914253" className="text-gray-600 hover:text-primary">
                    +45 40 91 42 53
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <HiMail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@esecsec.dk" className="text-gray-600 hover:text-primary">
                    info@esecsec.dk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Quick Contact */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Direkte Kontakt</h2>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <HiUser className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.title}</p>
                    <div className="mt-1 space-y-1">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-gray-600 hover:text-primary flex items-center gap-1"
                      >
                        <HiMail className="w-4 h-4" />
                        {member.email}
                      </a>
                      {member.phone !== '?' && (
                        <a
                          href={`tel:${member.phone}`}
                          className="text-sm text-gray-600 hover:text-primary flex items-center gap-1"
                        >
                          <HiPhone className="w-4 h-4" />
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
