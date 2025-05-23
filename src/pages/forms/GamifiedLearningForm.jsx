import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGamepad, faUser, faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { 
  faCode, 
  faDatabase, 
  faBrain, 
  faGlobe, 
  faMobileScreen 
} from '@fortawesome/free-solid-svg-icons';

const GamifiedLearningForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    interests: [],
    experience: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const interests = [...formData.interests];
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        if (index > -1) {
          interests.splice(index, 1);
        }
      }
      setFormData({ ...formData, interests });
    } else {
      setFormData({ ...formData, [name]: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/gamified-learning', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        role: '',
        interests: [],
        experience: '',
        goals: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
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
    <div className="form-page">
      <div className="container" style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="form-container"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <FontAwesomeIcon 
              icon={faGamepad} 
              style={{ 
                fontSize: '2rem',
                color: 'var(--accent-color)',
                marginBottom: '0.5rem'
              }} 
            />
            <h1 style={{ marginBottom: '0.5rem' }}>Gamified Learning Platform</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Join our innovative gamified learning platform and transform your educational experience.
              Fill out the form below to get started.
            </p>
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(39, 174, 96, 0.2)'
              }}
            >
              <h3 style={{ color: '#27ae60', marginBottom: '1rem' }}>Registration Successful!</h3>
              <p>Thank you for your interest in our Gamified Learning Platform. We'll contact you shortly with more information.</p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Submit Another Response
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="fullName" style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faUser} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      letterSpacing: '0.3px'
                    }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      letterSpacing: '0.3px'
                    }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faPhone} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      letterSpacing: '0.3px'
                    }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="institution" style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faBuilding} />
                    Institution/Organization
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      letterSpacing: '0.3px'
                    }}
                  />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="role" style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      letterSpacing: '0.3px'
                    }}
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="administrator">Administrator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <motion.label 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-color)',
                    display: 'block',
                    marginBottom: '1rem'
                  }}
                >
                  Areas of Interest
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
                    { id: 'programming', label: 'Programming', icon: faCode, color: '#00c2ff' },
                    { id: 'data-science', label: 'Data Science', icon: faDatabase, color: '#70a1ff' },
                    { id: 'ai-ml', label: 'AI/ML', icon: faBrain, color: '#2ed573' },
                    { id: 'web-dev', label: 'Web Development', icon: faGlobe, color: '#ffa502' },
                    { id: 'mobile-dev', label: 'Mobile Development', icon: faMobileScreen, color: '#ff4757' },
                    { id: 'game-dev', label: 'Game Development', icon: faGamepad, color: '#ff9ff3' }
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

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="experience" style={{ 
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--text-color)'
                }}>Previous Learning Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="3"
                  className="form-control"
                  placeholder="Tell us about your previous learning experience..."
                  style={{
                    padding: '0.75rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    letterSpacing: '0.3px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="goals" style={{ 
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--text-color)'
                }}>Learning Goals</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows="3"
                  className="form-control"
                  placeholder="What do you hope to achieve through our platform?"
                  required
                  style={{
                    padding: '0.75rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    letterSpacing: '0.3px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ 
                  padding: '0.75rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  width: '100%',
                  maxWidth: '200px',
                  margin: '0 auto',
                  letterSpacing: '0.5px'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default GamifiedLearningForm; 