import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faUser, faEnvelope, faPhone, faBuilding, faUsers, faBriefcase, faChartLine, faLightbulb, faHandshake, faCode, faDatabase, faRobot, faShieldHalved, faNetworkWired, faCloud, faMobileScreen, faGamepad, faBrain, faFlask, faCalculator, faLanguage, faAtom, faDna, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../../components/FormStyles.css';

const CurriculumDesignForm = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    institutionType: '',
    studentCount: '',
    subjects: [],
    gradeLevel: '',
    timeline: '',
    budget: '',
    currentCurriculum: '',
    requirements: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const subjects = [...formData.subjects];
      if (checked) {
        subjects.push(value);
      } else {
        const index = subjects.indexOf(value);
        if (index > -1) {
          subjects.splice(index, 1);
        }
      }
      setFormData({ ...formData, subjects });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevData => {
      const newSubjects = checked 
        ? [...prevData.subjects, value]
        : prevData.subjects.filter(subject => subject !== value);
      return {
        ...prevData,
        subjects: newSubjects
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/curriculum-design', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        institutionName: '',
        contactPerson: '',
        email: '',
        phone: '',
        institutionType: '',
        studentCount: '',
        subjects: [],
        gradeLevel: '',
        timeline: '',
        budget: '',
        currentCurriculum: '',
        requirements: '',
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
    <div className="container" style={{ maxWidth: '800px', margin: '6rem auto 2rem auto', padding: '0 1rem' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="form-container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <FontAwesomeIcon 
            icon={faBook} 
            style={{ 
              fontSize: '3rem', 
              color: 'var(--accent-color)',
              marginBottom: '1rem'
            }} 
          />
          <h1 style={{ marginBottom: '0.5rem' }}>Curriculum Design</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Partner with our education experts to create innovative and effective curriculum solutions.
            Fill out the form below to discuss your curriculum design needs.
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
            <h3 style={{ color: '#27ae60', marginBottom: '1rem' }}>Request Submitted!</h3>
            <p>Thank you for your interest in our Curriculum Design services. Our team will contact you shortly to discuss your requirements.</p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="form-group">
                <label htmlFor="institutionName">
                  <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '0.5rem' }} />
                  Institution Name
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactPerson">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem' }} />
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="institutionType">
                  <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '0.5rem' }} />
                  Institution Type
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select institution type</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="university">University</option>
                  <option value="training">Training Institute</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="studentCount">
                  <FontAwesomeIcon icon={faUsers} style={{ marginRight: '0.5rem' }} />
                  Number of Students
                </label>
                <select
                  id="studentCount"
                  name="studentCount"
                  value={formData.studentCount}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select student count</option>
                  <option value="1-100">1-100 students</option>
                  <option value="101-500">101-500 students</option>
                  <option value="501-1000">501-1000 students</option>
                  <option value="1001-5000">1001-5000 students</option>
                  <option value="5000+">5000+ students</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="gradeLevel">
                  <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '0.5rem' }} />
                  Grade Level
                </label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select grade level</option>
                  <option value="primary">Primary School</option>
                  <option value="middle">Middle School</option>
                  <option value="high">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="professional">Professional Development</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">
                  <FontAwesomeIcon icon={faBook} style={{ marginRight: '0.5rem' }} />
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6+">6+ months</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">
                  <FontAwesomeIcon icon={faBook} style={{ marginRight: '0.5rem' }} />
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select budget range</option>
                  <option value="<10k">Less than $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
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
                Subjects to Design
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
                  { id: 'programming', label: 'Programming', icon: faCode, color: '#2ed573' },
                  { id: 'data-science', label: 'Data Science', icon: faDatabase, color: '#7bed9f' },
                  { id: 'ai-ml', label: 'Artificial Intelligence', icon: faBrain, color: '#70a1ff' },
                  { id: 'web-dev', label: 'Web Development', icon: faGlobe, color: '#ffa502' },
                  { id: 'mobile-dev', label: 'Mobile Development', icon: faMobileScreen, color: '#ff4757' },
                  { id: 'game-dev', label: 'Game Development', icon: faGamepad, color: '#ff6b81' },
                  { id: 'cybersecurity', label: 'Cybersecurity', icon: faShieldHalved, color: '#54a0ff' },
                  { id: 'cloud-computing', label: 'Cloud Computing', icon: faCloud, color: '#ff9ff3' },
                  { id: 'robotics', label: 'Robotics', icon: faRobot, color: '#ff4757' },
                  { id: 'math', label: 'Mathematics', icon: faCalculator, color: '#00c2ff' },
                  { id: 'physics', label: 'Physics', icon: faAtom, color: '#2ed573' },
                  { id: 'chemistry', label: 'Chemistry', icon: faFlask, color: '#ffa502' },
                  { id: 'biology', label: 'Biology', icon: faDna, color: '#ff4757' },
                  { id: 'languages', label: 'Languages', icon: faLanguage, color: '#70a1ff' }
                ].map((subject, index) => (
                  <motion.div
                    key={subject.id}
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
                        background: `linear-gradient(45deg, ${subject.color}10, transparent)`,
                        opacity: formData.subjects.includes(subject.label) ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', zIndex: 1 }}>
                      <input
                        type="checkbox"
                        id={`subject-${subject.id}`}
                        name="subjects"
                        value={subject.label}
                        checked={formData.subjects.includes(subject.label)}
                        onChange={handleCheckboxChange}
                        style={{
                          appearance: 'none',
                          width: '20px',
                          height: '20px',
                          marginRight: '0.75rem',
                          border: `2px solid ${subject.color}40`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          flexShrink: 0
                        }}
                      />
                      <FontAwesomeIcon 
                        icon={subject.icon} 
                        style={{
                          marginRight: '0.75rem',
                          fontSize: '1.1rem',
                          color: subject.color,
                          opacity: formData.subjects.includes(subject.label) ? 1 : 0.7,
                          transition: 'all 0.3s ease'
                        }}
                      />
                      <label
                        htmlFor={`subject-${subject.id}`}
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
                        {subject.label}
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

            <div className="form-group">
              <label htmlFor="currentCurriculum">Current Curriculum Overview</label>
              <textarea
                id="currentCurriculum"
                name="currentCurriculum"
                value={formData.currentCurriculum}
                onChange={handleChange}
                rows="3"
                className="form-control"
                placeholder="Please provide an overview of your current curriculum..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requirements">Specific Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="3"
                className="form-control"
                placeholder="What are your specific requirements for the new curriculum?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="goals">Educational Goals</label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows="3"
                className="form-control"
                placeholder="What are your key educational goals and learning outcomes?"
                required
              />
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className="btn btn-primary submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default CurriculumDesignForm; 