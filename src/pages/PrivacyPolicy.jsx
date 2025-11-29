import React from 'react';
import '../styles/Home.css'; // Reusing Home styles for container/typography

const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ padding: '120px 20px 60px' }}>
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section style={{ marginTop: '40px' }}>
                <h2>1. Introduction</h2>
                <p>Welcome to Cinnora ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (cinnora.store) and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul>
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                </ul>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>4. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: info@cinnora.store</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
