// Scroll Animation Logic
const scrollElements = document.querySelectorAll('[data-scroll]');

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      setTimeout(() => {
        displayScrollElement(el);
      }, el.dataset.scrollDelay || 0);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // Initial check

// Smooth scroll for navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Preloader removal on window load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Modal functionality for projects
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  if (projectId === 'project1') {
    modalContent.innerHTML = `
      <h2>🚀 Multi-Language Code Snippet Library</h2>
      
      <p>
        A full-stack web application designed to store, manage, and retrieve reusable code snippets 
        across multiple programming languages. This library boosts developer productivity by providing 
        quick access to pre-written, optimized code.
      </p>
  
      <p><strong>🌟 Features</strong></p>
      <ul>
        <li>📝 <strong>Add, Search, and Delete Snippets:</strong> Easily manage your code snippets with an intuitive UI.</li>
        <li>🌍 <strong>Multi-Language Support:</strong> Store code in languages like Python, Java, JavaScript, and more.</li>
        <li>🔍 <strong>Search & Filter:</strong> Quickly find snippets based on title, language, or code content.</li>
        <li>📋 <strong>Copy to Clipboard:</strong> One-click button to copy code snippets for quick use.</li>
        <li>📱 <strong>Responsive Design:</strong> Works seamlessly on both desktop and mobile devices.</li>
        <li>🛢️ <strong>H2 In-Memory Database:</strong> Fast and lightweight database setup for easy testing.</li>
      </ul>
  
      <p><strong>🛠️ Technologies Used</strong></p>
  
      <p><strong>Frontend:</strong></p>
      <ul>
        <li>⚛️ React</li>
        <li>🎨 CSS (with animations for interactive UI)</li>
        <li>📦 Node.js & npm</li>
      </ul>
  
      <p><strong>Backend:</strong></p>
      <ul>
        <li>☕ Java (Spring Boot)</li>
        <li>🛢️ Spring Data JPA</li>
        <li>🗄️ H2 In-Memory Database</li>
        <li>🌐 RESTful APIs</li>
      </ul>
    `;
  }
   else if (projectId === 'project2') {
    modalContent.innerHTML = `
      <h2>Resume Generator</h2>
      <p>A web application that allows users to create and download professional resumes. Built with HTML, CSS, and JavaScript.</p>
      <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
      <p><a href="https://rahul9766.github.io/resumegenrator.github.io/" target="_blank">Live Demo</a></p>
    `;
  } else if (projectId === 'project3') {
    modalContent.innerHTML = `
      <h2>🌾 Virtual Farming Assistance Platform 🚜</h2>
      <p><strong>📌 Project Overview</strong></p>
      <p>
        The 🌱 Virtual Farming Assistance Platform is a Spring Boot-based solution designed to assist farmers 
        in optimizing their agricultural activities using AI-driven recommendations 🤖 and real-time insights 📊.
      </p>
      <p>
        The platform integrates Machine Learning models for crop recommendations, pest identification, 
        and market trend analysis, offering data-driven support to enhance farming efficiency.
      </p>
      <p>
        🧠 The AI models used in this platform have been trained on extensive datasets containing historical 
        agricultural data, weather conditions, soil properties, and pest infestations. 
        These models analyze input data and generate precise recommendations, helping farmers make informed decisions. ✅
      </p>

      <p><strong>🌟 Key Features</strong></p>
      <ul>
        <li>🌦️ <strong>AI-Powered Weather Forecasting</strong> – Provides real-time and predictive weather insights.</li>
        <li>🌾 <strong>Smart Crop Recommendation System</strong> – Suggests best crops based on soil type, location, and season.</li>
        <li>🐛 <strong>AI-Based Pest and Disease Detection</strong> – Identifies pests from image uploads and suggests remedies.</li>
        <li>📉 <strong>Market Price Insights & Predictions</strong> – Fetches real-time market prices and predicts future trends.</li>
        <li>📦 <strong>Resource Management</strong> – Helps farmers track inventory and provides AI-driven reorder recommendations.</li>
      </ul>

      <p><strong>🛠️ Technology Stack</strong></p>
      <ul>
        <li>⚙️ <strong>Backend:</strong> Spring Boot, Java</li>
        <li>🗄️ <strong>Database:</strong> MySQL (for structured data management)</li>
        <li>🤖 <strong>AI/ML Integration:</strong> Custom-trained AI models for pest detection, crop recommendations, and market analysis.</li>
        <li>🔗 <strong>External APIs:</strong> OpenWeatherMap (for weather data), Market APIs (for pricing insights)</li>
      </ul>

      <p>
        <a href="https://github.com/Rahul9766/Virtual-Farming-Assistance-Platform.git" target="_blank">GitHub</a>
      </p>
    `;
  }else if (projectId === 'project4') {
    modalContent.innerHTML = `
      <h2>🏥 Hospital Receptionist Assistant Chatbot</h2>
  
      <p>
        A smart AI-powered chatbot built using Flask and Groq’s Llama3 model to assist hospital receptionists 
        in providing quick and helpful responses to user queries.
      </p>
  
      <p><strong>✨ Key Features</strong></p>
      <ul>
        <li>🤖 <strong>AI-powered chatbot:</strong> Uses Groq’s Llama3 model for intelligent responses.</li>
        <li>🌐 <strong>Web-based interface:</strong> Built with Flask for seamless user interaction.</li>
        <li>📞 <strong>Contact page:</strong> Provides hospital inquiry details.</li>
        <li>👨‍⚕️ <strong>Doctors page:</strong> Displays available specialists.</li>
        <li>🏥 <strong>Services page:</strong> Lists hospital offerings.</li>
      </ul>
  
      <p><strong>🛠 Technology Stack</strong></p>
      <ul>
        <li>🐍 Python (Flask)</li>
        <li>🤖 LangChain</li>
        <li>🌍 HTML, CSS, JavaScript</li>
      </ul>
  
      <p><strong>⚙️ How It Works</strong></p>
      <ul>
        <li>🚀 User enters a query on the chatbot interface.</li>
        <li>🧠 The chatbot processes the input using LangChain and Groq’s Llama3 model.</li>
        <li>💬 AI-generated response is sent back to the user.</li>
        <li>🏥 Users can navigate hospital-related pages like Doctors, Services, and Contact.</li>
      </ul>
  
      <p><strong>🚀 Future Improvements</strong></p>
      <ul>
        <li>🔥 Enhance chatbot intelligence with real-time hospital data.</li>
        <li>🌍 Multi-language support for diverse patients.</li>
        <li>📅 Appointment scheduling feature integration.</li>
        <li>📊 Dashboard for hospital staff to monitor queries.</li>
      </ul>
  
      <p>📝 Developed with ❤️ using Flask & AI</p>
    `;
  }
  
  modal.style.display = 'block';
}

function closeProjectModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// Modal functionality for timeline items
function openTimelineModal(timelineId) {
  const modal = document.getElementById('timelineModal');
  const modalContent = document.getElementById('timelineModalContent');
  if (timelineId === 'college') {
    modalContent.innerHTML = `
      <h2>Bachelor of Engineering - Computer Engineering</h2>
      <p>Graduated from Mumbai Educational Trust, MET League of Colleges (July 2019 - June 2023). Developed a strong foundation in computer engineering with a focus on software development.</p>
    `;
  } else if (timelineId === 'intern') {
    modalContent.innerHTML = `
      <h2>IOT &amp; Computer Vision Intern</h2>
      <p>Worked as an intern at The Sparks Foundation in February 2022, applying computer vision and IoT concepts in real-world projects.</p>
    `;
  } else if (timelineId === 'tcs') {
    modalContent.innerHTML = `
      <h2>Assistant System Engineer @Tata Consultancy Services</h2>
      <p>Since October 2023, working at TCS as an Assistant System Engineer, focusing on software development, system optimization, and data-driven solutions.</p>
    `;
  }
  modal.style.display = 'block';
}

function closeTimelineModal() {
  document.getElementById('timelineModal').style.display = 'none';
}

// Close modals when clicking outside the modal content
window.onclick = function(event) {
  const projectModal = document.getElementById('projectModal');
  const timelineModal = document.getElementById('timelineModal');
  if (event.target == projectModal) {
    projectModal.style.display = "none";
  }
  if (event.target == timelineModal) {
    timelineModal.style.display = "none";
  }
};
