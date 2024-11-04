import { HiShieldCheck, HiLightningBolt, HiServer, HiShieldExclamation, HiTranslate } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: HiTranslate,
    title: 'AI rådgivning',
    description: 'At optimere bestyrelsens bidrag til værdiskabelsen på baggrund af kunstig intelligens.'
  },
  {
    icon: HiShieldExclamation,
    title: 'IT-beredskeb',
    description: 'Adgang til akut rådgivningshjælp til bestyrelsen i tilfælde af et omfattende cyberangreb.'
  },
  {
    icon: HiShieldCheck,
    title: 'Sikkerhedsrådgivning',
    description: 'At sikre bestyrelsens IT-sikkerhedskompetencer.'
  }
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative -mt-0 py-10 bg-gradient-to-r from-primary/90 to-primary rounded-3xl overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Din støtte i AI-verden og IT-sikkerhed
            </h1>
            <p className="text-xl mb-10 text-white/90">
              Selskabsledelsens livline i it-sikkerhed og kunstig intelligens.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/products" className="btn bg-white text-primary hover:bg-white/90">
                Se vores løsninger
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vores Mission & Vision</h2>
          <p className="text-lg text-gray-600 mb-8">
            Vi stræber efter at skabe en sikrere digital verden for virksomheder gennem innovative sikkerhedsløsninger og ekspertise inden for cybersikkerhed.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600">
                At levere førsteklasses IT-sikkerhedsløsninger der beskytter virksomheder mod moderne digitale trusler.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">
                Vi ønsker at skabe en tryg og innovativ fremtid for danske selskabsledelser, til at forstå og navigere i den komplekse verden af IT-sikkerhed og kunstig intelligens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Vores Kerneydelser</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
