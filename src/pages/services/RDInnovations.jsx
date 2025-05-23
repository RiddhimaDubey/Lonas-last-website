import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faMicroscope, faRobot, faBrain, faCode, faLightbulb, faChartLine, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import RDInnovationsForm from '../forms/RDInnovationsForm';

const RDInnovations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: faMicroscope,
      title: 'Research & Development',
      description: 'Cutting-edge research in emerging technologies and innovative solutions.'
    },
    {
      icon: faRobot,
      title: 'AI & Machine Learning',
      description: 'Advanced AI systems and machine learning algorithms for real-world applications.'
    },
    {
      icon: faCode,
      title: 'Software Innovation',
      description: 'Development of innovative software solutions and digital platforms.'
    },
    {
      icon: faBrain,
      title: 'Cognitive Computing',
      description: 'Next-generation computing systems that mimic human brain functions.'
    },
    {
      icon: faNetworkWired,
      title: 'IoT Solutions',
      description: 'Connected devices and smart systems for enhanced automation.'
    },
    {
      icon: faChartLine,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights from complex data sets.'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
        padding: '8rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <FontAwesomeIcon 
              icon={faFlask} 
              style={{ 
                fontSize: '4rem',
                color: 'var(--accent-color)',
                marginBottom: '1.5rem'
              }} 
            />
            <h1 style={{ 
              fontSize: '3rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #a8a8a8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              R&D Innovations
            </h1>
            <p style={{ 
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              Push the boundaries of technology with our cutting-edge research and development services.
              We combine innovation with practical applications to create solutions for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  style={{ 
                    fontSize: '2rem',
                    color: 'var(--accent-color)',
                    marginBottom: '1rem'
                  }} 
                />
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="service-form" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #a8a8a8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Get Started Today
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Partner with us to explore the frontiers of technology and innovation.
              Contact us to discuss your R&D needs and potential collaborations.
            </p>
          </motion.div>
          <RDInnovationsForm />
        </div>
      </section>
    </div>
  );
};

export default RDInnovations; 