import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faCode, 
  faMobileScreen, 
  faCloud, 
  faShieldHalved, 
  faDatabase, 
  faLink, 
  faNetworkWired 
} from '@fortawesome/free-solid-svg-icons';

const ProfessionalRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    interests: [],
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#professional-registration-form' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Registration successful! We will contact you soon with more information about professional benefits.'
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        interests: [],
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevData => {
      const newInterests = checked 
        ? [...prevData.interests, value]
        : prevData.interests.filter(interest => interest !== value);
      return {
        ...prevData,
        interests: newInterests
      };
    });
  };

  const interestVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.02,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    tap: { 
      scale: 0.98,
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  };

  return (
    <section style={{ padding: '8rem 0 4rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Professional Benefits Registration</h1>
          <p style={{ 
            fontSize: '1.1rem', 
            maxWidth: '800px', 
            margin: '0 auto 3rem',
            textAlign: 'center'
          }}>
            Register below to learn more about our exclusive benefits for working professionals and advance your career.
          </p>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: submitStatus.success ? 'rgba(0, 200, 83, 0.1)' : 'rgba(255, 76, 76, 0.1)',
                border: `1px solid ${submitStatus.success ? 'rgba(0, 200, 83, 0.3)' : 'rgba(255, 76, 76, 0.3)'}`,
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <motion.form 
            ref={formRef}
            id="professional-registration-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              backgroundColor: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '10px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  color: 'var(--text-color)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '5px',
                    color: 'var(--text-color)',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '5px',
                    color: 'var(--text-color)',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  color: 'var(--text-color)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="position" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Position *
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  color: 'var(--text-color)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <motion.label 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  display: 'block', 
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Areas of Interest *
              </motion.label>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {[
                  { id: 'ai', label: 'Artificial Intelligence', icon: faBrain, color: '#2ed573' },
                  { id: 'ml', label: 'Machine Learning', icon: faBrain, color: '#7bed9f' },
                  { id: 'web', label: 'Web Development', icon: faCode, color: '#00c2ff' },
                  { id: 'mobile', label: 'Mobile App Development', icon: faMobileScreen, color: '#ffa502' },
                  { id: 'cloud', label: 'Cloud Computing', icon: faCloud, color: '#ff4757' },
                  { id: 'security', label: 'Cybersecurity', icon: faShieldHalved, color: '#ff6b81' },
                  { id: 'data', label: 'Data Science', icon: faDatabase, color: '#70a1ff' },
                  { id: 'blockchain', label: 'Blockchain', icon: faLink, color: '#ff9ff3' },
                  { id: 'iot', label: 'Internet of Things', icon: faNetworkWired, color: '#54a0ff' }
                ].map((interest, index) => (
                  <motion.div
                    key={interest.id}
                    variants={interestVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(45deg, ${interest.color}10, transparent)`,
                        opacity: formData.interests.includes(interest.label) ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', zIndex: 1 }}>
                      <input
                        type="checkbox"
                        id={`interest-${interest.id}`}
                        name="interests"
                        value={interest.label}
                        checked={formData.interests.includes(interest.label)}
                        onChange={handleCheckboxChange}
                        style={{
                          appearance: 'none',
                          width: '20px',
                          height: '20px',
                          marginRight: '0.75rem',
                          border: `2px solid ${interest.color}40`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          flexShrink: 0
                        }}
                      />
                      <FontAwesomeIcon 
                        icon={interest.icon} 
                        style={{
                          marginRight: '0.75rem',
                          fontSize: '1.1rem',
                          color: interest.color,
                          opacity: formData.interests.includes(interest.label) ? 1 : 0.7,
                          transition: 'all 0.3s ease'
                        }}
                      />
                      <label
                        htmlFor={`interest-${interest.id}`}
                        style={{
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)',
                          cursor: 'pointer',
                          userSelect: 'none',
                          margin: 0,
                          flexGrow: 1,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {interest.label}
                      </label>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <style>
                {`
                  input[type="checkbox"]:checked {
                    background-color: var(--accent-color);
                    border-color: var(--accent-color);
                    animation: checkboxPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  }
                  input[type="checkbox"]:checked::after {
                    content: '✓';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 12px;
                    animation: checkmarkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  }
                  input[type="checkbox"]:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0, 194, 255, 0.2);
                  }
                  @keyframes checkboxPop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                  @keyframes checkmarkPop {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                  }
                `}
              </style>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  color: 'var(--text-color)',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="Tell us about your specific interests or questions..."
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: '#00c2ff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.75rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(0, 194, 255, 0.3)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalRegistration;

