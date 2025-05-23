import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faGraduationCap, faUsers, faChartLine, faTrophy, faBrain, faRocket, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import GamifiedLearningForm from '../forms/GamifiedLearningForm';

const GamifiedLearning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: faGamepad,
      title: 'Interactive Learning',
      description: 'Engage with interactive games and challenges that make learning fun and effective.'
    },
    {
      icon: faGraduationCap,
      title: 'Structured Curriculum',
      description: 'Follow a well-designed curriculum that adapts to your learning pace and style.'
    },
    {
      icon: faUsers,
      title: 'Community Learning',
      description: 'Connect with peers, participate in group challenges, and learn collaboratively.'
    },
    {
      icon: faTrophy,
      title: 'Achievement System',
      description: 'Earn badges, points, and rewards as you progress through your learning journey.'
    },
    {
      icon: faBrain,
      title: 'Cognitive Engagement',
      description: 'Stimulate critical thinking and problem-solving through game-based challenges.'
    },
    {
      icon: faRocket,
      title: 'Rapid Progress',
      description: 'Accelerate your learning with engaging, interactive content and real-time feedback.'
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
              icon={faGamepad} 
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
              Gamified Learning Platform
            </h1>
            <p style={{ 
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}>
              Transform your learning experience with our innovative gamified platform.
              Engage, learn, and grow through interactive challenges and real-world applications.
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
              Join our gamified learning platform and start your journey towards
              mastering new skills in an engaging and interactive way.
            </p>
          </motion.div>
          <GamifiedLearningForm />
        </div>
      </section>
    </div>
  );
};

export default GamifiedLearning; 