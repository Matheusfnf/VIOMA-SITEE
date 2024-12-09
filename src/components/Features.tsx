import React from 'react';
import { motion } from 'framer-motion';
import { LeafyGreen, BarChart3, Droplets, Sun } from 'lucide-react';

const features = [
  {
    icon: LeafyGreen,
    title: 'Agricultura Sustentável',
    description: 'Implementamos práticas ecológicas que preservam recursos naturais e promovem a biodiversidade.'
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Tome decisões informadas com nossas ferramentas avançadas de análise de dados agrícolas.'
  },
  {
    icon: Droplets,
    title: 'Irrigação Inteligente',
    description: 'Otimize o uso da água com sistemas de irrigação baseados em IA e monitoramento do solo.'
  },
  {
    icon: Sun,
    title: 'Otimização de Colheita',
    description: 'Maximize a produção através da agricultura de precisão e controle ambiental.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <div className="bg-white py-24" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções agrícolas completas projetadas para o agricultor moderno
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-transparent transition-colors">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}