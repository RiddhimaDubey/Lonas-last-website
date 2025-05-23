import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine, faLightbulb, faUsers, faCode, faDatabase, faRobot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import ConsultingServicesForm from '../forms/ConsultingServicesForm';

const ConsultingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: faChartLine,
      title: 'Business Strategy',
      description: 'Develop comprehensive strategies to drive growth and optimize operations.'
    },
    {
      icon: faCode,
      title: 'Technology Solutions',
      description: 'Implement cutting-edge technology solutions tailored to your business needs.'
    },
    {
      icon: faDatabase,
      title: 'Data Analytics',
      description: 'Leverage data-driven insights to make informed business decisions.'
    },
    {
      icon: faRobot,
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence to automate and innovate.'
    },
    {
      icon: faShieldHalved,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with robust security solutions.'
    },
    {
      icon: faUsers,
      title: 'Team Training',
      description: 'Empower your workforce with specialized training and development programs.'
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
              icon={faHandshake} 
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
              Consulting Services
            </h1>
            <p style={{ 
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              Transform your business with expert consulting services tailored to your needs.
              Our team of specialists will help you navigate challenges and achieve your goals.
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
              Take the first step towards transforming your business.
              Contact us to discuss your consulting needs.
            </p>
          </motion.div>
          <ConsultingServicesForm />
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices; 