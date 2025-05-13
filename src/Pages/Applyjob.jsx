import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Loding from '../Componets/Loding';
import Navbar from '../Componets/Navbar';
import { assets } from '../assets/assets';
import Footer from '../Componets/Footer';
import JobCard from '../Componets/JobCard';

function Applyjob() {
  const { id } = useParams();
  const [jobData, setjobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    try {
      if (jobs && jobs.length > 0) {
        const data = jobs.find(job => job._id === id);
        if (!data) {
          setError('Job not found');
        } else {
          setjobData(data);
        }
      }
    } catch (err) {
      setError('Failed to load job data');
    } finally {
      setLoading(false);
    }
  }, [id, jobs]);

  if (loading) return <Loding />;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!jobData) return <div className="text-center py-10">Job data not available</div>;

  const similarJobs = jobs.filter(job =>
    job._id !== jobData._id &&
    job.companyId?._id === jobData.companyId?._id
  ).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Main Job Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <img
                  className="w-24 h-24 bg-white rounded-lg p-3 border border-gray-200 shadow-sm object-contain"
                  src={jobData.companyId?.logo || assets.company_icon}
                  alt="Company Logo"
                />

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {jobData.title || 'No title available'}
                  </h1>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-base text-gray-600">
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <img className="w-4 h-4" src={assets.suitcase_icon} alt="Company" />
                      {jobData.companyId?.name || 'Company not specified'}
                    </span>
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <img className="w-4 h-4" src={assets.location_icon} alt="Location" />
                      {jobData.location || 'Location not specified'}
                    </span>
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <img className="w-4 h-4" src={assets.person_icon} alt="Level" />
                      {jobData.level || 'Level not specified'}
                    </span>
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <img className="w-4 h-4" src={assets.money_icon} alt="Salary" />
                      CTC: {jobData.salary || 'Not disclosed'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Apply Now
                  </button>
                  <p className="text-xs md:text-sm text-gray-500 italic">
                    Posted {jobData.date || 'Date not available'}
                  </p>
                </div>
              </div>
            </div>

            {/* Job Details Section */}
            <div className="p-6 md:p-8">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Job Description</h2>
                <div className="text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: jobData.description }} />
              </div>

              <div className="flex justify-center md:justify-end mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Similar Jobs Section */}
          {similarJobs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
                More jobs from {jobData.companyId?.name || 'this company'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarJobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Applyjob;