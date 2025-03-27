import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Facebook, Twitch, MessageCircle, Mail } from 'lucide-react';
import { useParams } from 'react-router-dom';

interface UserData {
  id: string;
  name: string;
  email: string;
  username: string;
}

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/sarahanderson',
    color: 'from-pink-500 to-purple-500'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@sarahanderson',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/sarahanderson',
    color: 'from-blue-400 to-blue-500'
  },
  {
    name: 'Twitch',
    icon: Twitch,
    url: 'https://twitch.tv/sarahanderson',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/sarahanderson',
    color: 'from-blue-600 to-blue-700'
  }
];

const PublicPage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // In a real app, we would fetch user data from an API
    // For demo, we'll use the stored user data or fallback to demo data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      setUserData({
        id: '123',
        name: 'Sarah Anderson',
        email: 'sarah@example.com',
        username: 'sarah-anderson'
      });
    }
  }, [username]);

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 text-center"
        >
          {/* Profile Section */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-purple">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">{userData.name}</h1>
            <p className="text-gray-300 mb-4">Digital Creator & Content Strategist</p>
            <p className="text-neon-pink">🔴 2.3M Followers</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`neon-button w-full bg-gradient-to-r ${link.color} hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Email Capture */}
          <div className="mt-8 p-4 glass-card">
            <h3 className="text-white font-semibold mb-4">Join My Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-neon-purple"
              />
              <button className="neon-button px-4">Join</button>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <a 
              href="https://m.me/sarahanderson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Message</span>
            </a>
            <a 
              href={`mailto:${userData.email}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">Powered by LinkHub</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicPage;