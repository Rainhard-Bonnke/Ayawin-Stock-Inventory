// Update this page (the content is just a fallback if you fail to update the page)
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl mx-auto p-8 bg-white rounded-lg shadow">
        <img
          src="public/uploads/Logoo.jpeg"
          alt="Ayawin Stock Solution Logo"
          className="mx-auto mb-6 w-24 h-24 object-contain"
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Ayawin Stock Solution</h1>
        <p className="text-xl text-gray-700 mb-6">
          Professional inventory management and business support services tailored to your company's unique needs.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Our Services</h2>
        <ul className="text-left text-gray-600 list-disc list-inside space-y-1 mb-4">
          <li>Stock Takes</li>
          <li>Stock Arrangement</li>
          <li>KRA Stickers</li>
          <li>Data Entry</li>
          <li>Accounting</li>
          <li>Auditing</li>
        </ul>
        <p className="text-gray-500 text-sm">
          Contact us at <a href="mailto:ayawin.ke@gmail.com" className="text-blue-600 underline">ayawin.ke@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Index;