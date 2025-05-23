import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Bootcamp = () => {
  const containerRef = useRef(null);
  const starsRef = useRef(null);
  const orbsRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    phone: '',
    email: '',
    collegeName: '',
    semester: '',
    currentSkills: [],
    skillsToLearn: []
  });
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isRegistrationOpen] = useState(true);
  const [selectedBootcamp, setSelectedBootcamp] = useState('');
  const [activeCard, setActiveCard] = useState(null);
  const formRef = useRef(null);
  const formContainerRef = useRef(null);

  const skillsOptions = [
    'Java', 'Python', 'HTML', 'CSS', 'DSA', 'AutoCAD', 
    'React', 'Node.js', 'Angular', 'C++', 'C', 'JavaScript'
  ];

  const upcomingEvents = [
    { name: 'Java', date: '2024-06-15', description: 'Master Java programming with hands-on projects' },
    { name: 'Python', date: '2024-07-01', description: 'Learn Python for data science and automation' },
    { name: 'DSA', date: '2024-07-15', description: 'Comprehensive Data Structures and Algorithms course' }
  ];

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;
      const container = starsRef.current;
      const numStars = 250;
      
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Create regular stars with enhanced blinking
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 2 + 1; // Faster blinking (1-3 seconds)
        const delay = Math.random() * 2;
        const brightness = Math.random() * 0.5 + 0.5; // 0.5 to 1.0 brightness

        star.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: #ffffff;
          border-radius: 50%;
          left: ${x}%;
          top: ${y}%;
          opacity: ${brightness};
          box-shadow: 
            0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.4),
            0 0 ${size * 4}px ${size * 2}px rgba(255, 255, 255, 0.2);
          pointer-events: none;
          z-index: 1;
          will-change: opacity, transform;
        `;

        container.appendChild(star);

        // Create a more dramatic blinking animation
        gsap.timeline({ repeat: -1 })
          .to(star, {
            opacity: brightness * 0.2, // Fade to 20% of original brightness
            duration: duration * 0.5,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: brightness, // Return to full brightness
            duration: duration * 0.5,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: brightness * 0.2,
            duration: duration * 0.3,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: brightness,
            duration: duration * 0.7,
            ease: "power1.inOut"
          });
      }

      // Create special larger stars with more dramatic blinking
      for (let i = 0; i < 12; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2; // 2-5 seconds

        star.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: #ffffff;
          border-radius: 50%;
          left: ${x}%;
          top: ${y}%;
          opacity: 1;
          box-shadow: 
            0 0 ${size * 3}px ${size}px rgba(255, 255, 255, 0.6),
            0 0 ${size * 6}px ${size * 2}px rgba(255, 255, 255, 0.4),
            0 0 ${size * 9}px ${size * 3}px rgba(255, 255, 255, 0.2);
          pointer-events: none;
          z-index: 1;
          will-change: opacity, transform;
        `;

        container.appendChild(star);

        // Create a more complex blinking pattern for larger stars
        gsap.timeline({ repeat: -1 })
          .to(star, {
            opacity: 0.2,
            scale: 0.8,
            duration: duration * 0.4,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: 1,
            scale: 1.2,
            duration: duration * 0.2,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: 0.4,
            scale: 1,
            duration: duration * 0.4,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: 1,
            scale: 1.1,
            duration: duration * 0.3,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: 0.3,
            scale: 0.9,
            duration: duration * 0.3,
            ease: "power1.inOut"
          })
          .to(star, {
            opacity: 1,
            scale: 1,
            duration: duration * 0.4,
            ease: "power1.inOut"
          });
      }
    };

    const createOrbs = () => {
      if (!orbsRef.current) return;
      const container = orbsRef.current;
      
      const colors = [
        'rgba(255, 107, 107, 0.15)',  // Brighter coral
        'rgba(78, 205, 196, 0.15)',   // Brighter turquoise
        'rgba(255, 230, 109, 0.15)',  // Brighter yellow
        'rgba(108, 92, 231, 0.15)',   // Brighter purple
        'rgba(45, 206, 137, 0.15)',   // Brighter green
        'rgba(255, 159, 67, 0.15)'    // Added orange
      ];

      // Create 6 large, floating orbs
      for (let i = 0; i < 6; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 400 + 300; // Larger orbs (300-700px)
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[i % colors.length];
        const duration = Math.random() * 25 + 25; // Slower movement (25-50 seconds)

        orb.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle at center, ${color} 0%, transparent 70%);
          left: ${x}%;
          top: ${y}%;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: screen;
        `;

        container.appendChild(orb);

        // More complex floating animation
        gsap.to(orb, {
          x: `+=${Math.random() * 150 - 75}`,
          y: `+=${Math.random() * 150 - 75}`,
          opacity: Math.random() * 0.4 + 0.3,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Add a subtle rotation
        gsap.to(orb, {
          rotation: Math.random() * 360,
          duration: duration * 2,
          repeat: -1,
          ease: "none"
        });
      }
    };

    createStars();
    createOrbs();

    const handleMouseMove = (e) => {
      if (!starsRef.current) return;
      const stars = starsRef.current.children;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      Array.from(stars).forEach(star => {
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;
        
        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
          const angle = Math.atan2(deltaY, deltaX);
          const force = (200 - distance) / 200;
          
          gsap.to(star, {
            x: `+=${Math.cos(angle) * force * 10}`,
            y: `+=${Math.sin(angle) * force * 10}`,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (starsRef.current) {
        while (starsRef.current.firstChild) {
          starsRef.current.removeChild(starsRef.current.firstChild);
        }
      }
      if (orbsRef.current) {
        while (orbsRef.current.firstChild) {
          orbsRef.current.removeChild(orbsRef.current.firstChild);
        }
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'currentSkills' || name === 'skillsToLearn') {
      let newSkills = [...formData[name]];
      if (checked) {
        newSkills.push(value);
      } else {
        newSkills = newSkills.filter(skill => skill !== value);
      }
      setFormData(prev => ({
        ...prev,
        [name]: newSkills,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const generateReferralCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const triggerConfetti = async () => {
    const confetti = (await import('canvas-confetti')).default;
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1001 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Launch from multiple points
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only prevent scrolling during submission
    const currentScroll = window.scrollY;
    const preventScroll = () => window.scrollTo(0, currentScroll);
    window.addEventListener('scroll', preventScroll);
    
    try {
      console.log('Form data:', formData);

      // Validate required fields
      const requiredFields = ['name', 'date', 'phone', 'email', 'collegeName', 'semester'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      if (missingFields.length > 0) {
        throw new Error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      }

      // Validate phone number format
      if (!/^\+91\s\d{5}\s\d{5}$/.test(formData.phone)) {
        throw new Error('Phone number must be in the format +91 98765 43210');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate name length
      if (formData.name.length < 2 || formData.name.length > 100) {
        throw new Error('Name must be between 2 and 100 characters');
      }

      // Generate referral code and show success UI
      const code = generateReferralCode();
      setReferralCode(code);
      setShowPopup(true);
      triggerConfetti();
      
      // Reset form immediately
      setFormData({
        name: '',
        date: '',
        phone: '',
        email: '',
        collegeName: '',
        semester: '',
        currentSkills: [],
        skillsToLearn: []
      });
      
      // Remove scroll prevention and close form after a delay
      setTimeout(() => {
        window.removeEventListener('scroll', preventScroll);
        setShowForm(false);
      }, 2000);

      // Log the registration data
      console.log('Registration successful:', {
        ...formData,
        referralCode: code,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      // Remove scroll prevention on error
      window.removeEventListener('scroll', preventScroll);
      console.error('Registration error:', error);
      alert(error.message || 'Registration failed. Please try again.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only prevent scrolling during submission
    const currentScroll = window.scrollY;
    const preventScroll = () => window.scrollTo(0, currentScroll);
    window.addEventListener('scroll', preventScroll);
    
    try {
      // Validate booking data
      if (!bookingData.name || !bookingData.email || !bookingData.phone) {
        throw new Error('Please fill in all required fields');
      }

      // Validate phone number format
      if (!/^\+91\s\d{5}\s\d{5}$/.test(bookingData.phone)) {
        throw new Error('Phone number must be in the format +91 98765 43210');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(bookingData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Generate referral code and show success UI
      const code = generateReferralCode();
      setReferralCode(code);
      setShowPopup(true);
      triggerConfetti();
      
      // Reset form immediately
      setBookingData({
        name: '',
        phone: '',
        email: ''
      });
      
      // Remove scroll prevention and close form after a delay
      setTimeout(() => {
        window.removeEventListener('scroll', preventScroll);
        setShowBookingForm(false);
        setActiveCard(null);
        setSelectedBootcamp('');
      }, 2000);

      // Log the booking data
      console.log('Booking successful:', {
        ...bookingData,
        bootcampName: selectedBootcamp,
        referralCode: code,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      // Remove scroll prevention on error
      window.removeEventListener('scroll', preventScroll);
      console.error('Booking error:', error);
      alert(error.message || 'Booking failed. Please try again.');
    }
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookNowClick = (eventName) => {
    if (activeCard === eventName) {
      // If clicking the same card, close it
      setActiveCard(null);
      setShowBookingForm(false);
      setSelectedBootcamp('');
    } else {
      // If clicking a different card, switch to it
      setActiveCard(eventName);
      setShowBookingForm(true);
      setSelectedBootcamp(eventName);
    }
  };

  const handleCloseForm = () => {
    setActiveCard(null);
    setShowBookingForm(false);
    setSelectedBootcamp('');
  };

  const handleFormOpen = () => {
    // Reset scroll position first
    window.scrollTo(0, 0);
    // Then show form
    setShowForm(true);
  };

  // Add this useLayoutEffect for immediate scroll
  useLayoutEffect(() => {
    if (showForm && formRef.current) {
      const scrollToForm = () => {
        const formElement = formRef.current;
        if (formElement) {
          const yOffset = -100; // Offset for any fixed headers
          const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          // Force scroll
          document.documentElement.scrollTop = y;
          document.body.scrollTop = y; // For Safari
          window.scrollTo(0, y);
        }
      };

      // Execute scroll
      scrollToForm();
    }
  }, [showForm]);

  // Add this useEffect for backup scroll
  useEffect(() => {
    if (showForm && formRef.current) {
      const backupScroll = () => {
        const formElement = formRef.current;
        if (formElement) {
          const yOffset = -100;
          const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          // Use smooth scroll as backup
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      };

      // Try backup scroll after a short delay
      const timer = setTimeout(backupScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [showForm]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        paddingTop: '3rem',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: '#ffffff',
        position: 'relative',
        overflow: 'auto',
        width: '100%'
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-form-container {
              width: 95% !important;
            }
            .mobile-register-button {
              padding: 1rem 2rem !important;
              font-size: 1rem !important;
            }
          }
        `}
      </style>

      <section style={{ 
        padding: '4rem 0',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Floating orbs background */}
        <div 
          ref={orbsRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />

        {/* Simple starry background */}
        <div 
          ref={starsRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Enhanced gradient overlay */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: `
              radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.2) 0%, transparent 50%),
              radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)
            `,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '800px',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div style={{
            position: 'relative',
            marginBottom: '2rem'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #00b894 0%, #00cec9 50%, #0984e3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 15px rgba(0, 184, 148, 0.3)',
              letterSpacing: '-0.02em',
              position: 'relative'
            }}>
              C & C++ Bootcamp
            </h1>
            
            {/* Subtitle with decorative line */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00b894)',
                opacity: 0.6
              }} />
              <p style={{
                fontSize: '1.2rem',
                color: '#a8b2d1',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Master the Fundamentals
              </p>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #00b894, transparent)',
                opacity: 0.6
              }} />
            </div>
          </div>

          <p style={{
            fontSize: '1.2rem',
            color: '#a8b2d1',
            lineHeight: '1.6',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 1rem',
          }}>
            Embark on a journey to master programming fundamentals with our comprehensive C & C++ bootcamp. Learn from industry experts and build a strong foundation for your tech career.
          </p>

          {/* Status Box - Simple border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: '2.5rem',
              borderRadius: '16px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              margin: '4rem auto 2rem auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Header Section */}
            <h3 style={{
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: '700',
              margin: '0 0 1rem 0'
            }}>
              Registration Status
            </h3>

            {/* Status Indicator (Button-like) */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1.5rem',
              backgroundColor: isRegistrationOpen ? 'rgba(0, 184, 148, 0.2)' : 'rgba(214, 48, 49, 0.2)',
              color: isRegistrationOpen ? '#00b894' : '#d63031',
              border: `1px solid ${isRegistrationOpen ? '#00b894' : '#d63031'}`,
              borderRadius: '25px',
              cursor: 'default',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: `0 0 15px ${isRegistrationOpen ? 'rgba(0, 184, 148, 0.2)' : 'rgba(214, 48, 49, 0.2)'}`,
              marginBottom: '2rem'
            }}>
              {/* Status Dot */}
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: isRegistrationOpen ? '#00b894' : '#d63031',
                marginRight: '0.75rem',
                boxShadow: `0 0 8px ${isRegistrationOpen ? '#00b894' : '#d63031'}80`
              }} />
              {/* Status Text */}
              {isRegistrationOpen ? 'Open for Applications' : 'Currently Closed'}
            </div>

            {/* Blurry Separator Line */}
            <div style={{
              width: '95%',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              margin: '0 auto 1.5rem auto',
              filter: 'blur(1px)',
              borderRadius: '1px'
            }} />

            {/* Main Content Section */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {/* Status Message */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <p style={{
                  color: '#a8b2d1',
                  margin: 0,
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}>
                  Registration is currently <span style={{ color: '#00b894', fontWeight: '600' }}>OPEN</span>. 
                  Join us for an exciting journey into programming! The bootcamp offers comprehensive training in C and C++ 
                  with hands-on projects and expert guidance. Start your programming journey today!
                </p>
              </div>

              {/* Info Cards Section */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {/* Time Remaining Card */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      margin: '0 0 0.5rem 0'
                    }}>
                      Early Bird Registration
                    </h4>
                    <p style={{
                      color: '#a8b2d1',
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>
                      Register now to get exclusive access to pre-bootcamp materials and resources!
                    </p>
                  </div>
                </div>

                {/* Seats Card */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      margin: '0 0 0.5rem 0'
                    }}>
                      Available Seats
                    </h4>
                    <p style={{
                      color: '#a8b2d1',
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>
                      Join our growing community of learners! Limited seats available for personalized attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              {!showForm && isRegistrationOpen && (
                <button
                  onClick={handleFormOpen}
                  className="mobile-register-button"
                  style={{
                    padding: '1.25rem 2.5rem',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(0, 184, 148, 0.2)',
                    color: '#00b894',
                    border: '1px solid #00b894',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    boxShadow: '0 0 15px rgba(0, 184, 148, 0.2)',
                    width: '100%',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  Register Now
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Registration Form with Glowing Border */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'relative',
                maxWidth: '600px',
                width: '90%',
                margin: '0 auto',
                zIndex: 2,
                scrollMarginTop: '100px'
              }}
            >
              <div 
                ref={formContainerRef}
                className="mobile-form-container"
                style={{
                  position: 'relative',
                  padding: '2px',
                  borderRadius: '18px',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffe66d, #6c5ce7, #ff6b6b)',
                  backgroundSize: '200% 200%',
                  animation: 'borderAnimation 3s linear infinite',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '18px',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffe66d, #6c5ce7, #ff6b6b)',
                  backgroundSize: '200% 200%',
                  animation: 'borderAnimation 3s linear infinite',
                  filter: 'blur(12px)',
                  opacity: 0.6,
                  zIndex: -1
                }} />
                <div style={{
                  position: 'relative',
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <style>
                    {`
                      @keyframes borderAnimation {
                        0% { background-position: 0% 0%; }
                        25% { background-position: 100% 0%; }
                        50% { background-position: 100% 100%; }
                        75% { background-position: 0% 100%; }
                        100% { background-position: 0% 0%; }
                      }
                    `}
                  </style>
                  <form onSubmit={handleSubmit} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.5rem'
                  }}>
                    {['name', 'date', 'phone', 'email', 'collegeName', 'semester'].map((field) => (
                      <label key={field} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
                        <input
                          type={field === 'date' ? 'date' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          required
                          pattern={field === 'phone' ? "^\\+91\\s\\d{5}\\s\\d{5}$" : undefined}
                          title={field === 'phone' ? "Phone number must be in the format +91 98765 43210" : undefined}
                          placeholder={field === 'phone' ? "Enter your phone number (e.g. +91 98765 43210)" : undefined}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginTop: '0.5rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '8px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
                          }}
                        />
                      </label>
                    ))}

                    {['currentSkills', 'skillsToLearn'].map((skillType) => (
                      <fieldset key={skillType} style={{
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}>
                        <legend style={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: '600',
                          padding: '0 0.5rem'
                        }}>
                          {skillType === 'currentSkills' ? 'Skills you know:' : 'Skills you want to learn:'}
                        </legend>
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: '0.75rem',
                          marginTop: '1rem'
                        }}>
                          {skillsOptions.map(skill => (
                            <label
                              key={skill}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem 1rem',
                                backgroundColor: formData[skillType].includes(skill) 
                                  ? 'rgba(255, 255, 255, 0.15)'
                                  : 'rgba(0, 0, 0, 0.5)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                              }}
                            >
                              <input
                                type="checkbox"
                                name={skillType}
                                value={skill}
                                checked={formData[skillType].includes(skill)}
                                onChange={handleChange}
                                style={{ 
                                  marginRight: '0.5rem',
                                  accentColor: 'rgba(255, 255, 255, 0.9)'
                                }}
                              />
                              {skill}
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    ))}

                    <button
                      type="submit"
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginTop: '1rem',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      Submit Registration
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Future Webinars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: '3rem',
            textAlign: 'center'
          }}
        >
          <h2 className="section-title" style={{ 
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #00c2ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Future Webinars
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Stay tuned for our upcoming webinars and events. We're constantly adding new sessions to help you stay ahead in the tech industry.
          </p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            width: '90%',
            maxWidth: '1200px',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          {upcomingEvents.map((event, index) => {
            const isActive = activeCard === event.name;
            
            return (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  height: isActive ? '600px' : '250px',
                  scale: isActive ? 1.02 : 1
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '2rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: isActive ? 10 : 1
                }}
              >
                <motion.div
                  animate={{ 
                    opacity: isActive ? 0 : 1,
                    y: isActive ? -20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 style={{ 
                    color: '#ffffff', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                    fontWeight: '700'
                  }}>
                    {event.name} Bootcamp
                  </h3>
                  <p style={{ 
                    color: '#a8b2d1',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {event.description}
                  </p>
                  <p style={{ 
                    color: '#0984e3',
                    fontWeight: '600',
                    marginBottom: '1.5rem'
                  }}>
                    Starting: {new Date(event.date).toLocaleDateString()}
                  </p>
                </motion.div>
                
                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNowClick(event.name)}
                  style={{
                    padding: '0.8rem 1.5rem',
                    backgroundColor: 'rgba(0, 184, 148, 0.2)',
                    color: '#ffffff',
                    border: '1px solid #00b894',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    pointerEvents: isActive ? 'none' : 'auto'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  Book Now
                </button>

                {/* Booking Form */}
                <AnimatePresence>
                  {isActive && showBookingForm && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 2,
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        overflowY: 'auto'
                      }}
                    >
                      <button
                        type="button"
                        onClick={handleCloseForm}
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          background: 'transparent',
                          border: 'none',
                          padding: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 3,
                          cursor: 'pointer',
                          outline: 'none',
                          color: '#ffffff'
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>

                      <div
                        style={{
                          textAlign: 'center',
                          marginBottom: '2rem'
                        }}
                      >
                        <h2 style={{
                          color: '#ffffff',
                          fontSize: '2rem',
                          fontWeight: '700',
                          marginBottom: '0.5rem',
                          background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                          Book Your Spot
                        </h2>
                        <p style={{
                          color: '#a8b2d1',
                          fontSize: '1.1rem',
                          marginBottom: '0.5rem'
                        }}>
                          {event.name} Bootcamp
                        </p>
                      </div>

                      <form onSubmit={(e) => {
                        e.preventDefault();
                        handleBookingSubmit(e);
                        setShowBookingForm(false);
                      }} style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1.5rem'
                      }}>
                        {[
                          { name: 'name', label: 'Full Name', type: 'text', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
                          { name: 'email', label: 'Email Address', type: 'email', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                          { name: 'phone', label: 'Phone Number', type: 'tel', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }
                        ].map((field, index) => (
                          <label
                            key={field.name}
                            style={{ 
                              color: 'rgba(255, 255, 255, 0.9)',
                              position: 'relative'
                            }}
                          >
                            {field.label}
                            <div style={{
                              position: 'relative',
                              marginTop: '0.5rem'
                            }}>
                              <div style={{
                                position: 'absolute',
                                left: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'rgba(255, 255, 255, 0.5)'
                              }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d={field.icon} />
                                </svg>
                              </div>
                              <input
                                type={field.type}
                                name={field.name}
                                value={bookingData[field.name]}
                                onChange={handleBookingChange}
                                required
                                pattern={field.name === 'phone' ? "^\\+91\\s\\d{5}\\s\\d{5}$" : undefined}
                                title={field.name === 'phone' ? "Phone number must be in the format +91 98765 43210" : undefined}
                                style={{
                                  width: '100%',
                                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: '1px solid rgba(255, 255, 255, 0.1)',
                                  borderRadius: '8px',
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  fontSize: '1rem',
                                  transition: 'all 0.2s ease',
                                  outline: 'none',
                                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder={`Enter your ${field.label.toLowerCase()}`}
                              />
                            </div>
                          </label>
                        ))}

                        <button
                          type="submit"
                          style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(0, 184, 148, 0.2)',
                            color: '#ffffff',
                            border: '1px solid #00b894',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginTop: '1rem',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          Confirm Booking
                        </button>
                      </form>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {showPopup && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '3rem',
                  borderRadius: '24px',
                  textAlign: 'center',
                  maxWidth: '450px',
                  width: '90%',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: `
                    0 4px 30px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    0 0 40px rgba(9, 132, 227, 0.2)
                  `,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Animated background gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(9, 132, 227, 0.1), rgba(0, 184, 148, 0.1))',
                    zIndex: -1,
                    filter: 'blur(40px)'
                  }}
                />

                {/* Success icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    backgroundColor: 'rgba(0, 184, 148, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #00b894'
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2">
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    />
                    <polyline
                      points="22 4 12 14.01 9 11.01"
                    />
                  </svg>
                </div>

                <h3
                  style={{ 
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontSize: '2rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Registration Successful!
                </h3>

                <p
                  style={{ 
                    color: '#a8b2d1',
                    marginBottom: '1.5rem',
                    fontSize: '1.1rem'
                  }}
                >
                  Your referral code:
                </p>

                <div
                  style={{
                    position: 'relative',
                    marginBottom: '2rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: '#0984e3',
                      letterSpacing: '0.15em',
                      padding: '1.5rem',
                      backgroundColor: 'rgba(9, 132, 227, 0.1)',
                      borderRadius: '12px',
                      border: '1px solid rgba(9, 132, 227, 0.2)',
                      boxShadow: '0 4px 15px rgba(9, 132, 227, 0.1)',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                    onClick={copyToClipboard}
                  >
                    {referralCode}
                  </p>

                  {copySuccess && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 184, 148, 0.1)',
                        color: '#00b894',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copied to clipboard!
                    </div>
                  )}
                </div>

                <button
                  onClick={closePopup}
                  style={{
                    padding: '1rem 2.5rem',
                    backgroundColor: 'rgba(9, 132, 227, 0.2)',
                    color: '#0984e3',
                    border: '1px solid #0984e3',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    margin: '0 auto'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
};

export default Bootcamp;
