import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, Chrome, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem(
      'user',
      JSON.stringify({
        id: '123',
        name: formData.name,
        email: formData.email,
        username: formData.name.toLowerCase().replace(/\s+/g, '-'),
      })
    );

    navigate('/admin/dashboard');
  };

  const handleDemoLogin = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: '123',
        name: 'Sarah Anderson',
        email: 'sarah@example.com',
        username: 'sarah-anderson',
      })
    );

    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center fyre-light-bg px-4 py-12">
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2"
      >
        {/* Lado esquerdo com conteúdo promocional */}
        <div className="bg-gradient-to-br from-[#d7e626] to-[#ff5702] p-10 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 glow-title">
            Faça cada clique valer a pena
          </h1>
          <p className="text-lg mb-6">
            Junte-se a mais de 1.5M de criadores e cresça sua audiência com sua
            página personalizada.
          </p>
          <button
            onClick={handleDemoLogin}
            className="mt-2 bg-white/20 hover:bg-white/30 transition-colors px-6 py-3 rounded-lg font-medium text-white button-neon"
          >
            Testar Conta Demo
          </button>
        </div>

        {/* Lado direito com formulário */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Criar sua conta
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Comece sua jornada agora mesmo
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5702]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5702]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5702]"
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold rounded-lg py-3 bg-gradient-to-r from-[#d7e626] to-[#ff5702] hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Criar Conta <ArrowRight size={18} />
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Chrome size={18} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Apple size={18} />
                Apple
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Ao criar sua conta, você concorda com os{' '}
            <a
              href="#"
              className="text-[#d7e626] hover:text-[#ff5702] font-medium"
            >
              Termos de Uso
            </a>{' '}
            e a{' '}
            <a
              href="#"
              className="text-[#d7e626] hover:text-[#ff5702] font-medium"
            >
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
