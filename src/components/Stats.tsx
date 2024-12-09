import React from 'react';
import { motion } from 'framer-motion';
import { Users, TreePine, Award, Sprout } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10k+',
    label: 'Agricultores Atendidos',
    description: 'Transformando a vida de milhares de produtores rurais'
  },
  {
    icon: TreePine,
    value: '50k+',
    label: 'Hectares Protegidos',
    description: 'Área total sob manejo sustentável'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Anos de Experiência',
    description: 'Tradição e inovação no campo'
  },
  {
    icon: Sprout,
    value: '95%',
    label: 'Satisfação',
    description: 'Avaliação positiva dos nossos clientes'
  }
];

export function Stats() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}