import { HiMail, HiPhone, HiUser } from 'react-icons/hi'; //import stuff

const teamMembers = [
  {
    name: 'David Hald',
    title: 'AI Specialist',
    expertise: 'AI',
    email: 'david@davidhald.com',
    phone: '+45 40 91 42 53',
    photoUrl: '/team_images/david.jpg'
  },
  {
    name: 'Jakob Østergaard',
    title: 'IT-security Specialist',
    expertise: 'Sikkerhedsanalyse, Compliance, IT-sikkerhed',
    email: 'jakob@esecsec.dk',
    phone: 'N/A',
    photoUrl: '/team_images/jakob.jpg'
  },
  {
    name: 'Jan Kaastrup',
    title: 'Branddirektør',
    expertise: 'IT-brandmand',
    email: 'jan@esecsec.dk',
    phone: 'N/A',
    photoUrl: '/team_images/stock.jpg'
  },
  {
    name: 'Morten Felding',
    title: 'Sælger',
    expertise: 'Salg',
    email: 'morten@esecsec.dk',
    phone: 'N/A',
    photoUrl: '/team_images/morten.jpg'
  }
];

const values = [
  {
    title: 'Integritet',
    description: 'Vi opretholder en høj etisk standard og gennemsigtighed i alle aspekter af vores rådgivning og løsninger.'
  },
  {
      title: 'Innovation',
      description: 'Vi er dedikerede til at udvikle og implementere banebrydende sikkerhedsløsninger, der beskytter mod de nyeste trusler.'
  },
  {
      title: 'Ekspertise',
      description: 'Vi investerer i løbende uddannelse og specialisering for at sikre, at vores team er blandt de bedste inden for AI og IT-sikkerhed.'
  },
  {
      title: 'Samarbejde',
      description: 'Vi arbejder tæt sammen med vores kunder for at forstå deres unikke behov og skabe skræddersyede sikkerhedsløsninger.'
  }
];

const About = () => {
  return (
    <div className="space-y-16">
      {/* Team Introduction */}
      <section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mød Vores Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi er et dedikeret team af sikkerhedseksperter med omfattende erfaring 
            inden for IT-sikkerhedsløsninger og AI.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 flex items-center justify-center">
              {/* <HiUser className="w-150 h-150 text-gray-400" /> */}
                <img src={member.photoUrl} className="w-150 h-150" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                
                <div className="space-y-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary"
                  >
                    <HiMail className="w-5 h-5" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary"
                  >
                    <HiPhone className="w-5 h-5" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Vores Værdier</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
