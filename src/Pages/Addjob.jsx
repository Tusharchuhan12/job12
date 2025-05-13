import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories, JobLocations } from '../assets/assets';

function Addjob() {
  const [title, setitle] = useState('');
  const [location, setlocation] = useState('bangalore');
  const [category, setcategory] = useState('programing');
  const [level, setlevel] = useState('Beginner level');
  const [salary, setsalary] = useState(0);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Type job description here...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link']
          ]
        }
      });
    }
  }, []);

  return (
    <form className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Type here"
            onChange={e => setitle(e.target.value)}
            value={title}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <div
            ref={editorRef}
            className="h-40 bg-white border border-gray-300 rounded-md"
          />
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Job Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Category</label>
            <select
              onChange={e => setcategory(e.target.value)}
              value={category}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Location</label>
            <select
              onChange={e => setlocation(e.target.value)}  // Fixed: was setcategory
              value={location}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Job Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Level</label>
            <select
              onChange={e => setlevel(e.target.value)}  // Fixed: was setcategory
              value={level}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Beginner level">Beginner level</option>  {/* Fixed spelling */}
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
          <input
            onChange={e => setsalary(e.target.value)}
            type="number"
            placeholder="2500"
            value={salary}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          ADD
        </button>
      </div>
    </form>
  );
}

export default Addjob;