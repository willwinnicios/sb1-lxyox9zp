import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Link as LinkIcon, Mail, Image, Save } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="neon-button">
            <Save size={20} className="mr-2" />
            Save Changes
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 space-y-6"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-purple">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="text-sm text-neon-purple hover:text-neon-pink">
                  <Image size={16} className="inline mr-2" />
                  Change Photo
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-neon-purple"
                  defaultValue="Sarah Anderson"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-neon-purple"
                  rows={4}
                  defaultValue="Digital Creator & Content Strategist"
                />
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your Links</h2>
                <button className="neon-button">
                  <LinkIcon size={20} className="mr-2" />
                  Add Link
                </button>
              </div>

              <div className="space-y-4">
                {/* Link Items */}
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">:::</span>
                      <input
                        type="text"
                        className="bg-transparent border-none focus:outline-none"
                        defaultValue="Instagram"
                      />
                    </div>
                    <button className="text-gray-400 hover:text-white">
                      <Settings size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">:::</span>
                      <input
                        type="text"
                        className="bg-transparent border-none focus:outline-none"
                        defaultValue="YouTube"
                      />
                    </div>
                    <button className="text-gray-400 hover:text-white">
                      <Settings size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Capture Settings */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 mt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Email Capture</h2>
                <button className="neon-button">
                  <Mail size={20} className="mr-2" />
                  Configure
                </button>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Enable email capture form</span>
                </label>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;