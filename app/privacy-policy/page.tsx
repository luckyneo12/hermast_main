import React from 'react'

const Privecy = () => {
    return (<><div className="bg-green-400 text-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Privacy Policies</h2>
        
      </div>
    </div>
    <div className="container max-w-4xl  shadow-2xl mx-auto px-5 py-10">
          {/* <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1> */}
          <div className="text-gray-700 space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-4">Introduction</h3>
              <p>
                Welcome to HermasTech. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your
                information when you use our website.
              </p>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
              <p>
                We may collect both personal and non-personal information to enhance your experience on our site. Personal information includes data
                like your name, email address, and phone number.
              </p>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc ml-6">
                <li>Improve our website functionality and services.</li>
                <li>Respond to your inquiries and provide support.</li>
                <li>Send updates, promotions, or other relevant content.</li>
              </ul>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <p>
                We implement robust security measures to ensure your personal information is protected from unauthorized access, use, or disclosure.
              </p>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">Third-Party Services</h3>
              <p>
                We may share your data with trusted third-party services to enhance our offerings. These third parties are required to protect your
                data as per our guidelines.
              </p>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">Changes to This Policy</h3>
              <p>
                We reserve the right to update this Privacy Policy at any time. Please review this page periodically for updates.
              </p>
            </section>
    
            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, feel free to contact us at 
                <a href="mailto:info@hermastech.com" className="text-blue-500 underline">
                info@hermastech.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>


        </>
      );
}

export default Privecy
