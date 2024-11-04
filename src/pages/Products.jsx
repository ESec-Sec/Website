import { HiCheck, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'AI-rådgivning',
    price: '750.000',
    description: 'AI-rådgivning til at hjælpe dig med at forstå og forbedre din sikkerhed.',
    features: [
      'Aktuel selskabstilstand',
      'Skræddersyede forløb',
      'Fælles workshops',
      'Rådgivning til direktion',
      'Relevant rapportering'
    ],
    notIncluded: [
      'Akut rådgivningshjælp',
      'Gennemgang af IT-sikkerhedsstruktur',
      'Gennemgang af IT-sikkerhedspolitikker',
      'Gennemgang af incedent Response Plan',
      'Gennemgang af risikoprofil',
      'Gennemgang af sikkerheds- og compliance-rapporter',
      'Angrebssimuleringsøvelse'
    ]
  },
  {
    name: 'AI & IT-sikkerhed',
    price: '1.250.000',
    description: 'Omfattende AI & IT-sikkerhedsløsning til virksomheder',
    features: [
      'Aktuel selskabstilstand',
      'Skræddersyede forløb',
      'Fælles workshops',
      'Rådgivning til direktion',
      'Relevant rapportering',
      'Akut rådgivningshjælp',
      'Gennemgang af IT-sikkerhedsstruktur',
      'Gennemgang af IT-sikkerhedspolitikker',
      'Gennemgang af incedent Response Plan',
      'Gennemgang af risikoprofil',
      'Gennemgang af sikkerheds- og compliance-rapporter',
      'Angrebssimuleringsøvelse'
    ],
    notIncluded: [
      
    ],
    highlighted: true
  },
  {
    name: 'IT-sikkerhed',
    price: '750.000',
    description: 'IT-sikkerhedsløsning til virksomheder',
    features: [
      'Aktuel selskabstilstand',
      'Skræddersyede forløb',
      'Fælles workshops',
      'Rådgivning til direktion',
      'Relevant rapportering',
      'Akut rådgivningshjælp',
      'Gennemgang af IT-sikkerhedsstruktur',
      'Gennemgang af IT-sikkerhedspolitikker',
      'Gennemgang af incedent Response Plan',
      'Gennemgang af risikoprofil',
      'Gennemgang af sikkerheds- og compliance-rapporter',
      'Angrebssimuleringsøvelse'
    ],
    notIncluded: []
  }
];

const Products = () => {
  return (
    <div className="space-y-16">
      {/* Products Introduction */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vores Sikkerhedsløsninger</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Vi tilbyder skræddersyede sikkerhedsløsninger til virksomheder af alle størrelser. 
          Vælg den pakke der passer bedst til dine behov.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`
              bg-white rounded-xl shadow-sm overflow-hidden
              ${pkg.highlighted ? 'ring-2 ring-primary shadow-lg' : ''}
            `}
          >
            {pkg.highlighted && (
              <div className="bg-primary text-white text-center py-2">
                <span className="text-sm font-medium">Begge pakker</span>
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-gray-600"> DKK</span>
              </div>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              
              <Link
                to="/contact"
                className={`
                  block w-full text-center btn
                  ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}
                `}
              >
                Kontakt os
              </Link>
            </div>

            <div className="p-6 bg-gray-50">
              <h4 className="font-semibold mb-4">Inkluderede services:</h4>
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.notIncluded.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <HiX className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Sammenlign Pakker</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">Feature</th>
                  {packages.map((pkg, index) => (
                    <th key={index} className="p-4 text-center">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Aktuel selskabstilstand',
                  'Skræddersyede forløb',
                  'Fælles workshops',
                  'Rådgivning til direktion',
                  'Relevant rapportering',
                  'Akut rådgivningshjælp',
                  'Gennemgang af IT-sikkerhedsstruktur',
                  'Gennemgang af IT-sikkerhedspolitikker',
                  'Gennemgang af incedent Response Plan',
                  'Gennemgang af risikoprofil',
                  'Gennemgang af sikkerheds- og compliance-rapporter',
                  'Angrebssimuleringsøvelse'
                ].map((feature, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{feature}</td>
                    {packages.map((pkg, pkgIndex) => (
                      <td key={pkgIndex} className="p-4 text-center">
                        {pkg.features.includes(feature) ? (
                          <HiCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <HiX className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
