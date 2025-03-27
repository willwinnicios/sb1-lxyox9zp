import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const socialIcons = [
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
  FaLinkedin,
];

const LandingPage = () => {
  const logoList = [
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Spotify_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Instagram_logo_2022.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twitter_2012_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Twitch_logo_2019.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/PayPal_Logo_2014.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/Shopify_logo_2018.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/91/TikTok_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/69/Discord_Logo.svg',
  ];

  const testimonials = [
    {
      name: 'Caroline Vibe',
      title: 'Influencer de Moda',
      comment:
        'A Fyre.bio mudou totalmente meu engajamento. Agora tudo tá no mesmo lugar!',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Lucas Designer',
      title: 'Freelancer UX/UI',
      comment:
        'Consigo mostrar meu portfólio inteiro com estilo. Simplesmente perfeito.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Dani Makeup',
      title: 'Criadora de Conteúdo',
      comment:
        'Uso pra colocar links de parcerias e cursos. Gosto do estilo e da praticidade.',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: 'Henrique Castro',
      title: 'Coach de Negócios',
      comment:
        'Meus clientes acessam tudo por lá. É minha nova central digital!',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
  ];

  const iconRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      iconRefs.current.forEach((el, i) => {
        const speed = (i + 1) * 0.05;
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        el.style.transform = `translate(${x}px, ${y}px)`;
        el.style.filter = `blur(${Math.abs(x + y) * 0.01}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="font-['Urbanist'] text-white bg-black overflow-hidden scroll-smooth">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 neon-gradient">
        <div className="absolute inset-0 pointer-events-none z-0">
          {socialIcons.map((Icon, i) => (
            <div
              key={i}
              ref={(ref) => ref && (iconRefs.current[i] = ref)}
              className="absolute text-white/30 text-4xl animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Icon />
            </div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold z-10"
        >
          🚀 Transforme seu Link na Bio
          <br /> em uma experiência interativa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl mt-6 text-white/80 max-w-2xl z-10"
        >
          Link único. Totalmente personalizável. Criado para quem quer
          impressionar.
        </motion.p>

        <motion.a
          href="/signup"
          whileHover={{ scale: 1.1 }}
          className="mt-10 bg-gradient-to-r from-[#d7e626] to-[#ff5702] text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl z-10"
        >
          Comece gratuitamente ✨
        </motion.a>
      </section>

      {/* SEÇÃO DE FUNCIONALIDADES */}
      <section className="py-24 px-6 bg-black text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          💼 Tudo que você precisa em uma única bio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Venda seus produtos 🛍️',
              desc: 'Monetize direto da sua página.',
            },
            {
              title: 'Links inteligentes 🔗',
              desc: 'Detectamos dispositivos e direcionamos melhor.',
            },
            {
              title: 'Captura de leads 📧',
              desc: 'Formulários nativos integrados.',
            },
            {
              title: 'Análises em tempo real 📊',
              desc: 'Veja quem clicou, de onde e quando.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CARROSSEL DE MARCAS */}
      <section className="bg-black py-20 px-6 text-center overflow-hidden z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          🌐 Criadores, empresas e influenciadores confiam:
        </h2>

        {/* Linha 1 */}
        <div
          className="group overflow-hidden w-full relative mb-6"
          onMouseEnter={() => {
            const el = document.querySelector('.scroll-1') as HTMLElement;
            if (el) el.style.animationPlayState = 'paused';
          }}
          onMouseLeave={() => {
            const el = document.querySelector('.scroll-1') as HTMLElement;
            if (el) el.style.animationPlayState = 'running';
          }}
        >
          <div className="scroll-1 flex gap-16 items-center whitespace-nowrap animate-scroll-left px-4">
            {logoList.map((src, i) => (
              <img
                key={`top-${i}`}
                src={src}
                alt={`Logo ${i}`}
                className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Linha 2 */}
        <div
          className="group overflow-hidden w-full relative"
          onMouseEnter={() => {
            const el = document.querySelector('.scroll-2') as HTMLElement;
            if (el) el.style.animationPlayState = 'paused';
          }}
          onMouseLeave={() => {
            const el = document.querySelector('.scroll-2') as HTMLElement;
            if (el) el.style.animationPlayState = 'running';
          }}
        >
          <div className="scroll-2 flex gap-16 items-center whitespace-nowrap animate-scroll-right px-4">
            {logoList.map((src, i) => (
              <img
                key={`bottom-${i}`}
                src={src}
                alt={`Logo ${i}`}
                className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative py-24 bg-black text-center overflow-hidden z-10">
        <h2 className="text-4xl font-bold text-white mb-12">
          ❤️ Criadores que <span className="text-[#d7e626]">amam</span> usar a
          Fyre.bio
        </h2>

        <motion.div
          className="flex gap-8 max-w-[3000px] px-6"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mx-2 text-white flex flex-col gap-3 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-white/60">{item.title}</p>
                </div>
              </div>
              <p className="text-sm text-left text-white/80">
                "{item.comment}"
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* MOCKUP VISUAL */}
      <section className="bg-black py-24 px-6 flex flex-col items-center text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Veja como a sua bio vai brilhar ✨
        </h2>
        <p className="text-white/70 mb-12 max-w-xl">
          Um visual moderno, personalizável e direto ao ponto. Veja a prévia
          real abaixo:
        </p>

        <div className="relative w-full max-w-[300px] md:max-w-[400px] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(255,255,255,0.1)] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
          <img
            src="https://fakeimg.pl/1080x1920/?text=PREVIEW+FYRE.BIO&font=bebas"
            alt="Preview da plataforma"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-[3rem] shadow-[inset_0_30px_30px_-10px_rgba(255,255,255,0.1)]" />
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/554676065477"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 32 32"
          width="26"
          height="26"
        >
          <path d="M19.11 17.65c-.3-.15-1.77-.87-2.05-.97... (código continua)" />
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-6 text-center border-t border-white/10 mt-10">
        <p className="text-sm mb-2 text-white/60">
          © 2025 Fyre.bio — Todos os direitos reservados 🔥
        </p>
        <div className="flex justify-center gap-6 mt-4 text-white/40 text-lg">
          <a
            href="https://instagram.com/fyre.design"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="https://fyre.design" target="_blank" rel="noreferrer">
            Site
          </a>
          <a href="https://wa.me/554676065477" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
